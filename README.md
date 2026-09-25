# Background Animation CDN (JD-CDN)

A high-performance JavaScript background animation delivery library that attaches dynamic, interactive canvas and WebGL backgrounds to DOM elements using descriptive element IDs. The library features on-demand dynamic module imports via the jsDelivr global CDN, eliminating bundle overhead and lazy-loading only the specific visual modules requested by the document.

---

## Architectural Workflow

```
+-----------------------+      +---------------------------+      +--------------------------+
|  HTML Document        | ---> | JD-CDN Entry Engine       | ---> | jsDelivr Global Edge CDN |
|  <div id="jd-waves">  |      | MutationObserver Watches  |      | Dynamic Module Import    |
+-----------------------+      +---------------------------+      +--------------------------+
                                             |
                                             v
                               +---------------------------+
                               | Mounts Visual Canvas      |
                               | (Responsive Resize, Loop) |
                               +---------------------------+
```

---

## Quick Start

Include the minified CDN script in the `<head>` or at the bottom of your `<body>`:

```html
<script src="https://cdn.jsdelivr.net/gh/mianjunaid1223/cdn@main/JD-CDN-v-1.0.min.js"></script>
```

Declare a target background container with an ID matching any supported animation type:

```html
<div id="jd-waves" style="width: 100vw; height: 100vh;"></div>
```

The library automatically detects the element, dynamically imports the corresponding animation module from the CDN, and initializes the visual loop.

---

## Supported Animation Modules

| ID Prefix | Module Name | Visual Description | CDN Module Path |
|---|---|---|---|
| `jd-shape` | AbstractShapeBg | Shifting geometric abstract polygons | `jsm/AbstractShapeBg.module.js` |
| `jd-fluid` | AestheticFluidBg | Smooth multi-color fluid simulation | `jsm/AestheticFluidBg.module.js` |
| `jd-blob` | BigBlobBg | Organic undulating amorphous blobs | `jsm/BigBlobBg.module.js` |
| `jd-dot` | BlurDotBg | Floating blurred particles with depth | `jsm/BlurDotBg.module.js` |
| `jd-gradient` | BlurGradientBg | Shifting mesh gradient backdrop | `jsm/BlurGradientBg.module.js` |
| `jd-mosaic` | TrianglesMosaicBg | Tessellated triangular mesh | `jsm/TrianglesMosaicBg.module.js` |
| `jd-cubes` | RandomCubesBg | Floating 3D perspective cubes | `jsm/RandomCubesBg.module.js` |
| `jd-waves` | WavyWavesBg | Harmonic flowing sine waves | `jsm/WavyWavesBg.module.js` |

---

## Custom Color Palettes

You can override the default color palette directly inside the HTML `id` attribute using bracket notation:

```html
<!-- Custom sunset palette -->
<div id="jd-fluid-[#ff6b6b,#f8a5c2,#f7d794]"></div>

<!-- Custom neon cyber palette -->
<div id="jd-waves-[#00f2fe,#4facfe,#000000]"></div>
```

If no custom palette is defined in the ID, the library defaults to a harmonious six-color pastel palette:
`#D1ADFF`, `#98D69B`, `#FAE390`, `#FFACD8`, `#7DD5FF`, `#D1ADFF`.

---

## Lifecycle & Performance Features

1. Automated MutationObserver:
   - Continuously monitors document subtree mutations.
   - Automatically initializes backgrounds on dynamically added elements (e.g., Single Page App client-side route changes).

2. Memory Safety & Cleanup:
   - When an animated element is removed from the DOM, the library calls the instance's `destroy()` method and purges references from internal state Maps.

3. Debounced Resize Handling:
   - Window resize events are automatically debounced to 250 milliseconds, recalculating canvas aspect ratios and dimensions without thrashing rendering loops.

4. View Transitions API:
   - Smoothly handles modern browser View Transitions during element replacement and route updates.

---

## Framework Integration Examples

### React / Next.js
```tsx
import { useEffect } from 'react';

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      {/* Background container */}
      <div id="jd-waves-[#1a1a2e,#16213e,#0f3460]" className="absolute inset-0 -z-10" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-white">Hello World</h1>
      </div>
    </div>
  );
}
```

### Vanilla HTML / CSS
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CDN Animation Demo</title>
  <style>
    body, html { margin: 0; padding: 0; overflow: hidden; }
    #jd-fluid { width: 100vw; height: 100vh; }
  </style>
  <script src="https://cdn.jsdelivr.net/gh/mianjunaid1223/cdn@main/JD-CDN-v-1.0.min.js"></script>
</head>
<body>
  <div id="jd-fluid-[#2b5876,#4e4376]"></div>
</body>
</html>
```

---

## Repository Structure

```
cdn/
|-- JD-CDN-v-1.0.min.js         # Minified library bundle and loader
|-- jsm/                        # ES module implementations for individual backgrounds
|   |-- AbstractShapeBg.module.js
|   |-- AestheticFluidBg.module.js
|   |-- BigBlobBg.module.js
|   |-- BlurDotBg.module.js
|   |-- BlurGradientBg.module.js
|   |-- RandomCubesBg.module.js
|   |-- TrianglesMosaicBg.module.js
|   |-- WavyWavesBg.module.js
```
