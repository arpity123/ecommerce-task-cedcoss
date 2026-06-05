const products = [
  {
    id: "olive-utility-shacket",
    name: "Olive Utility Shacket",
    category: "New In",
    segment: "women",
    price: 2499,
    mrp: 3299,
    isNew: true,
    isSale: false,
    description:
      "A lightweight cotton-twill shacket made for Indian city weather, with roomy pockets, relaxed shoulders, and a clean utility look for workdays or weekend plans.",
    image: "assets/images/olive-shirt-jacket-front.png",
    gallery: [
      {
        src: "assets/images/olive-shirt-jacket-front.png",
        alt: "Front view of the olive utility shacket",
        label: "Front view",
      },
      {
        src: "assets/images/olive-shirt-jacket-back.png",
        alt: "Back view of the olive utility shacket",
        label: "Back view",
      },
      {
        src: "assets/images/olive-shirt-jacket-detail.png",
        alt: "Close-up detail of the olive utility shacket fabric and buttons",
        label: "Fabric detail",
      },
    ],
    tags: ["Cotton twill", "Relaxed fit", "Ships across India"],
  },
  {
    id: "black-cropped-bomber",
    name: "Black Cropped Bomber Jacket",
    category: "Women",
    segment: "women",
    price: 2299,
    mrp: 2999,
    isNew: true,
    isSale: false,
    description:
      "A cropped bomber jacket with ribbed trims, zip front, and a sharp streetwear finish for denim, skirts, and easy evening looks.",
    image: "assets/images/midnight-cropped-bomber.png",
    tags: ["Cropped length", "Light lining", "City-ready"],
  },
  {
    id: "ivory-ribbed-top",
    name: "Ivory Ribbed Knit Top",
    category: "Women",
    segment: "women",
    price: 999,
    mrp: 1499,
    isNew: false,
    isSale: true,
    description:
      "A soft ribbed knit top with stretch recovery and a neat neckline. Easy to style with trousers, jeans, saree skirts, or layered jackets.",
    image: "assets/images/ivory-ribbed-knit-top.png",
    tags: ["Stretch rib", "Slim fit", "Soft handfeel"],
  },
  {
    id: "charcoal-wide-leg-trousers",
    name: "Charcoal Wide Leg Trousers",
    category: "Workwear",
    segment: "women",
    price: 1899,
    mrp: 2499,
    isNew: false,
    isSale: true,
    description:
      "Polished wide-leg trousers with a clean waistband and fluid drape, designed for office days, college presentations, and dinner plans.",
    image: "assets/images/charcoal-wide-leg-trouser.png",
    tags: ["Wide leg", "Soft drape", "Office-ready"],
  },
  {
    id: "indigo-denim-overshirt",
    name: "Indigo Denim Overshirt",
    category: "Men",
    segment: "men",
    price: 1999,
    mrp: 2799,
    isNew: true,
    isSale: false,
    description:
      "A relaxed denim overshirt with sturdy seams and chest pockets. Wear it over a tee for metro commutes, cafe plans, or casual Fridays.",
    image: "assets/images/washed-denim-overshirt.png",
    tags: ["Washed denim", "Oversized", "Layering piece"],
  },
  {
    id: "black-satin-midi-skirt",
    name: "Black Satin Midi Skirt",
    category: "Women",
    segment: "women",
    price: 1499,
    mrp: 1999,
    isNew: false,
    isSale: true,
    description:
      "A smooth satin midi skirt with elegant movement, made for festive dinners, brunches, and polished everyday styling.",
    image: "assets/images/black-satin-midi-skirt.png",
    tags: ["Midi length", "Satin finish", "Easy movement"],
  },
  {
    id: "khaki-cargo-skirt",
    name: "Khaki Cargo Mini Skirt",
    category: "Women",
    segment: "women",
    price: 1299,
    mrp: 1799,
    isNew: false,
    isSale: false,
    description:
      "A structured cargo skirt with practical side pockets and a utility-inspired shape that pairs well with tees, shirts, and sneakers.",
    image: "assets/images/khaki-cargo-mini-skirt.png",
    tags: ["Cargo pockets", "Structured", "Utility look"],
  },
  {
    id: "sky-blue-linen-shirt",
    name: "Sky Blue Linen Blend Shirt",
    category: "Men",
    segment: "men",
    price: 1399,
    mrp: 1899,
    isNew: true,
    isSale: false,
    description:
      "A breathable linen-blend shirt in a relaxed fit, made for Indian summers, office layering, and weekend travel.",
    image: "assets/images/sky-linen-blend-shirt.png",
    tags: ["Linen blend", "Breathable", "Summer-ready"],
  },
  {
    id: "stone-quilted-nehru-vest",
    name: "Stone Quilted Nehru Vest",
    category: "Men",
    segment: "men",
    price: 2199,
    mrp: 2999,
    isNew: false,
    isSale: true,
    description:
      "A modern quilted vest with a clean collarless shape inspired by Indian layering. Works over shirts, kurtas, or lightweight knits.",
    image: "assets/images/stone-quilted-vest.png",
    tags: ["Quilted", "Layering vest", "Modern Indian fit"],
  },
  {
    id: "rose-cotton-hoodie",
    name: "Rose Cotton Blend Hoodie",
    category: "New In",
    segment: "women",
    price: 1599,
    mrp: 2199,
    isNew: true,
    isSale: false,
    description:
      "A soft cotton-blend hoodie with a relaxed hood, kangaroo pocket, and cosy ribbed trims for campus, travel, and off-duty days.",
    image: "assets/images/rose-cotton-blend-hoodie.png",
    tags: ["Cotton blend", "Relaxed comfort", "Ribbed trims"],
  },
];



