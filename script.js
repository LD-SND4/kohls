// Dynamic Values Object
const dynamic_values = {
    F1_Background_img: "1023_HolidayEvent_size",
    Carousel_Background_img: "1023_Tile1_Active_size",
    Tile1_1_img: "https://media.kohlsimg.com/is/image/kohls/3583733_Black_White?wid=240&hei=240&op_sharpen=1",
    Tile1_2_img: "https://media.kohlsimg.com/is/image/kohls/5239528_Gray_Heather?wid=240&hei=240&op_sharpen=1",
    Tile2_1_img: "https://media.kohlsimg.com/is/image/kohls/4703531_Brown?wid=240&hei=240&op_sharpen=1",
    Tile2_2_img: "https://media.kohlsimg.com/is/image/kohls/5023411_Black?wid=240&hei=240&op_sharpen=1",
    Tile3_1_img: "https://media.kohlsimg.com/is/image/kohls/4887344_Blue_Sea_Coral?wid=240&hei=240&op_sharpen=1",
    Tile3_2_img: "https://media.kohlsimg.com/is/image/kohls/3910431_Red?wid=240&hei=240&op_sharpen=1",
    Tile4_1_img: "https://media.kohlsimg.com/is/image/kohls/6494507_Manolo_Olive?wid=240&hei=240&op_sharpen=1",
    Tile4_2_img: "https://media.kohlsimg.com/is/image/kohls/6530242_Peach_Dye?wid=240&hei=240&op_sharpen=1",
    Tile1_Image1_txt: "shoes",
    Tile1_Image2_txt: "hoodies",
    Tile2_Image1_txt: "chair",
    Tile2_Image2_txt: "hat",
    Tile3_Image1_txt: "ladies",
    Tile3_Image2_txt: "stocking",
    Tile4_Image1_txt: "toaster",
    Tile4_Image2_txt: "pot",
    logoClick_url: "https://www.kohls.com",
    backgroundClick_url: "https://www.kohls.com",
    Data_URL: "https://fm.flashtalking.com/feed/591/hybrid/trending_events"
};

// Mock Products Data
const mockProducts = [
    {
        "activewear": "0",
        "additional_image_link": "https://media.kohlsimg.com/is/image/kohls/6530242_Peach_Dye?wid=150&hei=150&op_sharpen=1",
        "age_group": "adult",
        "availability": "in stock",
        "brand": "Sonoma Goods For Life",
        "color": "Peach Dye",
        "condition": "new",
        "gtin": "400496656802",
        "id": "49665680",
        "image_link": "https://media.kohlsimg.com/is/image/kohls/6530242_Peach_Dye?wid=800&hei=800&op_sharpen=1",
        "link": "https://www.kohls.com/product/prd-6530242/womens-sonoma-goods-for-life-short-sleeve-crew-tee.jsp?skuid=49665680",
        "price": "9.99 USD",
        "sale_price": "7.99 USD",
        "size": "Xxl",
        "title": "Women's Sonoma Goods For Life Short-Sleeve Crew Tee"
    },
    {
        "id": "49665681",
        "image_link": "https://media.kohlsimg.com/is/image/kohls/3583733_Black_White?wid=800&hei=800&op_sharpen=1",
        "title": "Nike Running Shoes - Black/White",
        "price": "89.99 USD",
        "sale_price": "69.99 USD",
        "link": "https://www.kohls.com/product/prd-3583733",
        "brand": "Nike"
    },
    {
        "id": "49665682",
        "image_link": "https://media.kohlsimg.com/is/image/kohls/4703531_Brown?wid=800&hei=800&op_sharpen=1",
        "title": "Modern Accent Chair - Brown",
        "price": "299.99 USD",
        "sale_price": "199.99 USD",
        "link": "https://www.kohls.com/product/prd-4703531",
        "brand": "Furniture Collection"
    }
];

// DOM Elements
const mainFrame = document.getElementById('main-frame');
const greenCheck = document.getElementById('green-check');
const carouselFrame = document.getElementById('carousel-frame');
const backBtn = document.getElementById('back-btn');
const tiles = document.querySelectorAll('.tile');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');
const carousel = document.querySelector('.carousel-content');

let currentSlide = 0;
let isAnimating = false;

// Initialize tile images and text
function initializeTiles() {
    tiles.forEach((tile, index) => {
        const img1 = tile.querySelector('.tile-img');
        const img2 = tile.querySelector('.tile-img-2');
        const text = tile.querySelector('.tile-text');
        
        // Set initial images
        img1.src = dynamic_values[`Tile${index + 1}_1_img`];
        img2.src = dynamic_values[`Tile${index + 1}_2_img`];
        text.textContent = dynamic_values[`Tile${index + 1}_Image1_txt`].toUpperCase();
    });
}

// Animate single tile
function animateTile(index) {
    return new Promise(resolve => {
        const tile = tiles[index];
        const img1 = tile.querySelector('.tile-img');
        const img2 = tile.querySelector('.tile-img-2');
        const text = tile.querySelector('.tile-text');

        img1.style.opacity = '0';
        img2.style.opacity = '1';
        text.textContent = dynamic_values[`Tile${index + 1}_Image2_txt`].toUpperCase();

        setTimeout(resolve, 500);
    });
}

