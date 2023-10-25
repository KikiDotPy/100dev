const http = require('http')
const cors = require('cors');

const PORT = process.env.PORT || 8000;



http.createServer((req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
  }

  if (req.url === '/' && req.method === 'GET') {
    const coinFaces = ['Head', 'Tails'];
    const randomIndex = Math.floor(Math.random() * coinFaces.length); 
    const randomElement = coinFaces[randomIndex];

    res.writeHead(200, headers);
    res.write(JSON.stringify({message: randomElement}));
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }   
}).listen(PORT, () => console.log(`Server running on port ${PORT}`));