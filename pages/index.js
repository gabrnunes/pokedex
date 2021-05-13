import axios from 'axios';
import { useState } from 'react';

import Header from '../components/presentation/header';
import SearchForm from '../components/presentation/search-form';
import Pokedex from '../components/views/pokedex';

export default function Home() {
  const [pokemon, setPokemon] = useState(undefined);
  const [numberOrName, setNumberOrName] = useState('');
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    setNumberOrName(e.target.value);
  }

  async function runPokedex(e) {
    setLoading(true);
    e.preventDefault();

    const res = await axios.post(`/api/get-pokemon`, {
        numberOrName: numberOrName
    });

    setLoading(false);

    if (res.status !== 200) {
        return;
    }

    setPokemon(res.data);
  }

  return (
    <>
      <Header>
        <SearchForm loading={loading} onSubmit={runPokedex} onChange={handleInputChange} />
      </Header>
      <Pokedex pokemon={pokemon} />
    </>
  )
}
