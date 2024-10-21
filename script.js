// DOM Content Loaded to ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {

    // Search Functionality: Trigger the search on clicking the search icon
    const searchInput = document.querySelector(".search-input");
    const searchIcon = document.querySelector(".search-icon");
    searchIcon.addEventListener("click", function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            alert(`You searched for: ${searchTerm}`);
            searchInput.value = ""; // Clear the input after search
        } else {
            alert("Please enter a search term");
        }
    });

    // Cart Functionality: Update Cart Item Count
    const cartButton = document.querySelector(".nav-cart");
    let cartCount = 0;
    cartButton.addEventListener("click", function () {
        cartCount++;
        updateCartCount();
    });

    function updateCartCount() {
        // Check if there's an icon or number in cart
        const cartIcon = cartButton.querySelector("i");
        if (!cartIcon) {
            const icon = document.createElement("i");
            icon.classList.add("fa-solid", "fa-cart-shopping");
            cartButton.appendChild(icon);
        }
        const cartText = document.createElement("span");
        cartText.textContent = `(${cartCount})`;
        cartButton.appendChild(cartText);
    }

    // Address Dropdown Handling: Toggle the address section
    const addressSection = document.querySelector(".nav-address");
    const addressText = addressSection.querySelector(".add-sec");
    addressSection.addEventListener("click", function () {
        const newAddress = prompt("Enter new address (e.g., New York):");
        if (newAddress) {
            addressText.textContent = newAddress;
        }
    });

    // Handle dropdown for category selection
    const categorySelect = document.querySelector(".search-select");
    categorySelect.addEventListener("change", function () {
        const selectedCategory = categorySelect.value;
        console.log(`Category selected: ${selectedCategory}`);
    });

    // Show a message when the user clicks on "See more" (on each category box)
    const seeMoreButtons = document.querySelectorAll(".box p");
    seeMoreButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const categoryName = this.previousElementSibling.textContent;
            alert(`Viewing more products in ${categoryName}`);
        });
    });

});
