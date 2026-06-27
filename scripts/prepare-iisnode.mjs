import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const workspaceRoot = join(root, '..');
const distRoot = join(workspaceRoot, 'dist', 'veloura');

await mkdir(distRoot, { recursive: true });
await copyFile(join(workspaceRoot, 'iisnode', 'server.js'), join(distRoot, 'server.js'));
await copyFile(join(workspaceRoot, 'iisnode', 'web.config'), join(distRoot, 'web.config'));
