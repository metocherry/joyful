import is from '@/main';

describe('string', () => {
  it('An input value is not a string, return false', () => {
    expect(is.string(1)).toBe(false);
  });

  it('An input value is a string, return true', () => {
    expect(is.string('text')).toBe(true);
  });
});
