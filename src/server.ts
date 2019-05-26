import debug from 'debug';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
});

const app = express();
const log = debug('app:entrypoint');

const { DB_URL: dbUrl, APP_PORT: appPort } = process.env;

app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not found',
  });
});

app.listen(appPort, () => log(`Listening on port ${appPort}`));
