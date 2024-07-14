import express from 'express';
import { BACKEND_URL } from '@repo/common/config';

console.log(`Backend URL: ${BACKEND_URL}`);


const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  })
});

app.listen(3003, () => {
  console.log('Server is running on port 3003');
});