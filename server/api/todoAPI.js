const express = require('express');
const router = express.Router();

const queries = require('../db/queries');
const validTodo = require('../lib/validations').validTodo;
const validId = require('../lib/validations').validId;

router.get('/', (req, res) => {
  queries.getAll().then(todos => {
		  res.json(todos);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  if(validId(id)) {
    queries.getOne(id).then(todo => {
      res.json(todo);
    });
  } else {
    res.status(404);
    res.json({
      message: 'Not Found'
    });
  }
});

router.post('/', (req, res) => {
  if(validTodo(req.body)) {
    // insert into the DB
    const todo = {
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
      date: new Date()
    };

    queries
      .create(todo)
      .then(ids => {
        res.json({
          id: ids[0]
        });
      });
  } else {
    // respond with an error
    res.status(500);
    res.json({
      message: 'Invalid todo'
    });
  }
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  if(validId(id)) {
    const todo = {
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority
    };

    queries
      .update(id, todo)
      .then(() => {
        res.json({
          message: '😊'
        });
      });
  } else {
    res.status(500);
    res.json({
      message: 'Invalid id'
    })
  }
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  if(validId(id)) {
    queries
      .delete(id)
      .then(() => {
        res.json({
          message: '🗑'
        });
      });
  } else {
    res.status(500);
    res.json({
      message: 'Invalid id'
    })
  }
});


module.exports = router;
