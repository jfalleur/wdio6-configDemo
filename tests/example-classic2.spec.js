'use strict';

const {
  ClassicRunner,
  RunnerOptions,
  Eyes,
  Target,
  Configuration,
  RectangleSize,
  BatchInfo,
  BrowserType,
  DeviceName,
  ScreenOrientation
} = require('@applitools/eyes-webdriverio');



describe('ACME Demo App - wdio6', function () {
    
  it('it 2', async () => {
    // Navigate to the url we want to test
    //await eyes.open(browser,"Test", "Test");
    await browser.url('https://demo.applitools.com');

    await expect(browser).toHaveTitle('ACME demo app');
    await eyes.check("Check", Target.window().fully())

    // ⭐️ Note to see visual bugs, run the test using the above URL for the 1st run.
    // but then change the above URL to https://demo.applitools.com/index_v2.html
    // (for the 2nd run)

    // check the login page with fluent api, see more info here
    // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html

    //await eyes.check('Login Window', Target.window().fully());

    // Click the "Log in" button.

    const loginButton = await browser.$('#log-in');
    await loginButton.click();

    // Check the app page

   // await eyes.check('App Window', Target.window().fully());

    // Call Close on eyes to let the server know it should display the results

  
  });
  
  afterEach(async () => {
    // If the test was aborted before eyes.close was called, ends the test as aborted.
    
  });
  
  after(async () => {
   
  });
  
});
