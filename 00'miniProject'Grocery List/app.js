// practice on event listeners on the form

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const productInput = form.elements.product.value;
    const qtyInput = form.elements.qty.value;
    newlist(productInput, qtyInput);
    productInput.value = " ";
    qtyInput.value = " ";
})

const newlist = (product, qty) => {
    const newproduct = document.createElement('li');
    newproduct.innerText = `${qty}  ${product}`;
    const list = document.querySelector('#list');
    list.append(newproduct);
}

// remove 
list.addEventListener('click', function(e) {
    e.target.remove();
})
