const bgModules = {
    "jd-shape": () => import("./jsm/AbstractShapeBg.module.js").then(m => m.AbstractShapeBg),
    "jd-fluid": () => import("./jsm/AestheticFluidBg.module.js").then(m => m.AestheticFluidBg),
    "jd-dot": () => import("./jsm/BlurDotBg.module.js").then(m => m.BlurDotBg),
    "jd-gradient": () => import("./jsm/BlurGradientBg.module.js").then(m => m.BlurGradientBg),
    "jd-mosaic": () => import("./jsm/TrianglesMosaicBg.module.js").then(m => m.TrianglesMosaicBg),
    "jd-cubes": () => import("./jsm/RandomCubesBg.module.js").then(m => m.RandomCubesBg),
    "jd-waves": () => import("./jsm/WavyWavesBg.module.js").then(m => m.WavyWavesBg),
    "jd-blob": () => import("./jsm/BigBlobBg.module.js").then(m => m.BigBlobBg)
};

const activeBackgrounds = new Map();
const elementStates = new Map();
const colors = ["#D1ADFF", "#98D69B", "#FAE390", "#FFACD8", "#7DD5FF", "#D1ADFF"];

function destroyBackground(element) {
    const instance = activeBackgrounds.get(element);
    if (instance) {
        if (typeof instance.destroy === 'function') {
            instance.destroy();
        }
        activeBackgrounds.delete(element);
    }
}

async function applyBackground(element, bgClass) {
    if (bgModules[bgClass]) {
        destroyBackground(element);
        const BgClass = await bgModules[bgClass]();
        const instance = new BgClass({
            dom: element,
            colors,
            seed: 1000,
            loop: true
        });
        activeBackgrounds.set(element, instance);
        elementStates.set(element, bgClass);
    }
}

async function handleViewTransition(callback) {
    if (document.startViewTransition) {
        return document.startViewTransition(callback);
    } else {
        return callback();
    }
}

async function initBackground() {
    await handleViewTransition(async () => {
        const elements = document.querySelectorAll('[id^="jd-"]');
        for (const element of elements) {
            const currentBgClass = element.id;
            const previousBgClass = elementStates.get(element);

            if (currentBgClass !== previousBgClass) {
                await applyBackground(element, currentBgClass);
            }
        }

        for (const [element, _] of activeBackgrounds) {
            if (!element.isConnected) {
                destroyBackground(element);
                elementStates.delete(element);
            }
        }
    });
}

const observer = new MutationObserver((mutations) => {
    let shouldUpdate = false;

    mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'id') {
            const element = mutation.target;
            if (element.id.startsWith('jd-')) {
                shouldUpdate = true;
            }
        } else if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && node.id?.startsWith('jd-')) {
                    shouldUpdate = true;
                }
            });
            mutation.removedNodes.forEach(node => {
                if (node.nodeType === 1 && node.id?.startsWith('jd-')) {
                    shouldUpdate = true;
                }
            });
        }
    });

    if (shouldUpdate) {
        initBackground();
    }
});

let resizeTimeout;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initBackground, 250);
});

window.addEventListener("DOMContentLoaded", () => {
    initBackground();
    
    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['id'],
        childList: true,
        subtree: true
    });
});

window.addEventListener("unload", () => {
    observer.disconnect();
    activeBackgrounds.forEach((instance, element) => {
        destroyBackground(element);
    });
});