import { ccValidator } from '../';

describe('Credit Card Number Validaton', () => {
  test('rejects with incorrect input length', () => {
    const invalidLengthNumber = '3124555123';
    expect(() => ccValidator(invalidLengthNumber)).toThrow();
  })
  it('rejects with invalid checksum', () => {
    const sampleInvalidNumber = '5457623898235113';
    expect(() => ccValidator(sampleInvalidNumber)).toThrow();
  });
  it('resolves with valid number', () => {
    const sampleValidNumber = '5457623898234113';
    expect(ccValidator(sampleValidNumber)).toBe(sampleValidNumber);
  });
})