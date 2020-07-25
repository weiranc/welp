const db = require('./database_init');

let helpers = {
    getAll: (callback) => {
        let queryString = 'SELECT * FROM choices;'
        db.query(queryString, (err, results) => {
            if (err){
                callback(err)
            } else {
                callback(null, results)
            }
        })
    },
    addOne: (data, callback) => {
        let {restaurant} = data
            let queryString = `INSERT INTO choices(restaurant) VALUES('${restaurant}');`
            db.query(queryString, (err, results) => {
                if (err){
                    callback(err)
                } else {
                    callback(null, results)
                }
            })
    },
    deleteOne: (req, res) => {
       
    },
    updateOne: (req, res) => {
        
    }
}

module.exports = helpers