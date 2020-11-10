module.exports = (app) => {
    const mongoose = new app.mongo.initMongo.Mongoose()   
    let collection_name = 'shopping_cart'
    
    var schema = new mongoose.Schema({
            user_id: {
                type: String,
                required: [true, "User is required"],
            },
            description: {
                type: String
            },
            items: {
                type: Array,
                required: [true, "Items is required"]
            },
            is_finished: {
                type: Boolean,
                default: false
            }
        }, 
    { 
        versionKey: false, 
        collection: collection_name
    });    

    var model = app.mongo.initMongo.model(collection_name, schema)

    this.get = function (filter, callback) {
        var query = model.find(filter)
        query.exec((err, docs) => {
            callback(docs, err)
        })
    }

    this.insert = function (data, callback) {
        var collection = new model(data)
        collection.save((err) => {
            if (err) {
                callback(undefined, err)
            } else {
                callback(true, err)
            }
        })
    }

    this.delete = function (filter, callback) {
        var collection = new model(filter)
        collection.deleteOne(filter, (err, res) => {
            if (err) {
                callback(undefined, err)
            } else {
                callback(true, err)
            }
        })
    }

    this.updateOne = function (filter, body) {
        let query = model.findOneAndUpdate(filter, body, {upsert: false})
        query.exec()
    }

    return this
}