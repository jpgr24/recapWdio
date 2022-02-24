const DynamicLoadingPage = require('../pageobjects/dynamic-loading.page');


describe('My Dynamic Loading Page', () => {
    it('should verify that start button exists', async () => {
        await DynamicLoadingPage.open();

        await expect(DynamicLoadingPage.startButton).toBeExisting();
        
    });
     it('click', async () => {
        await DynamicLoadingPage.open();
        await DynamicLoadingPage.startClick()
        await DynamicLoadingPage.startButton.waitForDisplayed({ timeout: 5000, reverse : true });
        await expect(DynamicLoadingPage.htest).toHaveTextContaining(
            'Hello World!');
    });
});