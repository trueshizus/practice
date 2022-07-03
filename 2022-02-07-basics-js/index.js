"use strict"

import http from 'http';

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!',
//     person: {
//       nested: 'last_name',
//     }
//   }));
// });

const server = http.createServer((req, res)=>{
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({
    data: 'Hello world!',
    person: { nested: 'some field'}
  }))
})

server.listen(8080);