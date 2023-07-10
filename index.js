
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


//The modal
var modal = document.querySelector(".mod");

//The close icon
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
var wbs = document.querySelector("#wbs");
var task = document.querySelector("#task");
var assignee = document.querySelector("#assignee");
var startDate = document.querySelector("#start-date");
var endDate = document.querySelector("#end-date");
var duration = document.querySelector("#duration");
var resources = document.querySelector("#resources");
var budget = document.querySelector("#budget");
var status = document.querySelector("#status");
var addForm = document.querySelector("#add-form");
/******************************END OF GLOBAL VARIABLES*************************/

//Calculation of duration
function updateNumDays() {
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

document.querySelector("#start-date").addEventListener("input", updateNumDays);
document.querySelector("#end-date").addEventListener("input", updateNumDays);


//The confirm add button
var confirmAdd = document.querySelector("#confirm-add-btn");
addForm.onsubmit = function(e){
  e.preventDefault();
  additionData();
  getDataFromLocal();
  addForm.reset('');
  closeIcon.click();
}

if(localStorage.getItem("taskDetails") != null){
  taskDetails = JSON.parse(localStorage.getItem("taskDetails"));
  console.log(taskDetails)
}

const additionData = () => {
  taskDetails.push({
    wbs:wbs.value,
    task:task.value,
    assignee:assignee.value,
    startDate:startDate.value,
    endDate:endDate.value,
    duration:duration.value,
    resources:resources.value,
    budget:budget.value,
    status:taskstatus.value
  })
  taskString = JSON.stringify(taskDetails);
localStorage.setItem("taskData",taskString);
}

tableData = document.querySelector("#table-data");
console.log(tableData);

const getDataFromLocal = () => {
  tableData.innerHTML = "";
    const taskDetails = JSON.parse(localStorage.getItem("taskData"));
    taskDetails.forEach((data, index) => {
      tableData.innerHTML += `<tr>
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
        <button class="view-button">Edit</button>
        <button style="background: #EE534F;" class="delete-button">Delete</button>
        <button class="activity-button" >Activity</button>
      </td>
    </tr>`;
    });
};

getDataFromLocal();










