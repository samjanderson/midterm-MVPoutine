$(document).ready(() => {
  $('.order-button').click(function() {
    const button = $(this);
    const div = button.parent();
    const container = div.parent();
    let p = container.find("p");
    let price = container.find(".foot").find("p").text();

    checkItemQuantity({ name: p.html(), price: price, quantity: 1 });
    console.log('cartArr', cartArr);
    // $.ajax({
    //   method: "POST",
    //   url: "/api/orders/"
    // }).done((res) => {
    //   console.log('Add item to order');
    // })
  });

  let cartArr = [];

  const checkItemQuantity = function(newItem) {
    let flag = false;
    for (let item of cartArr) {
      console.log('forItem', item);

      if (item.name === newItem.name) {
        item.quantity = item.quantity + 1;
        console.log('matched item', newItem); flag = true;
        break;
      }
      console.log("rendercartArr1", cartArr);
    }
    if (!flag) {
      console.log("else");
      cartArr.push({ name: newItem.name, price: newItem.price, quantity: 1 });
    }

    renderCart(cartArr);
  };

  const createCartItem = function(name, price, quantity) {
    const $cart = $(`<li>${name}</li>
   <li>Price: ${price}</li>
   <li>Quantity: ${quantity}</li>
   `);
    return $cart;
  };

  const renderCart = function(cartItems) {
    const container = $(".nav-popup ul");
    container.empty();
    for (let item of cartItems) {
      const $cart = $(`<li>${item.name}</li>
   <li>Price: ${item.price}</li>
   <li>Quantity: ${item.quantity}</li>
    `);
      container.append($cart);
    }
  };
});
