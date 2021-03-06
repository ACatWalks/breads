//dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')

//Index
baker.get('/', (req, res) => {
    Baker.find().populate('breads').then(foundBakers => {
        res.send(foundBakers)
    })
})

baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData).then(res.redirect('/breads'))
})

//Show
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id).populate({
        path: 'breads',
        options: {limit: 2}
    }).then(foundBaker => {
        res.render('bakerShow', {
            baker: foundBaker
        })
    }).catch(err => {
        console.log(err)
    })
})

//Delete
baker.delete('/:id', (req, res) => {
    console.log(req.params.id)
    Baker.findByIdAndDelete(req.params.id).then(deletedBaker => {
        res.redirect('/breads')
    }).catch(err => {
        console.log(err)
        res.send('404')
    })
})


//export
module.exports = baker