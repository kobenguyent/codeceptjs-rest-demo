import { writeFileSync } from "fs";
import uaParser from "ua-parser-js";
import { Helper } from 'codeceptjs';

interface UserAgentInfo {
  browser: {
    name: string;
    version: string;
  };
}

interface Allure {
  addAttachment(name: string, buffer: Buffer | string, type: string): void;
}

interface ExecutionEnvInfo {
  BASE_URL: string;
  BROWSER: string;
}

interface ExecutorInfo {
  name: string;
  type: string;
  reportName: string;
  buildName: string;
}

let allure: Allure;
let outputDir: string;
let baseUrl: string;
let browserInfo: string;

class AllureHelper extends Helper {
  constructor(config: { [key: string]: unknown }) {
    super(config);
    outputDir = codeceptjs.config.get().output;
  }

  protected async _test(): Promise<void> {
    if (this.helpers.Playwright) {
      const getUA: string = await this.helpers.Playwright.page.evaluate(
        () => navigator.userAgent
      );
      const userAgentInfo: UserAgentInfo = uaParser(getUA);
      browserInfo = `${userAgentInfo.browser.name}-v${userAgentInfo.browser.version}`;
    }
  }

  protected async _finishTest(): Promise<void> {
    const environment: ExecutionEnvInfo = {
      BASE_URL: process.env.BASE_URL || baseUrl,
      BROWSER: browserInfo || 'unknown',
    };

    const executorInfo: ExecutorInfo = {
      name: `Local Machine`,
      type: "local",
      reportName: `Test report on ${Date.now().toString()}`,
      buildName: process.env.CI_BUILD_NUMBER ?? `Local-${Date.now()}`,
    };

    writeFileSync(
      `${outputDir}/environment.properties`,
      Object.entries(environment)
        .map(([key, value]: [string, string]) => `${key}=${value}`)
        .join("\n")
    );

    writeFileSync(`${outputDir}/executor.json`, JSON.stringify(executorInfo));
  }
  protected async _before(): Promise<void> {
    super._before();
    allure = codeceptjs.container.plugins("allure");
  }
}

export = AllureHelper;
