<h1 align="center"><img src="assets/images/readmelogo.png"/></h1>

# Farm Flip 

## Portfolio Project 2 - Javascript Essentials

I have created a farm animal themed card flip memory game geared towards a younger target audience, but suitable for
all ages. I hope to provide a fun, colourful and interactive gaming experience!

<h1 align="center"><img src="assets/images/mockup.png"/></h1>

# Planning

## Target Audience
<ul>
<li>Those looking for a fun, interactive online card game</li>
<li>Younger children who wish to flip the cards and find a match</li>
<li>For the older audience who wish to challenge themselves and try beat their previous moves score</li>
</ul>

## Web Owner Goals
<ul>
<li>Appeal to the interest of the target audience</li>
<li>Create excitment through the website via bright colours and fun visuals</li>
<li>Create a light-hearted challenge</li>
<li>Create a clear website and game, where the user fully understands the core concept</li>
</ul>



# Features

## Design Elements

The colour scheme was inspired from a previous personal design project I had worked on in the past, updated with additional colours and elements to suit it to the game concept. When brainstorming ideas for the game site, I knew instantly that I wanted to incorporate one of my graphic cartoons into the game to bring it to life in a real-life web game setting.<br>
The core concept of farm animals was decided upon after choosing my logo from my Graphic Design portfolio, and the name 'Farm Flip' came to me in a short brainstorming session with pen and paper writing out words that rhyme with farm animals and card games.


<h1 align="center"><img src="/assets/images/colorscheme.png"/></h1>


## Wireframes

In the planning stages, I used Adobe illustrator to play around with the elements before starting the project. I had an initial idea in my head to layout the elements side-by-side, as pictured below. Once I got to the styling elements of the design, I realised this would not be the ideal layout with user-experience in mind as it's not fluid and there's no visual hierarchy.
<h1 align="center"><img src="/assets/images/wireframe1.png"/></h1>

I went back to my artboard and decided that stacking them centred in block formation was more appealing to the eye, and this was the visual idea I came up with that I went into the project with.

<h1 align="center"><img src="/assets/images/wireframe2.png"/></h1>

## Research

I searched for similar card style games on both my app store and online for card-based memory style games for inspiration. I also watched several YouTube tutorials to see what ideas I liked from various elements applied to their game projects, and how I might incorporate them into mine. Geeks For Geeks is a great platform for walk throughs on building a memory game, so i read through some of their resources in my research phase.

# Features

## Logo 

The logo was inpired by a previous design I did for a fictitius chicken restaurant, and i changed the lettering for this gaming project. The logo in turn inspired the entire theme of the game.
<h1 align="center"><img src="/assets/images/readmelogo.png"/></h1>



## Game Grid & Cards
The gaming grid consists of 4x3, 12 cards in total. This number of cards was chosen to keep the game at an adequate pace, especially for younger players, and to also work well on smaller screen sizes. The colour orange was chosen to compliment the chicken logo colours and background,while the white outline was chosen to compliment the white background of the main logo character.
<h1 align="center"><img src="/assets/images/gameboard.png"/></h1>


## Game Characters
I chose the gaming characters based off the farm theme concept, and found a suitable character set to fit the game style. I wanted the imagery to have a similarity to the types of farming animals you would find in a children's book.
<h1 align="center"><img src="/assets/images/gamecharacters.png"/></h1>

## Navigation

For the navigation buttons I chose the Oswald font as I wanted a sans-serif similar to the font I manipulated on the logo. I chose the same orange as the card back to keep the visual design elements in line with one another. The borders are rounded off and the curser will change to a pointer once hovered over.
<h1 align="center"><img src="/assets/images/readmerules.png"/></h1>

## Moves
I wanted to keep the moves tracker quite simple, similar to that of other online games, or an old school arcade type of game. The font family and style is the same used as the navigation buttons and the move counter sits directly below the game grid.
<h1 align="center"><img src="/assets/images/moves.png"/></h1>

## Rules Modal
Upon clicking the rules button, a display modal appears explaining how to play the game. I put an opacity overlay in the board background when the modal is active to add a bit more styling. The modal itself is bright yellow, the same as the yellow featured in the logo, and the font is the same Oswald font used throughout the project for consistency.
<h1 align="center"><img src="/assets/images/howtoplay.png"/></h1>

## Win Alert

I used <a href="https://www.sweetalert2" target="_blank">Sweetalert2</a> to trigger the end of game message within my endGame function. This site is a brilliant resource which was introduced to me by my mentor, and is widely used across the developer community. I added the relevant links for Sweetalert2 into the head of my HTML for the style sheet, and at the bottom of my HTML for the JavaScript. I then edited the alert message to display "Game Over!" and incorporated the games colours into the alert.<br>
<h1 align="center"><img src="/assets/images/gameover.png"/></h1>
I then decided after testing the new alert to add the move counter result into the pop-up, since you might have missed what your final move was once the alert appears.<br>

When all cards are turned and the game is over, the alert will trigger displaying the message "Game Over! Moves: "". Once the player hits "Ok", all cards will reset, reshuffle and move counter will go back to "0" to prepare for a new game.
<h1 align="center"><img src="/assets/images/gameovermoves.png"/></h1>

# Features Left To Implement

<ul>
<li>Addition of a highest score leaderboard would be a nice addition I would like to add, for the player to see their own highest scores to try and beat previous personal bests.</li>
<li>The implementation of moving imagery, where I can animate the logo and cause the characters to move when a matching pair is found. Similar to how you would see a card game in a casino on screen.</li>
</ul>

