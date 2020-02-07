import is from '@/main';

describe('string', () => {
  it('A input value is string, return true', () => {
    expect(is.string('text')).toBe(true);
  });
});

