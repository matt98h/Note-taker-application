var connection = require("../config/connection.js");

class Note {
    constructor(connection) {
        this.connection = connection;
    }
    selectNotes() {
        const queryString = 'SELECT * FROM  notes';
        return this.connection.query(queryString)
    }
    create(columnName,values) {
        const queryString = 'INSERT INTO notes (note_title,note) VALUES (?, ?)';


        return this.connection.query(queryString,[columnName,values])
    }
    delete(table, cols, value) {
        const queryString = 'DELETE FROM ?? WHERE ??=?';

        return this.connection.query(queryString, [table, cols, value])
    }
}

module.exports = new Note(connection);