const router = require('express').Router()

const Shop = require('./shop-model.js')

router.get('/', (req, res) => {
    Shop.find()
        .then(items => res.status(200).json(items))
        .catch(err => res.status(500).json({ message: 'could not find items', err }))
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    Shop.findById(id)
        .then(item => res.status(200).json(item))
        .catch(err => res.status(500).json({ message: 'could not find item', err }))
})

router.post('/', (req, res) => {
    Shop.add(req.body)
        .then(success => res.status(200).json(success))
        .catch(err => res.status(500).json({ message: 'could not add item', err }))
})

router.put('/:id', (req, res) => {
    const { id } = req.params

    Shop.findById(id)
    .then(item => {
        if (item) {
            Shop.update(id, req.body)
                .then(updated => {
                    res.status(200).json(updated)
        })
        } else {
            res.status(404).json({ message: 'Could not find item with given id' })
        }
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to update item', err });
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    Shop.remove(id)
        .then(success => res.json(200).json(success))
        .catch (err => {
            res.status(500).json({ message: 'Failed to delete item', err })
        })
})

module.exports = router