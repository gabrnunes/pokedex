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

  const number = req.body.number || '';
  const pokemon = await getOnePokemon(number);

  return res.status(200).json(pokemon);
}
