// // // const adtodb = (id) => {
// // //   const qunty = localStorage.getItem(id);
// // //   if (qunty) {
// // //     const newqty = parseInt(qunty) + 1;
// // //     localStorage.setItem(id, newqty);
// // //   } else {
// // //     localStorage.setItem(id, 1);
// // //   }
// // // };

// // // const adtodb = (id) => {
// // //   let cart;

// // //   const storagecart = localStorage.getItem("cart");
// // //   if (storagecart) {
// // //     cart = JSON.parse(storagecart);
// // //   } else {
// // //     cart = {};
// // //   }

// // //   //   const qunty = localStorage.getItem(id); cdirect change er porborte carte giye checek
// // //   // consdity and set item in localstoragee:L
// // //   const qty = cart[id];
// // //   if (qty) {
// // //     const newqty = parseInt(qty) + 1;
// // //     cart[id] = newqty;
// // //   } else {
// // //     // localStorage.setItem(id, 1)
// // //     cart[id] = 1;
// // //   }
// // //   localStorage.setItem("cart", JSON.stringify(cart));
// // // };

// // // export { adtodb };

// // const adtodb = (id) => {
// //   let shpingCart = {};

// //   // get item from local storage

// //   const storcart = localStorage.getItem("cart");
// //   if (storcart) {
// //     shpingCart = JSON.parse(storcart);
// //   } else {
// //     shpingCart[id] = {};
// //   }

// //   // add to local storge siongel element
// //   const quandty = shpingCart[id];
// //   if (quandty) {
// //     const nequendty = quandty + 1;
// //     shpingCart[id] = nequendty;
// //   } else {
// //     shpingCart[id] = 1;
// //   }

// //   localStorage.setItem("cart", JSON.stringify(shpingCart));
// // };

// // export { adtodb };

// const adtodb = (id) => {
//   let shopingcart;

//   const getitem = localStorage.getItem("cart");
//   if (getitem) {
//     shopingcart = JSON.parse(getitem);
//   } else {
//     shopingcart = {};
//   }

//   const qyandit = shopingcart[id];
//   if (qyandit) {
//     const newqty = qyandit + 1;
//     shopingcart[id] = newqty;
//   } else {
//     shopingcart[id] = 1;
//   }

//   localStorage.setItem("cart", JSON.stringify(shopingcart));
// };

// const removedata = (id) => {
//   const storcart = localStorage.getItem("cart");

//   if (storcart) {
//     const spoinCart = JSON.parse(storcart);
//     if (id in spoinCart) {
//       delete spoinCart[id];
//       localStorage.setItem("cart", JSON.stringify(spoinCart));
//     }
//   }
// };

// export { adtodb, removedata };

const adtodb = (id) => {
  let shopcart;
  const getitem = localStorage.getItem("product");

  if (getitem) {
    shopcart = JSON.parse(getitem);
  } else {
    shopcart = {};
  }

  // set item from localstorage
  const setItem = shopcart[id];
  if (setItem) {
    const newproduct = setItem + 1;
    shopcart[id] = newproduct;
  } else {
    shopcart[id] = 1;
  }

  localStorage.setItem("product", JSON.stringify(shopcart));
};

const removedata = (id) => {
  const checkitem = localStorage.getItem("product");

  if (checkitem) {
    const readd = JSON.parse(checkitem);
    if (id in readd) {
      delete readd[id];
    }
  }
};

export { adtodb, removedata };
