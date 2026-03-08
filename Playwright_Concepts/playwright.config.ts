import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  forbidOnly: !!process.env.CI,
  
  retries: process.env.CI ? 2 : 0,
  
  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',
  /* Shared settings for all the projects below.*/
  use: {
     baseURL: 'https://playground.bsparksoftwaretechnologies.com',
    trace: 'on-first-retry',

    navigationTimeout: 60 * 1000,
    actionTimeout: 30 * 1000,

    
  },
//Default time out: Playwright during execution if the test case fails, below timout starts wait
  timeout: 60 * 1000,
  //If condition doesn't match the below wait will execute.
  //If condition matches with the actual data and expected data the below wait will not be executed
  expect:
  {
    timeout: 10 * 1000
  },

  /* Configure projects for major browsers */
  //Projects are used to run the same test in different browsers and different viewports. 
  //We can also use projects to run the same test in different environments like staging and production.
  projects: [
    {
      name: 'QA',
      use: { ...devices['Desktop Chrome'], 
           headless: false,
           viewport: null,
           deviceScaleFactor: undefined,
           launchOptions: {
        args: ['--start-maximized'],
      },
      
      },

    },

    {
       name: 'Stage',
       use: { ...devices['Desktop Firefox'], 
             headless: true },
      },

     {
       name: 'Production',
       use: { ...devices['Desktop Safari'], 
             headless: true },
      },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
