const express = require('express');
const fs = require('fs');

const api = express();

api.use(express.json());

class InternalServerError extends Error{
  constructor(message) {
    super(message);
    this.name = 'Internal Server Error';
  }
}