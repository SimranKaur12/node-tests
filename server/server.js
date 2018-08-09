const express=require('express');

var app=express();

app.get('/', (req,res) => {
  // res.send('Hello World!');
  res.status(404).send({
    error: 'Page not found.',
    name: 'ToDo app v1'
  });
});

app.get('/users', (req,res) => {
  res.status(200).send([{
    name: 'ankita',
    age: 22
  }, {
    name: 'simran',
    age: 23
  }, {
    name: 'nalini',
    age: 23
  }]);
});

app.listen(5000);

module.exports.app = app;