<!-- # 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page -->
```

# JavaScript: Password Generator
 


### The goal of this project is to make a randomly generated password that a range of selected user criteria and allows them to smoothly and easily get a fresh and secure password. 

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
[Responsive Portfolio](https://rksouth.github.io/responsive_portfolio/)

## Features 


__1. A series of prompts for password criteria__
 
_Why?_

To allow users to determine how secure they want their passwords. For instance, some security prompts require special charcters and some don't allow them. We wanted to create a password generator that any employee could use to secure infomration regardless of the specific requirements of their application. One generator to rule them all. 

_What?/How?_

    In order to have a customizable password, selections need to be made before the password is generated. Therefore, when the button "Generate Password" is clicked a prompt comes up allows the user to input their specific criteria. If they don't enter any valid criteria then they alerted and sent back to the previous prompt to enter in valid criteria. If they do not select some combination of upper case, lower case, numbers and special characters they will be prompted again. 

	![How?](Assets/codeprogressphoto4.png)

    I created a series of while loops and if/else (conditional) statements that look for a boolean (true or false) of happyYet if we aren't happy Yet then we create more prompts/alerts. Each time a new loop on a new condition runs, happy Yet is reset and we have to use the conditional statement to turn it back to true. This is nested in yet another loop that checks if there are any yes statements. 


The original code for the navbar came from the Bootstrap framework. However, there were a few issues with it:
* It did not fix to top of the screen
* The list items were on the wrong side
* Depending on the navbar, it did not collapse (originally for me).


As you can see, I added a fixed-top section on line 29 inside if the nav class, allowing the navbar to be permanantly affixed to the top. 

On line 35, when the unordered list (ul) is created the margin is set for the line to go to left. On the middle screen-width setting, it moves the list to the margin-left using the md-auto. I am not sure why the auto is there but I do know, without it, that it will not work. 

The original [code](https://getbootstrap.com/docs/4.5/components/navbar/) has the nav buttons always located on the right so it is absolutely neccesary to go in and change it if you want them to be on right. 

I had one major hiccup with my nav bar, it didn't reduce when I reduced the screen size. Therefore, it was not responsive ***gasp***. It turns out though, that my only issue was being comment-happy. I commented out the entire toggle section and it worked just fine. 

__2. Validation for correct Input__

_Why?_

Not everyone wants to use the same size screen, sometimes we use phone sometimes we use giant monitors. The layout of my portfolio needs to look good where ever it is being viewed.

_What?/How?_
	![Responsive Image 1](Assets/Images/responsiveimg_03.png)

Above in an image of the about me or the index.html page. What is most important to note on this page is the way margins are. The fact that about me card is being filled with text. Further examples of what the website being responsive looks like can be found below. You may note at the images in the "responsive images" section that instead of having text it is the toggle box. Further comparison to this image (when considering the margin) may be helpful.
    ![Responsive Image 2](Assets/Images/responsiveimg_01.png)

Below is an image of the code after it had been worked over several times. If you look you will probably be able to spot the errors.
   ![Responsive Image 3](Assets/Images/responsivecode_01.png)

As discussed with Kerwin, there is no way to use a card straight out of the box and have it be responsive. But, if you make a container over your card you make it dance like a crazy person! However, the most obvious issue is not the container's lack of column sizing but the over abundance of p tags warning of the impending doom of  card text about to come. 

Looking at my final code (likely not my final code). We can see that I have an overt fondness for paragraphs but that I included a long list of col sizing specifications.
   ![Final Code](Assets/Images/responsivecode_03.png)

I also included a style tag with a max width of 97%- this allows there to be a margin on the right hand side of the page when the text is reduced. I included a small amount of padding, because every beautiful visage deserves a little bit of padding to look at. 

__3. A Generated password that meets all criteria__

_Why?_

If the page resizes and components of the page resize and the image doesn't, we end up with a page that is only image and nothing else. If you are working on a smaller screen this is just no beuno. It make the screen and by extension the site completely unusable and when it comes to webpage design usability needs to be the number one concern.



_What?/How?_

![Responsive Image 4](Assets/Images/responsiveimg_02.png)

Above is an image of the portfolio section with a very interesting bird on it. This is the collaposed version of the website. Note how the navbar is a small drop down square instead of 3 different items and how the "bird" takes up the whole screen. The card does show some uneven margins but it does resize. Also note, how the image that was once left to to it (you can see the original below and there is nice spacing there. 

![Responsive Image 5](Assets/Images/responsiveimg_04.png)

   I found the answer to be simpler than I would have originally thought. Creating first 3 rows, then 2 collumns per row, adding a padding of 3, making sure the image was fluid and that collapsed at just the right time. 
	
   
    
__3. Other/Potentional Complaints__

* All the colors in the CSS are green

_Why?_

   I originally meant to resize it using CSS to make it more navigatible. However, I decided I like the simplicty of a little bit of mountain and a lot of sky. I also anticipate that my portfolio will grow and change and as it does my background image will become more visible-as the page gets longer. I love adding those little bits of surprise to my code and designs, it's like a fruity after taste that lingers in your mouth after a really good desert. 

* I used prompts instead of confirm statements

_Why?_

   I have a lot reasons I can give for this but mainly it's because I am too stubborn for my own good. Though, the challange was fun to try to get a card to work instead of using sanity, I would probably not do it again. I had a vision, and I was sure I could make it work. I hope, reader, that you think it worked as well as I did. 
   
   If I were going to do this again, I would use CSS or a style tag to make a background inside of a container instead of using a card. 

* Sticky footer is see-through

_Why?_

   I want my portfolio to have the feeling of airy breezy-ness. I want it to say, "this girl is classy, easy to work with and doesn't overdo it." I am from the school of design that says design should be felt, not seen. It shouldn't get in your way of the experience but enhance it. I want a sticky footer but I want one that is there without too much commotion so I did part with the asthetic a bit to do that and later I will probably go back in and make my navbar more "breezy" as well.

   * Your Portfolio is just pictures of projects with no github links

_Why?_

   I have the preliminary git hub repos made for those projects and I would like to add them in. But I wasn't sure exactly what my readme should look and that is a project for my "extra projects" time. I also want to just get a better idea of what it would like when I do have projects in there. 
  

## Usage
### How do you use this project? You may use it nearly anyway you see fit however, if you feel lost, scared and alone; I have some suggestions for you. 
 1. You may admire it, sit back and take in the beauty. Peruse through the code. Enjoy it as if it were an old coletrain record, Bach or Monet. So, I might not be quite there yet but not every note written by Bach was divined, Coletain didn't start out great and in the beginning Monet's art looked like everyone elses at the time.
 2. You can judge it. You can critisize and even give useful feedback. How can I improve? Do you know how to write code as beautiful as Monet paints- I want to know your secrets.
 3. You can x out. You came here by accident and only realized right now you weren't suppose to be here. So, it's cool. Have a good night. 
## Author 
Rachael Kelm-Southworth

* [linkedin] (https://www.linkedin.com/in/rachael-kelm-southworth-87a3831b3) 

* [github] (https://github.com/RKSouth/)

 ## Credits

I would like to thank Kerwin, Manuel, Roger, Jerome and all my classmates for helping me understand this subject matter and anyone that contributed to make the base code.

## License
[MIT](https://choosealicense.com/licenses/mit/)




