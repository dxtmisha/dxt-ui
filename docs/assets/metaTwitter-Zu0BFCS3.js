import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Zkkrlp1B.js";import{M as s}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function r(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/functional/en/Classes/MetaTwitter"}),`
`,e.jsx(t.h1,{id:"metatwitter-class",children:"MetaTwitter Class"}),`
`,e.jsxs(t.p,{children:["A class for working with Twitter Card meta-tags, ensuring beautiful content display when sharing links on Twitter (X). Inherits ",e.jsx(t.code,{children:"MetaManager"})," functionality and provides type-safe methods for managing standard Twitter Card tags."]}),`
`,e.jsx(t.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Type Safety"})," — strict typing for all Twitter Card tags and card types"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Automatic Synchronization"})," — updates meta-tags in the document ",e.jsx(t.code,{children:"<head>"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Support for All Card Types"})," — summary, summary_large_image, app, player"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Convenient API"})," — specialized methods for each tag"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"SSR Compatibility"})," — HTML generation for server-side rendering"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Type Validation"})," — support for all official Twitter Card types"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Chainable Methods"})," — ability to set values sequentially"]}),`
`]}),`
`,e.jsx(t.h2,{id:"constructor",children:"Constructor"}),`
`,e.jsx(t.h3,{id:"constructor-1",children:e.jsx(t.code,{children:"constructor"})}),`
`,e.jsx(t.p,{children:"Creates a MetaTwitter instance with a preset list of all supported Twitter Card tags. Automatically reads existing tags from the DOM."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter } from '@dxtmisha/functional'

// Create an instance
const twitter = new MetaTwitter()

// The class automatically manages all standard Twitter Card tags:
// twitter:card, twitter:site, twitter:creator, twitter:title,
// twitter:description, twitter:image and others
`})}),`
`,e.jsx(t.h2,{id:"data-retrieval-methods",children:"Data Retrieval Methods"}),`
`,e.jsx(t.h3,{id:"getcard",children:e.jsx(t.code,{children:"getCard"})}),`
`,e.jsx(t.p,{children:"Gets the Twitter Card type."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"MetaTwitterCard"})," — card type"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

const cardType = twitter.getCard()
// 'summary_large_image'

// Check card type
if (twitter.getCard() === 'summary_large_image') {
  console.log('Large image card')
}

// Conditional logic
switch (twitter.getCard()) {
  case 'summary':
    console.log('Standard card')
    break
  case 'summary_large_image':
    console.log('Large image card')
    break
  case 'player':
    console.log('Video player')
    break
}
`})}),`
`,e.jsx(t.h3,{id:"getsite",children:e.jsx(t.code,{children:"getSite"})}),`
`,e.jsx(t.p,{children:"Gets the Twitter account of the website or brand."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"string"})," — site's @username"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

const site = twitter.getSite()
// '@mywebsite'

// Use for attribution
console.log('Site belongs to:', twitter.getSite())

// Check if set
if (twitter.getSite()) {
  console.log('Twitter site account is set')
}

// Extract username without @
const username = twitter.getSite().replace('@', '')
`})}),`
`,e.jsx(t.h3,{id:"getcreator",children:e.jsx(t.code,{children:"getCreator"})}),`
`,e.jsx(t.p,{children:"Gets the Twitter account of the content creator."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"string"})," — creator's @username"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

const creator = twitter.getCreator()
// '@john_doe'

// Display author
console.log('Author:', twitter.getCreator())

// Use in UI
const authorLink = \`https://twitter.com/\${twitter.getCreator().replace('@', '')}\`

// Check authorship
if (twitter.getCreator()) {
  console.log('Content has an author')
}
`})}),`
`,e.jsx(t.h3,{id:"geturl",children:e.jsx(t.code,{children:"getUrl"})}),`
`,e.jsx(t.p,{children:"Gets the page URL for Twitter Card."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"string"})," — page URL"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

const url = twitter.getUrl()
// 'https://example.com/article/my-post'

// Get domain
const domain = new URL(twitter.getUrl()).hostname

// Check match with current URL
if (twitter.getUrl() !== window.location.href) {
  console.warn('Twitter URL does not match current URL')
}

