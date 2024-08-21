
// 1. show output after 3.5 seconds

setTimeout(() => {
    console.log('This message is displayed after 3.5 seconds')
}, 3500);

// 2. take a number using prompt. add 200. then alert the result

document.getElementById("addButton").addEventListener('click', () => {
    let userInput = prompt('Please enter a number:');

    let result = Number(userInput) + 200;

    alert('The result is:' + result);
});

// 3. do you want to see the href if ok console log href

document.getElementById("checkHrefButton").addEventListener("click", () => {
        if (confirm("Do You want to see the href of the link?")) {
            let href = document.getElementById("myLink").href;
            console.log("Href", href);
        } else {
            console.log("User chose not to see the href.");
        }
    });

// 4. purpose of cookies 5-7 lines in english
// 5. 3 differences between local storage and session storage
// ----------------------
//         HOMEWORK
// ----------------------
// 6. how javascript  run? 5-7 lines in english
// 7. list of things that are asynchronous in js/browser
// 8. what is even loop in js and how does it work?


// ----------------------
//         OPTIONAL
// ----------------------
// 9. simple website with two input fields and button. product name product er price by clicking on the button product will be added to the local storage. You should be able to add multiple.
document.getElementById("button").addEventListener("click", function () {
  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;
  if (productName && productPrice) {
    const product = {
      name: productName,
      price: productPrice,
    };

    let products = JSON.parse(localStorage.getItem("products")) || [];

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";

    displayProducts();
  } else {
    alert("Please enter both product name and price.");
  }
});

function displayProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productList = document.getElementById('productList');

    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name}: $${product.price}`;
        productList.appendChild(li);
    });
}


displayProducts();

// 10. Display products on the website if exists storage display from there.

function displayProducts() {
    const productList = document.getElementById('product-List');
    const storedProducts = localStorage.getItem('products');

    if (storedProducts) {
        const products = JSON.parse(storedProducts);
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.innerHTML = `<h2>${product.name}</h2><p>Price: $${product.price}</p>`;
            productList.appendChild(productItem);
        });

    }
    else {
        productList.innerHTML = '<p>No product available.</p>';
    }
}
displayProducts();


// --------------------
//         MUST
// --------------------
// stack overflow create an account spend 30 minutes

