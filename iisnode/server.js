(async () => {
  const server = await import('./server/server.mjs');
  server.startServer();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
