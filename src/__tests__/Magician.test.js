import Magician from '../characters/Magician';

describe('Magician class tests', () => {
  test('should create Magician with correct properties', () => {
    const magician = new Magician('Merlin');
    expect(magician).toEqual({
      name: 'Merlin',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });

  test('should throw error for invalid name', () => {
    expect(() => new Magician('M')).toThrow('Name must be a string with length between 2 and 10 characters');
  });
});
