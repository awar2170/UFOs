// Introduction to Dynamic Tables
// See the app.js file

// // Introduction to if-then JS COde

// // if-statement syntax
// if ( condition ) { code to execute }

// // pseudocode practice
// if (a date is entered) {
//     Filter the default data to show only the date entered
// };

if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
};

// THe above code: 

// Take a look at the syntax for the .filter() method: row => row.datetime === date);. This line is what applies the filter to the table data. It's basically saying, "Show only the rows where the date is equal to the date filter we created above." The triple equal signs test for equality, meaning that the date in the table has to match our filter exactly.

// LOOSE VS STRICT INEQUALITY //
// https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a
    // "==" is loose equality 
    // '===' is strict equality 
    