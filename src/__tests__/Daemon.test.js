import Daemon from '../characters/Daemon';

describe('Daemon class tests', () => {
  test('should create Daemon with correct properties', () => {
    const daemon = new Daemon('Azazel');
    expect(daemon).toEqual({
      name: 'Azazel',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });

  test('should throw error for invalid name', () => {
    expect(() => new Daemon('A')).toThrow('Name must be a string with length between 2 and 10 characters');
  });
});
