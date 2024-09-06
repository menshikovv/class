import Character from '../characters/Character';

describe('Character class tests', () => {
  test('should throw error if name length is less than 2', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters');
  });

  test('should throw error if name length is more than 10', () => {
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters');
  });

  test('should throw error if type is invalid', () => {
    expect(() => new Character('ValidName', 'InvalidType')).toThrow('Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  });

  test('should create a valid Character instance', () => {
    const character = new Character('ValidName', 'Bowman');
    expect(character).toEqual({
      name: 'ValidName',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 0,
      defence: 0,
    });
  });
});
