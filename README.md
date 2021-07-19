# Desafio Objective - candidato Ivã A. Munhoz

## Informações Gerais

Este desafio foi concluído usando somente React.js. O único package de terceiros utilizado foi o `md5` por ser necessário nas requisições à API.
|||
|--- |--- |
starter|[Vite.js](https://vitejs.dev)
Demo| [Netlify](https://objective-desafio-iamunhoz.netlify.app/)


## Aviso: Chaves API

As duas chaves necessárias para requisições feitas à API do banco de dados de heróis da Marvel são utilizadas no arquivo `/src/api/fetcher.ts`, e este espera encontrá-las em variáveis de ambiente *(environmental variables)* nomeadas PRIVATE_KEY e PUBLIC_KEY.

Como este projeto foi iniciado com o builder [Vite.js](https://vitejs.dev), as chaves podem ser armazenadas no arquivo `/.env` com os nomes VITE_PRIVATE_KEY e VITE_PUBLIC_KEY. (Sem o prefixo VITE_ as variáveis não são encontradas.)

## Como testar localmente

Tendo as chaves configuradas de acordo com o tópico acima, basta executar `npm install` e depois `npm start`
