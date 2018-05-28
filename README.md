## Webpack codesplitting with CommonsChunkPlugin example

To run:
1. Clone the repo: `git clone https://github.com/errendir/webpack-test.git`
2. `cd webpack-test`
3. Install dependencies by running `yarn`
4. Start the web server: `npm start`
5. Navigate to `localhost:9000` in Chrome
6. Press CMD+ALT+I to open dev tools
7. Click on "Network tab"
8. Click the first button
9. "0.bundle.js" and "2.bundle.js" should be loaded
10. Click the second button
11. Now only "1.bundle.js" is loaded since "0.bundle.js" containing dependencies common to "1.bundle.js" and "2.bundle.js" is already loaded