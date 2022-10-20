# Game of Set



## Description
The SET game is a puzzle that uses cards which have 4 features on them: Color,Symbols, Shadings and Number of Symbols. It can vary as shown below:<br />


![feature](https://user-images.githubusercontent.com/98134192/154829938-66f622be-5093-41ae-a2c6-388621479c07.PNG)


### Rule<br />
Each set contains three cards where the attributes of the three cards are all the same or all different<br />
One point will be awarded if a set is found<br />

A set consists of three cards that satisfies these four conditions:<br />
(1) They all have the same number or have three different numbers<br />
(2) They all have the same symbol or have three different symbols<br />
(3) They all have the same shading or have three different shadings<br />
(4) They all have the same color or have three different colors<br />

![rule](https://user-images.githubusercontent.com/98134192/154829980-04c88a32-8e1d-45e1-b624-aaf133b7fe21.PNG)<br />

## Getting Started

### How to install

#### OPTION 1
1. Navigate to the main page of c4a1 repository.
2. Above the the list of files, click "Code"
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy link . To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then copy link. To clone a repository using GitHub CLI, click Use GitHub CLI, then copy link.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL you copied earlier.
```
$ git clone https://github.com/cse-3901-sharkey/c4a1.git
```
7. Press Enter to create your local clone.
8. Click c4a1 and open the lab-1 folder.
9. Click the HTML_files Folder and click the home.html to open in a browser.
10. You are all set! Have fun with the game!

#### OPTION 2
1. Navigate to the main page of c4a1 repository.
2. Above the the list of files, click "Code"
3. Under Code, click "Download ZIP"
4. Unzip the downloaded file and click lab1 -1 folder
5. Open the HTML_files Folder and open the home.html file in a browser.
6. You are all set! Have fun with the game!

### Dependencies
* System: Windows 10 or Mac OS
* Browser: Chrome(suggested), Firefox, Microsoft Edge, or iexplore
* Browser Setting: Pop up must be enabled

## How To Play
Welcome to the SET Game. Before you start, please choose game difficulty. We have 3 modes: Normal, Hard, and challenging.The goal for this game is to earn as many points as possible within the time limit.<br />
Normal Mode: 2 mins <br />
Hard Mode: 1 min<br />
Challenging mode: 30s, add 10s each time the user finds a set.<br />

### Step1: The user needs to choose difficulty before starting the game.<br />
![difficulty](https://user-images.githubusercontent.com/98134192/154856011-28f94532-6818-4815-aa32-cfc5147b4f92.png)<br />


### Step2: After choosing difficulty, the user can click the start button to start the game. <br />
![start](https://user-images.githubusercontent.com/98134192/154856097-410f7046-67b0-4b75-9481-ded57703b7f3.png)<br />

### Step3: During the game, the user can use three bottons which are SET, HINT, SHUFFLE.<br />
![During the Game](https://user-images.githubusercontent.com/98134192/154858117-f2f9117d-c8a9-402d-b198-cc3f2a4403c1.PNG)


**SET button**: When the user thinks a set is found by selecting three cards, the user can press the SET button. If it is not a set, the system will tell the user "Not a set, please enter another". If the user sucessfully finds a set, then user can earn one point.<br />

**HINT button**: This button can provide a hint to help the user find the set. It will highlight two cards with yellow border. The user then has to find the third card that makes up the set. The user has one hint chance for each board of cards. For example, if shuffle is clicked, a new board is shown therefore allowing hint to be used again.<br />
![Hint Button](https://user-images.githubusercontent.com/98134192/154857905-298f42ef-a0a1-4aec-b7fd-6438384654f2.PNG)

**SHUFFLE button**: If the user cannot find a set in the current round, the user can press the SHUFFLE button to get a new board(deck).<br />


### Step4: When the time is up, the user can see the score on the top left. The user can also get the pop up notification asking whether the user wants to try again. POP-UP SHOULD BE ENABLED<br />

![game over](https://user-images.githubusercontent.com/98134192/154857767-7f17e3ec-b4bc-4b3e-9911-5753a5e17d00.PNG)


## Code Layout
The directory layout of the repository is sorted by file type. We divided our files into 4 folders which are CSS_files, HTML_files, JS_files and images. The detailed layout is shown below:\
![layout](https://user-images.githubusercontent.com/98134192/154859957-876d77ee-8450-4244-98b2-0371037be688.PNG)<br />

**1. CSS_files:** \
   &nbsp;&nbsp;&nbsp;&nbsp; **home.css*<br />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contains css codes to describe how Home page is displayed and styled.<br />
   &nbsp;&nbsp;&nbsp;&nbsp; **play.css*<br />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contains css codes to describe how play page is display and styled.<br />
   &nbsp;&nbsp;&nbsp;&nbsp; **tutorial.css*<br />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contains css codes to describe how tutorial page is display and styled.<br />
     
     
**2. HTML_files:**\
  &nbsp;&nbsp;&nbsp;&nbsp;  **home.html*\
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contains codes which describe how home page structured. The homepage contains the game name, welcome images, team information and functional buttons for the set game.
     
   &nbsp;&nbsp;&nbsp;&nbsp; **play.html*\
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contains codes that describe how the play page is structured. The play page is the main page for our project. On this page, the user can play set game under many difficulty modes. After choosing difficulty, it is time to click the start button and play the game. During the game,  the user pushes the SET button when the user finds a set.  Pushing shuffles can allow the user to have different random cards. The hint button can provide the user with two cards that can make a set in this run. On the play page, the user can get a score when the time ends.
     
   &nbsp;&nbsp;&nbsp;&nbsp; **tutorial.html*\
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contains codes which describe how the tutorial page is structured. The tutorial page is divided into three parts which are "game introduction", "rules" and "try it out". This page provides interactive tutorial which will help players get familiar with the controls of the game.

**3. images:**\
  &nbsp;&nbsp;&nbsp;&nbsp;  **cards*\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;folder which contains 81 cards for the set game. <br />
  &nbsp;&nbsp;&nbsp;&nbsp;  **blank.png*\
  &nbsp;&nbsp;&nbsp;&nbsp;  **feature.PNG*\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;set game feature image for the README <br />
  &nbsp;&nbsp;&nbsp;&nbsp;  **layout.PNG*\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project layout file for the README <br />
  &nbsp;&nbsp;&nbsp;&nbsp;  **rule.PNG*\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;set game explanation in tutorial page <br />
  &nbsp;&nbsp;&nbsp;&nbsp;  **surface.PNG*\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;set game image for the homepage <br />
  &nbsp;&nbsp;&nbsp;&nbsp;  **welcome.gif*\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;welcome image for homepage <br />

**4. JS.files:**

  &nbsp;&nbsp;&nbsp;&nbsp;  **checker.js*\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contains functions used to check if three cards are a set or logic of the game, including TranslateNum(), checkFunc(), and checkDeck(). TranslateNum converts the image's id to a four-digit string, of which each digit represents a feature. checkFunc judges whether three-card combination is a set, and return back the boolean variable. checkDect finds out all the combinations of set in the current displaying cards, and stores all set in a 2-D array, which later used in the hint.<br />

  &nbsp;&nbsp;&nbsp;&nbsp;  **decker.js*\
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contains functions related to the play.html, which can be divided into three categories: page display, information prompt, and button control. (1) The page display selection including page initialization, card display and selection, shuffling, timer, score change and difficulty selection; (2) Information prompt part, including game process prompts, set judgment information, and bonus time info in challenge mode , restart prompt; (3) Button control section, including the disabling and enabling of buttons in different states, the disabling and enabling of cards, and the display and accessibilty of difficulty buttons.<br />

  &nbsp;&nbsp;&nbsp;&nbsp;  **tutorial.js*\
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contains functions related to the tutorial.html, mainly controls the display and operation of the "Try it out" section. Functions are used to show 6 sample cards, provide user selection interaction, set judgment and hint operation, and finally guide players to easily get started with the game through information display.<br />
    

## Team Members

Contributors names
  - Allen Chen
  - Yu Huo
  - Wenhan Zhou
  - Dailin Li
  - Yunqing Qiu


