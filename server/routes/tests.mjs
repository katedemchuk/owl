import express from 'express';
import { db } from '../db/connection.mjs';
import { ObjectId } from 'mongodb';

const router = express.Router();
const collection = db.collection('tests');

router.get('/', async (req, res) => {
  const results = await collection.find({})
    .limit(50)
    .toArray();
  res.send(results).status(200);
});

router.get('/:id', async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const result = await collection.findOne(query);
  if (result) {
    res.send(result).status(200);
  } else {
    res.send('Not found').status(404);
  }
});

router.post('/', async (req, res) => {
  const document = req.body;
  document.date = new Date();
  const result = await collection.insertOne(document);
  res.send(result).status(204);
});

router.patch('/question/:id', async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $push: { questions: req.body }
  };
  const result = await collection.updateOne(query, updates);
  res.send(result).status(200);
});

router.delete('/:id', async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const result = await collection.deleteOne(query);
  res.send(result).status(200);
});

export { router as tests };
