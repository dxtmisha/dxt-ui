import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Zkkrlp1B.js";import{M as s}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function a(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/functional/en/Classes/Meta"}),`
`,e.jsx(n.h1,{id:"meta-class",children:"Meta Class"}),`
`,e.jsx(n.p,{children:"A unified class for managing all types of meta tags: standard HTML, Open Graph, and Twitter Card. Provides a single interface for working with SEO optimization and social networks, automatically synchronizing changes across all platforms."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unified API"})," — single entry point for all types of meta tags"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Synchronization"})," — changes in Meta are automatically applied to Open Graph and Twitter Card"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Title Management"}),' — support for title suffix (e.g., "Title - Site Name")']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Full Integration"})," — combines MetaManager, MetaOg, and MetaTwitter"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Simplified Interface"})," — reduces code needed to set meta tags"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keywords Support"})," — works with keywords as string or array"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Robots Directives"})," — manages indexing and crawling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SSR Compatible"})," — generates HTML for server-side rendering"]}),`
`]}),`
`,e.jsx(n.h2,{id:"constructor",children:"Constructor"}),`
`,e.jsx(n.h3,{id:"constructor-1",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Creates a Meta instance with integrated Open Graph and Twitter Card support. Automatically initializes internal MetaOg and MetaTwitter instances."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Meta } from '@dxtmisha/functional'

// Create a unified meta tags manager
const meta = new Meta()

// The class automatically manages:
// - Standard HTML meta tags (description, keywords, author, robots, canonical)
// - Open Graph tags (og:title, og:description, og:image, og:url, og:site_name, og:locale)
// - Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image, twitter:site)
`})}),`
`,e.jsx(n.h2,{id:"data-retrieval-methods",children:"Data Retrieval Methods"}),`
`,e.jsx(n.h3,{id:"gettitle",children:e.jsx(n.code,{children:"getTitle"})}),`
`,e.jsx(n.p,{children:"Gets the page title without suffix."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — page title"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

// Set title with suffix
meta.setSuffix('My Site')
meta.setTitle('Home Page')

// document.title = "Home Page - My Site"

// Get clean title (without suffix)
const title = meta.getTitle()
// "Home Page"

// Use in navigation
const breadcrumb = meta.getTitle()

// Check if set
if (meta.getTitle()) {
  console.log('Title is set')
}
`})}),`
`,e.jsx(n.h3,{id:"getkeywords",children:e.jsx(n.code,{children:"getKeywords"})}),`
`,e.jsx(n.p,{children:"Gets the keywords meta tag."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — comma-separated keywords"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

const keywords = meta.getKeywords()
// "web development, javascript, vue, react"

// Convert to array
const keywordsArray = keywords.split(', ')

// Check for keyword
if (meta.getKeywords().includes('javascript')) {
  console.log('Page about JavaScript')
}

// Use for filtering
const tags = meta.getKeywords().split(', ')
`})}),`
`,e.jsx(n.h3,{id:"getdescription",children:e.jsx(n.code,{children:"getDescription"})}),`
`,e.jsx(n.p,{children:"Gets the description meta tag."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — page description"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

const description = meta.getDescription()
// "Complete guide to web development"

// Check length
if (meta.getDescription().length > 160) {
  console.warn('Description too long for Google')
}

// Use in preview
const preview = meta.getDescription().substring(0, 100)

// For structured data
const schema = {
  description: meta.getDescription()
}
`})}),`
`,e.jsx(n.h3,{id:"getimage",children:e.jsx(n.code,{children:"getImage"})}),`
`,e.jsx(n.p,{children:"Gets the Open Graph image URL."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — image URL"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

const imageUrl = meta.getImage()
// "https://example.com/images/preview.jpg"

// Preload
const img = new Image()
img.src = meta.getImage()

// Use in sharing
const shareData = {
  title: meta.getTitle(),
  text: meta.getDescription(),
  image: meta.getImage()
}

// Check if set
if (!meta.getImage()) {
  console.warn('Social media image not set')
}
`})}),`
`,e.jsx(n.h3,{id:"getcanonical",children:e.jsx(n.code,{children:"getCanonical"})}),`
`,e.jsx(n.p,{children:"Gets the canonical URL."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — canonical URL"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

const canonicalUrl = meta.getCanonical()
// "https://example.com/page"

// Check match with current URL
if (meta.getCanonical() !== window.location.href) {
  console.log('Canonical URL differs from current')
}

// Use for redirects
const canonical = meta.getCanonical()

// For sitemap
const url = meta.getCanonical()
`})}),`
`,e.jsx(n.h3,{id:"getrobots",children:e.jsx(n.code,{children:"getRobots"})}),`
`,e.jsx(n.p,{children:"Gets the robots meta tag value."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"MetaRobots"})," — robots directive"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

const robots = meta.getRobots()
// "index, follow"

// Check indexing
if (meta.getRobots().includes('noindex')) {
  console.log('Page should not be indexed')
}

// Conditional logic
const isIndexable = !meta.getRobots().includes('noindex')

// For debugging
console.log('Robots directive:', meta.getRobots())
`})}),`
`,e.jsx(n.h3,{id:"getauthor",children:e.jsx(n.code,{children:"getAuthor"})}),`
`,e.jsx(n.p,{children:"Gets the author meta tag."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — author name"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

const author = meta.getAuthor()
// "John Doe"

// Display author info
console.log(\`Author: \${meta.getAuthor()}\`)

// For structured data
const articleSchema = {
  author: {
    name: meta.getAuthor()
  }
}

// Check authorship
if (meta.getAuthor()) {
  console.log('Content has an author')
}
`})}),`
`,e.jsx(n.h3,{id:"getsitename",children:e.jsx(n.code,{children:"getSiteName"})}),`
`,e.jsx(n.p,{children:"Gets the Open Graph site name."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — site name"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

const siteName = meta.getSiteName()
// "My Blog"

// Use in title
document.title = \`\${meta.getTitle()} | \${meta.getSiteName()}\`

// For branding
const brandName = meta.getSiteName()

// In footer
const footerText = \`© 2024 \${meta.getSiteName()}\`
`})}),`
`,e.jsx(n.h3,{id:"getlocale",children:e.jsx(n.code,{children:"getLocale"})}),`
`,e.jsx(n.p,{children:"Gets the Open Graph locale."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — locale (e.g., 'en_US')"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

const locale = meta.getLocale()
// "en_US"

// Determine language
const language = meta.getLocale().split('_')[0] // "en"

// Use for i18n
if (meta.getLocale().startsWith('en')) {
  console.log('English content')
}

// For hreflang
const lang = meta.getLocale().replace('_', '-').toLowerCase()
`})}),`
`,e.jsx(n.h3,{id:"getog",children:e.jsx(n.code,{children:"getOg"})}),`
`,e.jsx(n.p,{children:"Gets the MetaOg instance for advanced Open Graph operations."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"MetaOg"})," — MetaOg class instance"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

// Get access to MetaOg
const og = meta.getOg()

// Use specific Open Graph methods
og.setType(MetaOpenGraphType.article)

// Access all MetaOg methods
og.getType() // 'article'

// Set additional OG tags
meta.getOg().setType(MetaOpenGraphType.video)

// Chaining calls
meta.getOg()
  .setType(MetaOpenGraphType.article)
  .setLocale('en_US')

// Use for specific settings
const setupArticle = () => {
  meta.setTitle('Article')
  meta.setDescription('Description')

  // Specific Open Graph settings
  meta.getOg().setType(MetaOpenGraphType.article)
}
`})}),`
`,e.jsx(n.h3,{id:"gettwitter",children:e.jsx(n.code,{children:"getTwitter"})}),`
`,e.jsx(n.p,{children:"Gets the MetaTwitter instance for advanced Twitter Card operations."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"MetaTwitter"})," — MetaTwitter class instance"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

