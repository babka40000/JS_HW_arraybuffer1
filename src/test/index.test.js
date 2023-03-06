import { Magician, Daemon } from '../index';

const heroMagician = new Magician('Vasya');
const heroDaemon = new Daemon('Petya');

test('attack Magician without stoned', () => {
  expect(heroMagician.getAttack(5)).toBe(30);
});

test('attack Magician with stoned', () => {
  heroMagician.setStoned(true);
  expect(heroMagician.getAttack(5)).toBe(18);
});

test('attack Magician big len', () => {
  expect(heroMagician.getAttack(100)).toBe(0);
});

test('attack Daemon without stoned', () => {
  expect(heroDaemon.getAttack(5)).toBe(24);
});

test('attack Daemon with stoned', () => {
  heroDaemon.setStoned(true);
  expect(heroDaemon.getAttack(5)).toBe(12);
});

test('attack Daemon big len', () => {
  expect(heroDaemon.getAttack(100)).toBe(0);
});
