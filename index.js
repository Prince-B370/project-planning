
let registerBtn = document.getElementById("registerBtn")
let loginBtn = document.getElementById("loginBtn")
let nameField = document.getElementById("nameField")
let title = document.getElementById("title")

// loginBtn.onclick = () => {
//     nameField.style.maxHeight = "0";
//     title.innerHTML = "Login";
//     registerBtn.classList.add("disable");
//     loginBtn.classList.remove("disable")
//  }
//  registerBtn.onclick = () => { 
//     nameField.style.maxHeight = "60px";
//     title.innerHTML = "Register";
//     registerBtn.classList.remove("disable");
//     loginBtn.classList.add("disable")
//  }

 function calculateDuration() {
    let startDate = document.getElementById("startDate")
    let endDate = document.getElementById("endDate")

    //Getting the time in milliseconds
    let timeDiff = Math.abs(endDate - startDate)
    console.log(timeDiff)
    //Getting the time in dayss
    let daysDiff = Math.floor(timeDiff / (1000)*60*60*24)

  //   document.getElementById("duration").innerHTML = dateDiff + " days"

  }

  // document.getElementById("addRowBtn").addEventListener("click", addRow);

function addRow() {
  var table = document.getElementById("myTable");
  var newRow = table.insertRow(-1);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  var cell8 = newRow.insertCell(7);

  cell1.innerHTML = `<input type='text' class = "parentRow">`;
  cell2.innerHTML = `<input type='text' class = "parentRow">`;
  cell3.innerHTML = `<input type='date' class="start-date parentRow" onchange="updateNumDays(this)">`;
  cell4.innerHTML = `<input type='date' class="end-date parentRow" onchange="updateNumDays(this)">`;
  cell5.innerHTML = `<input type='number' class = "parentRow>`;
  cell6.innerHTML = `<select class = "parentRow">
                        <option value="new">New</option>
                        <option value="planned">Planned</option>
                        <option value="inProgress">In Progress</option>
                        <option value="inReview">In Review</option>
                        <option value="completed">Completed</option>
                    </select>`
  cell7.innerHTML = `<input type = "number" class = "parentRow">`
  cell8.innerHTML = `<button class = "button" onclick='addSubRow(this)'>Add Activity</button>`;
}

function addSubRow(button) {
//   var parentRow = button.parentNode.parentNode;
//   var subRow = parentRow.insertRow(-1);
//   var subCell1 = subRow.insertCell(0);
//   var subCell2 = subRow.insertCell(1);
//   var subCell3 = subRow.insertCell(2);
//   var subCell4 = subRow.insertCell(3);
//   var subCell5 = subRow.insertCell(4);
//   var subCell6 = subRow.insertCell(5);
//   var subCell7 = subRow.insertCell(6);


//   subCell1.innerHTML = "<input type='text'>";
//   subCell2.innerHTML = "<input type='text'>";
//   subCell3.innerHTML = `<input type='date' class="start-date" onchange="updateNumDays(this)">`;
//   subCell4.innerHTML = `<input type='date' class="end-date" onchange="updateNumDays(this)">`
//   subCell5.innerHTML = "<input type='number'>"
//   subCell6.innerHTML = `<select>
//                             <option value="new">New</option>
//                             <option value="planned">Planned</option>
//                             <option value="inProgress">In Progress</option>
//                             <option value="inReview">In Review</option>
//                             <option value="completed">Completed</option>
//                         </select>`
// subCell7.innerHTML = `<button class = "button" onclick='addSubRow(this)'>Add Activity</button>`

var row = button.parentNode.parentNode;
  var newRow = row.parentNode.insertRow(row.rowIndex + 1);

  var subCell1 = newRow.insertCell(0);
  var subCell2 = newRow.insertCell(1);
  var subCell3 = newRow.insertCell(2);
  var subCell4 = newRow.insertCell(3);
  var subCell5 = newRow.insertCell(4);
  var subCell6 = newRow.insertCell(5);
  var subCell7 = newRow.insertCell(6);
  var subCell8 = newRow.insertCell(7);

  subCell1.innerHTML = `<td class="sub-row" onfocus='showCellBorders(this)' onblur='hideCellBorders(this)'>`;
  subCell2.innerHTML = `<td class = "sub-row" onfocus='showCellBorders(this)' onblur='hideCellBorders(this)'>`;
  subCell3.innerHTML = `<td class="start-date sub-row" onchange="updateNumDays(this)" onfocus='showCellBorders(this)' onblur='hideCellBorders(this)'>`;
  subCell4.innerHTML = `<td class="end-date sub-row" onchange="updateNumDays(this)" onfocus='showCellBorders(this)' onblur='hideCellBorders(this)'>`;
  subCell5.innerHTML = `<td class = "sub-row" onfocus='showCellBorders(this)' onblur='hideCellBorders(this)'>`;
  subCell6.innerHTML = `<select class = "sub-row" onfocus='showCellBorders(this)' onblur='hideCellBorders(this)'>
                        <option value="new">New</option>
                        <option value="planned">Planned</option>
                        <option value="inProgress">In Progress</option>
                        <option value="inReview">In Review</option>
                        <option value="completed">Completed</option>
                    </select>`;
  subCell7.innerHTML = `<input type="number" class = "sub-row" onfocus='showCellBorders(this)' onblur='hideCellBorders(this)'>`;
  
}

