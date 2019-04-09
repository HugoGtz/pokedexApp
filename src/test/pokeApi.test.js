const Pokemon = require('../adapters/PokeApi');

beforeAll(() => console.log('PokeApi Adapter TEST'));

describe('pokeApi adapter', () => {
    it('all', () => {
        return Pokemon.all().then((response) => {
            let arrayLength = (response.results).length
            expect(arrayLength).toBeGreaterThan(0)
        })
    })

    it('byId', () => {
        return randomId().then((id) => {
            Pokemon.byNameOrId(id).then((response) => 
                expect(response.id).toBe(id)
            )
        })
    })

    it('byName', () => {
        getPokemonNameRandom().then((name) => {
            return Pokemon.byNameOrId(name).then((response) => {
                expect(response.name).toBe(name)
            })
        })
    })
})

function randomId() {
    return new Promise((resolve) => {
        return resolve(Math.floor(Math.random() * (+150 - +1)) + +1)
    })
}

function getPokemonNameRandom() {
    return new Promise((resolve) => {
        randomId().then((id) => {
            Pokemon.byNameOrId(id).then((response) => {
                resolve(response.name)
            })
        })
    })
}