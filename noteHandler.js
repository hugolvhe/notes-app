import fs from "fs";
import chalk from "chalk";

const successMessageStyle = chalk.green.bold;
const notFoundMessageStyle = chalk.red.bold;

/**
 * Displays all the notes
 */
const getNotes = () => {
    const notes = loadNotes();
    console.log(successMessageStyle("Your notes :"));
    debugger
    notes.forEach((note) => console.log(note));
}

/**
 * Displays a note by its title
 * @param {string} title - The title of the note 
 */
const getNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(successMessageStyle(`Your note '${note.title}' :\n${note.body}`));
    }
    else {
        console.log(notFoundMessageStyle(` '${title}' not found`));
    }
}

/**
 * Add a new note to the list
 * @param {*} title - The title of the note 
 * @param {*} body - The body of the note
 */
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(successMessageStyle(` '${title}' added`));
    }
    else {
        console.log(notFoundMessageStyle(` '${title}' already exist`));
    }
}

/**
 * Write a note on local file
 * @param {Array} notes - Array of all the notes   
 */
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

/**
 * Retrieve the note list from the local file
 * @returns {Array} - An array of all the notes 
 */
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const data = dataBuffer.toString();
        return JSON.parse(data);
    }
    catch (e) {
        return [];
    }
}

/**
 * Delete an note 
 * @param {*} title - The title of the note to delete 
 */
const removeNote = (title) => {
    const notes = loadNotes();
    const notesFiltered = notes.filter((note) => note.title !== title);
    if (notes.length > notesFiltered.length) {
        saveNotes(notesFiltered);
        console.log(successMessageStyle(`Note '${title}' removed`));
    }
    else {
        console.log(notFoundMessageStyle(`Note '${title}' not found`));
    }
}

export default {
    getNotes,
    getNote,
    addNote,
    loadNotes,
    removeNote
};