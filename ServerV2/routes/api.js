const express = require('express');
const router = express.Router();

let food  = [
  {
    type: 'chocolate',
    title: 'kinder',
    price: 1.2
  },
  {
    type: 'vegetables',
    title: 'tomato',
    price: 1.5
  },
  {
    type: 'fruits',
    title: 'apple',
    price: 0.8
  }
];

router.get('/', (req,res) => {
  res.status(200).send('Welcome to restful API');
});

router.get('/food', (req,res) => {
  res.send(food);
  });

router.get('/food/:type', (req,res, next) => {
    console.log(req.params);
    let input = food.find((genre) => {
        return input.type === String(req.params.type);
    });
    res.send(input);
});

router.post('/food', (req, res, next) => {
  var newType = {
      type: req.body.type,
      title: req.body.title,
      price: req.body.price
  }.catch(next);
  food.push(newType);
  res.send(newType);

});

router.put('/food/:type', (req, res, next) => {
  let newType = food.find((newType) => {
    return newType.type === String(req.params.type);
  })
  newType.title = req.body.title;
  newType.price = req.body.price;
  res.sendStatus(200);
});

router.delete('/food/:type', (req, res, next) => {
    food = food.filter((food) => {
      return food.type !== String(req.params.type);
    });
    res.sendStatus(200);
});

module.exports = router;
