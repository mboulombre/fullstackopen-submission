const  routes = require('express').Router();
const { createBlogs, getAllBlogs } = require('../controllers/blog');

routes.get('/blogs', getAllBlogs)
  
  routes.post('/blogs', createBlogs)

  module.exports = routes;