const availableImages = [
  "assets/images/black-satin-midi-skirt.png",
  "assets/images/charcoal-wide-leg-trouser.png",
  "assets/images/ivory-ribbed-knit-top.png",
  "assets/images/khaki-cargo-mini-skirt.png",
  "assets/images/midnight-cropped-bomber.png",
  "assets/images/olive-shirt-jacket-back.png",
  "assets/images/olive-shirt-jacket-detail.png",
  "assets/images/olive-shirt-jacket-front.png",
  "assets/images/rose-cotton-blend-hoodie.png",
  "assets/images/sky-linen-blend-shirt.png",
  "assets/images/stone-quilted-vest.png",
  "assets/images/washed-denim-overshirt.png",
];


const pageContent = {
  home: {
    eyebrow: "Fresh Picks",
    title: "Shop TrendZone",
    copy: "Curated layers, soft essentials, and polished everyday pieces with India-friendly prices.",
    filter: () => true,
  },
  new: {
    eyebrow: "Latest Drops",
    title: "New In",
    copy: "Fresh arrivals selected for everyday Indian wardrobes.",
    filter: (product) => product.isNew,
  },
  women: {
    eyebrow: "TrendZone Women",
    title: "Women",
    copy: "Easy tops, skirts, layers, and everyday pieces for office, college, and weekend plans.",
    filter: (product) => product.segment === "women",
  },
  men: {
    eyebrow: "TrendZone Men",
    title: "Men",
    copy: "Clean shirts, overshirts, and layering pieces built for Indian weather.",
    filter: (product) => product.segment === "men",
  },
  sale: {
    eyebrow: "Limited Offers",
    title: "Sale",
    copy: "Marked-down favourites with clear Indian pricing.",
    filter: (product) => product.isSale,
  },
};


const storefront = document.querySelector("#storefront");
const storefrontEyebrow = document.querySelector("#storefrontEyebrow");
const storefrontTitle = document.querySelector("#storefrontTitle");
const storefrontCopy = document.querySelector("#storefrontCopy");
const productDetail = document.querySelector("#productDetail");
const cartPage = document.querySelector("#cartPage");
const productGrid = document.querySelector("#productGrid");
const homeLink = document.querySelector("#homeLink");
const navLinks = document.querySelectorAll(".nav-link");
const cartButton = document.querySelector("#cartButton");
const backButton = document.querySelector("#backButton");
const continueShopping = document.querySelector("#continueShopping");
const mainImage = document.querySelector("#mainImage");
const thumbnailRow = document.querySelector("#thumbnailRow");
const productCategory = document.querySelector("#productCategory");
const productTitle = document.querySelector("#productTitle");
const productPrice = document.querySelector("#productPrice");
const productDescription = document.querySelector("#productDescription");
const productMeta = document.querySelector("#productMeta");
const addToCart = document.querySelector("#addToCart");
const cartMessage = document.querySelector("#cartMessage");
const cartCount = document.querySelector("#cartCount");
const cartItems = document.querySelector("#cartItems");
const subtotalAmount = document.querySelector("#subtotalAmount");
const deliveryAmount = document.querySelector("#deliveryAmount");
const totalAmount = document.querySelector("#totalAmount");
const checkoutForm = document.querySelector("#checkoutForm");
const orderMessage = document.querySelector("#orderMessage");



let activeProduct = products[0];
let activeView = "home";
let cart = [];

function formatINR(amount) {
  return `Rs. ${amount.toLocaleString("en-IN")}`;
}

