// @ts-check
const { test, expect } = require("@playwright/test");

test("Open the site and search title", async ({page}) => {
  await page.goto("https://fictadvisor.com/")
  await expect(page).toHaveTitle('FICT Advisor')
  })

