const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3001;

let notes = [
    {
      id: 1,
      content: 'HTML is easy',
      date: '2019-05-30T17:30:31.098Z',
      important: true
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      date: '2019-05-30T18:39:34.091Z',
      important: false
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      date: '2019-05-30T19:20:14.298Z',
      important: true
    }
  ]


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
});


app.get('/api/v1/notes', (req, res) => {
    res.json({
        "etat": "succes",
        "data": notes
    })
    
});


app.get('/api/v1/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    let oneElement = notes.find(item => item.id === id );
        if (oneElement) {
            res.status(200).json({
                "etat": "Success",
                "data": oneElement
            })
        } else {
            res.status(404).json({
                "etat": "Error",
                "message": "Cet element not found"
            })
        }
});

app.delete('/api/v1/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)
  
    res.status(404).json({
            "etat": "Success",
            "message": "L'element à été supprimé"
    })
  })

  app.post('/api/v1/notes', (req, res) => {
        const element = req.body;
    console.log("body: ", element)
        if (!element.content) {
            console.log("LE BODY est vide")
        } else {
              res.status(200).json({
                    "etat": "Success",
                    "data": [...notes, element]
                   })
        }
    
  });

 app.listen(PORT, () =>{
        console.log("le serveur web starting on port:"+ PORT);
 });