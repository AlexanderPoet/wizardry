import { phoneNumberValidator } from '../';

describe('Phone Number Validator', () => {
  it('resolves US number w/ 10 digits', () => {
    const validNumber = '7'.repeat(10);
    expect(phoneNumberValidator(validNumber)).toBe(validNumber);
  });
  it('resolves US number w/ 11 digits', () => {
    const validNumber = '7'.repeat(11);
    expect(phoneNumberValidator(validNumber)).toBe(validNumber);
  });
  it('reject US number w/ < 10 digits', () => {
    const invalidNumber = '7'.repeat(9);
    expect(() => phoneNumberValidator(invalidNumber)).toThrow();
  });
  it('reject US number w/ > 10 digits', () => {
    const invalidNumber = '7'.repeat(12);
    expect(() => phoneNumberValidator(invalidNumber)).toThrow();
  });
});