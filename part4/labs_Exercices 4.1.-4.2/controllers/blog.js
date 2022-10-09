 const Blogs = require('../models/blogs');

const getAllBlogs = ((request, response) => {
    Blogs
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  })
  
  const createBlogs = ('/blogs', (request, response) => {
    const blog = new Blogs(request.body);
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })

  module.exports = {
    getAllBlogs,
    createBlogs
  }