# CircleCI-Demo

Welcome to a very basic CircleCI demo. Some important notes before you begin: Make sure you have an account on <a href='https://circleci.com/' target='_blank'>https://circleci.com/</a> and link your GitHub to it. Connecting CircleCI to your project will allow you to maintain a clean main branch by automatically testing your code before merging it to the production branch.

1. Clone into this repo with `git clone https://github.com/TylerMetzger/CircleCI-Demo.git` or just fork it.
2. Change into the directory with package.json and run `npm install` to install the Jest dev dependency. Jest is the testing library we're going to be using for Node.
3. Run `npm run test` in your terminal. At this point, every test should pass.
4. Look at the functions in myFunction.js and myFunction.test.js. Play around with them. See how changing the assertions or messing up the functions causes some of the code to fail.
5. Make one of the tests fail and push it to your branch. Try to create a pull request into main. If CircleCI is set up correctly, it will show that the unit tests fail and will not allow you to make a pull request.
6. Fix the tests, push the code, and make a new pull request. Notice how the pull request is now allowed to be reviewed.