// Sequential tile animation
async function startTileAnimation() {
    if (isAnimating) return;
    isAnimating = true;

    // Green check animation
    greenCheck.style.transform = 'scale(1.2)';
    await new Promise(resolve => setTimeout(resolve, 300));
    greenCheck.style.transform = 'scale(1)';
    await new Promise(resolve => setTimeout(resolve, 200));

    // Reset all tiles to initial state
    tiles.forEach((tile, index) => {
        const img1 = tile.querySelector('.tile-img');
        const img2 = tile.querySelector('.tile-img-2');
        const text = tile.querySelector('.tile-text');
        
        img1.style.opacity = '1';
        img2.style.opacity = '0';
        text.textContent = dynamic_values[`Tile${index + 1}_Image1_txt`].toUpperCase();
    });

    // Animate tiles sequentially
    for (let i = 0; i < tiles.length; i++) {
        await animateTile(i);
        await new Promise(resolve => setTimeout(resolve, 300));
    }

    // Wait before opening carousel
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Open carousel after animation
    openCarousel();
    isAnimating = false;
    startContinuousAnimation();
}

// Continuous tile animation
function startContinuousAnimation() {
    tiles.forEach((tile, index) => {
        const img1 = tile.querySelector('.tile-img');
        const img2 = tile.querySelector('.tile-img-2');
        const text = tile.querySelector('.tile-text');
        let showingFirst = true;

        const intervalId = setInterval(() => {
            if (!document.body.contains(tile)) {
                clearInterval(intervalId);
                return;
            }

            if (showingFirst) {
                img1.style.opacity = '0';
                img2.style.opacity = '1';
                text.textContent = dynamic_values[`Tile${index + 1}_Image2_txt`].toUpperCase();
            } else {
                img1.style.opacity = '1';
                img2.style.opacity = '0';
                text.textContent = dynamic_values[`Tile${index + 1}_Image1_txt`].toUpperCase();
            }
            showingFirst = !showingFirst;
        }, 3000);

        // Store interval ID to clear it when needed
        tile.dataset.intervalId = intervalId;
    });
}

// Open carousel frame
function openCarousel() {
    mainFrame.style.transform = 'translateX(-100%)';
    carouselFrame.style.transform = 'translateX(0)';
}

// Close carousel and restart tile animations
function closeCarousel() {
    mainFrame.style.transform = 'translateX(0)';
    carouselFrame.style.transform = 'translateX(100%)';
    
    // Reset tiles to initial state and restart animations
    tiles.forEach((tile, index) => {
        const img1 = tile.querySelector('.tile-img');
        const img2 = tile.querySelector('.tile-img-2');
        const text = tile.querySelector('.tile-text');
        
        img1.style.opacity = '1';
        img2.style.opacity = '0';
        text.textContent = dynamic_values[`Tile${index + 1}_Image1_txt`].toUpperCase();
    });
    
    // Start continuous animation after a delay
    setTimeout(startContinuousAnimation, 500);
}

// Load products into carousel
function loadProducts(products) {
    const carouselContent = document.querySelector('.carousel-content');
    if (!carouselContent) return;

    carouselContent.innerHTML = '';
    products.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.className = 'carousel-item';
        productElement.style.display = index === 0 ? 'flex' : 'none';
        
        productElement.innerHTML = `
            <img src="${product.image_link}" alt="${product.title}" class="product-image">
            <div class="product-name">${product.title}</div>
            <div class="product-price">
                <span class="original-price">${product.price}</span>
                <span class="sale-price">${product.sale_price}</span>
            </div>
            <a href="${product.link}" target="_blank" class="shop-now-btn">SHOP NOW</a>
        `;
        
        carouselContent.appendChild(productElement);
    });
}

// Navigate to specific slide
function navigateToSlide(index) {
    if (index < 0 || index >= mockProducts.length) return;
    
    const items = document.querySelectorAll('.carousel-item');
    if (!items.length) return;

    items.forEach((item, i) => {
        item.style.display = i === index ? 'flex' : 'none';
    });
    currentSlide = index;
    
    // Update arrow states
    prevArrow.style.opacity = currentSlide === 0 ? '0.5' : '1';
    prevArrow.style.pointerEvents = currentSlide === 0 ? 'none' : 'auto';
    
    nextArrow.style.opacity = currentSlide === items.length - 1 ? '0.5' : '1';
    nextArrow.style.pointerEvents = currentSlide === items.length - 1 ? 'none' : 'auto';
}

// Initialize banner
function initBanner() {
    // Initialize tiles
    initializeTiles();
    
    // Load products into carousel
    loadProducts(mockProducts);
    
    // Set up event listeners
    greenCheck.addEventListener('click', startTileAnimation);
    
    backBtn.addEventListener('click', closeCarousel);
    
    tiles.forEach(tile => {
        tile.addEventListener('click', openCarousel);
    });
    
    prevArrow.addEventListener('click', () => {
        if (currentSlide > 0) {
            navigateToSlide(currentSlide - 1);
        }
    });
    
    nextArrow.addEventListener('click', () => {
        if (currentSlide < mockProducts.length - 1) {
            navigateToSlide(currentSlide + 1);
        }
    });

    // Add click handlers for logo and background
    document.querySelector('.logo').addEventListener('click', () => {
        window.open(dynamic_values.logoClick_url, '_blank');
    });

    document.querySelector('#banner').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            window.open(dynamic_values.backgroundClick_url, '_blank');
        }
    });
}

// Initialize banner on load
window.addEventListener('load', initBanner);