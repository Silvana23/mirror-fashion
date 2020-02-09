var banners = ["img/destaque-home-2.png"];
varbannerAtual = 0;

function trocarBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.banner-destaque img').scr = banners[bannerAtual];
}
setInterval(trocarBanner, 4000);