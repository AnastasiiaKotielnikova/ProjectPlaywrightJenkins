// @ts-check
const { test, expect } = require("@playwright/test");

test("Open the site and valid search for a teacher", async ({page}) => {
  await page.goto("https://fictadvisor.com/")
  await expect(page).toHaveTitle('FICT Advisor')
  })

