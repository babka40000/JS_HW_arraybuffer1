import MagicCharacter from './js/magiccharacter';

export class Magician extends MagicCharacter {
  constructor(name) {
    super(name);
    this.attack = 50;
  }
}

export class Daemon extends MagicCharacter {
  constructor(name) {
    super(name);
    this.attack = 40;
  }
}
