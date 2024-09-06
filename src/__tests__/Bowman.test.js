import Bowman from '../characters/Bowman';

describe('Bowman class tests', () => {
  test('should create Bowman with correct properties', () => {
    const bowman = new Bowman('Robin');
    expect(bowman).toEqual({
      name: 'Robin',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  test('should throw error for invalid name', () => {
    expect(() => new Bowman('R')).toThrow('Name must be a string with length between 2 and 10 characters');
  });
});
