import { createFileRoute, Link } from '@tanstack/react-router'
import { getPokemonList } from '../../api/pokemons';

export const Route = createFileRoute('/pokemon/')({
  component: pokemonList,
  loader: getPokemonList,
})

function pokemonList() {
  const pokemons = Route.useLoaderData();

  return (
    <>
      <h2>Pokemons</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link
              to={"/pokemon/$id"}
              params={{
                id: pokemon.id,
              }}
            >
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}