import dex from '../src/dex'

test('dex', async () => {
    const swordAndShield = await dex('Sword & Shield')
    expect(swordAndShield).toBeDefined()
})