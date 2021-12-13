const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const dbUtils = require('../database/helpers');
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/app/main', (req, res) => {
  dbUtils.getAll(((err, results) => {
    err ? res.send(err) : res.send(results);
  }))
})

app.get('/app/main/:id', (req, res) => {
  var { id } = req.params;
  dbUtils.getOne(id, (err, results) => {
    err ? res.send(err) : res.send(results);
  })
})

app.post('/app/main', (req, res) => {
  dbUtils.addOne(req.body, (err, results) => {
    err ? res.send(err) : res.send(results);
  })
})

app.delete('/app/main/:id', (req, res) => {
  var { id } = req.params;
  dbUtils.deleteOne(id, (err, results) => {
    err ? res.send(err) : res.send(results);
  })
})

app.delete('/app/main', (req, res) => {
  dbUtils.deleteAll((err, results) => {
    err ? res.send(err) : res.send(results);
  })
})

app.put('/app/main/:id', (req, res) => {
  var { id } = req.params;
  dbUtils.updateOne(id, req.body, (err, results) => {
    err ? res.send(err) : res.send(results);
  })
})

app.listen(PORT, (err) => {
  console.log(err ? err : `Listening on ${PORT}`);
})