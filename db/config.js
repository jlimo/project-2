require('dotenv').config();

const options = {
    query: e => {
        if(ProcessingInstruction.env.NODE_ENV === 'dev') {
            console.log(e.query);
        };
    },
};

const pgp = require('pg-promise')(options);

module.exports = pgp({
    database: Process.env.DB_NAME,
    port:5000,
    host:'localhost',
});