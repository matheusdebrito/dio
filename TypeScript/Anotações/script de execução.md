no arquivo package.json ir em scripts criar o comando start: "npx tsc && node build/index.js"

Ex:

{
  "name": "typescript",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "npx tsc && node build/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^5.3.3"
  }
}

para rodar usar o comando npm run start


PODE SER SUBSTITUIDO PELO PROCEDIMENTO TS NODE DEV