import { largestPrimeFactor } from "./003-largest-prime-factor";

test('largestPrimeFactor(2) should return 2', () => {
  expect(largestPrimeFactor(2)).toBe(2);
});

test('largestPrimeFactor(3) should return 3', () => {
  expect(largestPrimeFactor(3)).toBe(3);
});

test('largestPrimeFactor(5) should return 5', () => {
  expect(largestPrimeFactor(5)).toBe(5);
});

test('largestPrimeFactor(7) should return 7', () => {
  expect(largestPrimeFactor(7)).toBe(7);
});

test('largestPrimeFactor(13195) should return 29', () => {
  expect(largestPrimeFactor(13195)).toBe(29);
});
