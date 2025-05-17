window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > document.getElementById("cover").offsetHeight - 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});






const images = {
    mascaraExtreme: ["essence mascara- extreme- 1.avif", "essence mascara- extreme- 2.avif", "essence mascara- extreme- 3.avif"],
    mascaraPrincess: ["essence mascara- princess- 1.avif", "essence mascara- princess- 2.avif", "essence mascara- princess- 3.avif"],
    Set: ["essence set- 1.avif", "essence set- 2.avif"],
    Pallete: ["essence shadow- pallete- 1.avif", "essence shadow- pallete- 2.avif"],

    foundation: ["essence foundation-1.avif", "essence foundation-2.avif", "essence foundation-3.avif", "essence foundation-4.avif"],
    blush: ["essence blush-1.avif", "essence blush-2.avif", "essence blush-3.avif", "essence blush-4.avif"],
    concealer: ["essence concelear-1.avif", "essence concelear-2.avif", "essence concelear-3.avif"],
    highlighter: ["essence highlighter-1.avif", "essence highlighter-2.avif"],

    Tint: ["essence tint-1.avif", "essence tint-2.avif", "essence tint-3.avif"],
    Tattoo: ["essence tattoo-1.avif", "essence tattoo-2.avif"],
    Gloss: ["essence gloss-1.avif", "essence gloss-2.avif", "essence gloss-3.avif"],
    Liner: ["essence liner-1.avif", "essence liner-2.avif", "essence liner-3.avif"]
};

const productImages = document.querySelectorAll(".product-box .product-image");
let currentIndexes = {}; // Track rotation for each product

Object.keys(images).forEach((key) => {
    currentIndexes[key] = 0;
});

// **Instant Image Swap (Every 2 Seconds)**
setInterval(() => {
    productImages.forEach((img, index) => {
        const productKeys = Object.keys(images);
        const productName = productKeys[index];

        currentIndexes[productName] = (currentIndexes[productName] + 1) % images[productName].length;
        img.src = images[productName][currentIndexes[productName]];
    });
}, 2000);

