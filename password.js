const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Welcome to the password validator.  Please enter a password to validate", function(input){
	password = input.split(' ');
	
	//mathSymbol = tokens[0];
	//num1 = Number(tokens[1]);
	//num2 = Number(tokens[2]);

    if(password > 9){
        console.log(`success`)
    }
    else{
        console.log(`failure`)
    }

	// This line closes the connection to the command line interface.
	reader.close()

});