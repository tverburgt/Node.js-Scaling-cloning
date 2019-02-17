// server.js

//https://medium.freecodecamp.org/scaling-node-js-applications-8492bd8afadc
const http = require('http');
const pid = process.pid;
let usersCount;


http.createServer((req, res) => {
  for (let i=0; i<1e7; i++); // simulate CPU work
  res.write(`Handled by process ${pid}\n`);
  res.end(`Users: ${usersCount}`);
}).listen(8080, () => {
  console.log(`Started process ${pid}`);
});


process.on('message', msg => {
  usersCount = msg.usersCount;
  console.log(`Message from master: ${usersCount}`);
  //console.log(`Message from master: ${msg}`);
});
