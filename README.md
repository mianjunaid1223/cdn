# JD-CDN: Declarative Animated Canvas Background Library

Zero-dependency declarative canvas background animation library. Mounts procedural WebGL and 2D canvas shaders dynamically via DOM element identifiers and jsDelivr CDN imports.

```
+-----------------------------------------------------------------------------------------+
|                                    DOM Tree Host                                        |
|                                                                                         |
|   <div id="jd-fluid-[#1e1e2f,#ff007f,#00f5d4]"></div>                                   |
|   <section id="jd-waves"></section>                                                     |
|   <header id="jd-gradient-[#ff9a9e,#fecfef]"></header>                                   |
+--------------------------------------------|--------------------------------------------+
                                             |
                                             v
+-----------------------------------------------------------------------------------------+
|                              JD-CDN Runtime Kernel                                      |
|                                                                                         |
|   +--------------------+  +----------------------+  +-------------------------------+   |
|   | MutationObserver   |  | ID Parser & Tokenizer|  | Lifecycle Manager             |   |
|   | id attribute & DOM |  | Regex: /-\[(.*?)\]$/  | activeBackgrounds Map,        |   |
|   | insertion tracking |  | Extract hex palette  |  | destroy() on disconnect       |   |
|   +--------------------+  +----------------------+  +-------------------------------+   |
|                                            |                                            |
|                                            v                                            |
|   +---------------------------------------------------------------------------------+   |
|   | Dynamic ES Module Loader (Lazy Loaded via jsDelivr CDN)                         |   |
|   | import("https://cdn.jsdelivr.net/gh/mianjunaid1223/cdn@main/jsm/...")           |   |
|   +----------------------------------------|----------------------------------------+   |
|                                            |                                            |
|                                            v                                            |
|   +---------------------------------------------------------------------------------+   |
|   | Shader / Canvas Engine Mount (8 Procedural Visualizers)                         |   |
|   | - AbstractShapeBg    - AestheticFluidBg    - BigBlobBg      - BlurDotBg         |   |
|   | - BlurGradientBg     - RandomCubesBg       - TrianglesMosaic- WavyWavesBg       |   |
|   +---------------------------------------------------------------------------------+   |
+-----------------------------------------------------------------------------------------+
```

## System Architecture

JD-CDN allows developers to inject hardware-accelerated animated backgrounds into any webpage without writing JavaScript initialization code. By tagging HTML elements with reserved ID prefixes, the runtime automatically parses color tokens, downloads the required module on demand, and mounts the rendering canvas.

### Architectural Subsystems

1. Declarative DOM Identification: Scans DOM trees for elements matching id^="jd-". A custom regex parser extracts arbitrary comma-separated HEX color values declared directly in the element identifier.

2. Lazy-Loaded Module Registry: Background animation modules are hosted as isolated ES modules in the jsm/ directory. Modules are only fetched when their corresponding ID is encountered in the DOM, preventing unnecessary network payloads.

3. MutationObserver Reactive Engine: A persistent MutationObserver monitors DOM mutations (attribute changes on ID, subtree node additions and removals). Dynamically inserted elements in frameworks like React, Vue, or Next.js receive background treatments immediately.

4. View Transition API Support: Integrates document.startViewTransition where supported to prevent visual pop-in during shader initialization and theme updates.

5. Element Lifecycle and Garbage Collection: Background instances are cached in Map collections. When a host element is removed from the active DOM tree (!element.isConnected), the runtime calls instance.destroy() and releases canvas memory.

## Declarative ID Syntax Reference

Elements trigger background rendering using the following syntax structure:

```html
id="<type>-[#color1,#color2,#color3...]"
```

### Parameter Breakdown

