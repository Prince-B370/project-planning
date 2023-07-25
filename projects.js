
window.onload = function () {
    var table_body = document.getElementById("projects_table_body");
  
    // Retrieve the data from the session storage
    var retrieved_data = JSON.parse(sessionStorage.getItem("input_values")) || [];
  
    // Loop through the retrieved data and create rows for each entry
    retrieved_data.forEach((data) => {
      // Create a new row
      var new_row = document.createElement("tr");
  
      // Populate the row with data from the retrieved data
      var tdsHTML = `
        <td>${data.project_name_value}</td>
        <td>${data.project_manager_value}</td>
        <td>${data.start_date_value}</td>
        <td>${data.end_date_value}</td>
        <td>${data.duration_value}</td>
        <td>${data.budget_value}</td> 
        <!-- Add more columns as needed -->
      `;
  
      new_row.innerHTML = tdsHTML;
      table_body.appendChild(new_row);
    });
  };



  // Get reference to the search bar
const searchBar = document.getElementById("project-search");

// Get reference to the table body
const tableBody = document.getElementById("projects_table_body");

// Add event listener to the search bar
searchBar.addEventListener("input", function () {
  const searchQuery = searchBar.value.toLowerCase();
  const rows = tableBody.getElementsByTagName("tr");

  for (const row of rows) {
    const columns = row.getElementsByTagName("td");
    let matchFound = false;

    for (const column of columns) {
      if (column.textContent.toLowerCase().includes(searchQuery)) {
        matchFound = true;
        break;
      }
    }

    // Show/hide rows based on the search query
    if (matchFound) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
});

  


