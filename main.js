console.log("Welcome to Personal notes");
showNotes();

//To add the text to local storage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  addTxt.value = "";
  console.log(notesObj);
  showNotes();
});
//to show notes

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="my-2 mx-2 card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">NOTE ${index + 1}:</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNode(this.id)" "class="btn btn-primary">Delete</button>
          </div>
        </div>
    
     `;
  });

  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `NO NOTE ADDED YET! `;
  }
}

//To delete a note

function deleteNode(index) {
  console.log("I am deleting note on index", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


