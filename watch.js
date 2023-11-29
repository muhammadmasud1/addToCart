const watchProduct = [
  {
    productName: "UrbanStyle Precision",
    ProductPrice: "$ 10",
    productImage:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular1.png.webp",
  },
  {
    productName: "SportXplorer Smartwatch",
    ProductPrice: "$ 10",
    productImage:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular2.png.webp",
  },
  {
    productName: "Digital Vanguard Watch",
    ProductPrice: "$ 10",
    productImage:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular3.png.webp",
  },
  {
    productName: "TechChrono Fusion",
    ProductPrice: "$ 10",
    productImage:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular4.png.webp",
  },
  {
    productName: "Timepiece Elegance",
    ProductPrice: "$ 10",
    productImage:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular5.png.webp",
  },
  {
    productName: "Horizon Explorer Watch",
    ProductPrice: "$ 40",
    productImage:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular6.png.webp",
  },
  {
    productName: "ChronoMaster 2000",
    ProductPrice: "$ 5",
    productImage:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular2.png.webp",
  },
  {
    productName: "ChronoMaster 2000",
    ProductPrice: "$ 7",
    productImage:
      "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular4.png.webp",
  },
];

function displayProduct() {
  const watchProductId = document.getElementById("watchProduct");
  for (let product of watchProduct) {
    let div = document.createElement("div");
    div.innerHTML = `
              <div class="card w-ful h-full bg-base-100 shadow-xl rounded-lg overflow-hidden">
            <figure><img class="w-full h-full rounded-sm data-te-ripple-init
            border hover:scale-105 transition cursor-pointer" src="${product.productImage}" alt="watch" /></figure>
            <div class="card-body text-center p-0 m-2">
              <h2 class="card-title text-center text-xl mx-auto">${product.productName}</h2>
              <h4 class="card-title text-center  mx-auto">${product.ProductPrice}</h4>
              </div>
              <div class="text-center my-5 flex justify-around">
              <button class="btn btn-outline btn-secondary btn-sm" onclick="addtocart(this)">Add Cart</button>
              <button class="btn btn-outline btn-secondary btn-sm">Details</button>
            </div> 
            </div>
             </div>      
              `;
              
    watchProductId.appendChild(div);
  }
}
displayProduct();

function addtocart(event) {
  const cartAppend = document.getElementById("cartAppend");
  /* console.log(event.parentNode.parentNode.childNodes[1].childNodes[0].src); 
console.log(event.parentNode.parentNode.childNodes[3].childNodes[1]);
console.log(event.parentNode.parentNode.childNodes[3].childNodes[3]); */

  const productImages =
    event.parentNode.parentNode.childNodes[1].childNodes[0].src;
  const productName = event.parentNode.parentNode.childNodes[3].childNodes[1];
  const productPrice = event.parentNode.parentNode.childNodes[3].childNodes[3];

  const div = document.createElement("div");
  div.innerHTML = `
<div class="body-cart flex gap-5" id="addToCart">
<img class="w-24 rounded-md" src="${productImages}" alt="product">
<div class="cart-info"> 
<h3 class="font-semibold text-[16px] my-2">${productName.innerText}</h3>
<h4 class="font-semibold">Price: ${productPrice.innerText}</h4>
</div>
</div>
`;
cartAppend.appendChild(div)
}
addtocart();
