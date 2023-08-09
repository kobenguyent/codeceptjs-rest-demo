import fs from 'fs/promises'
import path from 'path'

type TimelineData = {
	children: {
		name: string
		status: string
		time: {
			duration: number
		}
	}[]
}

const allureReportPath = path.join(process.cwd(), 'output/allure')
const fileList = path.join(allureReportPath, 'export', 'prometheusData.txt')

const loadTimelineData = async (): Promise<TimelineData> => {
	return await import(path.join(allureReportPath, 'data', 'timeline.json'))
}

const main = async (): Promise<void> => {
	const timelineData = await loadTimelineData()

	const buildNumber = process.env.CI_BUILD_NUMBER || Date.now().toString();
	const pullRequest = process.env.DRONE_PULL_REQUEST ? 'PR' : 'unknown'
	const browserName = process.env.BROWSER || 'unknown'

	const getSuiteName = async (filePath: string): Promise<string> => {
		const data = await fs.readFile(filePath, 'utf-8')
		const processedData = data.split('\n').filter((line): line is string => line.includes('SUITE='))
		if (!processedData[0]) return 'CI'
		return processedData[0].split('=')[1]
	}

	const suiteName = await getSuiteName('./output/environment.properties')
	const labels = `{build="${buildNumber}",type="${pullRequest}",suite="${suiteName}",os="linux",browser="${browserName}"}`
	let testData = ''

	const processPrometheusData = async (filePath: string): Promise<string> => {
		const data = await fs.readFile(filePath, 'utf-8')
		const processedData = data.split('\n').map((line): string | undefined => {
			if (line) {
				const before = line.split(' ')
				before[0] = before[0].replace(/(^launch_)/, `e2e_tests_`) + `${labels}`

				return before.join(' ')
			}
		})
		return processedData.filter((line): line is string => !!line).join('\n') + '\n'
	}

	testData = await processPrometheusData(fileList)

	const processTestCaseData = (data: TimelineData): string => {
		let returnedData = ''
		const labels = `build="${buildNumber}",type="${pullRequest}",suite="${suiteName}",os="linux",browser="${browserName}",testcase="scenario"`

		data.children.forEach((item): void => {
			returnedData += `${item.name
				.trim()
				.replace(/@|\||\{|\}/g, '')
				.replace(/ /g, '_')}{${labels},status="${item.status}"} ${item.time.duration}\n`
		})

		return returnedData
	}

	testData += processTestCaseData(timelineData)

	testData = testData.replace('undefined', '')

	try {
		await fs.writeFile(fileList, testData)
		console.log('Data replaced \n', testData)
	} catch (err) {
		console.error('Error writing data:', err)
	}
}

main()
	.then((): void => {
	console.log('Main function completed successfully.')
})
.catch((err): void => {
	console.error('Main function failed with error:', err)
})