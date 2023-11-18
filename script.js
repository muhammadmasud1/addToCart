const productList = [
  {
    productName: "High-Performance Blender",
    productDescription:
      "Blend smoothies, soups, and more with this powerful blender.",
    productImage:
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=1505&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productPrice: 129.99,
  },
  {
    productName: "Wireless Earbuds",
    productDescription:
      "Enjoy immersive audio with these comfortable wireless earbuds.",
    productImage:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productPrice: 89.99,
  },
  {
    productName: "Digital Drawing Tablet",
    productDescription:
      "Unleash your artistic skills with this advanced digital drawing tablet.",
    productImage:
      "https://plus.unsplash.com/premium_photo-1673968280707-3b6183d45ff1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productPrice: 199.99,
  },
  {
    productName: "Home Security Camera",
    productDescription:
      "Keep your home secure with this smart and reliable security camera.",
    productImage:
      "https://images.unsplash.com/photo-1670278458254-0df3f72ab093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG9tZSUyMFNlY3VyaXR5JTIwQ2FtZXJhfGVufDB8fDB8fHww",
    productPrice: 79.99,
  },
  {
    productName: "Smart Thermostat",
    productDescription:
      "Control your home's temperature with this energy-efficient smart thermostat.",
    productImage:
      "https://plus.unsplash.com/premium_photo-1663090051331-0da485edbd5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnQlMjBUaGVybW9zdGF0fGVufDB8fDB8fHww",
    productPrice: 149.99,
  },
  {
    productName: "Electric Toothbrush",
    productDescription:
      "Achieve a brighter smile with this high-tech electric toothbrush.",
    productImage:
      "https://images.unsplash.com/photo-1559591937-abc5678da6ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWxlY3RyaWMlMjBUb290aGJydXNofGVufDB8fDB8fHww",
    productPrice: 39.99,
  },
  {
    productName: "Wireless Charging Pad",
    productDescription:
      "Conveniently charge your devices with this sleek wireless charging pad.",
    productImage:
      "https://images.unsplash.com/photo-1678733404598-d56e3d232483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V2lyZWxlc3MlMjBDaGFyZ2luZyUyMFBhZHxlbnwwfHwwfHx8MA%3D%3D",
    productPrice: 29.99,
  },
  {
    productName: "Portable Projector",
    productDescription:
      "Turn any space into a home theater with this compact portable projector.",
    productImage:
      "https://images.unsplash.com/photo-1528395874238-34ebe249b3f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGFibGUlMjBwcm9qZWN0b3J8ZW58MHx8MHx8fDA%3D",
    productPrice: 199.99,
  },
  {
    productName: "Smart Doorbell",
    productDescription:
      "Enhance your home security with this feature-rich smart doorbell.",
    productImage:
      "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFNtYXJ0JTIwRG9vcmJlbGx8ZW58MHx8MHx8fDA%3D",
    productPrice: 129.99,
  },
  {
    productName: "Fitness Smart Scale",
    productDescription:
      "Track your fitness progress with this smart and accurate fitness scale.",
    productImage:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Rml0bmVzcyUyMFNtYXJ0JTIwU2NhbGV8ZW58MHx8MHx8fDA%3D",
    productPrice: 49.99,
  },
    {
    productName: "Cordless Vacuum Cleaner",
    productDescription: "Clean every corner of your home with this lightweight and powerful cordless vacuum cleaner.",
    productImage: "https://plus.unsplash.com/premium_photo-1677234147504-458d296b0113?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productPrice: 149.99
  },
  {
    productName: "Gaming Keyboard",
    productDescription: "Dominate your gaming sessions with this responsive and customizable gaming keyboard.",
    productImage: "https://images.unsplash.com/photo-1629429409772-20bcd53917d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEdhbWluZyUyMEtleWJvYXJkfGVufDB8fDB8fHww",
    productPrice: 79.99
  }
];

function displayProduct() {
  const productContainer = document.getElementById("productContainer");
  for (let product of productList) {
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="antialiased text-gray-900 cursor-pointer">         
     <div class="bg-white rounded-lg overflow-hidden shadow-2xl">       
       <img class="h-48 w-full object-cover object-end transition-all hover:scale-105" src="${product.productImage}" alt="Home in Countryside" />
       <div class="p-6">
         <div class="flex items-baseline">
           <span class="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">New</span>
           <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
             3 beds &bull; 2 baths
           </div>
         </div>
         <h4 class="mt-2 font-semibold leading-tight truncate">${product.productName}</h4>
         <h4 class="mt-2 font-semibold leading-tight truncate">${product.productDescription}</h4>
 
         <div class="mt-1">
           <span>$${product.productPrice}</span>
           <span class="text-gray-600 text-sm">/ Per</span>
         </div>
         <div class="mt-2 flex items-center">
           <span class="text-teal-600 font-semibold">
             <span>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="far fa-star"></i>
               <span>
               </span>
               <span class="ml-2 text-gray-600 text-sm">34 reviews</span>
         </div>
         <button onclick="handleBtn(this)" class="btn bg-[#99F6E4] btn-md mt-2 font-semibold text-[16px]
         hover:bg-red-400 ">Add Cart</button>
     </div>
   </div>

 </div>
     
     `;
    productContainer.appendChild(div);
  }
}
displayProduct();

function handleBtn(event) {
  const cartShow = document.getElementById("cartAppend");
  /*  console.log(event.parentNode.parentNode.childNodes[1].src);
 console.log(event.parentNode.childNodes[3].innerText);
 console.log(event.parentNode.childNodes[5].innerText);
 console.log(event.parentNode.childNodes[7].childNodes[1]); */

  const imagesShow = event.parentNode.parentNode.childNodes[1].src;
  const nameShow = event.parentNode.childNodes[3];
  const desShow = event.parentNode.childNodes[5];
  const priceShow = event.parentNode.childNodes[7].childNodes[1];
  console.log(nameShow);

  const div = document.createElement("div");
 /*  div.classList = "card-body"; */
  div.innerHTML = `
  <div class="body-cart flex gap-5" id="addToCart">
  <img class="w-24 rounded-md" src="${imagesShow}" alt="product">
  <div class="cart-info"> 
  <h3 class="font-semibold text-[16px] my-2">${nameShow.innerText}</h3>
  <h4 class="font-semibold">Price: ${priceShow.innerText}</h4>
  </div>
</div>
  `;
  cartShow.appendChild(div)
}