# Testing

<ul>
<li>The site has been tested on Chrome, Safari & Firefox</li>
<li>Testing has been implemented on various screen sizes to ensure responsivness across devices. Ipad, Galaxy and laptop testing has been implemented and passed.</li>
</ul>

## Validator Testing

## HTML:
The initial validator testing showed issue with my section for the imagery on the cards. I went back and updated the section to a div, and it now is passing validation.
<h1 align="center"><img src="/assets/images/html.png"/></h1>

## CSS:

The CSS passed validation.
<p>
    <a href="https://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
            alt="Valid CSS!" />
    </a>
</p>

## JavaScript:
JavaScript code was run through <a href="https://www.jshint.com" target="_blank">JS Hint</a>. The warnings are generally just stating that some of the syntax is only available in ES6. One other warning that presented itself was that the Sweetalert2 for the end of game pop up stated as undefined. (See errors/issues encountered).
<h1 align="center"><img src="/assets/images/swal.png"/></h1>




## Lighthouse Report:
Overall, I am happy with how the LightHouse report results came up. I have read through and made note of some of the subtle changes that could help my game to get fuller marks for future deployments.

### Lighthouse - Mobile Devices

The lighthouse reports were varied depending on browser extentions versus incognito mode. The results I got, as seen below, were from my regular Chrome browser. When tested on my mentor's browser and a family member's browser, different results were displaying. The conclusion made is that some web browser extentions could hinder the results, and incognito view would be best to see the true results if there are any extentions causing issue.<br>
<br>
The lighthouse reports also signal a low-res warning for the chicken logo on the card back. I don't believe it is an issue to worry about, as there is no text present. If there was some text or logo font present, I can see how this would be an issue needing to be rectified.

<h1 align="center"><img src="/assets/images/mobile.png"/></h1>

### Lighthouse Desktop

<h1 align="center"><img src="/assets/images/desktop.png"/></h1>

# Bugs/Errors or Issues Encountered
<ul>
<li>I encountered issue with positioning within CSS when I was first placed everything together with the layout. On smaller screens, the elements were not lining up correctly. It was an easy fix in the end after using Google Dev Tools to play around with the layout, and it was a position and display issue which fixed the problem.</li>
<li>I had some initial issues with syncing up the move counter within the function, after watching several more online tutorials, I managed to figure it out and get it to work.</li>
<li>I ran into some confusion with the endGame function when it was being called. Initially, it would pop up at the wrong time, but upon contacting tutoring services, they helped put me on the right path. It was a minor issue that I managed to resolve.</li>
<li>There was a bug found when I had family members test out the game. Since I would only trial one game round up until this point, I had missed it completely. What was happening was on completion of the game and going into a second game, it was triggering the alert of the game end after 2 card turns. I realised I hadn't adapted the next round part to work as it should, and I made amendments to the endGame function through some trial and error until I got the final result I was looking for. </li>
<li>Upon running my JavaScript code into JSHint, it is showing a warning for an undefind variable of Swal (the Sweetalert2). There is no mention on the host site that there is a need to define it, and I looked at other resources that do not show it being defined as a variable. I tested it out anyway to see if it made any difference to define it, and it caused issues within the game, so that is why I have left this warning as it is.
</ul>


# Deployment

The site was deployed to GitHub pages - <a href ="https://lauramayfox.github.io/farm-flip/">Live Link</a>

## Steps To Deployment
<ul>
<li>Log onto GitHub and locate the repository.</li>
<li>On the options bar, hit the settings.</li>
<li>Go to the pages tab on the left hand side bar.</li>
<li>Choose 'Master' in the source options drop down menu (default will be 'None).</li>
Click save.
<li>Wait a few minutes for the changes to be updated and created.</li>
<li>Once ready, the update will prompt "Your site is live at https://lauramayfox.github.io/farm-flip/ (Last deployed by lauramayfox)" with the option to click on the 'Visit Site' button to the right of this.</li>
</ul>


# Credits 

## Content

- Javascript/CSS tutorials followed/adapted from the learn vanilla javascript series via <a href="https://www.youtube.com/@CodeSketchLab" target="_blank">Code Sketch YouTube</a>
- Javascript tutorial followed/adapted <a href="https://www.youtube.com/watch?v=xWdkt6KSirw" target="_blank">Javascript Academy YouTube</a>
- Javascript/CSS tutorial followed/adapted <a href="https://www.youtube.com/watch?v=MBaw_6cPmAw" target="_blank">Web Dev Simplified YouTube</a>
- Game layout inspiration and general source of information  <a href="https://www.youtube.com/watch?v=M0egyNvsN-Y" target="_blank">Online Tutorials YouTube</a>
- General source: <a href="https://www.w3schools.com" target="_blank">W3Schools</a>
- General source: <a href="https://www.geeksforgeeks.org" target="_blank">Geeks For Geeks</a>
- General source: <a href="https://www.stackoverflow.com" target="_blank">Stack Overflow</a>

## End Of Game Alert

Alert template used and amended from <a href="https://www.sweetalert2.io" target="_blank">Sweetalert2</a>

## Formatting

- Javascript formatting tool: <a href="https://www.prettier.io" target="_blank">Prettier</a>
- HTML & CSS formatting tool: <a href="https://www.freeformatter.com" target="_blank">Free Formatter</a>


## Media:

- Font: <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>
- Card front imagery source: <a href="https://freepiks.com" target="_blank">FreePiks</a>
- Logo llustration: Own content
