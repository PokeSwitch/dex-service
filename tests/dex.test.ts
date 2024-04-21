import dex from '../src/dex'
import {Species} from '@pkmn/dex'

test('dex', async () => {
    const swordAndShield = await dex('Sword & Shield')
    expect(swordAndShield).toBeDefined()
})

let sv: Array<Species>
let swsh: Array<Species>
let bdsp: Array<Species>

describe('Scarlet & Violet', () => {
    beforeAll(async () => {
        sv = await dex('Scarlet & Violet')
    })
    it('should not have caterpie', async () => {
        const caterpie = sv.find(p => p.name === 'Caterpie')
        expect(caterpie).toBeUndefined()
    })

    it('should have charmander', async ()=>{
        const charmander = sv.find(p => p.name === 'Charmander')
        expect(charmander).toBeDefined()
    })

})

describe('Sword & shield', () => {
    beforeAll(async () => {
        swsh = await dex('Sword & Shield')
    })

    it('should not have Deerling', async () => {
        const deerling = swsh.find(p => p.name === 'Deerling')
        expect(deerling).toBeUndefined()
    })

    it('should have corvinight', async () => {
        const corvinight = swsh.find(p => p.name === 'Corviknight')
        expect(corvinight).toBeDefined()
    })

})

describe('Briliant Diamond & Shinning Pearl', () => {
    beforeAll(async () => {
        bdsp = await dex('Briliant Diamon & Shinning Pearl')
    })

    it('should not have victini', () => {
        const victini = bdsp.find(p => p.name === 'Victini')
        expect(victini).toBeUndefined()
    })

    it('should have staraptor', () => {
        const staraptor = bdsp.find(p => p.name === 'Staraptor')
        expect(staraptor).toBeDefined()
    })
})