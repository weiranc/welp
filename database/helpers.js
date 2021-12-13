const db = require('./database_init');

let helpers = {
    getAll: (callback) => {
        let queryString = 'SELECT * FROM choices;'
        db.query(queryString, (err, results) => {
            if (err) {
                callback(err);
            } else {
                callback(null, results);
            }
        })
    },
    getOne: (data, callback) => {
        let { id } = data;
        let queryString = `SELECT * FROM choices WHERE id=('${id}');`
        db.query(queryString, (err, results) => {
            if (err) {
                callback(err);
            } else {
                callback(null, results);
            }
        })
    },
    addOne: (data, callback) => {
        let { restaurant } = data
        let queryString = `INSERT INTO choices(restaurant) VALUES('${restaurant}');`
        db.query(queryString, (err, results) => {
            if (err) {
                callback(err);
            } else {
                callback(null, results);
            }
        })
    },
    deleteOne: (data, callback) => {
        let { restaurant } = data;
        let queryString = `DELETE FROM choices WHERE restaurant='${restaurant}';`
        db.query(queryString, (err, results) => {
            if (err) {
                callback(err);
            } else {
                callback(null, results);
            }
        })
    },
    updateOne: (req, res) => {

    }
}

module.exports = helpers