// Create share link
const shareUrl = \`https://twitter.com/intent/tweet?url=\${encodeURIComponent(twitter.getUrl())}\`
`})}),`
`,e.jsx(t.h3,{id:"gettitle",children:e.jsx(t.code,{children:"getTitle"})}),`
`,e.jsx(t.p,{children:"Gets the card title."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"string"})," — card title"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

const title = twitter.getTitle()
// 'Amazing Article About Web Development'

// Use for debugging
console.log('Twitter Title:', twitter.getTitle())

// Check length (recommended up to 70 characters)
if (twitter.getTitle().length > 70) {
  console.warn('Title is too long for Twitter')
}

// Use in preview
const previewTitle = twitter.getTitle()
`})}),`
`,e.jsx(t.h3,{id:"getdescription",children:e.jsx(t.code,{children:"getDescription"})}),`
`,e.jsx(t.p,{children:"Gets the card description."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"string"})," — card description"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

const description = twitter.getDescription()
// 'Complete guide to building...'

// Check length (recommended up to 200 characters)
if (twitter.getDescription().length > 200) {
  console.warn('Description is too long')
}

// Truncate for preview
const shortDesc = twitter.getDescription().substring(0, 150) + '...'

// Use in metadata
console.log('Twitter Description:', twitter.getDescription())
`})}),`
`,e.jsx(t.h3,{id:"getimage",children:e.jsx(t.code,{children:"getImage"})}),`
`,e.jsx(t.p,{children:"Gets the card image URL."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"string"})," — image URL"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

const imageUrl = twitter.getImage()
// 'https://example.com/images/twitter-card.jpg'

// Preload image
const img = new Image()
img.src = twitter.getImage()

// Check if set
if (!twitter.getImage()) {
  console.warn('Twitter image is not set')
}

// Use for preview
const previewImage = twitter.getImage()
`})}),`
`,e.jsx(t.h2,{id:"data-setting-methods",children:"Data Setting Methods"}),`
`,e.jsx(t.h3,{id:"setcard",children:e.jsx(t.code,{children:"setCard"})}),`
`,e.jsx(t.p,{children:"Sets the Twitter Card type."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"card: MetaTwitterCard"})," — card type"]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Available types:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"summary"})," — summary card with small image"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"summary_large_image"})," — card with large image (most popular)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"app"})," — app card (for iOS/Android)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"player"})," — card with video/audio player"]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter, MetaTwitterCard } from '@dxtmisha/functional'

const twitter = new MetaTwitter()

// Set standard card
twitter.setCard(MetaTwitterCard.summary)

// Large image card (recommended)
twitter.setCard(MetaTwitterCard.summaryLargeImage)

// For apps
twitter.setCard(MetaTwitterCard.app)

// For video content
twitter.setCard(MetaTwitterCard.player)

// Conditional setting
const cardType = hasLargeImage
  ? MetaTwitterCard.summaryLargeImage
  : MetaTwitterCard.summary

twitter.setCard(cardType)
`})}),`
`,e.jsx(t.h3,{id:"setsite",children:e.jsx(t.code,{children:"setSite"})}),`
`,e.jsx(t.p,{children:"Sets the Twitter account of the website or brand."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"site: string"})," — site's @username"]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

// Set site account
twitter.setSite('@mywebsite')

// Can be without @
twitter.setSite('mywebsite')

// From configuration
twitter.setSite(config.twitterHandle)

// Chain methods
twitter
  .setSite('@mywebsite')
  .setCreator('@author')

// Recommendations:
// - Use official brand account
// - Format: @username (with or without @)
// - Twitter will show "via @username" in the card
`})}),`
`,e.jsx(t.h3,{id:"setcreator",children:e.jsx(t.code,{children:"setCreator"})}),`
`,e.jsx(t.p,{children:"Sets the Twitter account of the content creator."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"creator: string"})," — creator's @username"]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

// Set creator
twitter.setCreator('@john_doe')

// From user data
twitter.setCreator(article.author.twitterHandle)

// Dynamic update
const updateAuthor = (author) => {
  if (author.twitter) {
    twitter.setCreator(author.twitter)
  }
}

// Chain
twitter
  .setCreator('@author_name')
  .setTitle('Article Title')

// Recommendations:
// - Use for author attribution
// - Twitter will show "by @username"
// - Different from site (site - for website, creator - for author)
`})}),`
`,e.jsx(t.h3,{id:"seturl",children:e.jsx(t.code,{children:"setUrl"})}),`
`,e.jsx(t.p,{children:"Sets the page URL for Twitter Card."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"url: string"})," — page URL"]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

