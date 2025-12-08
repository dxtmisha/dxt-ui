import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Zkkrlp1B.js";import{M as r}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/functional/en/Classes/MetaOg"}),`
`,e.jsx(n.h1,{id:"metaog-class",children:"MetaOg Class"}),`
`,e.jsxs(n.p,{children:["A class for working with Open Graph meta tags, ensuring optimal content display when shared on social networks (Facebook, LinkedIn, VK, and others). Inherits ",e.jsx(n.code,{children:"MetaManager"})," functionality and provides type-safe methods for managing standard Open Graph tags."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type Safety"})," — strict typing for all Open Graph tags and content types"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Synchronization"})," — updates meta tags in the document ",e.jsx(n.code,{children:"<head>"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Property Support"})," — uses the ",e.jsx(n.code,{children:"property"})," attribute instead of ",e.jsx(n.code,{children:"name"})," (Open Graph standard)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Convenient API"})," — specialized methods for each tag"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SSR Compatibility"})," — HTML generation for server-side rendering"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type Validation"})," — support for all official Open Graph types"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Chainable Methods"})," — ability to set values sequentially"]}),`
`]}),`
`,e.jsx(n.h2,{id:"constructor",children:"Constructor"}),`
`,e.jsx(n.h3,{id:"constructor-1",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Creates a MetaOg instance with a preset list of all supported Open Graph tags. Automatically reads existing tags from the DOM."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg } from '@dxtmisha/functional'

// Create an instance
const og = new MetaOg()

// The class automatically manages all standard OG tags:
// og:title, og:type, og:url, og:image, og:description,
// og:locale, og:site_name and others
`})}),`
`,e.jsx(n.h2,{id:"data-retrieval-methods",children:"Data Retrieval Methods"}),`
`,e.jsx(n.h3,{id:"gettitle",children:e.jsx(n.code,{children:"getTitle"})}),`
`,e.jsx(n.p,{children:"Gets the Open Graph page title."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — page title"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

const title = og.getTitle()
// 'Article Title'

// Use for debugging
console.log('OG Title:', og.getTitle())

// Check if set
if (og.getTitle()) {
  console.log('Title is set')
}
`})}),`
`,e.jsx(n.h3,{id:"gettype",children:e.jsx(n.code,{children:"getType"})}),`
`,e.jsx(n.p,{children:"Gets the Open Graph content type."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"MetaOpenGraphType"})," — content type (website, article, video, etc.)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

const type = og.getType()
// 'article'

// Check content type
if (og.getType() === 'article') {
  console.log('This is an article')
}

// Conditional logic by type
switch (og.getType()) {
  case 'article':
    // Logic for articles
    break
  case 'product':
    // Logic for products
    break
}
`})}),`
`,e.jsx(n.h3,{id:"geturl",children:e.jsx(n.code,{children:"getUrl"})}),`
`,e.jsx(n.p,{children:"Gets the canonical page URL."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — page URL"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

const url = og.getUrl()
// 'https://example.com/article/my-post'

// Get domain
const domain = new URL(og.getUrl()).hostname

// Check match with current URL
if (og.getUrl() !== window.location.href) {
  console.warn('OG URL does not match current URL')
}
`})}),`
`,e.jsx(n.h3,{id:"getimage",children:e.jsx(n.code,{children:"getImage"})}),`
`,e.jsx(n.p,{children:"Gets the preview image URL."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — image URL"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

const imageUrl = og.getImage()
// 'https://example.com/images/preview.jpg'

// Preload image
const img = new Image()
img.src = og.getImage()

// Check if image is set
if (!og.getImage()) {
  console.warn('OG image is not set')
}
`})}),`
`,e.jsx(n.h3,{id:"getdescription",children:e.jsx(n.code,{children:"getDescription"})}),`
`,e.jsx(n.p,{children:"Gets the Open Graph page description."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — page description"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

const description = og.getDescription()
// 'Detailed article description...'

// Check length
if (og.getDescription().length > 200) {
  console.warn('Description is too long')
}

// Use in preview
const previewText = og.getDescription().substring(0, 100) + '...'
`})}),`
`,e.jsx(n.h3,{id:"getlocale",children:e.jsx(n.code,{children:"getLocale"})}),`
`,e.jsx(n.p,{children:"Gets the content locale (language)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — locale in language_TERRITORY format"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

const locale = og.getLocale()
// 'en_US'

// Determine language
const language = og.getLocale().split('_')[0] // 'en'

// Use for localization
if (og.getLocale().startsWith('en')) {
  console.log('English content')
}
`})}),`
`,e.jsx(n.h3,{id:"getsitename",children:e.jsx(n.code,{children:"getSiteName"})}),`
`,e.jsx(n.p,{children:"Gets the site name."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — site name"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

const siteName = og.getSiteName()
// 'My Blog'

// Use in title
document.title = \`\${og.getTitle()} - \${og.getSiteName()}\`

// Check brand
const isBrandSet = og.getSiteName() !== ''
`})}),`
`,e.jsx(n.h2,{id:"data-setting-methods",children:"Data Setting Methods"}),`
`,e.jsx(n.h3,{id:"settitle",children:e.jsx(n.code,{children:"setTitle"})}),`
`,e.jsx(n.p,{children:"Sets the Open Graph page title."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"title: string"})," — page title"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

