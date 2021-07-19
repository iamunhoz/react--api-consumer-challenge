# Desafio Objective - candidato Ivã A. Munhoz

## Aviso: Chaves API

As duas chaves necessárias para requisições feitas à API do banco de dados de heróis da Marvel é utilizada no arquivo `/src/api/fetcher.ts`, e este espera encontrá-las em *variáveis de ambiente (environmental variables)* nomeadas PRIVATE_KEY e PUBLIC_KEY.

Como este projeto foi iniciado com o builder [Vite.js](https://vitejs.dev), as chaves podem ser armazenadas no arquivo `/.env` com os nomes VITE_PRIVATE_KEY e VITE_PUBLIC_KEY. (Sem o prefixo VITE_ as variáveis não são encontradas.)