// Set URL
twitter.setUrl('https://example.com/article/my-post')

// Use current URL
twitter.setUrl(window.location.href)

// Clean query parameters
const cleanUrl = window.location.origin + window.location.pathname
twitter.setUrl(cleanUrl)

// For SPA
router.afterEach((to) => {
  twitter.setUrl(\`https://example.com\${to.fullPath}\`)
})

// Absolute URL from relative
const absoluteUrl = new URL('/article', window.location.origin).href
twitter.setUrl(absoluteUrl)

// Recommendations:
// - Always use absolute URLs
// - URL must be accessible to Twitter bot
// - Avoid redirects
`})}),`
`,e.jsx(t.h3,{id:"settitle",children:e.jsx(t.code,{children:"setTitle"})}),`
`,e.jsx(t.p,{children:"Sets the card title."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"title: string"})," — card title"]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

// Set title
twitter.setTitle('Amazing Article About Web Development')

// Chain methods
twitter
  .setTitle('New Title')
  .setDescription('New Description')

// Dynamic update
const updateTitle = (newTitle) => {
  twitter.setTitle(newTitle)
}

// Automatic generation
twitter.setTitle(\`\${article.title} - \${siteName}\`)

// Truncate long title
const maxLength = 70
const shortTitle = article.title.length > maxLength
  ? article.title.substring(0, maxLength - 3) + '...'
  : article.title

twitter.setTitle(shortTitle)

// Recommendations:
// - Maximum 70 characters
// - Will be displayed in bold
// - Avoid duplication with description
`})}),`
`,e.jsx(t.h3,{id:"setdescription",children:e.jsx(t.code,{children:"setDescription"})}),`
`,e.jsx(t.p,{children:"Sets the card description."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"description: string"})," — card description"]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

// Set description
twitter.setDescription('Complete guide to building web applications using modern technologies')

// Truncate long text
const shortDesc = article.content.substring(0, 200)
twitter.setDescription(shortDesc)

// Remove HTML tags
const plainText = article.html.replace(/<[^>]*>/g, '')
twitter.setDescription(plainText.substring(0, 200))

// From excerpt
twitter.setDescription(article.excerpt || article.content.substring(0, 200))

// Chain
twitter
  .setDescription('Article description')
  .setImage('https://example.com/image.jpg')

