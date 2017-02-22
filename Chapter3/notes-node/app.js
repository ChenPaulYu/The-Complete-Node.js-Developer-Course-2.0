console.log('Starting app');
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');


const argv = yargs.argv;
var command = process.argv[2];

console.log('command:',command);
console.log('yargs:',argv);

	if(command === 'add'){
		var note = notes.addNote(argv.title,argv.body);
		if(note){
			console.log('Note Created');
			console.log('-----')
			console.log(`Title: ${note.title}`);
    		console.log(`Body: ${note.body}`);
		}else{
			console.log('Note title Taken');
		}
	}else if (command === 'list'){
		notes.getAll();
	}else if (command === 'read'){
		var note = notes.getNote(argv.title);
  		if (note) {
    		console.log('Note found');
    		console.log('-----')
			console.log(`Title: ${note.title}`);
    		console.log(`Body: ${note.body}`);
  		} else {
    		console.log('Note not found');
  		}
	}else if (command === 'remove'){
		var noteRemoved = notes.removeNote(argv.title);
  		var message = noteRemoved ? 'Note was removed' : 'Note not found';
  		console.log(message);
	}else{
		console.log('Command not recognized');
	}

