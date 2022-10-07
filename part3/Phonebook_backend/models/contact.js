// import mongoose from 'mongoose';

// const NoteSchema = mongoose.Schema({
//     content: String,
//     date: Date,
//     important: Boolean,
//     timestamps: true,
//   }
// );

// export default mongoose.model('Note', NoteSchema);
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const noteSchema = new mongoose.Schema({
  name: String,
  number: Number,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Contact', noteSchema)