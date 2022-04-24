const sum = require("../../calc/sum");

test("10 + 20", () => {
  expect(sum.sum(10, 20)).toBe(30);
});

test("10 - 20", () => {
  expect(sum.sum2(10, 20)).toBe(-10);
});