function showCellBorders(element) {
    element.parentNode.classList.add("editing");
  }
  
  function hideCellBorders(element) {
    element.parentNode.classList.remove("editing");
  }

// function updateNumDays(input) {
//     var row = input.parentNode.parentNode;
//     var startDate = new Date(row.querySelector(".start-date").value);
//     var endDate = new Date(row.querySelector(".end-date").value);
//     var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
//     var numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
//     row.cells[4].textContent = numDays+" days";
//   }


//   function redirectToLoginPage() {
//     window.location.href = 'login.html';
// }
//The add task button
var addBtn = document.querySelector("#add-task-btn");
addBtn.addEventListener("click",()=>{
  modal.classList.add("active");
})


//The add task modal
var modal = document.querySelector(".mod");
//The add project modal
var addProjectModal = document.querySelector(".mod-add-project");
//The add activity modal
var addActivityModal = document.querySelector(".mod-add-activity");

//The task close icon
var closeIcon = document.querySelector(".close-icon");
closeIcon.addEventListener("click",()=>{
  modal.classList.remove("active");
})

//The edit button
// var editBtn = document.querySelector(".view-button");
// editBtn.addEventListener("click",()=>{
//   modal.classList.add("active");
// })

/******************************START OF GLOBAL VARIABLES***********************/
var taskDetails = [];
var wbsEl = document.querySelector("#wbs");
var taskEl = document.querySelector("#task");
var assigneeEl = document.querySelector("#assignee");
var startDateEl = document.querySelector("#start-date");
var endDateEl = document.querySelector("#end-date");
var durationEl = document.querySelector("#duration");
var resourcesEl = document.querySelector("#resources");
var budgetEl = document.querySelector("#budget");
var statusEl = document.querySelector("#taskstatus");
var addForm = document.querySelector("#add-form");
var add_project_form = document.querySelector("add-project-form");
var updateBtn = document.querySelector("#updateBtn");

/******************************END OF GLOBAL VARIABLES*************************/

//Calculation of Project duration
function updateProjectNumDays() {
  var startDate = new Date(document.querySelector("#project-start-date").value);
  var endDate = new Date(document.querySelector("#project-end-date").value);
  
  // Check if both start date and end date are valid
  if (!isNaN(startDate) && !isNaN(endDate)) {
    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    var numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if(numDays>1){
      document.querySelector("#project-duration").value = numDays + " days";
    }
    else{
      document.querySelector("#project-duration").value = numDays + " day";
      }
  } 
  else {
    document.querySelector("#project-duration").value = ""; // Clear the duration if dates are invalid
  }
}

document.querySelector("#project-start-date").addEventListener("input", updateProjectNumDays);
document.querySelector("#project-end-date").addEventListener("input", updateProjectNumDays);

//Calculation of Task duration
function updateTaskNumDays() {
  var startDate = new Date(document.querySelector("#start-date").value);
  var endDate = new Date(document.querySelector("#end-date").value);
  
  // Check if both start date and end date are valid
  if (!isNaN(startDate) && !isNaN(endDate)) {
    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    var numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if(numDays>1){
      document.querySelector("#duration").value = numDays + " days";
    }
    else{
      document.querySelector("#duration").value = numDays + " day";
    }
  } else {
    document.querySelector("#duration").value = ""; // Clear the duration if dates are invalid
  }
}

document.querySelector("#start-date").addEventListener("input", updateTaskNumDays);
document.querySelector("#end-date").addEventListener("input", updateTaskNumDays);