// Get access to MetaTwitter
const twitter = meta.getTwitter()

// Use specific Twitter Card methods
twitter.setCard(MetaTwitterCard.summaryLargeImage)

// Access all MetaTwitter methods
twitter.getCard() // 'summary_large_image'

// Set additional Twitter tags
meta.getTwitter().setCard(MetaTwitterCard.player)

// Chaining calls
meta.getTwitter()
  .setCard(MetaTwitterCard.summaryLargeImage)
  .setCreator('@author')

// Use for specific settings
const setupVideo = () => {
  meta.setTitle('Video')
  meta.setDescription('Video description')

  // Specific Twitter Card settings
  meta.getTwitter().setCard(MetaTwitterCard.player)
}

// Set creator (not available directly through Meta)
meta.getTwitter().setCreator('@john_doe')
`})}),`
`,e.jsx(n.h2,{id:"data-setting-methods",children:"Data Setting Methods"}),`
`,e.jsx(n.h3,{id:"settitle",children:e.jsx(n.code,{children:"setTitle"})}),`
`,e.jsx(n.p,{children:"Sets the page title with automatic suffix addition and updates Open Graph and Twitter Card."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"title: string"})," — page title (without suffix)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

// Set suffix (usually site name)
meta.setSuffix('My Site')

// Set title
meta.setTitle('Home Page')
// document.title = "Home Page - My Site"
// og:title = "Home Page - My Site"
// twitter:title = "Home Page - My Site"

// Without suffix
const meta2 = new Meta()
meta2.setTitle('Page without suffix')
// document.title = "Page without suffix"

// Dynamic update
router.afterEach((to) => {
  meta.setTitle(to.meta.title)
})

// For different pages
meta.setTitle('About Us')
meta.setTitle('Contact')
meta.setTitle('Blog')

// Chaining
meta
  .setTitle('New Page')
  .setDescription('Page description')
`})}),`
`,e.jsx(n.h3,{id:"setkeywords",children:e.jsx(n.code,{children:"setKeywords"})}),`
`,e.jsx(n.p,{children:"Sets the keywords meta tag. Accepts string or array."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"keywords: string | string[]"})," — keywords"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

