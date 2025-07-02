const cartitems = JSON.parse(localStorage.getItem("cart")) || [];
const cartbody = document.getElementById("cartbody");

if (cartitems.lenght === 0){
  cartbody.innerHTML = `
  
  <tr>
    <td colspan="4"> Your cart is empty.</td>
    </tr>
  
  `
} else{
  cartbody.innerHTML = cartitems 
  .map(

    (item, index) => `
    
      <tr data-id="${index}">
        <td>${item.image}</td>
        <td>${item.title}</td>
        <td>${item.author}</td>
        <td><button class="remo-btn">Remove</button></td>
      </tr>  
    
    
    `)
    .join("");

    const remobtn = document.querySelectorAll(".remo-btn");
    remobtn.forEach((button) =>  {

      button.addEventListener("click", function (){


        const row = button.closest("tr");
        const id = row.dataset.id;

        cartitems.splice(id, 1);

        localStorage.setItem("cart", JSON.stringify(cartitems));
        location.reload();
      })
    })
}



