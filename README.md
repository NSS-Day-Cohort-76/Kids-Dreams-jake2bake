# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic? > The Kids.js module contains the event listener code. The module imports the structured clone children array from the database in database.js and the Kids() function produces the html string which is then imported to the main where it is invoked and dynamically added to the index file. Then, the event listener is defined but not called until the click on the specified target is recognized. If recognized, the if statement is triggered and whatever satisfies the condition will trigger the window alert. 
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > Each iteration of the for loop is checking if each kid has a celebrity match. The match is unique, so each match needs to be available to the string template for interpolation. If the function is called outside the for loop, it would only return a single instance of a kid = celebrity match. The arguments, and therefore what is eventually compared, is an object and an array. Each kid object needs to be accessible too have its properties compared to the properties of the celebrity objects in the celebrities array, so the array needs to be filtered so that each kid object can be compared to find unique matches for each kid. 
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > The Event Listener, when invoked, has access to the state that it present in the html string that is present with the html string is rendered to the DOM. Then, the window alert's string template can specify which state property can be shown based on the event listener's invocation. 
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > The pairings, celebrities, and kids functions are imported from their respective modules. In their respective modules, the dynamic html strings are established. The variable mainContainer gets the value of the DOM element "container" which is the <main> tag in the index.html file. The variable applicationHTML then gets the value of the entire html string that will be applied to the index html file and invokes the html strings returned by the pairings, celebrities, and kids functions. At the bottom, the innerHTML method is applied to the mainContainer variable and is set to the value of the applicationHTML variable so that the value of the applicationHTML variable is placed in the index.html file in order to be rendered in the browser. 