// String
meta.setKeywords('web development, javascript, vue, react')

// Array
meta.setKeywords(['web development', 'javascript', 'vue', 'react'])
// Result: "web development, javascript, vue, react"

// From page data
const page = {
  tags: ['javascript', 'tutorial', 'web']
}
meta.setKeywords(page.tags)

// Dynamic addition
const existingKeywords = meta.getKeywords().split(', ')
const newKeywords = [...existingKeywords, 'new', 'keywords']
meta.setKeywords(newKeywords)

// Conditional addition
const keywords = ['web']
if (isJavaScriptArticle) {
  keywords.push('javascript')
}
meta.setKeywords(keywords)

// Note: while keywords are less important for modern SEO,
// they can be used for internal search
`})}),`
`,e.jsx(n.h3,{id:"setdescription",children:e.jsx(n.code,{children:"setDescription"})}),`
`,e.jsx(n.p,{children:"Sets the description meta tag."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"description: string"})," — page description"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

// Set description
meta.setDescription('Complete guide to web development with code examples and practical exercises')

// From content data
meta.setDescription(article.excerpt)

// Truncate long text
const longDescription = article.content
const shortDescription = longDescription.substring(0, 160)
meta.setDescription(shortDescription)

// Remove HTML tags
const plainText = article.html.replace(/<[^>]*>/g, '')
meta.setDescription(plainText.substring(0, 160))

// Chaining
meta
  .setDescription('Page description')
  .setKeywords(['web', 'dev'])

// Recommendations:
// - Google displays ~155-160 characters
// - Should contain keywords
// - Should be unique for each page
`})}),`
`,e.jsx(n.h3,{id:"setimage",children:e.jsx(n.code,{children:"setImage"})}),`
`,e.jsx(n.p,{children:"Sets the image for Open Graph and Twitter Card simultaneously."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"image: string"})," — image URL"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

