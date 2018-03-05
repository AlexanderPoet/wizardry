import { fullNameValidator } from '../';

describe('Full Name Validator', () => {
  it('validates a first and last name', () => {
    const validName = 'Valid Name'
    expect(fullNameValidator(validName)).toBe(validName);
  })
  it('invalidates only one name', () => {
    const invalidName = 'InvalidName'
    expect(() => fullNameValidator(invalidName)).toThrow();
  })
})