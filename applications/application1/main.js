'use strict';

// File contains a small piece of the source to demonstrate main module
// of a sample application to be executed in the sandboxed context by
// another piece of code from `framework.js`

// Print from global context of application module
api.console.log('From application1 global context');

module.exports = () => {
    // Print from the exported functions context

    api.fs.readFile('../../README.md', (err, data) => {
        if (err) {
            console.log(err.message);
            return;
        }
        api.console.log(data.toString());
    });

    api.timers.setTimeout(() => {
        api.console.log('From application1 exported function');
    }, 5000);
};