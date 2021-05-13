import { getOnePokemon } from '../../lib/pokeapi'

export default async function getPokemon(req, res) {
  if (req.method !== 'POST') {
    return res.status(501).json({
      error: {
        code: 'method_unknown',
        message: 'This endpoint only responds to POST'
      }
    });
  }

  const numberOrName = req.body.numberOrName || '';
  const pokemon = await getOnePokemon(numberOrName);
  
  if (!pokemon) {
    return res.status(200).json({
      notFound: true
    });
  }

  return res.status(200).json(pokemon);
}
