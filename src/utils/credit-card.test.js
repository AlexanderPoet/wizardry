import { CCUtils } from './';

describe('Luhn cc number pre validater', () => {
  const { validateByLuhn } = CCUtils;
  it('rejects with incorrect input length', async () => {
    const invalidLengthNumber = '3124555123';
    expect.assertions(1);
    await expect(validateByLuhn(invalidLengthNumber)).rejects.toMatch('Length');
  });
  it('rejects with invalid checksum', async () => {
    const sampleInvalidNumber = '5457623898235113';
    expect.assertions(1);
    await expect(validateByLuhn(sampleInvalidNumber)).rejects.toMatch('Checksum');
  });
  it('resolves with valid number', async () => {
    const sampleValidNumber = '5457623898234113';
    expect.assertions(1);
    await expect(validateByLuhn(sampleValidNumber)).resolves.toBe(sampleValidNumber);
  });
});