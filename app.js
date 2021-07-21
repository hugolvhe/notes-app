// docs to make yargs module working with the ES6's 'import' feature : https://github.com/yargs/yargs/issues/1854
import yargs from "yargs";
const y = yargs();
import noteHandler from "./noteHandler.js";

/**
 * Command to add a new note  
 * command : node app.js add --title=<string> --body=<string>
 */
y.command({
    command: "add",
    describe: "Add a new note",
    // Add arguments to the command
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => noteHandler.addNote(argv.title, argv.body)
});

/**
 * Command to list all the notes  
 * command : node app.js add --title=<string> --body=<string>
 */
y.command({
    command: 'list',
    describe: 'List your notes',
    handler: () => noteHandler.getNotes()
});

/**
 * Command to remove a note  
 * command : node app.js remove --title=<string>
 */
y.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => noteHandler.removeNote(argv.title)
})

/**
 * Command to read a note
 * command : node app.js read --title=<string>
 */
y.command({
    command: "read",
    describe: "Read an note",
    handler: (argv) => noteHandler.getNote(argv.title)
})

y.parse(process.argv.slice(2));



