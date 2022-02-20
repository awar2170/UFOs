let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// Use js for loops
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
        console.log(userList[i]);
    }
}

listLoop(friends)

// Python Equlivalent 
// for i in user_list: print(i)

// // Explaining the JS Loop Above

// The following actions occur in this one line (line 3):

//     var i = 0 We assign an iterable variable and set its value to zero. In this loop, think of the letter 'i' to mean 'iterate.' When we assign a zero value, we're starting a counter from the beginning. You can also think of it in terms of list comprehension–the first name of the list has an index value of zero, for example.

//     i < userList.length; Here we're basically saying, "If this iterable (i) is still smaller than the total number of iterables in the list (userList), then move on to the next step."

//     So if we're on the second name, but the list is four names long, the for loop will continue to loop through it.

//     The final step, i++, increases the iterable by 1. We're using list comprehension here; the for loop knows to iterate to the next name because the index number has increased by 1.

// Practice Using for Loops in JS
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

// The above code will loop through the list of vegetables, so long as i is less than the length of the vegetables variable, it will continue to loop, adding one to the i each time it loops. 
// The ouput of this function is that it will spit out to the console "I love " and then append the vegetables to the string 

for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
}
