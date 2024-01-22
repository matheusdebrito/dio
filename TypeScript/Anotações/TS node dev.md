TS Node Dev é um servidor que roda o TS sem precisar criar um arquivo js.

Instalando: npm install ts-node-dev -D

Criando novo script: 
    1 - ir no arquivo package.json
    2 - ir em scripts
    3 - criar o script. Ex: "start:dev": "ts-node-dev --respawn --transpile-only src/index.ts",

Rodando script: npm run start:dev