// Set image
meta.setImage('https://example.com/images/preview.jpg')
// Updates og:image and twitter:image

// Absolute URL
const imageUrl = new URL('/images/social-preview.jpg', window.location.origin).href
meta.setImage(imageUrl)

// From content data
meta.setImage(article.coverImage)

// Fallback image
meta.setImage(page.image || '/images/default-preview.jpg')

// For different pages
if (isHomePage) {
  meta.setImage('/images/home-preview.jpg')
} else if (isArticle) {
  meta.setImage(article.image)
}

// Chaining
meta
  .setImage('https://example.com/image.jpg')
  .setTitle('Title')

// Recommended size: 1200x630 px
// Minimum size: 600x315 px
// Formats: JPG, PNG, WebP
`})}),`
`,e.jsx(n.h3,{id:"setcanonical",children:e.jsx(n.code,{children:"setCanonical"})}),`
`,e.jsx(n.p,{children:"Sets the canonical URL and automatically updates og:url and twitter:url."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"canonical: string"})," — canonical URL"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

// Set canonical
meta.setCanonical('https://example.com/page')
// Updates:
// - <link rel="canonical" href="https://example.com/page">
// - og:url = "https://example.com/page"
// - twitter:url = "https://example.com/page"

// Current URL
meta.setCanonical(window.location.href)

// Clean parameters
const cleanUrl = \`\${window.location.origin}\${window.location.pathname}\`
meta.setCanonical(cleanUrl)

// For pagination (all pages point to first)
meta.setCanonical('https://example.com/articles')

// For SPA
router.afterEach((to) => {
  const url = \`https://example.com\${to.path}\`
  meta.setCanonical(url)
})

// For duplicate content
meta.setCanonical(originalArticleUrl)

// Chaining
meta
  .setCanonical('https://example.com/page')
  .setTitle('Title')
`})}),`
`,e.jsx(n.h3,{id:"setrobots",children:e.jsx(n.code,{children:"setRobots"})}),`
`,e.jsx(n.p,{children:"Sets the robots meta tag to control indexing."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"robots: MetaRobots"})," — robots directive"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Meta, MetaRobots } from '@dxtmisha/functional'

const meta = new Meta()

// Allow indexing (default)
meta.setRobots(MetaRobots.indexFollow)
// <meta name="robots" content="index, follow">

// Prevent indexing
meta.setRobots(MetaRobots.noindexNofollow)
// <meta name="robots" content="noindex, nofollow">

// Index but don't follow links
meta.setRobots(MetaRobots.indexNofollow)

// Don't index but follow links
meta.setRobots(MetaRobots.noindexFollow)

// Prevent caching
meta.setRobots(MetaRobots.noarchive)

// Don't show snippet
meta.setRobots(MetaRobots.nosnippet)

// Conditional setting
if (isDraftPage) {
  meta.setRobots(MetaRobots.noindexNofollow)
} else {
  meta.setRobots(MetaRobots.indexFollow)
}

// For private pages
meta.setRobots(MetaRobots.noindexNofollow)

// For pages with duplicate content
meta.setRobots(MetaRobots.noindex)
`})}),`
`,e.jsx(n.h3,{id:"setauthor",children:e.jsx(n.code,{children:"setAuthor"})}),`
`,e.jsx(n.p,{children:"Sets the author meta tag."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"author: string"})," — author name"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

// Set author
meta.setAuthor('John Doe')

// From user data
meta.setAuthor(article.author.name)

// Full name
meta.setAuthor(\`\${user.firstName} \${user.lastName}\`)

// For blog
meta.setAuthor(post.author)

// Conditional setting
if (article.author) {
  meta.setAuthor(article.author.name)
}

// Chaining
meta
  .setAuthor('John Doe')
  .setTitle('Article')
  .setDescription('Description')

// For structured data
meta.setAuthor(author.name)
`})}),`
`,e.jsx(n.h3,{id:"setsitename",children:e.jsx(n.code,{children:"setSiteName"})}),`
`,e.jsx(n.p,{children:"Sets the site name for Open Graph and Twitter Card simultaneously."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"siteName: string"})," — site name"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