function updateActivityNumDays() {
  var startDate = new Date(document.querySelector("#activity-start-date").value);
  var endDate = new Date(document.querySelector("#activity-end-date").value);
  
  // Check if both start date and end date are valid
  if (!isNaN(startDate) && !isNaN(endDate)) {
    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    var numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if(numDays>1){
      document.querySelector("#activity-duration").value = numDays + " days";
    }
    else{
      document.querySelector("#activity-duration").value = numDays + " day";
    }
  } else {
    document.querySelector("#activity-duration").value = ""; // Clear the duration if dates are invalid
  }
}

document.querySelector("#activity-start-date").addEventListener("input", updateActivityNumDays);
document.querySelector("#activity-end-date").addEventListener("input", updateActivityNumDays);


//The confirm add button
var confirmAdd = document.querySelector("#confirm-add-btn");
confirmAdd.onclick = function(e){
  e.preventDefault();
  additionData();
  getDataFromLocal();
  addForm.reset('');
  closeIcon.click();
}

if(localStorage.getItem("taskData") != null){
  taskDetails = JSON.parse(localStorage.getItem("taskData"));
  console.log(taskDetails)
}

const additionData = () => {
  taskDetails.push({
    wbs:wbsEl.value,
    task:taskEl.value,
    assignee:assigneeEl.value,
    startDate:startDateEl.value,
    endDate:endDateEl.value,
    duration:durationEl.value,
    resources:resourcesEl.value,
    budget:budgetEl.value,
    status:statusEl.value
  })
  //Convert the array into a string that can be saved in the local storage
  taskString = JSON.stringify(taskDetails);
  //Setting the key as taskData and value as taskString
localStorage.setItem("taskData",taskString);
swal("Good job!", "Task Addition Successful!", "success");
}

tableData = document.querySelector("#table-data");

/*********Getting data from the local storage and displaying it on the HTML table************/
const getDataFromLocal = () => {
  tableData.innerHTML = "";
  //Parsing the taskData string object
    const taskDetails = JSON.parse(localStorage.getItem("taskData"));
    taskDetails.forEach((data, index) => {
      tableData.innerHTML += `<tr index = ${index}>
      <td>${data.wbs}</td>
      <td>${data.task}</td>
      <td>${data.assignee}</td>
      <td>${data.startDate}</td>
      <td>${data.endDate}</td>
      <td>${data.duration}</td>
      <td>${data.resources}</td>
      <td>${data.budget}</td>
      <td>${data.status}</td>
      <td>
        <button class="view-button edit-btn">Edit</button>
        <button style="background: #EE534F;" class="delete-button">Delete</button>
        <button class="activity-button" >Activity</button>
      </td>
    </tr>`;
    });

    //Delete button
    var allDelBtn = document.querySelectorAll(".delete-button");//array of delete buttons
    // console.log(allDelBtn);
    var i;
    for(i = 0; i < allDelBtn.length; i++){ //loop through the delete buttons
      allDelBtn[i].onclick = function(){

        //Grabbing the parent row of the clicked button
        var tr = this.parentElement.parentElement;
        //Obtaining the row's id
        var id = tr.getAttribute("index");
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this record",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            taskDetails.splice(id, 1);
            tr.remove();
            localStorage.setItem("taskData",JSON.stringify(taskDetails));
      
            swal("Poof! Your record has been deleted!", {
              icon: "success",
            });
           //Reloading the page
           location.reload();
            
          } else {
            swal("Your record is safe!");
          }
        });
        
        
      }
    }

    //updating code

  var allEditBtn = document.querySelectorAll(".edit-btn");//array of update buttons
  for(i = 0; i < allEditBtn.length; i++){
    allEditBtn[i].onclick = function(){
      var tr = this.parentElement.parentElement;
      var td = tr.getElementsByTagName("td");
      var index = tr.getAttribute("index");
      var wbs = td[0].innerHTML;
      var task = td[1].innerHTML;
      var assignee = td[2].innerHTML;
      var startDate = td[3].innerHTML;
      var endDate = td[4].innerHTML;
      var duration = td[5].innerHTML;
      var resources = td[6].innerHTML;
      var budget = td[7].innerHTML;
      var tstatus = td[8].innerHTML;
      
      addBtn.click();
      confirmAdd.disabled = true;
      updateBtn.disabled = false;
      wbsEl.value = wbs;
      taskEl.value = task;
      assigneeEl.value = assignee;
      startDateEl.value = startDate;
      endDateEl.value = endDate;
      durationEl.value = duration;
      resourcesEl.value = resources;
      budgetEl.value = budget;
      statusEl.value = tstatus;

      updateBtn.onclick = function(e){
         taskDetails[index] = {
          wbs:wbsEl.value,
          task:taskEl.value,
          assignee:assigneeEl.value,
          startDate:startDateEl.value,
          endDate:endDateEl.value,
          duration:durationEl.value,
          resources:resourcesEl.value,
          budget:budgetEl.value,
          status:statusEl.value
         }
         localStorage.setItem("taskData",JSON.stringify(taskDetails));
      }
      
    }
  }

};

