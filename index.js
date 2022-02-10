const express = require('express');
const fs = require('fs')


const app = express();
const port = 8080;

const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));

app.post('/addUser', (req, res) => {
  const last_id_str = fs.readFileSync(path.join(__dirname, '/db/last_id.txt'));
  const last_id = parseInt(last_id_str);
  
  const data_str = fs.readFileSync(path.join(__dirname, '/db/users.json')); // getting the file data as string
  const data = JSON.parse(data_str); // parse it as JSON
  console.log(data);
  // check if the user already exists
  const user_data = request.body; // {email , password, firstName, lastName }
  if (user_data.email in data) return res.send("user already exists"); // if exists send error message
  data[user_data.email] = {
      password: user_data.password,
      firstName: user_data.firstName,
      lastName: user_data.lastName,
      id: last_id
  }
  fs.writeFileSync(path.join(__dirname, '/db/last_id.txt'), String(last_id + 1));
  fs.writeFileSync(path.join(__dirname, '/db/users.json'), JSON.stringify(data) );
  // if not exists create the user 
  res.redirect('/static/index.html');
});


app.listen(port, () => {
    const data_str = fs.readFileSync(path.join(__dirname, '/db/users.json')); // getting the file data as string
  const data = JSON.parse(data_str); // parse it as JSON
  console.log(data);
  return console.log(`Express is listening at http://localhost:${port}`);
});