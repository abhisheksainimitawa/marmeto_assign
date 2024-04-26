const mainImage = document.getElementById('main-image');
const thumbnailImages = document.querySelectorAll('.thumbnail-images img');

// Add click event listeners to each thumbnail image
thumbnailImages.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        // Change the src attribute of the main image to the clicked thumbnail's src
        mainImage.src = thumbnail.src;
    });
});

// Assuming product data is fetched or available as a global variable
var input = document.getElementById('theInput');
document.getElementById('plus').onclick = function(){
    input.value = parseInt(input.value, 10) +1
}
document.getElementById('minus').onclick = function(){
    if(parseInt(input.value, 10)>1){
        input.value = parseInt(input.value, 10) -1
    }
    
}

const productData = {
    // Your provided JSON goes here
};

// Get references to relevant elements

const colorVariants = document.querySelectorAll('.color-option');
const sizeSelector = document.getElementById('size-selector');
const quantityInput = document.getElementById('quantity');
const addToCartButton = document.getElementById('add-to-cart');
const cartMessage = document.getElementById('cart-message');

// Set initial product details
mainImage.src = productData.product.images[0].src;
// Set other details similarly

// Calculate discount percentage
const price = parseFloat(productData.product.price.replace(/[^0-9.-]+/g, ''));
const compareAtPrice = parseFloat(productData.product.compare_at_price.replace(/[^0-9.-]+/g, ''));
const discount = Math.round(100 - (price / compareAtPrice) * 100);
document.getElementById('discount').textContent = `${discount}% Off`;

// Event listeners
colorVariants.forEach((variant) => {
    variant.addEventListener('click', () => {
        // Update main image based on selected color
        // You'll need to handle this part
    });
});

sizeSelector.addEventListener('change', () => {
    // Update product details based on selected size
    // You'll need to handle this part
});

const button = document.querySelector(".addtocart");
const done = document.querySelector(".done");
console.log(button);
let added = false;
button.addEventListener('click',()=>{
  if(added){
    done.style.transform = "translate(-110%) skew(-40deg)";
    added = false;
  }
  else{
    done.style.transform = "translate(0px)";
    added = true;
  }
    
});

document.addEventListener('DOMContentLoaded', function() {
    const sizeButtons = document.querySelectorAll('.size-option');

    sizeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Remove 'selected' class from all buttons
            sizeButtons.forEach((btn) => {
                btn.classList.remove('selected');
            });

            // Add 'selected' class to the clicked button
            button.classList.add('selected');
        });
    });



    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    const quantityInput = document.querySelector('.quantity-number');

    minusBtn.addEventListener('click', () => {
        if (quantityInput.value > 1) {
            quantityInput.value--;
        }
    });

    plusBtn.addEventListener('click', () => {
        quantityInput.value++;
    });


    var QtyInput = (function () {
        var $qtyInputs = $(".qty-input");
    
        if (!$qtyInputs.length) {
            return;
        }
    
        var $inputs = $qtyInputs.find(".product-qty");
        var $countBtn = $qtyInputs.find(".qty-count");
        var qtyMin = parseInt($inputs.attr("min"));
        var qtyMax = parseInt($inputs.attr("max"));
    
        $inputs.change(function () {
            var $this = $(this);
            var $minusBtn = $this.siblings(".qty-count--minus");
            var $addBtn = $this.siblings(".qty-count--add");
            var qty = parseInt($this.val());
    
            if (isNaN(qty) || qty <= qtyMin) {
                $this.val(qtyMin);
                $minusBtn.attr("disabled", true);
            } else {
                $minusBtn.attr("disabled", false);
                
                if(qty >= qtyMax){
                    $this.val(qtyMax);
                    $addBtn.attr('disabled', true);
                } else {
                    $this.val(qty);
                    $addBtn.attr('disabled', false);
                }
            }
        });
    
        $countBtn.click(function () {
            var operator = this.dataset.action;
            var $this = $(this);
            var $input = $this.siblings(".product-qty");
            var qty = parseInt($input.val());
    
            if (operator == "add") {
                qty += 1;
                if (qty >= qtyMin + 1) {
                    $this.siblings(".qty-count--minus").attr("disabled", false);
                }
    
                if (qty >= qtyMax) {
                    $this.attr("disabled", true);
                }
            } else {
                qty = qty <= qtyMin ? qtyMin : (qty -= 1);
                
                if (qty == qtyMin) {
                    $this.attr("disabled", true);
                }
    
                if (qty < qtyMax) {
                    $this.siblings(".qty-count--add").attr("disabled", false);
                }
            }
    
            $input.val(qty);
        });
    })();
    
});

function addToCart() {
    const selectedColor = document.querySelector('input[name="color"]:checked').value;
    const selectedSize = document.querySelector('input[name="size"]:checked').value;

    // Create the cart message
    const cartMessage = `Embrace Sideboard with Color ${selectedColor} and Size ${selectedSize} added to cart`;

    // Display the cart message
    document.getElementById('cartMessage').textContent = cartMessage;
}
