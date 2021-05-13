Esta é uma Pokedéx feita usando [NextJS](https://nextjs.org/) e os dados da [PokeApi](https://pokeapi.co/). O sistema possui deploy automático com a Vercel e pode ser acesso [neste link](https://pokedex-phi-nine.vercel.app/).

## Começando

Depois de clonar o repositório, você precisa instalar as dependências e rodar o server local, com os comandos:

```bash
yarn

&&

yarn dev
```

Para ver o server de dev, acesse [http://localhost:3000](http://localhost:3000).

## Conexão com a API

É necessário também criar um arquivo `.env.local` com o endereço para a API.

```
API_URL=https://pokeapi.co/api/v2
```

## Outras configurações

Você também pode configurar o número de Pokémons total que aparecem e o número de Pokémons por página no arquivo `/utils/constants.js`.
