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
        let id = data;
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
        let queryString = `INSERT INTO choices (restaurant) VALUES('${restaurant}');`
        db.query(queryString, (err, results) => {
            if (err) {
                callback(err);
            } else {
                callback(null, results);
            }
        })
    },
    deleteOne: (data, callback) => {
        let id = data;
        let queryString = `DELETE FROM choices WHERE id='${id}';`
        db.query(queryString, (err, results) => {
            if (err) {
                callback(err);
            } else {
                callback(null, results);
            }
        })
    },
    deleteAll: (callback) => {
        let queryString = 'DELETE FROM choices;';
        db.query(queryString, (err, results) => {
            if (err) {
                callback(err);
            } else {
                callback(null, results);
            }
        })
    },
    updateOne: (data, newRestaurant, callback) => {
        let id = data;
        let { restaurant } = newRestaurant;
        let queryString = `UPDATE choices SET restaurant='${restaurant}' WHERE id='${id}';`
        db.query(queryString, (err, results) => {
            if (err) {
                callback(err);
            } else {
                callback(null, results);
            }
        })
    }
}

module.exports = helpers