getDataFromLocal();



//New Project Button
var newProjectButton = document.querySelector("#add-project-btn");
newProjectButton.addEventListener("click",()=>{
  addProjectModal.classList.add("active");
});

//Add button in add project
var confirmAddProjectButton = document.querySelector("#confirm-add-project-btn");
confirmAddProjectButton.addEventListener("click",()=>{
  //if data is successfully saved in the database, then
  swal("Good Job","Project added Successfully","success");
  addProjectModal.classList.remove("active");
})

//Project close button

var projectCloseButton = document.querySelector(".project-close-icon");
projectCloseButton.addEventListener("click",()=>{
  addProjectModal.classList.remove("active");
})

//Activity close button
var activityCloseButton = document.querySelector(".activity-close-icon");
activityCloseButton.addEventListener("click",()=>{
  addActivityModal.classList.remove("active");
})

//creating an activity

var allActivityBtn = document.querySelectorAll(".activity-button"); // array of activity buttons

for (var i = 0; i < allActivityBtn.length; i++) {
  allActivityBtn[i].addEventListener("click", function() {
    var tr = this.parentElement.parentElement;
    var childRow = document.createElement("tr");

    // Create table data elements for the child row
    var tdsHTML = `
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
      <td>9</td>
      <td style = "border-right:1px solid #fff;">
        <button class="edit-activity-button">Edit</button>
      </td>
    `;

    childRow.innerHTML = tdsHTML;
    tr.parentNode.insertBefore(childRow, tr.nextSibling);
  });
}


  // var confirmAddActivityButton = document.querySelector("#confirm-activity-add-btn");
  // confirmAddActivityButton.addEventListener("click",()=>{
  //   alert("Activity Add")
  //   var tr = document.parentElement.parentElement;
  //   var v = document.createElement("tr");
  // })

   var editActivityButton = document.querySelectorAll(".edit-activity-button");

   console.log(editActivityButton);
  //  for (var i = 0; i < editActivityButton.length; i++) {
  //   editActivityButton[i].addEventListener("click", () =>{
  //    alert("Hey");
  //  })
  // }

/*********************************************************************************
 *                              
 *                               THIS CODE HANDLES THE TEAM'S TABLE
 * 
 * ******************************************************************************/
// const search = document.querySelector('.input-group input'),
//     table_rows = document.querySelectorAll('tbody tr'),
//     table_headings = document.querySelectorAll('thead th');

// // 1. Searching for specific data of HTML table
// search.addEventListener('input', searchTable);

// function searchTable() {
//     table_rows.forEach((row, i) => {
//         let table_data = row.textContent.toLowerCase(),
//             search_data = search.value.toLowerCase();

//         row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
//         row.style.setProperty('--delay', i / 25 + 's');
//     })

//     document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
//         visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
//     });
// }

// // 2. Sorting | Ordering data of HTML table

// table_headings.forEach((head, i) => {
//     let sort_asc = true;
//     head.onclick = () => {
//         table_headings.forEach(head => head.classList.remove('active'));
//         head.classList.add('active');

//         document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
//         table_rows.forEach(row => {
//             row.querySelectorAll('td')[i].classList.add('active');
//         })

//         head.classList.toggle('asc', sort_asc);
//         sort_asc = head.classList.contains('asc') ? false : true;

//         sortTable(i, sort_asc);
//     }
// })


// function sortTable(column, sort_asc) {
//     [...table_rows].sort((a, b) => {
//         let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
//             second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();

//         return sort_asc ? (first_row < second_row ? 1 : -1) : (first_row < second_row ? -1 : 1);
//     })
//         .map(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
// }

// // 3. Converting HTML table to PDF

// const pdf_btn = document.querySelector('#toPDF');
// const customers_table = document.querySelector('#customers_table');

// const toPDF = function (customers_table) {
//     const html_code = `
//     <link rel="stylesheet" href="style.css">
//     <main class="table" >${customers_table.innerHTML}</main>
//     `;

//     const new_window = window.open();
//     new_window.document.write(html_code);

//     setTimeout(() => {
//         new_window.print();
//         new_window.close();
//     }, 400);
// }

