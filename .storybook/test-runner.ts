import type { TestRunnerConfig } from "@storybook/test-runner";

const config: TestRunnerConfig = {
    async postVisit(page, context) {
        // the #storybook-root element wraps each story
        const elementHandler = await page.$("#storybook-root");
        const innerHTML = await elementHandler.innerHTML();
        if (!innerHTML) {
            return;
        }
        expect(innerHTML).toMatchSnapshot();
    },
};

export default config;
