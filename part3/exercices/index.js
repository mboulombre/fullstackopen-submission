const express = require('express');
const app = express();

app.use(express.json());

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


 app.listen(3001, () => {
    console.log("the server starting on port"+ 3001);
 });