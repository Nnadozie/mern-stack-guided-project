This is the backend repo for a GADS guided project supported by [@manimanis](https://github.com/manimanis) and [@nnadozie](https://github.com/Nnadozie), and open to more example solutions and course recommendations from mentors.

By the end of challenge 3 you should have these endpoints and/or similar ones up and running using express and mongodb/postgress:

* [/intl](https://uber-clone-c3.herokuapp.com/intl)
* [/intl/en](https://uber-clone-c3.herokuapp.com/intl/en)
* [/intl/ja](https://uber-clone-c3.herokuapp.com/intl/ja)
* [/jp/ja](https://uber-clone-c3.herokuapp.com/jp/ja)
* [/ng/en](https://uber-clone-c3.herokuapp.com/ng/en)
<br></br>

![Uber Clone](https://media.giphy.com/media/iDgizRDKB7Ghgdlbb1/giphy.gif)


### Brief: Build an uber.com homepage with the select preferred language feature.
* Using the Google translate API is not allowed.


* Assume a translator was employed to translate the text into different languages and provided you the output in txt format.


* You have to be able to save and update this text to a dB (either mongodb or postgres) using post or put requests.


* The text must be retrieved using get requests, in JSON format and used to populate the homepage.


* There can be no hard-coded text on the homepage.





Here's what to expect:



* We'll be using an example, challenge structure.

* Note: the examples are in no way ideal solutions, but they are intentionally barebone for easy comprehension.

* That is. It's structured as a series of small-sized challenges, and you'll be given examples along with the challenges.


* I hope this will prompt learners to ask questions and figure out a lot of things on your own.


* We're starting with backend challenges, before moving to the front end.


There'll be personally reviewed recommended courses that help guide you along. You can expect that we'd have done these courses to assess them before recommending.

<br><br><br>


### CHALLENGE 1 (Rating: Easy)



Set up an express node app.



Expectations


* Can access the app in development mode from localhost:8080/
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

*NOTE: PRs with new examples are more than welcome.


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

*NOTE: PRs with new examples are more than welcome.

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

### Challenge 3 Example Solutions

* Try not to peep till you've attempted the challenge.
* Two examples provided for this challenge. View or download on the [challenge-3 branch](https://github.com/Nnadozie/express-nodemon-starter/tree/challenge-3), and [challenge-3.1 branch](https://github.com/Nnadozie/express-nodemon-starter/tree/challenge-3.1) (where [@manimanis](https://github.com/manimanis) builds on challenge-3 to provide imports from the language text file).
* Deployed here to tinker with: https://uber-clone-c3.herokuapp.com/intl Check out the endpoints: /jp/ja, and /ng/en. They should be the same as challenge 2.
* There's a new endpoint /intl, that takes over from /.
* Can you run it locally and send a put request to /intl with your textfile content as the payload using postman?

*NOTE: PRs with new examples are more than welcome.

#### Using the APIs to populate the DB

Before.

Checking get /intl, /jp/ja, and /ng/en to see the dB is empty.

![Uber Clone](https://media.giphy.com/media/U3t1Sd00wXx3Ad21NN/giphy.gif)

During

Using put requests to /intl, /jp and /ng to populate the dB.

![Uber Clone](https://media.giphy.com/media/JqK0DzZ9OVS8hoIZqJ/giphy.gif)
![Uber Clone](https://media.giphy.com/media/dwLx5k7SdrguKOrMot/giphy.gif)

After

Checking that the resources were correctly created.

![Uber Clone](https://media.giphy.com/media/mGWPzh2RjcSgJ6V2y3/giphy.gif)

<br><br><br>


### [Head over here for challenges 4 - 6](https://github.com/Nnadozie/mern-stack-client-guide)
