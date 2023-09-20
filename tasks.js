const tasks = ["ahmad","jana","ali"];
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  const texty = text.split(" ")[0].trim();
  const addText = text.slice(4,text.length);
  const removeText = text.slice(7,text.length);
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(texty === 'hello'){
    hello(text.replace("\n",""));
  }
  else if(text === 'remove\n'){
    remove();
  }
  else if(texty === 'remove'){
    removeNumber(parseInt(removeText-1));
    
  }

  else if(texty === 'add'){
    if(addText.trim() === "")
    console.log("empty is not acepted")
  else
    add(addText);
  }
  else if (text === 'help\n'){
    help();
  }
  else if (text === 'list\n'){
    list();
  }

  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  console.log(text + "!")
}
//this function will display for the user the commands that the program offers.
function help(){
  console.log("These are the available commands:")
  console.log("quit or exit");
  console.log("hello");
  console.log("help");
  console.log("add");
  console.log("remove");
  console.log("remove1");
  console.log("remove2");
}
function list(){
  console.log("Tasks")
  for(let i = 0 ; i < tasks.length ; i++){
    console.log(`${i+1}. ${tasks[i]}`);
  }
}
function add(addText){
  tasks.push(addText.replace("\n",""));
}
//this function removes the last element of the array
function remove(){
  tasks.pop();
}
//this function removes the specified element of the array
function removeNumber(num){
  if(num == 0)
  tasks.shift();
else
  tasks.splice((num),(num));
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Ahmad Saad")
