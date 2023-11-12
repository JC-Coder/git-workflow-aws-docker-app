const express = require('express');
const usersData = require('./data.js');

const app = express();
const port = process.env.PORT || 5000;

app.get('/users', async (req, res) => {
  return res.status(200).json({
    success: true,
    data: usersData
  });
});

app.listen(port, () => {
  console.log(`server running : ${port}`);
});
