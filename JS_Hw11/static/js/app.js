// Get references to the tbody element, input field and button
var tbody = document.querySelector("tbody");

// Set filteredUFO to dataSet initially
var _UFO = data; 



// renderTable renders the _UFO to the tbody
function Table(){
//initiate the whitespace in the empty 
  tbody.innerHTML = "";
  for (var i = 0; i < _UFO.length; i++) {
    // Get get the current UFO object and its fields
    var ufo = _UFO[i];
    var observations = Object.keys(ufo);
    // Create a new row in the tbody, 
    // Set the index to be i + startingIndex
    var row = tbody.insertRow(i);



    for (var j = 0; j < observations.length; j++) {
      // For every observations in the ufo object, 
      //create a new cell at set its inner text to be the current value at the current     
      //ufo'sobservation
      var observation = observations[j];
      //insert the data into each cell of the rows
      var cells = row.insertCell(j);
      cells.innerText = ufo[observation];
    }
  }
}



// Render the table for the first time on page load
Table();