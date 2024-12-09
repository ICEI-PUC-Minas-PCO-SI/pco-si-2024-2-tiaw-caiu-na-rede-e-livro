let currentBanner = 0;
let banners = [];


async function fetchBanners() {
    try {
        const response = await fetch('../../../src/db/banner');
        if (!response.ok) {
            throw new Error(`Erro: ${response.statusText}`);
        }
        banners = await response.json();
        updateBanner();  
        startBannerRotation(); 
    } catch (error) {
        console.error("Erro ao carregar os banners:", error);
    }
}


function updateBanner() {
    const banner = banners[currentBanner];
    document.getElementById('title').innerText = banner.title;
    document.getElementById('description').innerText = banner.description;
    document.querySelector('.banner img').src = banner.image;

    if (currentBanner !== banners.length - 1) {
        document.getElementById('sobreButton').style.display = 'none';
    } else {
        document.getElementById('sobreButton').style.display = 'inline-block';
    }
}


function startBannerRotation() {
    setInterval(() => {
        currentBanner = (currentBanner + 1) % banners.length; 
        updateBanner();
    }, 4500); 
}

fetchBanners();
