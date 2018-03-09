import { emailValidator } from '../';

describe('Email isValid', () => {
  it('rejects when invalid: empty string', () => {
    const sampleEmail = '';
    expect(() => emailValidator(sampleEmail)).toThrow();
  })
  it('rejects when invalid: No @ symbol', () => {
    const sampleEmail = 'invalidyup.com';
    expect(() => emailValidator(sampleEmail)).toThrow();
  })
  it('rejects when invalid: No domain', () => {
    const sampleEmail = 'invalid@yupcom';
    expect(() => emailValidator(sampleEmail)).toThrow();
  })
  it('resolves when valid', () => {
    const sampleEmail = 'valid@yup.com';
    expect(emailValidator(sampleEmail)).toBe(sampleEmail);
  })
})