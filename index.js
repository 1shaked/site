const express = require('express')
const app = express();
const port = 8080;

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/addUser', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});