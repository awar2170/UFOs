// from data.js
const tableData = data;
// How do we know this is importing data without typing "Import data from data.js"?
  // If it finds another js file in the same folder with that information it will pull in that data
  // It refers to the "data" variable from the "data.js file"
// get table references

var tbody = d3.select("tbody");
// Relates to the HTML 
  // Uses D3 to fill the table in the HTML file
  // More of a location thing, shows where we want things stored. 
    // JS does the visual work here, while the HTML looks barren

function buildTable(data) {
  // First, clear out any existing data
  tbody.html(""); // This will clear out the "tbody" section of the HTML; so that it returns to the default setting (it's already blank, but)
  // Whenever the buildtable function is triggered, is when it will go back to the base function 
  // Kinda used to back to slate one, when all the filters are cleared. 

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    //dataRow is the curly bracket in the data.js data variable 
    // THis is a for loop in a for loop 
    let row = tbody.append("tr");
    // "tr" == "Table Row"
    // This is every row in the table 
    // It builds the HTML skeleton 
    // Look at line 93 - 103 in the HTML, where we build the column names; this is an example of using "tr" in action

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      // Cell you created in the table 
        //td = a standard data cell; 
        // This puts the values of the JS object into the table (datetime, city, state, etc. )
      cell.text(val);
      // put the value that you created into the cell 
      // the .text function that writes the value as a text file. 
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this); // "this" = filter input 
    // Save whatever you put in the filter 
    // "This" returns the object of the element 
      // Looks at the input for the filter and tells d3 to select the filtered objects, select what is typed in the filters
      // DOesn't directly subset, more of an ID 
    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value"); 
    // .select(this) = looks at any input boxes 
    // .property("value") = looks at any of the typed values in those boxes 
    // ONly extract the element of that changedElement 
    // Only extract what is filtered
    console.log(elementValue);
    console.log(d3.event.target);
    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changedElement.attr("id");
    // Gives the value of the key name from the data for what has been changed. 
    // Tells the code what key we are trying to filter from 
      // If we just changed teh date, then we would only filter by "datetime"
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
if (elementValue) {
  filters[filterId] = elementValue; 
}  // Its looking if there is an element value or not; 
// If something has been entered in that textbox, then that specific column, we are going to change the value of that column
// Taht column is going to equal whatever is in the inputted box
  else {
    delete filters[filterId];
    // If it's not in the current search, then get rid of it 
  };
console.log(elementValue);
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
      // It doesn't have to go in sequential order in order for it to run filterTable() 
      // As long as the functions in the functions have a meaning, we can call it whenever we want because the file is run all at once. 
      // It's not like Python where it runs line by line for the function; you run the whole file and since it's in the file, it works 
  
  }

  // By the end of this function, the variable "filter" has the key:value pair values of whatever we have inputted into the search values on the HTML website.  For example if we only wanted to filter by date, we would have "filter" varaible = "datetime": 1/13/2010 (when we are trying to filter by the date fo 1/13/2010).
  // This filter variable is then applied to the "filterTable()" function, which is defined below, so we don't know what it does yet, btu the code knows ebcause it runs the whole file at once and can understand the function and run it right then 
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    // Object is like when we have to call pd.merge for pandas specific function; 
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    });
    // This code will filter based on the filter ID, ex: look at the datetime value, then check if it is the same value as "1/13/2010"; which is what we have put in.
    // WHy are there square brackets? 
      // THis is the key value pair; so the [key, value]; Just "key, value" = just two random variables; but [key,value] == the pair in the object 
      // THis is part of the entries function, to make the entries function work, we have to refer to the key value pair
      // This works because tehre is only one value paired to each key 
    // WHy are there 3 "==="?
      // Just a JS thing 
      // This makes it a boolean factor; 
      // If the "datetime" of the filtereddata = 1/13/2010; then that's true and we want to filter that into the new filteredData variable 
      // The 2 equal signs change the variable types to the same type; then compare 
      // 3 equal signs looks at it directly and has no type conversion 

    console.log(tableData);
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
    // Goes back to the "buildTable" function and puts the filteredData as the data that is displayed 
  }
  console.log(tableData);
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  // change is an ON function; so whenever the updateFilters variable is changed, then updateFilters will be run 
    // Different ON functions: "click", etc.
  // This is why we don't need a button; it's listening for input and it is going to change with the enter key 
  
  // Build the table when the page loads
  buildTable(tableData);
  // When there is nothing in the filters, then pretty much everything above won;t run; 
  // That wy this will be triggered first because the other functions hadn't run yet 
