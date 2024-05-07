// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//  Part 2

// Phone Number Testing
test('(123)-456-7890 is a phone number', () => {
  expect(isPhoneNumber("(123)-456-7890")).toBe(true);
});
test('123-456-7890 is a phone number', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});
test('1234567890 is not a phone number', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});
test('1 is not a phone number', () => {
  expect(isPhoneNumber("1")).toBe(false);
});

// Email Testing
test('tpowell2@ucsd.edu is a email', () => {
  expect(isEmail("tpowell2@ucsd.edu")).toBe(true);
});
test('example@gmail.com is a email', () => {
  expect(isEmail("example@gmail.com")).toBe(true);
});
test('examplegmail.com is not a email', () => {
  expect(isEmail("examplegmail.com")).toBe(false);
});
test('@@@email.com is not a email', () => {
  expect(isEmail("@@@email.com")).toBe(false);
});

// Strong Password Testing
test('P_ss123word is a strong password', () => {
  expect(isStrongPassword("P_ss123word")).toBe(true);
});
test('Secur3_P_ssw0rd is a strong password', () => {
  expect(isStrongPassword("Secur3_P_ssw0rd")).toBe(true);
});
test('123456789 is not a strong password', () => {
  expect(isStrongPassword("123456789")).toBe(false);
});
test('abcdefghijklmnopqrstuvwxyz is not a strong password', () => {
  expect(isStrongPassword("abcdefghijklmnopqrstuvwxyz")).toBe(false);
});

// Date Testing
test('12/23/2012 is a date', () => {
  expect(isDate("12/23/2012")).toBe(true);
});
test('39/99/9999 is a date', () => {
  expect(isDate("39/99/9999")).toBe(true);
});
test('12-23-2012 is not a date', () => {
  expect(isDate("12-23-2012")).toBe(false);
});
test('November 3, 2012 is not a date', () => {
  expect(isDate("November 3, 2012")).toBe(false);
});

// Hex Color Testing
test('#7F1F6B is a hex-color', () => {
  expect(isHexColor("#7F1F6B")).toBe(true);
});
test('#3A8FA8 is a hex-color', () => {
  expect(isHexColor("#3A8FA8")).toBe(true);
});
test('#3A8FA83 is not a hex-color', () => {
  expect(isHexColor("#3A8FA83")).toBe(false);
});
test('#3 is not a hex-color', () => {
  expect(isHexColor("#3")).toBe(false);
});