function getGallery(product) {
  if (product.gallery && Array.isArray(product.gallery) && product.gallery.length)
    return product.gallery;

  // Build a gallery from available image files following a naming convention.
  // e.g. base.png -> base-front.png, base-back.png, base-detail.png
  const imagePath = product.image;
  const fileName = imagePath.split("/").pop();
  let base = fileName.replace(/\.[^/.]+$/, "");
  // normalize base by removing common trailing angle suffixes
  base = base.replace(/-(front|back|detail|alt|\d+)$/i, "");
  const extMatch = fileName.match(/\.[^/.]+$/);
  const ext = extMatch ? extMatch[0] : ".png";

  const suffixes = ["-front", "-back", "-detail", "-alt", "-1"];
  const gallery = [];

  // Always include the primary image first
  gallery.push({ src: imagePath, alt: `${product.name} product photo`, label: "Front view" });

  for (const s of suffixes) {
    const candidatePng = `assets/images/${base}${s}${ext}`;
    const candidateSvg = `assets/images/${base}${s}.svg`;
    if (availableImages.includes(candidatePng)) {
      gallery.push({ src: candidatePng, alt: `${product.name} ${s.replace("-", "")} view`, label: "Alternate view" });
    } else if (availableImages.includes(candidateSvg)) {
      gallery.push({ src: candidateSvg, alt: `${product.name} ${s.replace("-", "")} view`, label: "Alternate view" });
    }
  }

  // Ensure we return at least 3 items (duplicate primary image if no alternates exist)
  while (gallery.length < 3) {
    gallery.push({ src: imagePath, alt: `${product.name} detail view`, label: "Detail view" });
  }

  return gallery;
}


function priceMarkup(product) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const saleBadge = product.isSale ? `<span class="sale-badge">${discount}% off</span>` : "";

  return `
    <span class="current-price">${formatINR(product.price)}</span>
    <span class="mrp">${formatINR(product.mrp)}</span>
    ${saleBadge}
  `;
}

function showOnly(section) {
  storefront.classList.toggle("is-hidden", section !== "storefront");
  productDetail.classList.toggle("is-hidden", section !== "detail");
  cartPage.classList.toggle("is-hidden", section !== "cart");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setActiveNav(view) {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.view === view);
  });
}

function renderProducts(view = "home") {
  const page = pageContent[view];
  const visibleProducts = products.filter(page.filter);

  activeView = view;
  storefrontEyebrow.textContent = page.eyebrow;
  storefrontTitle.textContent = page.title;
  storefrontCopy.textContent = page.copy;
  setActiveNav(view);

  productGrid.innerHTML = visibleProducts
    .map(
      (product) => `
        <button class="product-card" type="button" data-product-id="${product.id}">
          <span class="product-card-image">
            <img src="${product.image}" alt="${product.name}" />
            ${product.isNew ? '<span class="corner-badge">New</span>' : ""}
            ${product.isSale ? '<span class="corner-badge sale">Sale</span>' : ""}
          </span>
          <span class="product-card-copy">
            <span class="product-card-category">${product.category}</span>
            <span class="product-card-name">${product.name}</span>
            <span class="product-card-price">${priceMarkup(product)}</span>
          </span>
        </button>
      `
    )
    .join("");

  showOnly("storefront");
}

function selectGalleryImage(button) {
  const thumbnails = thumbnailRow.querySelectorAll(".thumbnail");

  thumbnails.forEach((item) => {
    item.classList.remove("is-active");
    item.removeAttribute("aria-current");
  });

  button.classList.add("is-active");
  button.setAttribute("aria-current", "true");
  mainImage.src = button.dataset.image;
  mainImage.alt = button.dataset.alt;
}

function renderDetail(product) {
  const gallery = getGallery(product);

  activeProduct = product;
  productCategory.textContent = product.category;
  productTitle.textContent = product.name;
  productPrice.innerHTML = priceMarkup(product);
  productDescription.textContent = product.description;
  productMeta.innerHTML = product.tags.map((tag) => `<span>${tag}</span>`).join("");
  cartMessage.textContent = "";

  mainImage.src = gallery[0].src;
  mainImage.alt = gallery[0].alt;
  thumbnailRow.innerHTML = gallery
    .map(
      (image, index) => `
        <button
          class="thumbnail ${index === 0 ? "is-active" : ""}"
          type="button"
          data-image="${image.src}"
          data-alt="${image.alt}"
          aria-label="Show ${image.label}"
          ${index === 0 ? 'aria-current="true"' : ""}
        >
          <img src="${image.src}" alt="" aria-hidden="true" />
        </button>
      `
    )
    .join("");

  showOnly("detail");
}