// Set site name
meta.setSiteName('My Blog')
// Updates og:site_name and twitter:site

// From configuration
meta.setSiteName(config.siteName)

// Constant
const SITE_NAME = 'WebDev Journal'
meta.setSiteName(SITE_NAME)

// For branding
meta.setSiteName('TechBlog')

// Once during initialization
const meta = new Meta()
meta.setSiteName('My Site')
meta.setSuffix('My Site')

// Chaining
meta
  .setSiteName('Site Name')
  .setTitle('Home')

// Recommendations:
// - Short and recognizable
// - Matches the brand
// - Used in social networks
`})}),`
`,e.jsx(n.h3,{id:"setlocale",children:e.jsx(n.code,{children:"setLocale"})}),`
`,e.jsx(n.p,{children:"Sets the locale for Open Graph."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"locale: string"})," — locale in language_TERRITORY format"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

// Set English locale
meta.setLocale('en_US')

// Other locales
meta.setLocale('en_GB') // English (United Kingdom)
meta.setLocale('ru_RU') // Russian
meta.setLocale('uk_UA') // Ukrainian
meta.setLocale('de_DE') // German
meta.setLocale('fr_FR') // French

// Automatic detection
const userLocale = navigator.language.replace('-', '_')
meta.setLocale(userLocale)

// From i18n settings
meta.setLocale(i18n.locale.replace('-', '_'))

// Conditional setting
const locale = isEnglish ? 'en_US' : 'ru_RU'
meta.setLocale(locale)

// On language change
const changeLanguage = (lang) => {
  const localeMap = {
    'en': 'en_US',
    'ru': 'ru_RU',
    'de': 'de_DE'
  }
  meta.setLocale(localeMap[lang])
}

// Chaining
meta
  .setLocale('en_US')
  .setSiteName('My Site')
`})}),`
`,e.jsx(n.h3,{id:"setsuffix",children:e.jsx(n.code,{children:"setSuffix"})}),`
`,e.jsx(n.p,{children:"Sets the suffix to automatically append to page title."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"suffix?: string"})," — title suffix (optional)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

// Set suffix
meta.setSuffix('My Site')
meta.setTitle('Home')
// document.title = "Home - My Site"

// From configuration
meta.setSuffix(config.siteName)

// Remove suffix
meta.setSuffix()
meta.setTitle('Page')
// document.title = "Page"

// Conditional setting
if (showBranding) {
  meta.setSuffix('Site Name')
}

// Different suffixes for different sections
if (isBlog) {
  meta.setSuffix('Blog | My Site')
} else {
  meta.setSuffix('My Site')
}

// Usually set once during initialization
const initMeta = () => {
  const meta = new Meta()
  meta.setSuffix('My Site')
  meta.setSiteName('My Site')
  return meta
}