// Set title
og.setTitle('Amazing Article About Web Development')

// Chain methods
og
  .setTitle('New Title')
  .setDescription('New Description')

// Dynamic update
const updateTitle = (newTitle) => {
  og.setTitle(newTitle)
}

// Automatic generation
og.setTitle(\`\${article.title} - \${siteName}\`)
`})}),`
`,e.jsx(n.h3,{id:"settype",children:e.jsx(n.code,{children:"setType"})}),`
`,e.jsx(n.p,{children:"Sets the Open Graph content type."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: MetaOpenGraphType"})," — content type"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Available types:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"website"})," — regular website/homepage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"article"})," — article/blog post"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"video"})," — video content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"video.movie"})," — movie"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"video.episode"})," — TV series episode"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"video.tv_show"})," — TV series"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"music.song"})," — song"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"music.album"})," — music album"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"music.playlist"})," — playlist"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"music.radio_station"})," — radio station"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"product"})," — product in store"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"book"})," — book"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"profile"})," — user profile"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"business.business"})," — company/organization"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"place"})," — place/location"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event"})," — event/meeting"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"app"})," — application"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg, MetaOpenGraphType } from '@dxtmisha/functional'

const og = new MetaOg()

// Set article type
og.setType(MetaOpenGraphType.article)

// For homepage
og.setType(MetaOpenGraphType.website)

// For store products
og.setType(MetaOpenGraphType.product)

// For video
og.setType(MetaOpenGraphType.videoMovie)

// Conditional setting
const contentType = isArticle
  ? MetaOpenGraphType.article
  : MetaOpenGraphType.website

og.setType(contentType)
`})}),`
`,e.jsx(n.h3,{id:"seturl",children:e.jsx(n.code,{children:"setUrl"})}),`
`,e.jsx(n.p,{children:"Sets the canonical page URL."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"url: string"})," — page URL"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

// Set URL
og.setUrl('https://example.com/article/my-post')

// Use current URL
og.setUrl(window.location.href)

// Clean query parameters
const cleanUrl = window.location.origin + window.location.pathname
og.setUrl(cleanUrl)

// For SPA
router.afterEach((to) => {
  og.setUrl(\`https://example.com\${to.fullPath}\`)
})

// Absolute URL from relative
const absoluteUrl = new URL('/article', window.location.origin).href
og.setUrl(absoluteUrl)
`})}),`
`,e.jsx(n.h3,{id:"setimage",children:e.jsx(n.code,{children:"setImage"})}),`
`,e.jsx(n.p,{children:"Sets the preview image URL."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"url: string"})," — image URL"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