function updateCartCount() {
  cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

function cartSubtotal() {
  return cart.reduce((total, item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return total + product.price * item.quantity;
  }, 0);
}

function addActiveProductToCart() {
  const selectedSize = document.querySelector('input[name="size"]:checked').value;
  const existingItem = cart.find(
    (item) => item.productId === activeProduct.id && item.size === selectedSize
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      productId: activeProduct.id,
      size: selectedSize,
      quantity: 1,
    });
  }

  updateCartCount();
  cartMessage.textContent = `Added ${activeProduct.name}, size ${selectedSize}, to your bag.`;
}

function renderCart() {
  const subtotal = cartSubtotal();
  const delivery = subtotal === 0 || subtotal >= 1999 ? 0 : 99;
  const total = subtotal + delivery;

  setActiveNav("");
  orderMessage.textContent = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <h2>Your bag is empty</h2>
        <p>Explore TrendZone India and add your favourite pieces.</p>
      </div>
    `;
    checkoutForm.classList.add("is-disabled");
    checkoutForm
      .querySelectorAll("input, button")
      .forEach((field) => field.setAttribute("disabled", ""));
  } else {
    cartItems.innerHTML = cart
      .map((item) => {
        const product = products.find((entry) => entry.id === item.productId);

        return `
          <article class="cart-item" data-product-id="${item.productId}" data-size="${item.size}">
            <img src="${product.image}" alt="${product.name}" />
            <div>
              <p class="cart-item-name">${product.name}</p>
              <p class="cart-item-meta">Size ${item.size} | ${formatINR(product.price)}</p>
              <div class="quantity-control" aria-label="Quantity controls">
                <button type="button" data-action="decrease">-</button>
                <span>${item.quantity}</span>
                <button type="button" data-action="increase">+</button>
              </div>
            </div>
            <strong>${formatINR(product.price * item.quantity)}</strong>
            <button class="remove-button" type="button" data-action="remove">Remove</button>
          </article>
        `;
      })
      .join("");
    checkoutForm.classList.remove("is-disabled");
    checkoutForm
      .querySelectorAll("input, button")
      .forEach((field) => field.removeAttribute("disabled"));
  }

  subtotalAmount.textContent = formatINR(subtotal);
  deliveryAmount.textContent = delivery === 0 ? "Free" : formatINR(delivery);
  totalAmount.textContent = formatINR(total);
  showOnly("cart");
}

function updateCartItem(target) {
  const itemElement = target.closest(".cart-item");

  if (!itemElement) {
    return;
  }

  const item = cart.find(
    (entry) =>
      entry.productId === itemElement.dataset.productId &&
      entry.size === itemElement.dataset.size
  );

  if (!item) {
    return;
  }

  if (target.dataset.action === "increase") {
    item.quantity += 1;
  }

  if (target.dataset.action === "decrease") {
    item.quantity -= 1;
  }

  if (target.dataset.action === "remove" || item.quantity < 1) {
    cart = cart.filter((entry) => entry !== item);
  }

  updateCartCount();
  renderCart();
}

function placeOrder(event) {
  event.preventDefault();

  if (cart.length === 0) {
    orderMessage.textContent = "Your bag is empty.";
    return;
  }

  const name = document.querySelector("#customerName").value.trim();
  const city = document.querySelector("#customerCity").value.trim();

  orderMessage.textContent = `Thanks ${name}. Your TrendZone order for ${formatINR(
    cartSubtotal()
  )} will be prepared for delivery in ${city}.`;
  cart = [];
  updateCartCount();
  checkoutForm.reset();
  renderCart();
  orderMessage.textContent = `Thanks ${name}. Your TrendZone order has been placed for delivery in ${city}.`;
}

renderProducts("home");

productGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".product-card");

  if (!card) {
    return;
  }

  const product = products.find((item) => item.id === card.dataset.productId);
  renderDetail(product);
});

thumbnailRow.addEventListener("click", (event) => {
  const thumbnail = event.target.closest(".thumbnail");

  if (thumbnail) {
    selectGalleryImage(thumbnail);
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    renderProducts(link.dataset.view);
  });
});

addToCart.addEventListener("click", addActiveProductToCart);
cartButton.addEventListener("click", renderCart);
cartItems.addEventListener("click", (event) => {
  if (event.target.dataset.action) {
    updateCartItem(event.target);
  }
});
checkoutForm.addEventListener("submit", placeOrder);

backButton.addEventListener("click", () => renderProducts(activeView));
continueShopping.addEventListener("click", () => renderProducts(activeView));
homeLink.addEventListener("click", (event) => {
  event.preventDefault();
  renderProducts("home");
});
