var jwt = require('jsonwebtoken');
module.exports = (app) => {
    const itemsCollection = app.mongo.collections.item

    app.get('/items', (req, res) => {
        itemsCollection.get({}, (items, err) => {
            if (err) {
                res.status(500).send({
                    message: err.message
                })
                return;
            }

            res.send(items)
        })
    })
    
}