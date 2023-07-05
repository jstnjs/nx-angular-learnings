const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const userData = require('./data/users');

server.get('/api/users', (req, res, next) => {
  res.status(200).send(userData.getUsers);
});

server.listen(3000, () => {
  console.log(process.env);
  console.log('JSON server listening on port 3000');
});

process.on('SIGINT', () => {
  // Handle server termination (Ctrl+C)
  console.log('JSON server terminated');
  process.exit(0);
});

process.on('disconnect', async () => {
  console.log('stopp??');
  process.exit(0);
});

process.on('exit', async () => {
  console.log('stopp??');
  process.exit(0);
});

process.on('beforeExit', async () => {
  console.log('stopp??');
  process.exit(0);
});

if (process.env.NX_INVOKED_BY_RUNNER === 'true') {
  process.on('disconnect', async () => {
    await db.disconnect();
    process.exit(0);
  });
}
