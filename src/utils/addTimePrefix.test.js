import addTimePrefix from 'utils/addTimePrefix';

describe('Adds "zero" time prefix', () => {

  test('Adds "zero" time prefix for hours, minutes and seconds', () => {
    expect(addTimePrefix(4)).toBe('04');
  });

  test('Adds "zero" time prefix for milliseconds', () => {
    expect(addTimePrefix(4, true)).toBe('004');
  });

});
