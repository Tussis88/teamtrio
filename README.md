# Webpack Template
A starter template for building modern JavaScript applications using [Webpack](https://webpack.js.org/), with integrated [Jest](https://jestjs.io/) for testing and [ESLint](https://eslint.org/) for code quality assurance.

## Getting Started
1. Ensure you have the following installed:
    - [Node.js](https://nodejs.org/en)
    - [npm](https://www.npmjs.com/)
2. Create a new repository using the **Use this template** botton on the top right corner of this page and clone it locally.
3. install the dependencies with `npm install`

## Usage
- **Start the Development server:**
    Use the command `npm run dev` to start [webpack dev server](https://webpack.js.org/configuration/dev-server/).
- **Run Tests:**
    Write your tests in the `test/` folder and run them with the command `npm test`.
- **Build for Production:**
    Generate a production-ready version of your application in the `dist/` folder by running the command `npm run build`.

## Deploy on GitHub Pages
1. Create a new branch with `git branch gh-pages`(First time only).
2. Run `git checkout gh-pages` to switch branch
3. Run `git merge main --no-edit` to merge the latest changes from the `main` branch.
4. Build the distribution files in the `dist/` folder with the command `npm build`.
5. Remove `dist/` from your `.gitignore` file (if listed), than stage and commit the changes with `git add dist/` and `commit -m "Prepare dist for deployment"`.
6. Run the command `npm run deploy` to deploy on github pages.
7. Now you can go back to main with `git checkout main`.
