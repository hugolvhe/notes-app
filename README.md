# notes-app
Command line notes app in node.js 

Requirements
------------

  * [Node.js][node] 14.17.3
  * [npm][npm] (normally comes with Node.js)

[node]: https://nodejs.org/
[npm]: https://www.npmjs.com/

Installation
------------

```bash
npm install
```

Usage
------------

For adding a new note 
```
node app.js add --title=<string> --body=<string>
```
Get the note list 
```
node app.js list
```
Removing a note 
```
node app.js remove --title=<string>
```
Read a note 
```
node app.js read --title=<string>
```

