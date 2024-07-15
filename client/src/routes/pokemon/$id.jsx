import { createFileRoute } from '@tanstack/react-router'
import { getPokemon } from '../../api/pokemons';

export const Route = createFileRoute('/pokemon/$id')({
  component: pokemon,
  // para precargar datos
  loader: async ({params}) => await getPokemon(params.id)
})

function pokemon () {
  const pokemon = Route.useLoaderData()
  console.log(pokemon);

  const {id} = Route.useParams()

  return (
    <div>
      <h2>Pokémon {id}: {pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <dl>
        <dt>Height</dt>
        <dd>{pokemon.height}</dd>
        <dt>Weight</dt>
        <dd>{pokemon.weight}</dd>
      </dl>
    </div>
  )
}