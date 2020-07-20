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
    delete(value) {
        const queryString = 'DELETE FROM notes WHERE notes.id=?';

        return this.connection.query(queryString, value)
    }
}

module.exports = new Note(connection);