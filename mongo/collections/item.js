module.exports = (app) => {
    const mongoose = new app.mongo.initMongo.Mongoose()   
    let collection_name = 'item'
    
    var schema = new mongoose.Schema({
            name: {
                type: String,
                required: [true, "Name is required"],
            },
            description: {
                type: String
            },
            img: {
                type: String,
                required: [true, "Img is required"]
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

    return this
}