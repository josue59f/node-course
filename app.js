
const notes = require("./notes.js");
const yargs = require('yargs')
const chalk = require('chalk')
//const command = process.argv[2]

// customize yargs version
yargs.version('1.1.0')
//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body:{
      describe: "the body of the note",
      demandOption: true,
      type: "string",
    }
  },
  handler: function (argv) {
    console.log(chalk.bold.green('Title: ', argv.title),chalk.bold.red('body:',argv.body));
  },
});
//-----------------------------------------------------------------------------------------
// create remove command
yargs.command({

    command:'remove',
    describe:'remove a note',
    builder: {
        title:{
            describe: ' note title',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function(argv){
        console.log(chalk.bold.red('removing a note', argv))
    }
})

yargs.command({
  command: "read",
  describe: "read note",
  handler: function () {
    console.log(chalk.bold.yellow("reading a new note!"));
  },
});

yargs.command({
  command: "list",
  describe: "list notes",
  handler: function () {
    console.log(chalk.bold.blue("listing note!"));
  },
});

// add, remove, read, list

yargs.parse()







// if(command === 'add'){
//     console.log(chalk.bold.green("adding note!"))
// }  else if (command === 'remove'){
//     console.log(chalk.bold.red("removing note!"));
// }



// console.log(chalk.green.bold('Success!'))



