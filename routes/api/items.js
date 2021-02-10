const express = require('express');
const route = express.Router();
const auth = require('../../middleware/auth');
//The Model
const Item = require('../../models/Item');

/**
 * @route [GET] api/items/:id
 * @description Get items
 * @access Public
 */
route.get('/:id', (req, res) => {
  //id: user's _id field
  const id = req.params.id;
  Item.find({ userId: id })
    .select('-__v')
    .then((items) => res.json(items))
    .catch(() => res.status(400).json({ msg: 'Items not retrieved' }));
});

/**
 * @route [POST] api/items
 * @description Creates a new item
 * @access Private
 */
route.post('/', auth, (req, res) => {
  const newItem = new Item({
    title: req.body.title,
    answer: req.body.answer,
    topic: req.body.topic,
    userId: req.body.userId,
    repData: req.body.repData,
  });
  newItem
    .save()
    .then((item) => res.status(201).json(item))
    .catch(() => res.status(400).send({ msg: 'Item not created' }));
});

/**
 * @route [DELETE] api/items/:id
 * @description Deletes an item using the id param
 * @access Private
 */
route.delete('/:id', auth, (req, res) => {
  const id = req.body.id;
  Item.deleteOne(id)
    .then(() => res.json({ msg: 'Success' }))
    .catch(() => res.status(400).json({ msg: 'Falied!' }));
});

/**
 * @route [PUT] api/item/:id
 * @description Updates an item
 * @access Private
 */
route.put('/:id', auth, (req, res) => {
  const id = req.params.id;
  Item.findById(id, (err, item) => {
    if (err) return res.status(400).json({ msg: 'Update failed' });

    item.title = req.body.title || item.title;
    item.answer = req.body.answer || item.answer;
    item.topic = req.body.topic || item.topic;
    item.userId = req.body.userId || item.userId;
    item.repData = req.body.repData || item.repData;
    item.save();

    res.json({ msg: 'Success' });
  });
});

module.exports = route;
