/*********************************************************************************
 *                              
 *                               THIS CODE HANDLES THE TEAM'S TABLE
 * 
 * ******************************************************************************/
const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');

// 1. Searching for specific data of HTML table
search.addEventListener('input', searchTable);

function searchTable() {
    table_rows.forEach((row, i) => {
        let table_data = row.textContent.toLowerCase(),
            search_data = search.value.toLowerCase();

        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
        row.style.setProperty('--delay', i / 25 + 's');
    })

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
        visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
    });
}

// // 2. Sorting | Ordering data of HTML table

table_headings.forEach((head, i) => {
    let sort_asc = true;
    head.onclick = () => {
        table_headings.forEach(head => head.classList.remove('active'));
        head.classList.add('active');

        document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
        table_rows.forEach(row => {
            row.querySelectorAll('td')[i].classList.add('active');
        })

        head.classList.toggle('asc', sort_asc);
        sort_asc = head.classList.contains('asc') ? false : true;

        sortTable(i, sort_asc);
    }
})


function sortTable(column, sort_asc) {
    [...table_rows].sort((a, b) => {
        let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
            second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();

        return sort_asc ? (first_row < second_row ? 1 : -1) : (first_row < second_row ? -1 : 1);
    })
        .map(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
}

// // 3. Converting HTML table to PDF

const pdf_btn = document.querySelector('#toPDF');
const customers_table = document.querySelector('#customers_table');

const toPDF = function (customers_table) {
    const html_code = `
    <link rel="stylesheet" href="style.css">
    <main class="table" >${customers_table.innerHTML}</main>
    `;

    const new_window = window.open();
    new_window.document.write(html_code);

    setTimeout(() => {
        new_window.print();
        new_window.close();
    }, 400);
}

pdf_btn.onclick = () => {
    toPDF(customers_table);
}

// // 4. Converting HTML table to JSON

const json_btn = document.querySelector('#toJSON');

const toJSON = function (table) {
    let table_data = [],
        t_head = [],

        t_headings = table.querySelectorAll('th'),
        t_rows = table.querySelectorAll('tbody tr');

    for (let t_heading of t_headings) {
        let actual_head = t_heading.textContent.trim().split(' ');

        t_head.push(actual_head.splice(0, actual_head.length - 1).join(' ').toLowerCase());
    }

    t_rows.forEach(row => {
        const row_object = {},
            t_cells = row.querySelectorAll('td');

        t_cells.forEach((t_cell, cell_index) => {
            const img = t_cell.querySelector('img');
            if (img) {
                row_object['customer image'] = decodeURIComponent(img.src);
            }
            row_object[t_head[cell_index]] = t_cell.textContent.trim();
        })
        table_data.push(row_object);
    })

    return JSON.stringify(table_data, null, 4);
}

json_btn.onclick = () => {
    const json = toJSON(customers_table);
    downloadFile(json, 'json')
}

// // 5. Converting HTML table to CSV File

const csv_btn = document.querySelector('#toCSV');

const toCSV = function (table) {
    // Code For SIMPLE TABLE
    // const t_rows = table.querySelectorAll('tr');
    // return [...t_rows].map(row => {
    //     const cells = row.querySelectorAll('th, td');
    //     return [...cells].map(cell => cell.textContent.trim()).join(',');
    // }).join('\n');

    const t_heads = table.querySelectorAll('th'),
        tbody_rows = table.querySelectorAll('tbody tr');

    const headings = [...t_heads].map(head => {
        let actual_head = head.textContent.trim().split(' ');
        return actual_head.splice(0, actual_head.length - 1).join(' ').toLowerCase();
    }).join(',') + ',' + 'image name';

    const table_data = [...tbody_rows].map(row => {
        const cells = row.querySelectorAll('td'),
            img = decodeURIComponent(row.querySelector('img').src),
            data_without_img = [...cells].map(cell => cell.textContent.replace(/,/g, ".").trim()).join(',');

        return data_without_img + ',' + img;
    }).join('\n');

    return headings + '\n' + table_data;
}

csv_btn.onclick = () => {
    const csv = toCSV(customers_table);
    downloadFile(csv, 'csv', 'customer orders');
}

// // 6. Converting HTML table to EXCEL File

const excel_btn = document.querySelector('#toEXCEL');

const toExcel = function (table) {
    // Code For SIMPLE TABLE
    // const t_rows = table.querySelectorAll('tr');
    // return [...t_rows].map(row => {
    //     const cells = row.querySelectorAll('th, td');
    //     return [...cells].map(cell => cell.textContent.trim()).join('\t');
    // }).join('\n');

    const t_heads = table.querySelectorAll('th'),
        tbody_rows = table.querySelectorAll('tbody tr');

    const headings = [...t_heads].map(head => {
        let actual_head = head.textContent.trim().split(' ');
        return actual_head.splice(0, actual_head.length - 1).join(' ').toLowerCase();
    }).join('\t') + '\t' + 'image name';

    const table_data = [...tbody_rows].map(row => {
        const cells = row.querySelectorAll('td'),
            img = decodeURIComponent(row.querySelector('img').src),
            data_without_img = [...cells].map(cell => cell.textContent.trim()).join('\t');

        return data_without_img + '\t' + img;
    }).join('\n');

    return headings + '\n' + table_data;
}

excel_btn.onclick = () => {
    const excel = toExcel(customers_table);
    downloadFile(excel, 'excel');
}

const downloadFile = function (data, fileType, fileName = '') {
    const a = document.createElement('a');
    a.download = fileName;
    const mime_types = {
        'json': 'application/json',
        'csv': 'text/csv',
        'excel': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    }
    a.href = `
        data:${mime_types[fileType]};charset=utf-8,${encodeURIComponent(data)}
    `;
    document.body.appendChild(a);
    a.click();
    a.remove();
}








// Handling new assignee registration
var add_assignee_modal = document.querySelector(".mod-add-assignee");
var add_assignee_button = document.querySelector("#add-assignee-button");
var assignee_close_button = document.querySelector(".assignee-close-icon");

add_assignee_button.addEventListener("click",()=>{
  add_assignee_modal.classList.add("active");
})

assignee_close_button.addEventListener("click",()=>{
    add_assignee_modal.classList.remove("active");
})

//Grabbing the input fields
var assignee_name = document.querySelector("#assignee-name");
var assignee_email = document.querySelector("#assignee-email");
var assignee_contact = document.querySelector("#assignee-contact");
var assignee_password = document.querySelector("#assignee-password");
var assignee_roles = document.querySelector("#assignee-roles");

var confirm_add_assignee = document.querySelector("#confirm-assignee-add-btn");
var add_assignee_form = document.getElementById("assignee-form")
confirm_add_assignee.onclick = function(e){
  e.preventDefault();
  addition_data();
  getDataFromLocal();
  add_assignee_form.reset('');
  assignee_close_button.click();
}

if(localStorage.getItem("assignee_input_values") != null){
  taskDetails = JSON.parse(localStorage.getItem("assignee_input_values"));
  
}

const addition_data = () => {
  // Retrieve existing data from local storage or initialize an empty array
  let existing_assignee_data = JSON.parse(localStorage.getItem("assignee_input_values")) || [];

  const assignee_input_values = {
    assignee_name_value: assignee_name.value,
    assignee_email_value: assignee_email.value,
    assignee_contact_value: assignee_contact.value,
    assignee_password_value: assignee_password.value,
    assignee_roles_value: assignee_roles.value,
  };

  // Add the new input_values object to the existing_data array
  existing_assignee_data.push(assignee_input_values);

  // Convert the array into a string that can be saved in the local storage
  const assignee_string = JSON.stringify(existing_assignee_data);

  // Setting the key as assignee_input_values and value as assignee_string
  localStorage.setItem("assignee_input_values", assignee_string);

  swal("Good job!", "Assignee Addition Successful!", "success");
}
var assignee_table = document.getElementById("assignee-table");

const getDataFromLocal = () => {
  var assignee_table_body = document.getElementById("team_table_body");
  assignee_table_body.innerHTML = "";
  //Parsing the taskData string object
    const assignee_details = JSON.parse(localStorage.getItem("assignee_input_values"));
    assignee_details.forEach((data, index) => {
      assignee_table_body.innerHTML += `<tr index = ${index}>
      <td>${data.assignee_name_value}</td>
        <td>${data.assignee_email_value}</td>
        <td>${data.assignee_contact_value}</td>
        <td>${data.assignee_password_value}</td>
        <td>${data.assignee_roles_value}</td>
    </tr>`;
    })
  };


getDataFromLocal();

 // Get reference to the search bar
 const searchBar = document.getElementById("assignee-search");

 // Get reference to the table body
 const tableBody = document.getElementById("team_table_body");
 
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