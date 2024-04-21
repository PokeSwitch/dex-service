import * as dex from '@pkmn/dex'
import { Sprites } from '@pkmn/img'
import { sortBy } from 'lodash'

async function getPokemonForGen(gen: number) {
  const data = dex.Dex.forGen(gen)
    .species.all()
    .filter((s) => s.isNonstandard === null)
  return sortBy(data, (s) => s.num)
}

export type GAME_NAME =
  | 'Sword & Shield'
  | 'Scarlet & Violet'
  | 'Briliant Diamon & Shinning Pearl'

export const GameNames: GAME_NAME[] = [
  'Sword & Shield',
  'Briliant Diamon & Shinning Pearl',
  'Scarlet & Violet',
]

export default async function getLegaldexforgame(game: GAME_NAME) {
  switch (game) {
    case 'Scarlet & Violet':
      return getPokemonForGen(9)
    case 'Sword & Shield':
      return getPokemonForGen(8)
    case 'Briliant Diamon & Shinning Pearl':
      return getPokemonForGen(4)
  }
}
