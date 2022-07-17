let images1 = [
  "./assets/images/image-product-1.jpg",
  "./assets/images/image-product-2.jpg",
  "./assets/images/image-product-3.jpg",
  "./assets/images/image-product-4.jpg",
  "./assets/images/image-product-1.jpg",
];

let headerimg = document.querySelector(".p1");

let a = document.querySelector(".lightbox");

headerimg.addEventListener("click", () => {
  a.style.transform = "translateY(0%)";

  console.log("hello");
});

document.querySelector(".lboxclose").addEventListener("click",()=>{
  a.style.transform = "translateY(-100%)";
  
})


let quan = document.getElementById("quan");
quan.style.display = "none";

let showBtn = document.querySelector(".cart");

let addBtn = document.getElementById("addBtn");

let value = document.getElementById("val");

let minusBtn = document.getElementById("minusBtn");

let details = document.getElementById("details");
details.style.display = "none";

let addToCart = document.querySelector(".adcbtn");

let checkout = document.querySelector("checkout");

// let cartimg = document.querySelector(".cartimg")

let ccart = document.querySelector(".ccart");

let previousBtn = document.querySelector(".prevbtn");

let nextBtn = document.querySelector(".nextbtn");

let i = 0;

document.querySelector(".ip1").addEventListener("click", () => {
  headerimg.src = images1[0];
});
document.querySelector(".ip2").addEventListener("click", () => {
  headerimg.src = images1[1];
});

document.querySelector(".ip3").addEventListener("click", () => {
  headerimg.src = images1[2];
});
document.querySelector(".ip4").addEventListener("click", () => {
  headerimg.src = images1[3];
});

lightBoxImg = document.querySelector(".lbfirstimage");

document.querySelector(".thumb-image1").addEventListener("click", () => {
  lightBoxImg.src = images1[0];
});

document.querySelector(".thumb-image2").addEventListener("click", () => {
  lightBoxImg.src = images1[1];
});

document.querySelector(".thumb-image3").addEventListener("click", () => {
  lightBoxImg.src = images1[2];
});

document.querySelector(".thumb-image4").addEventListener("click", () => {
  lightBoxImg.src = images1[3];
});

nextBtn.addEventListener("click", () => {
  i = i + 1;
  headerimg.src = images1[i];

  if (i == images1.length - 1) {
    i = 0;
  }
  previousBtn.disabled = false;

  console.log(i);
});

previousBtn.addEventListener("click", () => {
  if (i <= 0) {
    previousBtn.disabled = true;
  }
  if (i > 0) {
    previousBtn.disabled = false;

    i = i - 1;
    headerimg.src = images1[i];
  }
  console.log(i);
});

let thum1img = "./assets/images/image-product-1-thumbnail.jpg";

// cartimg.img.src = thum1img

function clear() {
  console.log("hello");
}
addToCart.addEventListener("click", () => {
  quan.textContent = value.textContent;
  console.log(quan.textContent);
  let firstamt = "$125.00 x " + quan.textContent;

  if (quan.textContent > 0) {
    quan.style.display = "block";
    ccart.innerHTML = `<div style="display: flex" class="cartcontent">
    <img
      src="${thum1img}"
      alt=""
      class="cartimg"
    />

      <p class="firstc-text">Fall limited Edition Sneakers</p>
      <p class="ttl" style = "position: absolute; top 30px; left: 80px;">
<br>
      ${firstamt}
      </p>
      <p class="tamt" style="position: absolute;   top 90px; left: 150px;"> <br> ${
        "$" + quan.textContent * 125 + ".00"
      }</p>
    
    <img src="${"./assets/images/icon-delete.svg"}" alt="" id="delete" >
  </div>
  <button class="checkout">Checkout</button>
  `;

    document.getElementById("delete").addEventListener("click", () => {
      ccart.innerHTML = `<p align="center">your cart is empty</p>`;

      quan.style.display = "none";
    });
  }
  if (quan.textContent <= 0) {
    quan.style.display = "none";
  }

  value.textContent = 0;
});

showBtn.addEventListener("click", () => {
  if (details.style.display == "none") {
    details.style.display = "block";
  } else if (details.style.display == "block") {
    details.style.display = "none";
  }
});

addBtn.addEventListener("click", () => {
  value.textContent++;
});

minusBtn.addEventListener("click", () => {
  if (value.textContent == 0) {
    value.textContent = 0;
  } else {
    value.textContent--;
  }
});

let menu = document.querySelector(".menuicon");

let sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", () => {
  sidebar.style.transform = "translate(-5vw)";

  document.body.style.color = "rgba(0,0,0,0.8)";
});

let sidebarBtn = document.querySelector(".sidebarbtn");

sidebar.addEventListener("click", () => {
  sidebar.style.transform = "translate(-100vw)";
});


