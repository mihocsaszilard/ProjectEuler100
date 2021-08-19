import { fiboEvenSum } from "./002-even-fibonacci-numbers";

test('fiboEvenSum(10) should return 10', () => {
  expect(fiboEvenSum(10)).toBe(10);
});

test('fiboEvenSum(10) should return 10', () => {
  expect(fiboEvenSum(34)).toBe(44);
});

test('fiboEvenSum(10) should return 10', () => {
  expect(fiboEvenSum(60)).toBe(44);
});

test('fiboEvenSum(10) should return 10', () => {
  expect(fiboEvenSum(1000)).toBe(798);
});

test('fiboEvenSum(10) should return 10', () => {
  expect(fiboEvenSum(100000)).toBe(60696);
});

test('fiboEvenSum(10) should return 10', () => {
  expect(fiboEvenSum(4000000)).toBe(4613732);
});