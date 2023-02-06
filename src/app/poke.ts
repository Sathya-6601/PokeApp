

export interface Poke {
  sprites: Sprites;
  name: string;
  types: Array<Types>;
  height: number;
  weight: number;
  stats: Stats[];
}

class Sprites {
  front_default: string;
}

class Types {
  type: {
    name: string;
  };
}

class Stats {
  base_stat: number;
}
