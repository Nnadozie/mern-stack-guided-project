This is a GADS guided project supported by [@manimanis](https://github.com/manimanis) and [@nnadozie](https://github.com/Nnadozie).
It was meant to pass time during the lull between phase I and phase II of the GADS2020 program and is best suited for beginners to express.

![Uber Clone](https://media.giphy.com/media/iDgizRDKB7Ghgdlbb1/giphy.gif)


### Brief: Build an uber.com homepage with the select preferred language feature.
* Using the Google translate API is not allowed.


* Assume a translator was employed to translate the text into different languages and provided you the output in txt format.


* You have to be able to save and update this text to a dB (either mongodb or postgres) using post or put requests.


* The text must be retrieved using get requests, in JSON format and used to populate the homepage.


* There can be no hard-coded text on the homepage.





Here's what to expect:



* We'll be using an example, challenge structure.


* That is. It's structured as a series of small-sized challenges, and you'll be given examples along with the challenges.


* I hope this will prompt us to ask questions and figure a lot of things out on our own.


* We're starting with backend challenges, before moving to the front end.


There'll be personally reviewed recommended courses that help guide you along. You can expect that we'd have done these courses to assess them before recommending.

<br><br><br>



### CHALLENGE 1 (Rating: Easy)



Set up an express node app.



Expectations


* Can access the app from localhost:8080/
* App can automatically refresh when code changes are made, using nodemon.

* Please share progress of your work on our slack team channel





Recommended course: Sections 1 to 4 of "Building Web Applications with Node.js and Express 4.0 (UPDATE)" https://app.pluralsight.com/library/courses/c76a348d-4fa2-4925-ae8c-d66edba14b75


Note: when following along with courses install the versions of software used in those courses to avoid getting frustrated by incompatibility issues. You may get vulnerability warnings which you can fix using npm audit fix if you want to.

<br><br><br>


### CHALLENGE 1 Example
* Try not to peep till you've attempted the challenge.
* View or download on the [challenge-1 branch](https://github.com/Nnadozie/express-nodemon-starter/tree/challenge-1).
* Time spent: 5 - 10 mins
* Why so simple? This is a no-frills introductory guided project. Don't get bogged down by tooling and excessive set-ups. Or better yet, just think of it like a hackathon or PoC, where you have really little time to accomplish your brief.
* Why did we do this challenge?
* 1: we're using express to build our app. Express is one part of the popular MERN (mongodb, express, react, node) stack.
* 2: we really do not want to have to restart our app after every code-change we make, hence nodemon.



<br><br><br>


### CHALLENGE 2 (Rating: Medium)

I hope we all began our guided project by setting up our express-nodemon app.
Now we'll be challenged to set up our endpoints. Here we go!

* Create an endpoint for /. I mean, localhost:8080/  hint: a get endpoint.
* Let it return anything, some text, an image, anything. The point is, get an endpoint working.
* Then think about how many languages you want to support( I recommend just two, maybe English and Japanese)
* Create an endpoint localhost:8080/jp/ja and another localhost:8080/ng/en, that return the Japanese and English equivalent respectively, of the text on Uber.com's hompage in JSON format.
* NO database needed just yet. Rating: medium, because you'll need to figure out how to format the json.

NOTES

For those of you wondering how to get the text, please simply copy them from the existing website. You can toggle the languages by first selecting a city where the language is spoken, e.g Tokyo for Japan, and then selecting preferred language.
At the footer of the website

![image 1](https://user-images.githubusercontent.com/15310842/89408413-3f55dc80-d718-11ea-9480-cceb645a44a4.png)
![image2](https://user-images.githubusercontent.com/15310842/89408426-44b32700-d718-11ea-85fe-9fcc870bf1cf.png)


We'll be rounding up with our backend endpoints over the weekend with Challenge 3. Happy coding!

<br><br><br>

### Challenge 2 Example

* Try not to peep till you've attempted the challenge.
* View or download on the [challenge-2 branch](https://github.com/Nnadozie/express-nodemon-starter/tree/challenge-2).
* Deployed here to tinker with: https://uber-clone-c2.herokuapp.com/ Check out the endpoints: /, jp/ja, and ng/en. Notice anything?
* I recommend installing this [json viewer extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) to easily traverse the json. 


<br><br><br>

### Challenge 3 (Rating: Hard)
* Estimate: 5 hours min for a beginner.
* Set up your preferred database, either sql (postgres) or nosql (mongodb). Mongodb recommended.
* Migrate the language text files to your db using a schema of your choice. You should have a put or post endpoint to store the language text assets in your db.
* Update your code to fetch the language text files from your db and make sure the endpoints work just as before.

Why do this challenge?
* Get familiar with databases. Every app is database -> backend code -> front-end code.

Recommended course
* Sections 5 to 7 of "Building Web Applications with Node.js and Express 4.0 (UPDATE)" https://app.pluralsight.com/library/courses/c76a348d-4fa2-4925-ae8c-d66edba14b75

Note: when following along with courses, install the versions of software used in those courses to avoid getting frustrated by incompatibility issues.

After challenge 3 we'll be moving on to front-end work!

<br><br><br>

### Challenge 3 Example Solution

* Try not to peep till you've attempted the challenge.
* View or download on the [challenge-3 branch](https://github.com/Nnadozie/express-nodemon-starter/tree/challenge-3).
* Deployed here to tinker with: https://uber-clone-c3.herokuapp.com/ Check out the endpoints: jp/ja, and ng/en. They should be the same as challenge 2.
* There's a new endpoint /intl, that takes over from / as it was implemented in the challenge 2 example.
* Can you run it locally and send a put request to /intl with your textfile content as the payload using postman?

#### Using the APIs to populate the DB

Before

![Uber Clone](https://media.giphy.com/media/U3t1Sd00wXx3Ad21NN/giphy.gif)

During

![Uber Clone](https://media.giphy.com/media/JqK0DzZ9OVS8hoIZqJ/giphy.gif)
![Uber Clone](https://media.giphy.com/media/dwLx5k7SdrguKOrMot/giphy.gif)

After

![Uber Clone](https://media.giphy.com/media/mGWPzh2RjcSgJ6V2y3/giphy.gif)

<br><br><br>


### Challenge 4 (Rating: Easy)

It's front-end time! Here's where things get exciting ^_^, and also a good time to start brushing up on your CSS!

* Create a view in your express app using a template engine of your choice. I recommend [EJS](https://ejs.co/).
* Let it display any valid html of your choice on localhost:8080/

Recommended course: Sections 1 to 4 of "Building Web Applications with Node.js and Express 4.0 (UPDATE)" https://app.pluralsight.com/library/courses/c76a348d-4fa2-4925-ae8c-d66edba14b75

<br><br><br>

### Challenge 5 (Rating: Medium)
Loading...

<br><br><br>

### Challenge 6 (Rating: Hard)
Loading...



