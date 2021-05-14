import { getPalette } from '../get-palette';

describe('testing getPalette', () => {
  it('should return morning color code - #282e54', () => {
    const actual = getPalette('morning');
    const expected = '#282e54';
    expect(actual).toEqual(expected);
  });

  it('should return afternoon color code - #000000', () => {
    const actual = getPalette('afternoon');
    const expected = '#000000';
    expect(actual).toEqual(expected);
  });

  it('should return morning color code - #ffdd91', () => {
    const actual = getPalette('night');
    const expected = '#ffdd91';
    expect(actual).toEqual(expected);
  });
});
