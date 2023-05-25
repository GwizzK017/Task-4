
addStudent = () => {
    let first = document.getElementById("first").value
    let last = document.getElementById("last").value
    let age = +document.getElementById("age").value
    let subject = document.getElementById("subject").value

    if(age >= 18){
        alert("Student: " + first + " " + last + ", has been added to " + subject);
    } else {
        alert("Student is not old enough for this course");
    }

}

makePizza = () =>{

     let pizzaName = document.getElementById("pizzaName").value;
     let size = document.getElementById("size").value;

     // Get Radio Options
    let baseOption = document.getElementsByName("baseRadio");
    let baseValue; 
    for(let i = 0; i < baseOption.length; i++){
        if(baseOption[i].checked){
            baseValue = baseOption[i].value
        }
    }
}

// Function to update the order item
function updateOrderItem() {
    const pizzaName = document.getElementById("pizzaName").value;
    const size = document.getElementById("size").value;
    const selectedBase = document.querySelector('input[name="baseRadio"]:checked').value;
    const toppings = document.querySelectorAll('input[name="toppings"]:checked');
    
    let toppingsList = "";
    toppings.forEach((topping) => {
      toppingsList += topping.value + ", ";
    });
    toppingsList = toppingsList.slice(0, -2);
    
    const orderItem = document.querySelector(".order-item");
    orderItem.innerHTML = `
      <p><strong>Pizza Name:</strong> ${pizzaName}</p>
      <p><strong>Size:</strong> ${size}</p>
      <p><strong>Base:</strong> ${selectedBase}</p>
      <p><strong>Toppings:</strong> ${toppingsList}</p>
      <p><strong>Total Cost:</strong> R${calculateCost().toFixed(2)}</p>
    `;
  }
  
  // Function to handle the "Make My Pizza" button click
  function makePizza() {
    const pizzaName = document.getElementById("pizzaName").value;
    
    if (!pizzaName) {
      alert("Please enter a name for your pizza.");
      return;
    }
    
    updateOrderItem();
  }





