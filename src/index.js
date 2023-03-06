class magicCharacter {
  constructor(name) {
    this.name = name;
    this.stoned = false;
  }

  setStoned(stoned) {
    this.stoned = stoned;
  }

  getStoned() {
    return this.stoned;
  }

  getAttack(len) {
    const resAttack = this.attack * ((11 - len) / 10);
    return Math.max(0, Math.round(resAttack - Math.log2(len) * 5 * this.getStoned()));
  }
}

export class Magician extends magicCharacter {
  constructor(name) {
    super(name);
    this.attack = 50;
  }
}

export class Daemon extends magicCharacter {
  constructor(name) {
    super(name);
    this.attack = 40;
  }
}
