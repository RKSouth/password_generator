#  JavaScript: Password Generator

### The goal of this project is to make a randomly generated password that a range of selected user criteria and allows them to smoothly and easily get a fresh and secure password. 

![Password Generator](Assets/FinishProduct.png)

## Table of Contents
* [Technologies Used](Technologies_Used)
* [Deployed Site](Deployed)
* [Features](Features)
* [Usage](Usage)
* [Author](Author)
* [Credits](Credits)
* [License](License)

## Technologies_Used
* HTML (27.3%)
* CSS (16.4%)
* Javascript (56.3%)

## Deployed Site
[Responsive Portfolio](https://rksouth.github.io/password_generator/)

## Features 


__1. A series of prompts for password criteria__
 
_Why?_

To allow users to determine how secure they want their passwords. For instance, some security prompts require special charcters and some don't allow them. We wanted to create a password generator that any employee could use to secure infomration regardless of the specific requirements of their application. One generator to rule them all. 

_What?/How?_

   ![How?-Prompts](Assets/codeprogressphoto-03.png)

In order to create a prompt that does something we need to set it a variable. I set each criteria to it's own variable with it's own prompt inside of the function writePassword.

Inside of the function generatePassword I created new variables for lower case, upper case, special character and numbers and made them all one string that we add together and randomly pull from. The selector, or the character length needed to be set to an integer and not used as a string. I also created if statements inside this function to detmerine what to do if n is selected. Outside of all of this, on the very bottom, after long and exhaustive definitions is the call for the function generatePassword. This is what says when that function is suppose to work after we have actually written all of the criteria to create it. 

__2. Validation for correct Input__

_Why?_

This feature does feed into the others but I felt it important to address this issue seperately. Before completely this projects, I saw a lot of code examples and projects similar to mine that did not validate and accepted incorrect input. I chose to build my validation in but I do know there are people that consider checking for a correct answer very different than checking for an answer. 



_What?/How?_
	
In order to have a customizable password, selections need to be made before the password is generated. Therefore, when the button "Generate Password" is clicked a prompt comes up allows the user to input their specific criteria. If they don't enter any valid criteria then they alerted and sent back to the previous prompt to enter in valid criteria. If they do not select some combination of upper case, lower case, numbers and special characters they will be prompted again. 

![How? -Validation](Assets/codeprogressphoto-04.png)

I created a series of while loops and if/else (conditional) statements that look for a boolean (true or false) of happyYet if we aren't happy Yet then we create more prompts/alerts. Each time a new loop on a new condition runs, happy Yet is reset and we have to use the conditional statement to turn it back to true. This is nested in yet another loop that checks if there are any yes statements. In this way we never leave anyone behind. Wrapping the major criteria (all except the password length) in another loop ensures that the user has to have some criteria. If they were to select no for everything then there woud be no way to generate a password. 

Although it is not pictures, if you were to check the console log as you were making selections through the prompt you would see it logging the various selections made by the user. If for some reason the program broke or wasn't generating the kind of password intended this would show you where it may have gone and if the user misselected something. In future versions I would like to display the selections on the page to allow the user to confirm these things without having to use the console log. 

__3. A Generated password that meets all criteria__

_Why?_

If you are going to create something it really should meet all the criteria, shouldn't it? I don't want to create a password generator that doesn't do what it promises to do.



_What?/How?_

   As far as I can tell with my code, aside from making sure things are validated using a series of prompts there are two things that are integral to creating a good password within this code. 

* ' var chars = uCase + lCase + sChar + num;

  pass = "";
  for (var x = 0; x < length; x++) {
      var i = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(i);
  }'

    The chars variable concatinates all of the peices of the user specified criteria and then randomizes from those groups until the selection length is reached.

* 'isAY = false ;
  while (isAY == false) {
    if (pwUpper == 'y' || pwLower == 'y' || pwSpecial == 'y' || pwNumber == 'y') 
  {
    isAY = true
  } else {
    alert("Please select at least one time of character with a y, unless you don't really want a password.")
  }
}'

    This code does not allow the users to get away without using a y by using the conditional statement to see if any y's were used else, produce an alert and go back to the beginning until isAY is set to true.


__4. A button__


_Why?_

I suppose we need a button to get started on the prompts. It is pretty annoying when you open a webpage and a prompt immediately comes up without you asking it to. The button allows to loop through as well. We can start and then if we need to we can start all over again. It will rewrite passwords to our hearts content.

_What?How?_

There are 3 seperate parts of a button in java script that connect to an additional part in html. 

in html are code looks like this:

'<button id="generate" class="btn">Generate Password</button>'

It contains an id, a class and a area all ecompassed in it's very own special button tag.

There are two ways to call a button and make it work in Javascript but I will only explain the way I did it.

First, I created a variable called generateBtn. I then set it equal to 'document.querySelector("#generate");' The #generate refers back to the id given in the html. We now have that very vital connection where our button is going to begin to think about doing a thing.

Second step is to make content -I need something for this button to do so when the button is pushed it needs to write to the document (html) in the text area called (id) password. This is is where our password will show up. We use the variable, pass to hold the password. 
'document.getElementById('password').value = pass;'


'generateBtn.addEventListener("click", writePassword);'

Finally, we have to tell the button to listen. What to listen for? A click! What are we doing upon click? writing the password!	
   
    
__5. Other/Potentional Complaints__



* I used prompts instead of confirm statements

_Why?_

Mainly because prompts were specifically requested. However, using a yes or no might be simpler in the long run. Another system that might be beneficial is have a cute little set of questions appear with button selections for each, much like the code quiz



* Sometimes it says it is suppose to have numbers but it doesn't have numbers

_Why?_ 

There is a flaw in the formula I chose to build this project with and I still don't have it worked out yet. Mainly, because I am scared to touch it and break it. Once I conquer my fear, I will get back at it. 

*  This code could be built in react.

_Why?_

Because react has more fun!

## Usage
### This is meant for employees who need to generate secure passwords to be used to access sensitive data.

## Author 
Rachael Kelm-Southworth

* [linkedin] (https://www.linkedin.com/in/rachael-kelm-southworth-87a3831b3) 

* [github] (https://github.com/RKSouth/)

 ## Credits

I would like to thank Kerwin, Manuel, Roger, Jerome and all my classmates for helping me understand this subject matter and anyone that contributed to make the base code.

## License
[MIT](https://choosealicense.com/licenses/mit/)





