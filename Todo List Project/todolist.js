
function search(){

let area = document.getElementById("area").value;

let todo = document.getElementsByTagName("label");
for(let i = 0 ; i < todo.length ; i++){

    let find = todo[i].innerText;

    if(find == area){
        alert("exists");
        document.getElementById("area").value = " ";
        return;
    }
    if(find != area){
        alert("Not found");
        document.getElementById("area").value = " ";
        return;
    }

}
}



document.querySelectorAll('.fa-trash-o').forEach(item => {
    item.addEventListener('click', function() {
        this.parentNode.remove();
    });
});


function addtodo(){

  let text = document.getElementById("add").value;

  // Create the elements for new todo item
  let div = document.createElement("div");
  div.className = "form-check";
  div.style.marginTop = "20px"
  div.style.fontSize = "30px";
  
  let input = document.createElement("input");
  input.className = "form-check-input";
  input.type = "checkbox";
  input.style.width = "1em";
  input.style.height = "1em";

  
  let label = document.createElement("label");
  label.className = "form-check-label";
  label.textContent = text;
  label.style.fontSize  = "30px";
  label.style.fontWeight = "400";
  
  let deleteIcon = document.createElement("i");
  deleteIcon.className = "fa fa-trash-o";
  deleteIcon.style.fontSize = "30px";
  deleteIcon.style.color = "red";
  
  // Append elements to the div
  div.appendChild(input);
  div.appendChild(label);
  div.appendChild(deleteIcon);
  
  // Add event listener for delete button
  deleteIcon.addEventListener('click', function() {
    div.remove();
  });

  // Append the new todo item to the container
  document.getElementsByClassName("join")[0].appendChild(div);
  

  let area = document.getElementsByClassName("form-check-label");

    let checkboxes = document.getElementsByClassName("form-check-input");
    
    for(let i = 0; i < checkboxes.length; i++) {
        let checkbox = checkboxes[i];
        let line = area[i];
    
        checkbox.addEventListener("change", function() {
            if(this.checked){
              line.style.textDecoration = "line-through";
            } else {
              line.style.textDecoration = "none";
            }
          });
       
        }

  // Clear the input field after adding the todo item
  document.getElementById("add").value = "";
}
 
  
   let text = document.getElementsByClassName("form-check-label");

    let checkboxes = document.getElementsByClassName("form-check-input");
    
    for(let i = 0; i < checkboxes.length; i++) {
        let checkbox = checkboxes[i];
        let line = text[i];
    
        checkbox.addEventListener("change", function() {
            if(this.checked){
              line.style.textDecoration = "line-through";
            } else {
              line.style.textDecoration = "none";
            }
          });
       
        }

