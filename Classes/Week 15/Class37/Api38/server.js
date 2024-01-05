const express = require('express');
const app = express();
const PORT = 8000;

const pokemon = {
    'charmender' : {
        'type' : 'fire',
        'color' : 'red',
        'evolution' : 'yes',
    },
    'bulbasaur' : {
        'type' : 'herb',
        'color': 'green',
        'evolution' : 'yes',
    },
    'pikachu' : {
        'type' : 'electro',
        'colore': 'yellow',
        'evolution' : 'yes',
    }

}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/api/:pokemonName', (req, res) => {
    console.log(req.params.pokemonName)
    const pokemonName = req.params.pokemonName
    if (pokemonName){
        res.json(pokemon[pokemonName])
    } else {
        res.json(pokemon['pikachu'])
    }
    
})

app.listen(PORT, () => {
    console.log(`The server is runnin on port ${PORT}`)
})
