import { APP_BASE_HREF } from '@angular/common';
import {
  CommonEngine,
  createNodeRequestHandler,
  isMainModule,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import bootstrap from './main.server';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = join(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const commonEngine = new CommonEngine({
  allowedHosts: getAllowedHosts(),
});

app.set('trust proxy', true);

app.use((req, res, next) => {
  if (req.path === '/en' || req.path.startsWith('/en/')) {
    const target = req.originalUrl.replace(/^\/en(?=\/|$)/, '') || '/';
    res.redirect(301, target);
    return;
  }
  next();
});

app.get(
  '**',
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

app.get('**', (req, res, next) => {
  const protocol = req.protocol || 'http';
  const host = req.get('host') ?? 'localhost';
  const url = `${protocol}://${host}${req.originalUrl}`;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    })
    .then((html) => res.send(html))
    .catch(next);
});

export function startServer(): void {
  const port = process.env['PORT'] || 4000;

  app.listen(port, () => {
    console.log(`Node Express server listening on ${port}`);
  });
}

if (isMainModule(import.meta.url)) {
  startServer();
}

export default createNodeRequestHandler(app);

function getAllowedHosts(): string[] {
  const configuredHosts = process.env['NG_ALLOWED_HOSTS']
    ?.split(',')
    .map((host) => host.trim())
    .filter(Boolean);

  return configuredHosts?.length
    ? configuredHosts
    : ['veloura-marketing.com', 'www.veloura-marketing.com', 'localhost', '127.0.0.1'];
}
