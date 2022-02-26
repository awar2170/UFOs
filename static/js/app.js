// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Above the code:
// Declare a variable, tbody
// Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML

// Start building the new function 
// function buildTable(data) {

// }

// Clear the existing data so that we can create a fresh table; that way we dont have to reinsert datat that already exists and get messy with having to juggle duplicates of something. 

//  update our function 

// function buildTable(data) {
//     tbody.html("");
// }

// Above the tbody.html references te table, pointing JS to the table in the HTML page that we are going to build
//  the ("") is an empty string 
//  OVERALL: The line tells JS to use an empty string when creating teh table

//  Add forEach to Your Table 
// data.forEach((dataRow) => {
//     let row = tbody.append("tr");
//     Object.values(dataRow).forEach((val) => {
//         let cell = row.append("td");
//         cell.text(val);
//         }
//     );
// });

// The function above: 
// With this function, we have done the following:

//     Looped through each object in the array
//     Appended a row to the HTML table
//     Added each value from the object into a cell
//  This code will turn a JS Object (Python Dictionary) into a table 

// Full Function 
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}

// Handling clicks 
// function handleClick() {
//     let date = d3.select("#datetime").property("value");
// }

// // The above code: 
//     // .select will select the first element tat matches teh datetime thing in the (); this just tells D3 where to look 

// let filteredData = tableData;
// // This code above will create a new varibale that will set a default filter 
// // We have set this as the blank tableData because we want the default to be blank 

// EVOLUTION OF THE HANDLING CLICKS FUNCTION // 
// function handleClick() {
//     // Grab the datetime value from the filter
//     let date = d3.select("#datetime").property("value");
//     let filteredData = tableData;

//      // Check to see if a date was entered and filter the
//     // data using that date.
//     if (date) {
//       // Apply `filter` to the table data to only keep the
//       // rows where the `datetime` value matches the filter value
//     filteredData = filteredData.filter(row => row.datetime === date);
//     };

//      // Rebuild the table using the filtered data
//     // @NOTE: If no date was entered, then filteredData will
//     // just be the original tableData.
//     buildTable(filteredData);

//     d3.selectAll("#filter-btn").on("click", handleClick);
//     //By adding this, we're linking our code directly to the filter button. Also, by adding .on("click", handleClick);, we're telling D3 to execute our handleClick() function when the button with an id of filter-btn is clicked.

//     // Build the table when the page loads
//     buildTable(tableData);
// };

function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);