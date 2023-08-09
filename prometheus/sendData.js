const fs = require('fs');
const {join} = require('path');

const allureReportPath = join(process.cwd().replace('/prometheus', ''), 'output/allure');
const reportData = join(allureReportPath, 'export', 'prometheusData.txt');

const data = fs.readFileSync(reportData, 'utf-8');
data.split(/\r?\n/).forEach(line =>  {
	if (line !== '') {
		const { exec } = require('child_process');

		exec(`echo '${line}' | curl --data-binary @- http://localhost:9091/metrics/job/test`, (error, stdout, stderr) => {
			if (error) {
				console.log(`error: ${error.message}`);
				return;
			}
			if (stderr) {
				console.log(`stderr: ${stderr}`);
				return;
			}
			console.log(`stdout: ${stdout}`);
		});
	}
	
});
