import is from '@/main';

describe('register', () => {
  beforeEach(() => {
    is.clear();
  });

  it('A user should register custom type', () => {
    is.register('name', (value) => {
      return value === 'name';
    });

    expect(is.custom('name', 'name')).toBe(true);
  });

  it('A user should not register custom type if a name already exists', () => {
    is.register('name', () => true);

    expect(() => is.register('name', () => true)).toThrowError();
  });
});
