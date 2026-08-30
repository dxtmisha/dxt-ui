import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`using-the-img-tag`,children:`Using the img tag`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`tagImg`}),`, `,(0,c.jsx)(t.code,{children:`srcset`}),`, `,(0,c.jsx)(t.code,{children:`picture`}),`, `,(0,c.jsx)(t.code,{children:`alt`}),`, `,(0,c.jsx)(t.code,{children:`lazy`}),`, `,(0,c.jsx)(t.code,{children:`preloadOffset`}),` and `,(0,c.jsx)(t.code,{children:`fetchPriority`}),` properties are designed to control the image display mode using the HTML `,(0,c.jsx)(t.code,{children:`<img>`}),` tag instead of a background image.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`tagImg`}),` — use the `,(0,c.jsx)(t.code,{children:`<img>`}),` tag instead of a background image`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`srcset`}),` — set of image sources for different screen resolutions`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`picture`}),` — sources for different display conditions using the `,(0,c.jsx)(t.code,{children:`<picture>`}),` tag`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`alt`}),` — alternative text for the image`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lazy`}),` — enables lazy loading of the image`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`preloadOffset`}),` — offset for image preloading (default `,(0,c.jsx)(t.code,{children:`1024px`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fetchPriority`}),` — image loading priority (`,(0,c.jsx)(t.code,{children:`low`}),`, `,(0,c.jsx)(t.code,{children:`high`}),`, `,(0,c.jsx)(t.code,{children:`auto`}),`)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`The properties work together: if `,(0,c.jsx)(t.code,{children:`tagImg`}),` is not set or equals `,(0,c.jsx)(t.code,{children:`false`}),`, the image is displayed as a CSS background via `,(0,c.jsx)(t.code,{children:`background-image`}),`. When `,(0,c.jsx)(t.code,{children:`tagImg`}),` is activated (value `,(0,c.jsx)(t.code,{children:`true`}),`), the component uses the semantic HTML `,(0,c.jsx)(t.code,{children:`<img>`}),` tag, providing better accessibility and SEO optimization. The `,(0,c.jsx)(t.code,{children:`alt`}),` property defines alternative text that is displayed when the image is unavailable and is used by screen readers for people with disabilities.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`srcset`}),` property allows you to provide multiple versions of an image for different pixel densities and screen sizes. It accepts a string in the standard `,(0,c.jsx)(t.code,{children:`srcset`}),` attribute format or an object where keys are width descriptors (numbers or strings like `,(0,c.jsx)(t.code,{children:`'2x'`}),`) and values are image URLs. When using numeric keys, the `,(0,c.jsx)(t.code,{children:`w`}),` suffix (width descriptor) is automatically added. The browser automatically selects the optimal image based on screen size and pixel density.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`picture`}),` property enables the use of the HTML `,(0,c.jsx)(t.code,{children:`<picture>`}),` tag for art direction — when you need to load different images depending on screen size or other media query conditions. It accepts an object where keys are media conditions (such as screen width in pixels) and values are image URLs, or an array of objects with `,(0,c.jsx)(t.code,{children:`<source>`}),` attributes. When using an object, media queries like `,(0,c.jsx)(t.code,{children:`(width >= 768px)`}),` are automatically generated. The `,(0,c.jsx)(t.code,{children:`<picture>`}),` tag provides more flexible control over image selection compared to `,(0,c.jsx)(t.code,{children:`srcset`}),`, allowing you to load images with different aspect ratios or content for various viewing conditions.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`lazy`}),` property activates native browser lazy loading via the `,(0,c.jsx)(t.code,{children:`loading="lazy"`}),` attribute. Images with this attribute are loaded only when approaching the visible screen area, which significantly speeds up initial page load and reduces traffic consumption. It is especially effective for pages with a large number of images or long lists.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`preloadOffset`}),` property defines the pixel offset for preloading images when using lazy loading. The default value is `,(0,c.jsx)(t.code,{children:`1024px`}),`, which means the image starts loading 1024 pixels before it enters the visible area. This ensures smooth image loading without delays during scrolling. You can specify either a numeric value or a string with a unit of measurement.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`fetchPriority`}),` property allows you to control the browser's image loading priority. It accepts three values: `,(0,c.jsx)(t.code,{children:`high`}),` — high priority for critical images (such as hero images or main banners), `,(0,c.jsx)(t.code,{children:`low`}),` — low priority for secondary images, `,(0,c.jsx)(t.code,{children:`auto`}),` — the browser determines the priority automatically (default value). Proper use of this property helps optimize page loading by ensuring fast loading of important content.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const productImage = ref('/images/product.jpg')
<\/script>

<template>
<!-- Basic usage -->
<Image
  :value="productImage"
  tag-img
  alt="Product description"
/>

<!-- With lazy loading -->
<Image
  :value="productImage"
  tag-img
  alt="Product"
  lazy
/>

<!-- With srcset object -->
<Image
  :value="productImage"
  tag-img
  alt="Responsive image"
  :srcset="{
    '1x': '/images/product.jpg',
    '2x': '/images/product@2x.jpg'
  }"
/>

<!-- With picture for different screen sizes -->
<Image
  :value="productImage"
  tag-img
  alt="Responsive image for different devices"
  :picture="{
    768: '/images/product-tablet.jpg',
    1024: '/images/product-desktop.jpg'
  }"
/>

<!-- With preload offset configuration -->
<Image
  :value="productImage"
  tag-img
  alt="Image with early preload"
  lazy
  preload-offset="2048px"
/>

<!-- With high loading priority -->
<Image
  :value="productImage"
  tag-img
  alt="Main page image"
  fetch-priority="high"
/>

<!-- Complex example -->
<Image
  :value="productImage"
  tag-img
  alt="Responsive product image"
  lazy
  preload-offset="1536px"
  fetch-priority="low"
  :srcset="{
    '1x': '/images/product.jpg',
    '2x': '/images/product@2x.jpg',
    '3x': '/images/product@3x.jpg'
  }"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};