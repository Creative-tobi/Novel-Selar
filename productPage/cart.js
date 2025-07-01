// Get saved cart items
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// Get the table body
const cartBody = document.getElementById("cartbody");

if (cartItems.length === 0) {
  cartBody.innerHTML = `
          <tr>
            <td colspan="4">Your cart is empty.</td>
          </tr>
        `;
} else {
  cartBody.innerHTML = cartItems
    .map(
      (item, index) => `
            <tr data-id="${index}">
              <td>${item.image}</td>
              <td>${item.title}</td>
              <td>${item.author}</td>
              <td>
                <button class="remove-btn">Remove</button>
              </td>
            </tr>
          `
    )
    .join("");

  // Add remove event listeners to all remove buttons
  const removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const row = button.closest("tr");
      const id = row.dataset.id;

      // Remove item from cart array
      cartItems.splice(id, 1);

      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(cartItems));

      // Reload page to update table
      location.reload();
    });
  });
}
