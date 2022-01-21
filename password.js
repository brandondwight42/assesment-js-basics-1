const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Welcome to the password validator.  Please enter a password to validate:  ", function(input){
	password = input.split("");
    //password1 = password.split(1)  
	
	//mathSymbol = password[0];
	//num1 = Number(password[1]);
	//num2 = Number(password[2]);
    //num3 = Number(password[3]);
    //num4 = Number(password[4]);
    //num5 = Number(password[5]);
    //num6 = Number(password[6]);
    //num7 = Number(password[7]);
    //num8 = Number(password[8]);
    //num9 = Number(password[9]);

    
    if(password.length > 9){
        console.log(`success`)
    }
    else{
        console.log(`failure`)
    }

    //console.log(password)
    //checking for special character * in password
    // for(let j = 0; j < password.length; j++) {
    //     let x = "*"
    //     if(password[j] === x){
    //         console.log("failure")
    //     }
    //     else{
    //         console.log("success")
    //     }
    // }


	// This line closes the connection to the command line interface.
	reader.close()

});