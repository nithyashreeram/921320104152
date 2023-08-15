const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/add', (req, res) => {
  const { numbers } = req.body;
  const result = numbers.reduce((acc, num) => acc + num, 0);
  res.json({ result });
});



app.listen(port, () => {
  console.log(`Microservice listening at http://localhost:${port}`);
});
