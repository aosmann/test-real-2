const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Properties data
let properties = [];

// Routes
app.get('/api/properties', (req, res) => {
  res.json(properties);
});

app.post('/api/properties', (req, res) => {
  const newProperty = {
    id: Date.now(),
    ...req.body,
  };
  properties.push(newProperty);
  res.status(201).json(newProperty);
});

app.get('/admin', (req, res) => {
  res.send('<h1>Property Management System</h1><p>Add properties here</p>');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