// Set image
og.setImage('https://example.com/images/preview.jpg')

// Absolute URL
const imageUrl = new URL('/images/og-image.jpg', window.location.origin).href
og.setImage(imageUrl)

// From content data
og.setImage(article.coverImage)

// Fallback image
og.setImage(article.image || '/images/default-og.jpg')

// Recommended size: 1200x630 pixels
// Minimum: 600x315 pixels
// Format: JPG, PNG, WebP
`})}),`
`,e.jsx(n.h3,{id:"setdescription",children:e.jsx(n.code,{children:"setDescription"})}),`
`,e.jsx(n.p,{children:"Sets the Open Graph page description."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"description: string"})," — page description"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

// Set description
og.setDescription('Complete guide to building web applications using modern technologies')

// Truncate long text
const shortDesc = article.content.substring(0, 200)
og.setDescription(shortDesc)

// Remove HTML tags
const plainText = article.html.replace(/<[^>]*>/g, '')
og.setDescription(plainText.substring(0, 300))

// Recommendations:
// - Optimal length: 150-300 characters
// - Facebook displays ~300 characters
// - Avoid special HTML characters
`})}),`
`,e.jsx(n.h3,{id:"setlocale",children:e.jsx(n.code,{children:"setLocale"})}),`
`,e.jsx(n.p,{children:"Sets the content locale (language)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"locale: string"})," — locale in language_TERRITORY format"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

// Set English locale
og.setLocale('en_US')

// Other popular locales
og.setLocale('en_GB') // English (United Kingdom)
og.setLocale('ru_RU') // Russian
og.setLocale('uk_UA') // Ukrainian
og.setLocale('de_DE') // German
og.setLocale('fr_FR') // French
og.setLocale('es_ES') // Spanish
og.setLocale('pt_BR') // Portuguese (Brazil)
og.setLocale('ja_JP') // Japanese
og.setLocale('zh_CN') // Chinese (Simplified)

// Automatic detection
const userLocale = navigator.language.replace('-', '_')
og.setLocale(userLocale)

// From application settings
og.setLocale(i18n.locale.replace('-', '_'))
`})}),`
`,e.jsx(n.h3,{id:"setsitename",children:e.jsx(n.code,{children:"setSiteName"})}),`
`,e.jsx(n.p,{children:"Sets the site name."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"siteName: string"})," — site name"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

// Set site name
og.setSiteName('My Awesome Blog')

// Use constant
const SITE_NAME = 'WebDev Journal'
og.setSiteName(SITE_NAME)

// From configuration
og.setSiteName(config.siteName)

// Examples of good names:
// - Short and recognizable
// - Match the brand
// - No extra symbols
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"complete-article-page-setup",children:"Complete Article Page Setup"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg, MetaOpenGraphType } from '@dxtmisha/functional'

const og = new MetaOg()

// Set all main tags
og
  .setType(MetaOpenGraphType.article)
  .setTitle('Complete Guide to Open Graph Protocol')
  .setDescription('Learn how to properly configure Open Graph tags for your site and improve social media sharing')
  .setUrl('https://example.com/articles/open-graph-guide')
  .setImage('https://example.com/images/og-guide-preview.jpg')
  .setLocale('en_US')
  .setSiteName('WebDev Blog')

// Now when shared on social networks:
// - Facebook will show a beautiful card
// - LinkedIn will pick up the correct preview
// - VK will display the image and description
// - Telegram will create a rich preview
`})}),`
`,e.jsx(n.h3,{id:"dynamic-updates-for-spa",children:"Dynamic Updates for SPA"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Vue Router
router.afterEach((to) => {
  const og = new MetaOg()

  og
    .setTitle(to.meta.ogTitle || to.meta.title)
    .setDescription(to.meta.ogDescription || to.meta.description)
    .setUrl(\`https://example.com\${to.path}\`)
    .setImage(to.meta.ogImage || '/images/default-og.jpg')
})

// React Router
useEffect(() => {
  const og = new MetaOg()

  og
    .setTitle(page.title)
    .setDescription(page.description)
    .setUrl(window.location.href)
    .setImage(page.image)

  return () => {
    // Cleanup if needed
  }
}, [page])
`})}),`
`,e.jsx(n.h3,{id:"setup-for-different-content-types",children:"Setup for Different Content Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg, MetaOpenGraphType } from '@dxtmisha/functional'

const og = new MetaOg()

// For homepage
const setupHomePage = () => {
  og
    .setType(MetaOpenGraphType.website)
    .setTitle('Home - My Website')
    .setDescription('Welcome to our website')
    .setUrl('https://example.com')
    .setImage('https://example.com/images/home-og.jpg')
}

// For product page
const setupProductPage = (product) => {
  og
    .setType(MetaOpenGraphType.product)
    .setTitle(product.name)
    .setDescription(product.description)
    .setUrl(\`https://example.com/products/\${product.id}\`)
    .setImage(product.images[0])
}

// For video
const setupVideoPage = (video) => {
  og
    .setType(MetaOpenGraphType.videoMovie)
    .setTitle(video.title)
    .setDescription(video.synopsis)
    .setUrl(\`https://example.com/videos/\${video.id}\`)
    .setImage(video.thumbnail)
}

// For user profile
const setupProfilePage = (user) => {
  og
    .setType(MetaOpenGraphType.profile)
    .setTitle(\`\${user.name} - Profile\`)
    .setDescription(user.bio)
    .setUrl(\`https://example.com/users/\${user.username}\`)
    .setImage(user.avatar)
}
`})}),`
`,e.jsx(n.h3,{id:"html-generation-for-ssr",children:"HTML Generation for SSR"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg, MetaOpenGraphType } from '@dxtmisha/functional'

// Express.js server
app.get('/article/:id', async (req, res) => {
  const article = await getArticle(req.params.id)

  const og = new MetaOg()
  og
    .setType(MetaOpenGraphType.article)
    .setTitle(article.title)
    .setDescription(article.excerpt)
    .setUrl(\`https://example.com/article/\${article.id}\`)
    .setImage(article.coverImage)
    .setLocale('en_US')
    .setSiteName('My Blog')

  const html = \`
    <!DOCTYPE html>
    <html>
      <head>
        <title>\${article.title}</title>
        \${og.html()}
      </head>
      <body>
        \${article.content}
      </body>
    </html>
  \`

  res.send(html)
})

// Result in HTML:
// <meta property="og:type" content="article">
// <meta property="og:title" content="Article Title">
// <meta property="og:description" content="Description...">
// <meta property="og:url" content="https://example.com/article/123">
// <meta property="og:image" content="https://example.com/images/cover.jpg">
// <meta property="og:locale" content="en_US">
// <meta property="og:site_name" content="My Blog">
`})}),`
`,e.jsx(n.h3,{id:"cms-integration",children:"CMS Integration"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg, MetaOpenGraphType } from '@dxtmisha/functional'

// Function to update OG tags from CMS data
const updateOGFromCMS = (pageData) => {
  const og = new MetaOg()

  // Determine content type
  const typeMap = {
    'post': MetaOpenGraphType.article,
    'page': MetaOpenGraphType.website,
    'product': MetaOpenGraphType.product,
    'video': MetaOpenGraphType.video
  }

  og
    .setType(typeMap[pageData.contentType] || MetaOpenGraphType.website)
    .setTitle(pageData.seo?.ogTitle || pageData.title)
    .setDescription(pageData.seo?.ogDescription || pageData.excerpt)
    .setUrl(pageData.canonicalUrl)
    .setImage(pageData.seo?.ogImage || pageData.featuredImage)
    .setLocale(pageData.locale)
    .setSiteName(pageData.site.name)

  return og
}

// Usage
const page = await cms.getPage(pageId)
updateOGFromCMS(page)
`})}),`
`,e.jsx(n.h3,{id:"validation-and-debugging",children:"Validation and Debugging"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg } from '@dxtmisha/functional'

const og = new MetaOg()

// Check required fields
const validateOG = () => {
  const errors = []

  if (!og.getTitle()) errors.push('Missing og:title')
  if (!og.getType()) errors.push('Missing og:type')
  if (!og.getUrl()) errors.push('Missing og:url')
  if (!og.getImage()) errors.push('Missing og:image')

  if (errors.length > 0) {
    console.error('Open Graph errors:', errors)
  }

  return errors.length === 0
}

// Output all OG tags for debugging
const debugOG = () => {
  console.group('Open Graph Tags')
  console.log('Title:', og.getTitle())
  console.log('Type:', og.getType())
  console.log('URL:', og.getUrl())
  console.log('Image:', og.getImage())
  console.log('Description:', og.getDescription())
  console.log('Locale:', og.getLocale())
  console.log('Site Name:', og.getSiteName())
  console.groupEnd()
}

// Export for testing
const exportOGData = () => {
  return og.getItems()
}
`})}),`
`,e.jsx(n.h2,{id:"usage-recommendations",children:"Usage Recommendations"}),`
`,e.jsx(n.h3,{id:"required-tags",children:"Required Tags"}),`
`,e.jsx(n.p,{children:"For correct display on social networks, set at minimum:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"og:title"})," — page title"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"og:type"})," — content type"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"og:url"})," — canonical URL"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"og:image"})," — preview image"]}),`
`]}),`
`,e.jsx(n.h3,{id:"image-sizes",children:"Image Sizes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Recommended size:"})," 1200×630 px (1.91:1 ratio)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Minimum size:"})," 600×315 px"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Maximum file size:"})," 8 MB"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Formats:"})," JPG, PNG, WebP, GIF"]}),`
`]}),`
`,e.jsx(n.h3,{id:"text-length",children:"Text Length"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"og:title:"})," up to 60 characters (optimal: 40)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"og:description:"})," up to 200 characters (Facebook), up to 300 (LinkedIn)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"og:site_name:"})," short brand name"]}),`
`]}),`
`,e.jsx(n.h3,{id:"locales",children:"Locales"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"language_TERRITORY"})," format:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["English US: ",e.jsx(n.code,{children:"en_US"})]}),`
`,e.jsxs(n.li,{children:["English GB: ",e.jsx(n.code,{children:"en_GB"})]}),`
`,e.jsxs(n.li,{children:["Russian: ",e.jsx(n.code,{children:"ru_RU"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"testing",children:"Testing"}),`
`,e.jsx(n.p,{children:"Check Open Graph tags using:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developers.facebook.com/tools/debug/",rel:"nofollow",children:"Facebook Sharing Debugger"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.linkedin.com/post-inspector/",rel:"nofollow",children:"LinkedIn Post Inspector"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://cards-dev.twitter.com/validator",rel:"nofollow",children:"Twitter Card Validator"})}),`
`]}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The class inherits all methods from ",e.jsx(n.code,{children:"MetaManager"}),", including ",e.jsx(n.code,{children:"html()"}),", ",e.jsx(n.code,{children:"getItems()"}),", ",e.jsx(n.code,{children:"setByList()"})]}),`
`,e.jsxs(n.li,{children:["Automatically uses the ",e.jsx(n.code,{children:"property"})," attribute instead of ",e.jsx(n.code,{children:"name"})," (Open Graph standard)"]}),`
`,e.jsx(n.li,{children:"All changes are immediately reflected in the DOM tree"}),`
`,e.jsx(n.li,{children:"When creating an instance, existing OG tags from the page are automatically read"}),`
`,e.jsxs(n.li,{children:["For SSR, use the ",e.jsx(n.code,{children:"html()"})," method to generate meta tags in the server template"]}),`
`,e.jsx(n.li,{children:"Content is automatically escaped to prevent XSS"}),`
`,e.jsx(n.li,{children:"Supports all official Open Graph protocol types"}),`
`]})]})}function h(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default};
