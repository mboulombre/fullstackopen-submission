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
  name: {
    type: String,
    minLength: 3,
    required: true,
    unique: true
  },
  number: {
    type: Number,
    validate: {
      validator: function (v) {
        return /^0(9|4)\d{8}$/.test(v)
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: true

  }
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Contact', noteSchema)
