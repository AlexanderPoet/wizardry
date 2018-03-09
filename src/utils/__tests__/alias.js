import { aliasValidator } from '../';

describe('Alias Validator', () => {
  it('will validate nonwhitespace', () => {
    const attempt = 'Anything'
    expect(aliasValidator(attempt)).toBe(attempt);
  });
  it('will invalidate whitespace attempt', () => {
    const attempt = '         ';
    expect(() => aliasValidator(attempt)).toThrow();
  });
});