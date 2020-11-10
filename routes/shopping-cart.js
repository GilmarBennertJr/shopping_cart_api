var jwt = require('jsonwebtoken');
module.exports = (app) => {
    const shoppingCartsCollection = app.mongo.collections.shopping_cart

    app.get('/shopping-carts', (req, res) => {
        shoppingCartsCollection.get({
            user_id: req.decoded.uid
        }, (items, err) => {
            if (err) {
                res.status(500).send({
                    message: err.message
                })
                return;
            }

            res.send(items)
        })
    })

    app.get('/shopping-cart/:id', (req, res) => {
        shoppingCartsCollection.get({
            user_id: req.decoded.uid,
            _id: req.params.id
        }, (items, err) => {
            if (err) {
                res.status(500).send({
                    message: err.message
                })
                return;
            }

            if (items.length === 0) {
                res.sendStatus(204)
            } else {
                res.send(items[0])
            }
        })
    })

    app.put('/shopping-cart', (req, res) => {
        let body = req.body;
        body.user_id = req.decoded.uid

        shoppingCartsCollection.insert(body, (isInsert, err) => {
            if (!isInsert && err) {
                res.status(500).send({
                    message: err.message
                })
            } else {
                res.sendStatus(200)
            }
        })
    })

    app.delete('/shopping-cart', (req, res) => {
        let body = req.body
        body.user_id = req.decode.uid
        
        shoppingCartsCollection.delete({
            _id: body.shopping_cart_id
        }, (isDeleted, err) => {
            if (!isDeleted && err) {
                res.status(500).send({
                    message: err.message
                })
            } else {
                res.sendStatus(200)
            }
        })
    })
}