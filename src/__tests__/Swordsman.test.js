import Swordsman from '../characters/Swordsman';

describe('Swordsman class tests', () => {
  test('should create Swordsman with correct properties', () => {
    const swordsman = new Swordsman('Arthur');
    expect(swordsman).toEqual({
      name: 'Arthur',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });

  test('should throw error for invalid name', () => {
    expect(() => new Swordsman('A')).toThrow('Name must be a string with length between 2 and 10 characters');
  });
});
