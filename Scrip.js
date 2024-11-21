const cart = [];
const cartBody = document.getElementById('cart-body');
const grandTotal = document.getElementById('grand-total');

document.getElementById('add-item').addEventListener('click', () => {
    const name = document.getElementById('item-name').value;
    const price = parseFloat(document.getElementById('item-price').value);
    const quantity = parseInt(document.getElementById('item-quantity').value);

    if (name && price > 0 && quantity > 0) {
        const total = price * quantity;
        cart.push({ name, price, quantity, total });
        updateCart();
        clearForm();
    } else {
        alert('Harap isi semua kolom dengan benar.');
    }
});

function updateCart() {
    cartBody.innerHTML = '';
    let totalAmount = 0;

    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>Rp ${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>Rp ${item.total.toFixed(2)}</td>
            <td><button onclick="removeItem(${index})">Hapus</button></td>
        `;
        cartBody.appendChild(row);
        totalAmount += item.total;
    });

    grandTotal.textContent = totalAmount.toFixed(2);
}

function clearForm() {
    document.getElementById('item-name').value = '';
    document.getElementById('item-price').value = '';
    document.getElementById('item-quantity').value = '';
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}
