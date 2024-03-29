let products = [
  {
    name: "Chair & Table",
    headline: "A set of table and chair",
    image:
      "https://images.unsplash.com/photo-1594000311835-6d564e5a46b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
    price: "100",
  },
  {
    name: "Laptop",
    headline: "A smooth laptop",
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1200",
  },
  {
    name: "Ipad",
    headline: "Apple ipad",
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "120",
  },
];

let populars = [
  {
    name: "Chair & Table",
    headline: "A set of table and chair",
    image:
      "https://images.unsplash.com/photo-1594000311835-6d564e5a46b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
    price: "100",
  },
  {
    name: "Laptop",
    headline: "A smooth laptop",
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1200",
  },
  {
    name: "Ipad",
    headline: "Apple ipad",
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "120",
  },
];

let cart = [];

const handleShowProducts = () => {
  let clutter = "";
  let productsDiv = document.querySelector(".products");

  products.forEach((product, index) => {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden"> <img class = "w-full h-full object-cover"src = ${product.image}/></div>
        <div class="data w-full px-2 py-5">
          <h1 class="font-semibold text-xl leading-none tracking-tight">
            ${product.name}
          </h1>
          <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
              <h3 class="font-semibold opacity-20">${product.headline}</h3>
              <h4 class="font-semibold mt-2">$${product.price}</h4>
            </div>
            <button data-index = "${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
              <i data-index = "${index}" class="add ri-add-line"></i>
            </button>
          </div>
        </div>
      </div>`;
  });

  productsDiv.innerHTML = clutter;
};

const handlePopularProducts = () => {
  let clutter = "";
  populars.forEach((popular) => {
    clutter += `<div
        class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0"
      >
        <div
          class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden"
        >
          <img
            class="w-full h-full object-cover"
            src=${popular.image}
            alt=""
          />
        </div>
        <div class="data py-2 w-full">
          <h1 class="leading-none font-semibold">${popular.name}</h1>
          <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
           ${popular.headline}
          </h4>
          <h4 class="mt-3 font-semibold text-zinc-500">$${popular.price}</h4>
        </div>
      </div> `;
  });

  document.querySelector(".populars").innerHTML = clutter;
};

const addToCart = () => {
  document.querySelector(".products").addEventListener("click", (dets) => {
    if (dets.target.classList.contains("add")) {
      cart.push(products[dets.target.dataset.index]);
    }
  });
};

const showCarts = () => {
  document.querySelector(".carticon").addEventListener("click", () => {
    let clutter = "";
    document.querySelector(".cartexpnd").style.display = "block";
    cart.forEach((product) => {
      clutter += `<div class = "flex gap-2 bg-white p-2 rounded-lg">
      <div class = "w-10 h-10 flex-shrink-0 rounded-lg bg-red-500 overflow-hidden"> <img class = "w-full h-full object-cover" src = ${product.image}/></div>
      <div>
        <h3 class = "font-semibold">${product.name}</h3>
        <h5 class = "text-sm font-semibold opacity-80">$${product.price}</h5>
      </div>
      </div>`;
    });

    // console.log(clutter)
    document.querySelector(".cartexpnd").innerHTML = clutter;
  });

  document.querySelector(".carticon").addEventListener("dblclick", () => {
    document.querySelector(".cartexpnd").style.display = "none";
  });
};

handleShowProducts();
handlePopularProducts();
addToCart();
showCarts();
