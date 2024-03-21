import Team from '../team';
import Character from '../character';

const team = new Team();

const nikita = new Character('Nikita', 'bestiarius');
const stas = new Character('Stas', 'retiarius');
const turbo = new Character('Turbo', 'gallus');
const dyusha = new Character('Dyusha', 'veles');

test('Try to add repeating character in team using team.add()', () => {

  team.add(nikita);
  team.add(stas);
  team.add(turbo);
  team.add(dyusha);

  expect(() => team.add(nikita)).toThrow('Nikita already contains in team');
});

test('Adding multiple characters in team, using team.addAll(), trying to add only 4 unique characters', () => {

  team.addAll(nikita, stas, turbo, dyusha, nikita, stas);

  expect(team.members.size).toBe(4);
});

test('Should return Array from Set property using team.toArray()', () => {
  
  team.addAll(nikita, stas, turbo, dyusha);

  expect(team.toArray()).toEqual([
    { name: 'Nikita', type: 'bestiarius' },
    { name: 'Stas', type: 'retiarius' },
    { name: 'Turbo', type: 'gallus' },
    { name: 'Dyusha', type: 'veles' },
  ]);
});