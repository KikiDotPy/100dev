const http = require('http');
const fs = require('fs')
const path = require('path');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const params = querystring.parse(url.parse(req.url).query);
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

  let extName = path.extname(filePath);
  let contentType = 'text/html';

  switch (extName) {
    case '.js':
      contentType = 'application/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
  };

  fs.readFile(filePath, (err, content) => {
    if(err){
      if(err.code === 'ENOENT') {
        console.log(`Failed to read file: ${filePath}`); 
        console.dir(err);
        res.writeHead(404);
        res.end('File not found');
        return;
      } else {
        res.end(content, 'Another type of error occurred'); 
      }
    }     
    else {
      res.writeHead(200, {'Content-Type': contentType});
      res.write(content);
      res.end();
    }
  });
});

const PORT = process.env.PORT || 8000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));