import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Zkkrlp1B.js";import{M as i}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function a(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/functional/en/Classes/MetaManager"}),`
`,e.jsx(n.h1,{id:"metamanager-class",children:"MetaManager Class"}),`
`,e.jsx(n.p,{children:"A class for working with HTML meta tags with automatic DOM synchronization and safe attribute encoding. Provides reading, updating, and generating meta tags for SEO optimization and social media integration (Open Graph, Twitter Cards)."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DOM Synchronization"})," — automatic meta tag updates in document head"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dual Format Support"})," — works with both ",e.jsx(n.code,{children:"name"})," and ",e.jsx(n.code,{children:"property"})," attributes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HTML Generation"})," — converts meta tags to HTML strings for server-side rendering"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Safe Encoding"})," — automatic escaping of special characters in attributes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type Safety"})," — TypeScript support with generics for type definitions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexible API"})," — chainable methods for convenient usage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SSR Compatible"})," — works in both browser and server environments"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Auto-initialization"})," — reads existing meta tags from DOM on construction"]}),`
`]}),`
`,e.jsx(n.h2,{id:"constructor",children:"Constructor"}),`
`,e.jsx(n.h3,{id:"constructor-1",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Creates a MetaManager instance with specified parameters and automatically reads current meta tags from DOM."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listMeta: string[]"})," — list of meta tag names to manage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isProperty?: boolean"})," — use ",e.jsx(n.code,{children:"property"})," attribute instead of ",e.jsx(n.code,{children:"name"})," (default: ",e.jsx(n.code,{children:"false"}),")"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaManager } from '@dxtmisha/functional'

// Standard meta tags (name attribute)
const meta = new MetaManager([
  'description',
  'keywords',
  'author'
])

// Open Graph meta tags (property attribute)
const ogMeta = new MetaManager([
  'og:title',
  'og:description',
  'og:image',
  'og:url'
], true)