// Recommendations:
// - Maximum 200 characters
// - Twitter may truncate text
// - Add call-to-action
// - Avoid special characters
`})}),`
`,e.jsx(t.h3,{id:"setimage",children:e.jsx(t.code,{children:"setImage"})}),`
`,e.jsx(t.p,{children:"Sets the card image URL."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"image: string"})," — image URL"]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"this"})," — for chaining calls"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

// Set image
twitter.setImage('https://example.com/images/twitter-card.jpg')

// Absolute URL
const imageUrl = new URL('/images/twitter-image.jpg', window.location.origin).href
twitter.setImage(imageUrl)

// From content data
twitter.setImage(article.featuredImage)

// Fallback image
twitter.setImage(article.image || '/images/default-twitter.jpg')

// For summary card (square image)
twitter
  .setCard(MetaTwitterCard.summary)
  .setImage('https://example.com/square-image.jpg') // 1:1 ratio

// For summary_large_image (wide image)
twitter
  .setCard(MetaTwitterCard.summaryLargeImage)
  .setImage('https://example.com/wide-image.jpg') // 2:1 ratio

// Recommended sizes:
// summary: 120x120 - 1:1 (minimum)
//          280x150 - optimal
// summary_large_image: 300x157 - minimum
//                      1200x628 - optimal (like OG)
//                      Ratio 2:1 or 1.91:1
// Formats: JPG, PNG, WebP, GIF
// Maximum size: 5 MB
`})}),`
`,e.jsx(t.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(t.h3,{id:"complete-article-page-setup",children:"Complete Article Page Setup"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter, MetaTwitterCard } from '@dxtmisha/functional'

const twitter = new MetaTwitter()

// Set all main tags
twitter
  .setCard(MetaTwitterCard.summaryLargeImage)
  .setTitle('Complete Guide to Twitter Cards')
  .setDescription('Learn how to properly configure Twitter Card tags for your site and improve Twitter sharing')
  .setUrl('https://example.com/articles/twitter-cards-guide')
  .setImage('https://example.com/images/twitter-guide.jpg')
  .setSite('@mywebsite')
  .setCreator('@author_name')

// Now when shared on Twitter:
// - A beautiful card with large image will be displayed
// - Title and description will be shown
// - Attribution will appear as "via @mywebsite by @author_name"
`})}),`
`,e.jsx(t.h3,{id:"dynamic-updates-for-spa",children:"Dynamic Updates for SPA"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`// Vue Router
router.afterEach((to) => {
  const twitter = new MetaTwitter()

  twitter
    .setCard(MetaTwitterCard.summaryLargeImage)
    .setTitle(to.meta.twitterTitle || to.meta.title)
    .setDescription(to.meta.twitterDescription || to.meta.description)
    .setUrl(\`https://example.com\${to.path}\`)
    .setImage(to.meta.twitterImage || '/images/default-twitter.jpg')
    .setSite('@mywebsite')
})

// React Router
useEffect(() => {
  const twitter = new MetaTwitter()

  twitter
    .setCard(MetaTwitterCard.summaryLargeImage)
    .setTitle(page.title)
    .setDescription(page.description)
    .setUrl(window.location.href)
    .setImage(page.image)
    .setSite(config.twitterSite)
    .setCreator(page.author?.twitter)

  return () => {
    // Cleanup if needed
  }
}, [page])
`})}),`
`,e.jsx(t.h3,{id:"setup-for-different-content-types",children:"Setup for Different Content Types"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter, MetaTwitterCard } from '@dxtmisha/functional'

const twitter = new MetaTwitter()

// For blog post
const setupBlogPost = (post) => {
  twitter
    .setCard(MetaTwitterCard.summaryLargeImage)
    .setTitle(post.title)
    .setDescription(post.excerpt)
    .setUrl(\`https://example.com/blog/\${post.slug}\`)
    .setImage(post.coverImage)
    .setSite('@myblog')
    .setCreator(post.author.twitter)
}

// For news (with small image)
const setupNews = (news) => {
  twitter
    .setCard(MetaTwitterCard.summary)
    .setTitle(news.headline)
    .setDescription(news.summary)
    .setUrl(\`https://example.com/news/\${news.id}\`)
    .setImage(news.thumbnail)
    .setSite('@mynews')
}

// For video
const setupVideo = (video) => {
  twitter
    .setCard(MetaTwitterCard.player)
    .setTitle(video.title)
    .setDescription(video.description)
    .setUrl(\`https://example.com/videos/\${video.id}\`)
    .setImage(video.thumbnail)
    .setSite('@myvideos')
}

// For homepage
const setupHomePage = () => {
  twitter
    .setCard(MetaTwitterCard.summaryLargeImage)
    .setTitle('Welcome to Our Website')
    .setDescription('The best content about web development and technology')
    .setUrl('https://example.com')
    .setImage('https://example.com/images/home-twitter.jpg')
    .setSite('@mywebsite')
}
`})}),`
`,e.jsx(t.h3,{id:"html-generation-for-ssr",children:"HTML Generation for SSR"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter, MetaTwitterCard } from '@dxtmisha/functional'

// Express.js server
app.get('/article/:id', async (req, res) => {
  const article = await getArticle(req.params.id)

  const twitter = new MetaTwitter()
  twitter
    .setCard(MetaTwitterCard.summaryLargeImage)
    .setTitle(article.title)
    .setDescription(article.excerpt)
    .setUrl(\`https://example.com/article/\${article.id}\`)
    .setImage(article.coverImage)
    .setSite('@mywebsite')
    .setCreator(article.author.twitter)

  const html = \`
    <!DOCTYPE html>
    <html>
      <head>
        <title>\${article.title}</title>
        \${twitter.html()}
      </head>
      <body>
        \${article.content}
      </body>
    </html>
  \`

  res.send(html)
})

// Result in HTML:
// <meta property="twitter:card" content="summary_large_image">
// <meta property="twitter:title" content="Article Title">
// <meta property="twitter:description" content="Description...">
// <meta property="twitter:url" content="https://example.com/article/123">
// <meta property="twitter:image" content="https://example.com/images/cover.jpg">
// <meta property="twitter:site" content="@mywebsite">
// <meta property="twitter:creator" content="@author">
`})}),`
`,e.jsx(t.h3,{id:"combining-with-open-graph",children:"Combining with Open Graph"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter, MetaOg, MetaTwitterCard, MetaOpenGraphType } from '@dxtmisha/functional'

const twitter = new MetaTwitter()
const og = new MetaOg()

// Common update function
const updateSocialMeta = (data) => {
  // Twitter Cards
  twitter
    .setCard(MetaTwitterCard.summaryLargeImage)
    .setTitle(data.title)
    .setDescription(data.description)
    .setUrl(data.url)
    .setImage(data.image)
    .setSite(data.twitterSite)
    .setCreator(data.twitterCreator)

  // Open Graph
  og
    .setType(MetaOpenGraphType.article)
    .setTitle(data.title)
    .setDescription(data.description)
    .setUrl(data.url)
    .setImage(data.image)
    .setSiteName(data.siteName)
    .setLocale('en_US')
}

// Usage
updateSocialMeta({
  title: 'Article Title',
  description: 'Article description',
  url: 'https://example.com/article/123',
  image: 'https://example.com/images/cover.jpg',
  twitterSite: '@mywebsite',
  twitterCreator: '@author',
  siteName: 'My Website'
})

// For SSR - combined HTML
const allSocialMetaHTML = twitter.html() + og.html()
`})}),`
`,e.jsx(t.h3,{id:"cms-integration",children:"CMS Integration"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter, MetaTwitterCard } from '@dxtmisha/functional'

// Function to update Twitter Card from CMS data
const updateTwitterFromCMS = (pageData) => {
  const twitter = new MetaTwitter()

  // Determine card type
  const cardMap = {
    'post': MetaTwitterCard.summaryLargeImage,
    'news': MetaTwitterCard.summary,
    'video': MetaTwitterCard.player
  }

  twitter
    .setCard(cardMap[pageData.contentType] || MetaTwitterCard.summaryLargeImage)
    .setTitle(pageData.seo?.twitterTitle || pageData.title)
    .setDescription(pageData.seo?.twitterDescription || pageData.excerpt)
    .setUrl(pageData.canonicalUrl)
    .setImage(pageData.seo?.twitterImage || pageData.featuredImage)
    .setSite(pageData.site.twitterHandle)

  // Add author if available
  if (pageData.author?.twitter) {
    twitter.setCreator(pageData.author.twitter)
  }

  return twitter
}

// Usage
const page = await cms.getPage(pageId)
updateTwitterFromCMS(page)
`})}),`
`,e.jsx(t.h3,{id:"validation-and-debugging",children:"Validation and Debugging"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter } from '@dxtmisha/functional'

const twitter = new MetaTwitter()

// Check required fields
const validateTwitterCard = () => {
  const errors = []

  if (!twitter.getCard()) errors.push('Missing twitter:card')
  if (!twitter.getTitle()) errors.push('Missing twitter:title')
  if (!twitter.getDescription()) errors.push('Missing twitter:description')
  if (!twitter.getImage()) errors.push('Missing twitter:image')

  // Check length
  if (twitter.getTitle().length > 70) {
    errors.push('twitter:title is too long (>70 characters)')
  }

  if (twitter.getDescription().length > 200) {
    errors.push('twitter:description is too long (>200 characters)')
  }

  if (errors.length > 0) {
    console.error('Twitter Card errors:', errors)
  }

  return errors.length === 0
}

// Output all Twitter Card tags for debugging
const debugTwitterCard = () => {
  console.group('Twitter Card Tags')
  console.log('Card Type:', twitter.getCard())
  console.log('Title:', twitter.getTitle())
  console.log('Description:', twitter.getDescription())
  console.log('Image:', twitter.getImage())
  console.log('URL:', twitter.getUrl())
  console.log('Site:', twitter.getSite())
  console.log('Creator:', twitter.getCreator())
  console.groupEnd()
}

// Export for testing
const exportTwitterData = () => {
  return twitter.getItems()
}

// Check before publishing
const checkBeforePublish = () => {
  const isValid = validateTwitterCard()

  if (isValid) {
    console.log('✓ Twitter Card configured correctly')
  } else {
    console.warn('⚠ Twitter Card needs attention')
    debugTwitterCard()
  }

  return isValid
}
`})}),`
`,e.jsx(t.h2,{id:"usage-recommendations",children:"Usage Recommendations"}),`
`,e.jsx(t.h3,{id:"required-tags",children:"Required Tags"}),`
`,e.jsx(t.p,{children:"For correct Twitter Card display, set at minimum:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"twitter:card"})," — card type"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"twitter:title"})," — title"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"twitter:description"})," — description"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"twitter:image"})," — image"]}),`
`]}),`
`,e.jsx(t.h3,{id:"image-sizes",children:"Image Sizes"}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"summary card:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Recommended size:"})," 120×120 px (minimum)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Optimal size:"})," 280×150 px"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Aspect ratio:"})," 1:1 (square)"]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"summary_large_image card:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Minimum size:"})," 300×157 px"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Optimal size:"})," 1200×628 px (like Open Graph)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Aspect ratio:"})," 2:1 or 1.91:1"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Maximum file size:"})," 5 MB"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Formats:"})," JPG, PNG, WebP, GIF"]}),`
`]}),`
`,e.jsx(t.h3,{id:"text-length",children:"Text Length"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"twitter:title:"})," up to 70 characters"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"twitter:description:"})," up to 200 characters"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"twitter:site:"})," @username format"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"twitter:creator:"})," @username format"]}),`
`]}),`
`,e.jsx(t.h3,{id:"username-attributes",children:"@username Attributes"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"twitter:site"})," — official Twitter account of the site/brand",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:'Shows as "via @username"'}),`
`,e.jsx(t.li,{children:"Used for site attribution"}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"twitter:creator"})," — Twitter account of the content author",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:'Shows as "by @username"'}),`
`,e.jsx(t.li,{children:"Used for author attribution"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t.h3,{id:"testing",children:"Testing"}),`
`,e.jsx(t.p,{children:"Check Twitter Card tags using:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://cards-dev.twitter.com/validator",rel:"nofollow",children:"Twitter Card Validator"})," (legacy)"]}),`
`,e.jsx(t.li,{children:"Test by posting a test link on Twitter"}),`
`,e.jsx(t.li,{children:"Use preview mode when creating a tweet"}),`
`]}),`
`,e.jsx(t.h3,{id:"differences-from-open-graph",children:"Differences from Open Graph"}),`
`,e.jsx(t.p,{children:"Twitter Cards can use Open Graph tags as fallback:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["If ",e.jsx(t.code,{children:"twitter:title"})," is missing, uses ",e.jsx(t.code,{children:"og:title"})]}),`
`,e.jsxs(t.li,{children:["If ",e.jsx(t.code,{children:"twitter:description"})," is missing, uses ",e.jsx(t.code,{children:"og:description"})]}),`
`,e.jsxs(t.li,{children:["If ",e.jsx(t.code,{children:"twitter:image"})," is missing, uses ",e.jsx(t.code,{children:"og:image"})]}),`
`]}),`
`,e.jsx(t.p,{children:"However, it's recommended to set Twitter Card tags explicitly for better control."}),`
`,e.jsx(t.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The class inherits all methods from ",e.jsx(t.code,{children:"MetaManager"}),", including ",e.jsx(t.code,{children:"html()"}),", ",e.jsx(t.code,{children:"getItems()"}),", ",e.jsx(t.code,{children:"setByList()"})]}),`
`,e.jsxs(t.li,{children:["Automatically uses the ",e.jsx(t.code,{children:"property"})," attribute (like Open Graph)"]}),`
`,e.jsx(t.li,{children:"All changes are immediately reflected in the DOM tree"}),`
`,e.jsx(t.li,{children:"When creating an instance, existing Twitter Card tags from the page are automatically read"}),`
`,e.jsxs(t.li,{children:["For SSR, use the ",e.jsx(t.code,{children:"html()"})," method to generate meta tags in the server template"]}),`
`,e.jsx(t.li,{children:"Content is automatically escaped to prevent XSS"}),`
`,e.jsx(t.li,{children:"Twitter may cache cards, use Card Validator to clear cache"}),`
`,e.jsx(t.li,{children:"Supports all official Twitter Card types"}),`
`]})]})}function g(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{g as default};
