import Zombie from '../characters/Zombie';

describe('Zombie class tests', () => {
  test('should create Zombie with correct properties', () => {
    const zombie = new Zombie('Walker');
    expect(zombie).toEqual({
      name: 'Walker',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });

  test('should throw error for invalid name', () => {
    expect(() => new Zombie('W')).toThrow('Name must be a string with length between 2 and 10 characters');
  });
});