| Component | Format | Description |
|---|---|---|
| Module Type | jd-shape, jd-fluid, jd-blob, jd-dot, jd-gradient, jd-mosaic, jd-cubes, jd-waves | Selects the visual rendering shader |
| Color Bracket | -[#HEX,#HEX,...] | Optional array of HEX color tokens overriding system defaults |

### Default Palette

When no custom colors are defined, the engine applies the default pastel spectrum:

```javascript
const defaultColors = ["#D1ADFF", "#98D69B", "#FAE390", "#FFACD8", "#7DD5FF", "#D1ADFF"];
```

## Catalog of Background Animation Modules

### 1. Aesthetic Fluid (jd-fluid)
Simulates fluid dynamics and chromatic dispersion with interactive viscous flow patterns.
```html
<div id="jd-fluid-[#0f172a,#38bdf8,#818cf8]" style="width:100%; height:400px;"></div>
```

### 2. Wavy Waves (jd-waves)
Multi-frequency sinusoidal wave surfaces that oscillate across horizontal planes.
```html
<div id="jd-waves-[#111827,#374151,#4b5563]" style="width:100%; height:300px;"></div>
```

### 3. Blur Gradient (jd-gradient)
Soft-focus mesh gradients with dynamic radial motion and organic focal shifts.
```html
<div id="jd-gradient-[#f43f5e,#fb7185,#fda4af]" style="width:100%; height:500px;"></div>
```

### 4. Big Blob (jd-blob)
Metaball physics simulation generating continuous organic surface coalescences.
```html
<div id="jd-blob" style="width:100%; height:400px;"></div>
```

### 5. Triangles Mosaic (jd-mosaic)
Delaunay triangulation mesh with dynamic vertex displacement and gradient fills.
```html
<div id="jd-mosaic-[#0284c7,#0369a1,#075985]" style="width:100%; height:400px;"></div>
```

### 6. Random Cubes (jd-cubes)
Isometric 3D cube projections with independent rotational velocities and spatial depth.
```html
<div id="jd-cubes-[#10b981,#059669,#047857]" style="width:100%; height:400px;"></div>
```

### 7. Blur Dot (jd-dot)
Gaussian point-cloud matrices that pulse according to harmonic phase shifts.
```html
<div id="jd-dot-[#6366f1,#a855f7,#ec4899]" style="width:100%; height:350px;"></div>
```

### 8. Abstract Shape (jd-shape)
Non-Euclidean procedural geometric silhouettes that evolve through continuous topological deformation.
```html
<div id="jd-shape-[#d97706,#b45309,#92400e]" style="width:100%; height:400px;"></div>
```

## Quickstart Guide

Include the minified runtime distribution script via the jsDelivr CDN network:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JD-CDN Showcase</title>
    <!-- Include CDN Script -->
    <script src="https://cdn.jsdelivr.net/gh/mianjunaid1223/cdn@main/JD-CDN-v-1.0.min.js"></script>
    <style>
        .hero {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-family: sans-serif;
        }
    </style>
</head>
<body>
    <!-- Background mounts automatically -->
    <div id="jd-fluid-[#1e1b4b,#4338ca,#06b6d4]" class="hero">
        <h1>Autonomous Canvas Background</h1>
    </div>
</body>
</html>
```

## Technical Implementation Details

### Regex Color Extraction

```javascript
function parseColorsFromId(id) {
    const colorMatch = id.match(/-[(.*?)]$/);
    if (colorMatch) {
        if (!colorMatch[1].trim()) return defaultColors;
        const colors = colorMatch[1].split(',')
            .map(color => color.trim())
            .filter(color => color.length > 0);
        return colors.length > 0 ? colors : defaultColors;
    }
    return null;
}
```

### Reactive Mutation Monitoring

```javascript
const observer = new MutationObserver((mutations) => {
    let shouldUpdate = false;
    mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'id') {
            if (mutation.target.id?.startsWith('jd-')) shouldUpdate = true;
        } else if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && node.id?.startsWith('jd-')) shouldUpdate = true;
            });
        }
    });
    if (shouldUpdate) initBackground();
});
```

## Browser Support

- Chrome 88+ (Desktop & Mobile)
- Firefox 85+
- Safari 14+ (iOS & macOS)
- Microsoft Edge 88+
