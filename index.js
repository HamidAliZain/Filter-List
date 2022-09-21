// Search function //
let filterInput = document.getElementById("filterInput");
filterInput.addEventListener("keyup", filterNames);
function filterNames() {
  let filterValue = document.getElementById("filterInput").value.toUpperCase();
  let ul = document.getElementById("name");
  let li = ul.querySelectorAll(".list");
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toLocaleUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none ";
    }
  }
}
// add function //
let addForm = document.querySelector("#add-form");
let listItems = document.querySelector("#name");
addForm.addEventListener("submit", createLIst);
function createLIst(e) {
  e.preventDefault();

  let item = document.querySelector("#create-text").value;
  if (item === "") {
    alert("please fill al the fields");
  } else {
    let li = document.createElement("li");
    li.className =
      "list border border-slate-400 p-2 rounded-full font-bold flex flex-row justify-between text-blue-400  ";
    let a = document.createElement("a");
    a.appendChild(document.createTextNode(item));
    a.className = "font-light";
    li.appendChild(a);
    //heres delete btn  //
    let deleteBtn = document.createElement("a");
    deleteBtn.className = "font-light text-red-600 delete cursor-pointer";
    a.href = "#";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    listItems.appendChild(li);
    document.querySelector("#create-text").value = "";
  }
}

// delet function //
listItems.addEventListener("click", removeElement);
function removeElement(ev) {
  if (ev.target.classList.contains("delete")) {
     if (confirm("are you  surre ")) {
      let li = ev.target.parentElement;
      listItems.removeChild(li);
    }
  }
}