// pdf_btn.onclick = () => {
//     toPDF(customers_table);
// }

// // 4. Converting HTML table to JSON

// const json_btn = document.querySelector('#toJSON');

// const toJSON = function (table) {
//     let table_data = [],
//         t_head = [],

//         t_headings = table.querySelectorAll('th'),
//         t_rows = table.querySelectorAll('tbody tr');

//     for (let t_heading of t_headings) {
//         let actual_head = t_heading.textContent.trim().split(' ');

//         t_head.push(actual_head.splice(0, actual_head.length - 1).join(' ').toLowerCase());
//     }

//     t_rows.forEach(row => {
//         const row_object = {},
//             t_cells = row.querySelectorAll('td');

//         t_cells.forEach((t_cell, cell_index) => {
//             const img = t_cell.querySelector('img');
//             if (img) {
//                 row_object['customer image'] = decodeURIComponent(img.src);
//             }
//             row_object[t_head[cell_index]] = t_cell.textContent.trim();
//         })
//         table_data.push(row_object);
//     })

//     return JSON.stringify(table_data, null, 4);
// }

// json_btn.onclick = () => {
//     const json = toJSON(customers_table);
//     downloadFile(json, 'json')
// }

// // 5. Converting HTML table to CSV File

// const csv_btn = document.querySelector('#toCSV');

// const toCSV = function (table) {
//     // Code For SIMPLE TABLE
//     // const t_rows = table.querySelectorAll('tr');
//     // return [...t_rows].map(row => {
//     //     const cells = row.querySelectorAll('th, td');
//     //     return [...cells].map(cell => cell.textContent.trim()).join(',');
//     // }).join('\n');

//     const t_heads = table.querySelectorAll('th'),
//         tbody_rows = table.querySelectorAll('tbody tr');

//     const headings = [...t_heads].map(head => {
//         let actual_head = head.textContent.trim().split(' ');
//         return actual_head.splice(0, actual_head.length - 1).join(' ').toLowerCase();
//     }).join(',') + ',' + 'image name';

//     const table_data = [...tbody_rows].map(row => {
//         const cells = row.querySelectorAll('td'),
//             img = decodeURIComponent(row.querySelector('img').src),
//             data_without_img = [...cells].map(cell => cell.textContent.replace(/,/g, ".").trim()).join(',');

//         return data_without_img + ',' + img;
//     }).join('\n');

//     return headings + '\n' + table_data;
// }

// csv_btn.onclick = () => {
//     const csv = toCSV(customers_table);
//     downloadFile(csv, 'csv', 'customer orders');
// }

// // 6. Converting HTML table to EXCEL File

// const excel_btn = document.querySelector('#toEXCEL');

// const toExcel = function (table) {
//     // Code For SIMPLE TABLE
//     // const t_rows = table.querySelectorAll('tr');
//     // return [...t_rows].map(row => {
//     //     const cells = row.querySelectorAll('th, td');
//     //     return [...cells].map(cell => cell.textContent.trim()).join('\t');
//     // }).join('\n');

//     const t_heads = table.querySelectorAll('th'),
//         tbody_rows = table.querySelectorAll('tbody tr');

//     const headings = [...t_heads].map(head => {
//         let actual_head = head.textContent.trim().split(' ');
//         return actual_head.splice(0, actual_head.length - 1).join(' ').toLowerCase();
//     }).join('\t') + '\t' + 'image name';

//     const table_data = [...tbody_rows].map(row => {
//         const cells = row.querySelectorAll('td'),
//             img = decodeURIComponent(row.querySelector('img').src),
//             data_without_img = [...cells].map(cell => cell.textContent.trim()).join('\t');

//         return data_without_img + '\t' + img;
//     }).join('\n');

//     return headings + '\n' + table_data;
// }

// excel_btn.onclick = () => {
//     const excel = toExcel(customers_table);
//     downloadFile(excel, 'excel');
// }

// const downloadFile = function (data, fileType, fileName = '') {
//     const a = document.createElement('a');
//     a.download = fileName;
//     const mime_types = {
//         'json': 'application/json',
//         'csv': 'text/csv',
//         'excel': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//     }
//     a.href = `
//         data:${mime_types[fileType]};charset=utf-8,${encodeURIComponent(data)}
//     `;
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
// }

// Handling new assignee registration
add_assignee_modal = document.querySelector(".mod-add-assignee");
add_assignee_button = document.querySelector("#add-assignee-button");

add_assignee_button.addEventListener("click",()=>{
  alert();
  // add_assignee_modal.classList.add("active");
})

                                 







