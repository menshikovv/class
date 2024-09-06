import Undead from '../characters/Undead';

describe('Undead class tests', () => {
  test('should create Undead with correct properties', () => {
    const undead = new Undead('Ghoul');
    expect(undead).toEqual({
      name: 'Ghoul',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  test('should throw error for invalid name', () => {
    expect(() => new Undead('G')).toThrow('Name must be a string with length between 2 and 10 characters');
  });
});
