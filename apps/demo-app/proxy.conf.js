module.exports = [
  {
    context: ['/api'],
    target: 'http://localhost:3333',
    secure: false,
    changeorigin: true,
    logLevel: 'debug',
  },
];
