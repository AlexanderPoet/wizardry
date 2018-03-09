import { formValidation } from '../';

describe('Form Validation', () => {
  it('validates with one valid entry', () => {
    const sampleFormData = [
      { name: 'Full Name', val: 'Very Valid' }
    ];
    expect(formValidation(sampleFormData)).toHaveLength(1);
  });
  it('validates with multiple valid entries', () => {
    const sampleFormData = [
      { name: 'Full Name', val: 'Very Valid' },
      { name: 'Email', val: 'valid@yessir.com' }
    ];
    expect(formValidation(sampleFormData)).toHaveLength(2);
  });
  it('validates with one valid and one invalid entry', () => {
    const sampleFormData = [
      { name: 'Full Name', val: 'Very Valid' },
      { name: 'Email', val: 'validyessir.com' }
    ];
    expect(formValidation(sampleFormData)).toHaveLength(1);
  });
  it('decorates invalid entry', () => {
    const sampleFormData = [
      { name: 'Full Name', val: 'Very Valid' },
      { name: 'Email', val: 'validyessir.com' }
    ];
    const expected = {
      ...sampleFormData[1],
      error: true,
      errorMessage: 'Please enter a valid email address'
    };
    formValidation(sampleFormData);
    expect(sampleFormData).toContainEqual(expected);
  });
});
