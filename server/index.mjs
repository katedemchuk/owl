import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { tests } from './routes/tests.mjs';

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/tests', tests);

app.use((err, _req, res, next) => {
  res.status(500).send('Unexpected error');
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
