const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const Contact = require('./models/contact');



const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
// app.use(morgan('tiny'));
app.use(morgan(':method :url :status  - :response-time ms - :res[content-length]' ));


const data = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

app.get('/api/persons', (req, res) => {
        res.status(200).json({
            data: data
        })
});

app.get('/api/persons/:id', (req, res) => {
            const id = Number(req.params.id);
        const newData = data.find(item => item.id === id );
        if (newData) {
                res.status(200).json({
                    "data": newData
                })
        } else {
            res.status(404).json({
                "error": 'element not found'
            })
        }
});

app.get('/info', (req, res) => {
    const today = new Date();
    res.status(200).send(`<h1>Phonebook has info for 2 people</h1><br/> <br/>  ${today}`);
});

app.delete('/api/persons/:id', (req, res) => {
        const id = Number(req.params.id);
        const tabLength = data.length;

        const newTabs = data.filter(item => item.id !== id);
            if(id <= tabLength){
                res.status(200).json({
                    "message": "Element was delete",
                    data: newTabs
                })
            }else{
                res.status(404).json({
                    "error": 'element was not found'
                })
            }
});


app.post('/api/persons', (req, res) => {
        const element = req.body;

        const newElement = new Contact({ 
            // "id": Math.floor(Math.random() * 100),
            "name": element.name, 
            "number": element.number
          });

          let newTabs = data;


        if (element.name && element.number) {
          const tab =  newTabs.filter( item => item.name === element.name);
            // console.log('tab: ', tab);
                    if(tab.length > 0){
                        res.status(401).json({
                            "error": "the name must be unique"
                        })
                    }else{
                        newElement.save().then(savedNote => {
                            res.status(200).json({
                                "message": "element was added successful",
                                "data": savedNote
                            })
                        })
                    }
               
        }else {
            res.status(404).json({
                "error": "le name et number are required"
            })
        }


});


 app.listen(PORT, () => {
    console.log("the server starting on port"+ 3001);
 });