// Twitter Cards
const twitterMeta = new MetaManager([
  'twitter:card',
  'twitter:title',
  'twitter:description',
  'twitter:image'
])
`})}),`
`,e.jsx(n.h2,{id:"data-query-methods",children:"Data Query Methods"}),`
`,e.jsx(n.h3,{id:"getlistmeta",children:e.jsx(n.code,{children:"getListMeta"})}),`
`,e.jsx(n.p,{children:"Returns the list of meta tag names being managed."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string[]"})," — array of meta tag names"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new MetaManager(['description', 'keywords', 'author'])

const names = meta.getListMeta()
// ['description', 'keywords', 'author']

// Check if tag is managed
const isManaged = names.includes('description') // true

// Iterate managed tags
names.forEach(name => {
  console.log(\`Managing: \${name}\`)
})
`})}),`
`,e.jsx(n.h3,{id:"getitem",children:e.jsx(n.code,{children:"getItem"})}),`
`,e.jsx(n.p,{children:"Gets the content of a meta tag by name from internal storage."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — meta tag name"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — meta tag content (empty string if not set)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new MetaManager(['description', 'keywords', 'author'])

// Get meta description
const description = meta.get('description')

// Get keywords
const keywords = meta.get('keywords')

// Non-existent tag returns empty string
const missing = meta.get('non-existent') // ''

// Use in conditions
if (meta.get('description')) {
  console.log('Description is set')
}
`})}),`
`,e.jsx(n.h3,{id:"getitems",children:e.jsx(n.code,{children:"getItems"})}),`
`,e.jsx(n.p,{children:"Returns all meta tags as an object."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Record<string, string | undefined>"})," — object with all meta tags"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new MetaManager(['description', 'keywords', 'author'])

const allMeta = meta.getItems()
// { description: '...', keywords: '...', author: '...' }

// Check all meta tags
Object.keys(allMeta).forEach(key => {
  console.log(\`\${key}: \${allMeta[key]}\`)
})

// Use in validation
const hasAllTags = Object.values(allMeta).every(value => value !== '')

// Export for logging
console.log('Current meta state:', allMeta)
`})}),`
`,e.jsx(n.h2,{id:"data-management-methods",children:"Data Management Methods"}),`
`,e.jsx(n.h3,{id:"set",children:e.jsx(n.code,{children:"set"})}),`
`,e.jsx(n.p,{children:"Sets the content of a meta tag in internal storage and updates or creates the corresponding meta element in DOM."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — meta tag name"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"content: string"})," — meta tag content"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new MetaManager(['description', 'keywords', 'author'])

// Set single meta tag
meta.set('description', 'Website description')

// Chain multiple updates
meta
  .set('description', 'My awesome website')
  .set('keywords', 'web, development, javascript')
  .set('author', 'John Doe')

// Dynamic update
const updateSEO = (pageData) => {
  meta
    .set('description', pageData.description)
    .set('keywords', pageData.keywords)
}

// Remove meta tag
meta.set('temporary', '')
`})}),`
`,e.jsx(n.h3,{id:"setbylist",children:e.jsx(n.code,{children:"setByList"})}),`
`,e.jsx(n.p,{children:"Sets multiple meta tags from an object."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"metaList: Record<string, string | undefined>"})," — object with meta tag names and content"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new MetaManager(['description', 'keywords', 'author'])

// Set multiple tags at once
meta.setByList({
  description: 'My awesome website',
  keywords: 'web, development, javascript',
  author: 'John Doe'
})

// Dynamic page updates
const updatePageMeta = (page) => {
  meta.setByList(page.meta)
}

// From API response
fetch('/api/page-meta')
  .then(res => res.json())
  .then(data => meta.setByList(data))

// Partial updates
meta.setByList({
  description: 'Updated description'
  // Other tags remain unchanged
})
`})}),`
`,e.jsx(n.h3,{id:"html",children:e.jsx(n.code,{children:"html"})}),`
`,e.jsx(n.p,{children:"Returns all meta tags as an HTML string with safe attribute encoding. Useful for server-side rendering."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — HTML string with meta tags"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new MetaManager(['description', 'keywords', 'author'])

meta.setByList({
  description: 'My website with "quotes" & special chars',
  keywords: 'web, javascript',
  author: 'John Doe'
})

const htmlString = meta.html()
// <meta name="description" content="My website with &quot;quotes&quot; &amp; special chars">
// <meta name="keywords" content="web, javascript">
// <meta name="author" content="John Doe">

// Use in SSR templates
const htmlTemplate = \`
<!DOCTYPE html>
<html>
<head>
  \${meta.html()}
  <title>Page Title</title>
</head>
<body>...</body>
</html>
\`

// Express.js example
app.get('/page', (req, res) => {
  const meta = new MetaManager(['description', 'keywords'])
  meta.setByList(req.pageData.meta)

  res.send(\`
    <html>
      <head>\${meta.html()}</head>
      <body>...</body>
    </html>
  \`)
})
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"seo-management",children:"SEO Management"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const seoMeta = new MetaManager([
  'description',
  'keywords',
  'author',
  'robots',
  'viewport'
])

// Set SEO tags
seoMeta.setByList({
  description: 'Complete guide to web development',
  keywords: 'web, html, css, javascript, tutorial',
  author: 'WebDev Team',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0'
})

// Update on route change
router.on('change', (route) => {
  seoMeta.setByList(route.meta)
})
`})}),`
`,e.jsx(n.h3,{id:"open-graph-integration",children:"Open Graph Integration"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const ogMeta = new MetaManager([
  'og:title',
  'og:description',
  'og:image',
  'og:url',
  'og:type',
  'og:site_name'
], true)

// Set Open Graph data
ogMeta.setByList({
  'og:title': 'Amazing Article Title',
  'og:description': 'This article will blow your mind',
  'og:image': 'https://example.com/image.jpg',
  'og:url': 'https://example.com/article',
  'og:type': 'article',
  'og:site_name': 'My Website'
})

// For social media sharing
const shareData = {
  title: ogMeta.get('og:title'),
  description: ogMeta.get('og:description'),
  image: ogMeta.get('og:image')
}
`})}),`
`,e.jsx(n.h3,{id:"multi-platform-meta-management",children:"Multi-Platform Meta Management"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Create managers for different platforms
const standardMeta = new MetaManager(['description', 'keywords'])
const ogMeta = new MetaManager(['og:title', 'og:description', 'og:image'], true)
const twitterMeta = new MetaManager(['twitter:card', 'twitter:title', 'twitter:description'])

// Update all platforms
const updateAllMeta = (data) => {
  standardMeta.setByList({
    description: data.description,
    keywords: data.keywords
  })

  ogMeta.setByList({
    'og:title': data.title,
    'og:description': data.description,
    'og:image': data.image
  })

  twitterMeta.setByList({
    'twitter:card': 'summary_large_image',
    'twitter:title': data.title,
    'twitter:description': data.description
  })
}

// Generate combined HTML for SSR
const allMetaHTML = [
  standardMeta.html(),
  ogMeta.html(),
  twitterMeta.html()
].join('')
`})}),`
`,e.jsx(n.h3,{id:"dynamic-page-updates",children:"Dynamic Page Updates"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new MetaManager(['description', 'keywords'])

// Single Page Application
const loadPage = async (pageId) => {
  const pageData = await fetch(\`/api/pages/\${pageId}\`).then(r => r.json())

  // Update meta tags
  meta.setByList(pageData.meta)

  // Update title
  document.title = pageData.title
}

// React/Vue integration
useEffect(() => {
  meta.set('description', page.description)
  return () => {
    // Cleanup if needed
    meta.set('description', '')
  }
}, [page])
`})}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The constructor automatically reads existing meta tags from DOM using the ",e.jsx(n.code,{children:"update()"})," method"]}),`
`,e.jsxs(n.li,{children:["Methods that modify DOM check runtime environment with ",e.jsx(n.code,{children:"isDomRuntime()"})," before accessing ",e.jsx(n.code,{children:"document"})]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"html()"})," method uses ",e.jsx(n.code,{children:"encodeAttribute()"})," function to prevent XSS issues when injecting into SSR templates"]}),`
`,e.jsxs(n.li,{children:["Special characters in content are automatically escaped: ",e.jsx(n.code,{children:'"'})," → ",e.jsx(n.code,{children:"&quot;"}),", ",e.jsx(n.code,{children:"&"})," → ",e.jsx(n.code,{children:"&amp;"}),", etc."]}),`
`,e.jsxs(n.li,{children:["When a meta tag doesn't exist in DOM, ",e.jsx(n.code,{children:"set()"})," creates it in ",e.jsx(n.code,{children:"document.head"})]}),`
`,e.jsx(n.li,{children:"Empty strings are valid values and will update the meta tag content to empty"}),`
`,e.jsx(n.li,{children:"The class works seamlessly in both browser and Node.js (SSR) environments"}),`
`]})]})}function g(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{g as default};