// Note: suffix is automatically added
// in format: "Title - Suffix"
`})}),`
`,e.jsx(n.h3,{id:"html",children:e.jsx(n.code,{children:"html"})}),`
`,e.jsx(n.p,{children:"Generates the complete HTML for all meta tags, including Open Graph and Twitter Card."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — HTML string with all meta tags"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()

// Setup meta tags
meta.setSuffix('My Site')
meta.setSiteName('My Site')
meta.setLocale('en_US')
meta
  .setTitle('Article')
  .setDescription('Article description')
  .setKeywords(['web', 'javascript'])
  .setImage('https://example.com/image.jpg')
  .setCanonical('https://example.com/article')
  .setAuthor('John Doe')

// Get HTML of all meta tags
const metaHTML = meta.html()

// Result includes:
// - Standard HTML meta tags (description, keywords, author, canonical)
// - Open Graph tags (og:title, og:description, og:image, og:url, og:site_name, og:locale)
// - Twitter Card tags (twitter:title, twitter:description, twitter:image, twitter:site)

// Use in SSR (Server-Side Rendering)
// Express.js
app.get('/page', (req, res) => {
  const meta = new Meta()
  meta
    .setTitle('Page Title')
    .setDescription('Description')
    .setImage('https://example.com/og-image.jpg')

  const html = \`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        \${meta.html()}
        <title>Title - Site</title>
      </head>
      <body>
        <h1>Content</h1>
      </body>
    </html>
  \`

  res.send(html)
})

// Next.js getServerSideProps
export async function getServerSideProps() {
  const meta = new Meta()
  meta
    .setTitle('Article')
    .setDescription('Article description')

  return {
    props: {
      metaTags: meta.html()
    }
  }
}

// Nuxt.js (in composable)
const meta = new Meta()
meta.setTitle('Page')

const metaHTML = meta.html()
// Insert into head via useHead() or template

// Benefits of html() method:
// - Automatic escaping of special characters
// - Combines all three types of meta tags (standard, OG, Twitter)
// - Ready for insertion into server template
// - Safe from XSS attacks
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"complete-page-setup",children:"Complete Page Setup"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Meta, MetaRobots } from '@dxtmisha/functional'

const meta = new Meta()

// Setup during app initialization
meta.setSuffix('My Site')
meta.setSiteName('My Site')
meta.setLocale('en_US')

// Setup specific page
meta
  .setTitle('Complete Guide to Web Development')
  .setDescription('Learn web development from scratch: HTML, CSS, JavaScript, frameworks and tools')
  .setKeywords(['web development', 'html', 'css', 'javascript', 'guide'])
  .setImage('https://example.com/images/web-dev-guide.jpg')
  .setCanonical('https://example.com/guides/web-development')
  .setAuthor('John Doe')
  .setRobots(MetaRobots.indexFollow)

// Result:
// <title>Complete Guide to Web Development - My Site</title>
// <meta name="description" content="Learn web development...">
// <meta name="keywords" content="web development, html, css, javascript, guide">
// <meta name="author" content="John Doe">
// <meta name="robots" content="index, follow">
// <link rel="canonical" href="https://example.com/guides/web-development">
// <meta property="og:title" content="Complete Guide... - My Site">
// <meta property="og:description" content="Learn web development...">
// <meta property="og:image" content="https://example.com/images/web-dev-guide.jpg">
// <meta property="og:url" content="https://example.com/guides/web-development">
// <meta property="og:site_name" content="My Site">
// <meta property="og:locale" content="en_US">
// <meta property="twitter:title" content="Complete Guide... - My Site">
// <meta property="twitter:description" content="Learn web development...">
// <meta property="twitter:image" content="https://example.com/images/web-dev-guide.jpg">
// <meta property="twitter:site" content="My Site">
`})}),`
`,e.jsx(n.h3,{id:"vue-router-integration",children:"Vue Router Integration"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Meta } from '@dxtmisha/functional'

const meta = new Meta()

// Initialization
meta.setSuffix('My Site')
meta.setSiteName('My Site')
meta.setLocale('en_US')

// Update on route change
router.afterEach((to) => {
  meta
    .setTitle(to.meta.title || 'Page Not Found')
    .setDescription(to.meta.description || '')
    .setKeywords(to.meta.keywords || [])
    .setCanonical(\`https://example.com\${to.path}\`)

  // Image if available
  if (to.meta.image) {
    meta.setImage(to.meta.image)
  }

  // Author if available
  if (to.meta.author) {
    meta.setAuthor(to.meta.author)
  }
})

// Define meta in routes
const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Home',
      description: 'Welcome to our website',
      keywords: ['home', 'website'],
      image: '/images/home.jpg'
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: 'About Us',
      description: 'Information about our company',
      keywords: ['about', 'company'],
      image: '/images/about.jpg'
    }
  }
]
`})}),`
`,e.jsx(n.h3,{id:"react-integration",children:"React Integration"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Meta } from '@dxtmisha/functional'
import { useEffect } from 'react'

const meta = new Meta()

// Initialization in App.js
function App() {
  useEffect(() => {
    meta.setSuffix('My Site')
    meta.setSiteName('My Site')
    meta.setLocale('en_US')
  }, [])

  return <Router />
}

// Page component
function ArticlePage({ article }) {
  useEffect(() => {
    meta
      .setTitle(article.title)
      .setDescription(article.excerpt)
      .setKeywords(article.tags)
      .setImage(article.coverImage)
      .setCanonical(\`https://example.com/articles/\${article.slug}\`)
      .setAuthor(article.author.name)

    return () => {
      // Cleanup on unmount (optional)
    }
  }, [article])

  return <div>{/* content */}</div>
}

// Custom hook for meta tags
function useMeta(metaData) {
  useEffect(() => {
    if (metaData.title) meta.setTitle(metaData.title)
    if (metaData.description) meta.setDescription(metaData.description)
    if (metaData.keywords) meta.setKeywords(metaData.keywords)
    if (metaData.image) meta.setImage(metaData.image)
    if (metaData.canonical) meta.setCanonical(metaData.canonical)
    if (metaData.author) meta.setAuthor(metaData.author)
  }, [metaData])
}

// Using hook
function BlogPost({ post }) {
  useMeta({
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    image: post.image,
    author: post.author.name
  })

  return <article>{/* content */}</article>
}
`})}),`
`,e.jsx(n.h3,{id:"ssr-server-side-rendering",children:"SSR (Server-Side Rendering)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Meta } from '@dxtmisha/functional'

// Express.js server
app.get('/article/:id', async (req, res) => {
  const article = await getArticle(req.params.id)

  const meta = new Meta()
  meta.setSuffix('My Blog')
  meta.setSiteName('My Blog')
  meta.setLocale('en_US')

  meta
    .setTitle(article.title)
    .setDescription(article.excerpt)
    .setKeywords(article.tags)
    .setImage(article.coverImage)
    .setCanonical(\`https://example.com/article/\${article.id}\`)
    .setAuthor(article.author.name)

  const html = \`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>\${article.title} - My Blog</title>
        \${meta.html()}
      </head>
      <body>
        <article>\${article.content}</article>
      </body>
    </html>
  \`

  res.send(html)
})
`})}),`
`,e.jsx(n.h3,{id:"using-advanced-open-graph-and-twitter-card-features",children:"Using Advanced Open Graph and Twitter Card Features"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Meta, MetaOpenGraphType, MetaTwitterCard } from '@dxtmisha/functional'

const meta = new Meta()

// Basic setup through Meta
meta
  .setTitle('Video: Introduction to JavaScript')
  .setDescription('Complete JavaScript video guide for beginners')
  .setImage('https://example.com/images/js-video-thumb.jpg')
  .setCanonical('https://example.com/videos/js-intro')

// Advanced Open Graph setup through getOg()
meta.getOg()
  .setType(MetaOpenGraphType.videoMovie) // Type: video
  .setLocale('en_US')

// Advanced Twitter Card setup through getTwitter()
meta.getTwitter()
  .setCard(MetaTwitterCard.player) // Card with player
  .setCreator('@javascript_guru') // Video author

// Combined setup for different content types
const setupContentMeta = (content) => {
  // Common settings
  meta
    .setTitle(content.title)
    .setDescription(content.description)
    .setImage(content.image)
    .setCanonical(content.url)

  // Specific settings depending on type
  switch (content.type) {
    case 'article':
      meta.getOg().setType(MetaOpenGraphType.article)
      meta.getTwitter().setCard(MetaTwitterCard.summaryLargeImage)
      if (content.author?.twitter) {
        meta.getTwitter().setCreator(content.author.twitter)
      }
      break

    case 'video':
      meta.getOg().setType(MetaOpenGraphType.videoMovie)
      meta.getTwitter().setCard(MetaTwitterCard.player)
      break

    case 'product':
      meta.getOg().setType(MetaOpenGraphType.product)
      meta.getTwitter().setCard(MetaTwitterCard.summaryLargeImage)
      break

    case 'music':
      meta.getOg().setType(MetaOpenGraphType.musicSong)
      meta.getTwitter().setCard(MetaTwitterCard.player)
      break
  }
}

// Usage
setupContentMeta({
  type: 'video',
  title: 'JavaScript Tutorial',
  description: 'Learn JavaScript from scratch',
  image: 'https://example.com/thumb.jpg',
  url: 'https://example.com/videos/js-tutorial',
  author: {
    twitter: '@instructor'
  }
})

// Access specific methods
const getFullMetaInfo = () => {
  return {
    // Through Meta
    title: meta.getTitle(),
    description: meta.getDescription(),
    image: meta.getImage(),

    // Through MetaOg
    ogType: meta.getOg().getType(),
    ogLocale: meta.getOg().getLocale(),

    // Through MetaTwitter
    twitterCard: meta.getTwitter().getCard(),
    twitterCreator: meta.getTwitter().getCreator()
  }
}
`})}),`
`,e.jsx(n.h2,{id:"usage-recommendations",children:"Usage Recommendations"}),`
`,e.jsx(n.h3,{id:"initialization",children:"Initialization"}),`
`,e.jsx(n.p,{children:"Set common parameters once at app startup:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()
meta.setSuffix('Site Name')
meta.setSiteName('Site Name')
meta.setLocale('en_US')
`})}),`
`,e.jsx(n.h3,{id:"update-on-navigation",children:"Update on Navigation"}),`
`,e.jsx(n.p,{children:"Update meta tags on page change:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`router.afterEach((to) => {
  meta
    .setTitle(to.meta.title)
    .setDescription(to.meta.description)
    .setCanonical(\`https://example.com\${to.path}\`)
})
`})}),`
`,e.jsx(n.h3,{id:"text-length",children:"Text Length"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Title:"})," up to 60 characters (without suffix)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Description:"})," 150-160 characters"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keywords:"})," 10-15 keywords"]}),`
`]}),`
`,e.jsx(n.h3,{id:"required-tags",children:"Required Tags"}),`
`,e.jsx(n.p,{children:"Minimum necessary meta tags:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Title (via ",e.jsx(n.code,{children:"setTitle"}),")"]}),`
`,e.jsxs(n.li,{children:["Description (via ",e.jsx(n.code,{children:"setDescription"}),")"]}),`
`,e.jsxs(n.li,{children:["Canonical (via ",e.jsx(n.code,{children:"setCanonical"}),")"]}),`
`,e.jsxs(n.li,{children:["Image for social media (via ",e.jsx(n.code,{children:"setImage"}),")"]}),`
`]}),`
`,e.jsx(n.h3,{id:"images",children:"Images"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Size: 1200×630 px (optimal)"}),`
`,e.jsx(n.li,{children:"Format: JPG, PNG, WebP"}),`
`,e.jsx(n.li,{children:"Maximum: 8 MB"}),`
`]}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Class combines functionality of MetaManager, MetaOg, and MetaTwitter"}),`
`,e.jsx(n.li,{children:"Changes in Meta are automatically applied to all related meta tags"}),`
`,e.jsx(n.li,{children:"Suffix is added only to document.title and social tags"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"html()"})," method is inherited from MetaManager and generates HTML for all managed tags"]}),`
`,e.jsx(n.li,{children:"Class is SSR compatible — checks for DOM presence before accessing document"}),`
`,e.jsx(n.li,{children:"Keywords are less important for modern SEO but can be used for internal search"}),`
`,e.jsxs(n.li,{children:["For advanced Open Graph work, use ",e.jsx(n.code,{children:"meta.og"})," directly"]}),`
`,e.jsxs(n.li,{children:["For advanced Twitter Card work, use ",e.jsx(n.code,{children:"meta.twitter"})," directly"]}),`
`]})]})}function h(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{h as default};
