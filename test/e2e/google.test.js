beforeAll(async () => {
  await page.goto("https://google.com", { waitUntil: "domcontentloaded" });
});

test("google - toppage title", async () => {
  await expect(page.title()).resolves.toMatch("Google");
});

test("google - search dog", async () => {
  await page.type('input[name = "q"]', "dog");
  await page.keyboard.press("Enter");
  await page.waitForNavigation({
    timeout: 3000,
    waitUntil: "domcontentloaded",
  });
  const searchResultLength = (await page.$$(".tF2Cxc")).length;
  await expect(searchResultLength).toBeGreaterThanOrEqual(3);
}, 10000);

test("google - clear search text", async () => {
  await page.click(".M2vV3");
  await sleep(500);
  const searchText = await page.$eval('input[name = "q"]', (el) => el.value);
  await expect(searchText).toBe("");
});

test("google - search cat", async () => {
  await page.focus('input[name = "q"]');
  await page.keyboard.type("cat");
  await page.keyboard.press("Enter");
  await page.waitForNavigation({
    timeout: 3000,
    waitUntil: "domcontentloaded",
  });
  const searchResultLength = (await page.$$(".tF2Cxc")).length;
  await expect(searchResultLength).toBeGreaterThanOrEqual(3);
  await sleep(3000);
}, 10000);

const sleep = async (msec) => {
  return new Promise((resolve) => setTimeout(resolve, msec));
};
