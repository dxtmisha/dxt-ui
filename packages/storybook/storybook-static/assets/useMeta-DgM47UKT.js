import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Zkkrlp1B.js";import{M as s}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function a(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/functional/en/Composables/useMeta"}),`
`,e.jsx(n.h1,{id:"composable-usemeta",children:"Composable useMeta"}),`
`,e.jsx(n.p,{children:"Composable for managing page meta tags in Vue 3 applications. Provides reactive interface for working with SEO tags, Open Graph, and Twitter Card with automatic DOM synchronization. Uses singleton pattern — all components share the same meta tags state."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reactive meta tag management"})," — automatic DOM updates when values change"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Singleton pattern"})," — unified meta tags state for the entire application"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SEO support"})," — manage title, description, keywords, canonical, robots, author"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Open Graph"})," — full Open Graph protocol support for social networks"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Twitter Card"})," — Twitter Card integration for optimal Twitter display"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SSR support"})," — HTML string generation for server-side rendering"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TypeScript support"})," — full typing of all properties and methods"]}),`
`]}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.h3,{id:"simple-meta-tags-management",children:"Simple Meta Tags Management"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useMeta } from '@dxtmisha/functional'

// Get reactive refs for managing meta tags
const { title, description, keyword } = useMeta()

// Set values
title.value = 'Home Page'
description.value = 'Homepage description of the website'
keyword.value = 'keywords, of, the, website'
`})}),`
`,e.jsx(n.h3,{id:"component-usage",children:"Component Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { useMeta } from '@dxtmisha/functional'
import { onMounted } from 'vue'

const { title, description, image, canonical } = useMeta()

onMounted(() => {
  title.value = 'About Us'
  description.value = 'Learn more about our company'
  image.value = 'https://example.com/about-image.jpg'
  canonical.value = 'https://example.com/about'
})
<\/script>

<template>
  <div>
    <h1>About Us</h1>
    <p>Page content...</p>
  </div>
</template>
`})}),`
`,e.jsx(n.h2,{id:"return-values",children:"Return Values"}),`
`,e.jsx(n.h3,{id:"meta",children:e.jsx(n.code,{children:"meta"})}),`
`,e.jsx(n.p,{children:"Instance of Meta class for advanced operations."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Meta"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { meta } = useMeta()

// Access to advanced methods
meta.setLocale('en_US')
meta.setSuffix('My Site')

// Get child classes for detailed configuration
const og = meta.getOg()
const twitter = meta.getTwitter()
`})}),`
`,e.jsx(n.h3,{id:"title",children:e.jsx(n.code,{children:"title"})}),`
`,e.jsx(n.p,{children:"Reactive page title (without suffix)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { title } = useMeta()

title.value = 'New Title'
// Automatically updates:
// - document.title (with suffix if set)
// - Open Graph og:title
// - Twitter Card twitter:title
`})}),`
`,e.jsx(n.h3,{id:"keyword",children:e.jsx(n.code,{children:"keyword"})}),`
`,e.jsx(n.p,{children:"Reactive keywords meta tag."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { keyword } = useMeta()

keyword.value = 'vue, composable, meta tags, seo'
// Updates <meta name="keywords" content="...">
`})}),`
`,e.jsx(n.h3,{id:"description",children:e.jsx(n.code,{children:"description"})}),`
`,e.jsx(n.p,{children:"Reactive description meta tag."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { description } = useMeta()

description.value = 'Complete page description for search engines'
// Updates <meta name="description" content="...">
`})}),`
`,e.jsx(n.h3,{id:"image",children:e.jsx(n.code,{children:"image"})}),`
`,e.jsx(n.p,{children:"Reactive image URL for Open Graph and Twitter Card."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { image } = useMeta()

image.value = 'https://example.com/preview.jpg'
// Automatically updates:
// - Open Graph og:image
// - Twitter Card twitter:image
`})}),`
`,e.jsx(n.h3,{id:"canonical",children:e.jsx(n.code,{children:"canonical"})}),`
`,e.jsx(n.p,{children:"Reactive canonical URL."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { canonical } = useMeta()

canonical.value = 'https://example.com/page'
// Automatically updates:
// - <link rel="canonical" href="...">
// - Open Graph og:url
// - Twitter Card twitter:url
`})}),`
`,e.jsx(n.h3,{id:"robots",children:e.jsx(n.code,{children:"robots"})}),`
`,e.jsx(n.p,{children:"Reactive robots meta tag directive."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<MetaRobots>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { robots } = useMeta()

robots.value = 'index, follow'
// Other options: 'noindex', 'nofollow', 'noindex, nofollow'
// Updates <meta name="robots" content="...">
`})}),`
`,e.jsx(n.h3,{id:"author",children:e.jsx(n.code,{children:"author"})}),`
`,e.jsx(n.p,{children:"Reactive author meta tag."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { author } = useMeta()

author.value = 'John Doe'
// Updates <meta name="author" content="...">
`})}),`
`,e.jsx(n.h3,{id:"sitename",children:e.jsx(n.code,{children:"siteName"})}),`
`,e.jsx(n.p,{children:"Reactive site name for Open Graph and Twitter Card."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { siteName } = useMeta()

siteName.value = 'My Site'
// Automatically updates:
// - Open Graph og:site_name
// - Twitter Card twitter:site
`})}),`
`,e.jsx(n.h3,{id:"gethtmlmeta",children:e.jsx(n.code,{children:"getHtmlMeta"})}),`
`,e.jsx(n.p,{children:"Function to generate HTML string with all meta tags (for SSR)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"() => string"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { getHtmlMeta } = useMeta()

// Generates HTML string with all meta tags
const metaHtml = getHtmlMeta()
// Returns: '<meta name="description" content="..."><meta property="og:title" content="...">...'
`})}),`
`,e.jsx(n.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,e.jsx(n.h3,{id:"dynamic-meta-tags-based-on-data",children:"Dynamic Meta Tags Based on Data"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref, watch } from 'vue'
import { useMeta } from '@dxtmisha/functional'
import { useApiRef } from '@dxtmisha/functional'

const articleId = ref(1)
const { data: article } = useApiRef(
  computed(() => \`/api/articles/\${articleId.value}\`)
)

const { title, description, image, author, canonical } = useMeta()

watch(article, (newArticle) => {
  if (newArticle) {
    title.value = newArticle.title
    description.value = newArticle.excerpt
    image.value = newArticle.coverImage
    author.value = newArticle.authorName
    canonical.value = \`https://example.com/articles/\${newArticle.slug}\`
  }
})
<\/script>

<template>
  <article v-if="article">
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
  </article>
</template>
`})}),`
`,e.jsx(n.h3,{id:"configure-meta-tags-for-different-pages",children:"Configure Meta Tags for Different Pages"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { useMeta } from '@dxtmisha/functional'
import { useRoute } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()
const { title, description, robots } = useMeta()

const pageMetadata = {
  home: {
    title: 'Home Page',
    description: 'Welcome to our website',
    robots: 'index, follow'
  },
  about: {
    title: 'About Us',
    description: 'Learn more about our company',
    robots: 'index, follow'
  },
  admin: {
    title: 'Admin Panel',
    description: 'Administrator panel',
    robots: 'noindex, nofollow'
  }
}

watch(
  () => route.name,
  (routeName) => {
    const meta = pageMetadata[routeName] || pageMetadata.home
    title.value = meta.title
    description.value = meta.description
    robots.value = meta.robots
  },
  { immediate: true }
)
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"advanced-configuration-with-open-graph-and-twitter-card",children:"Advanced Configuration with Open Graph and Twitter Card"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { useMeta } from '@dxtmisha/functional'
import { onMounted } from 'vue'

const { meta, title, description, image, siteName } = useMeta()

onMounted(() => {
  // Basic meta tags
  title.value = 'Article Title'
  description.value = 'Brief article description'
  image.value = 'https://example.com/article-image.jpg'
  siteName.value = 'My Blog'

  // Advanced settings
  meta.setSuffix('My Blog')
  meta.setLocale('en_US')

  // Detailed Open Graph configuration
  const og = meta.getOg()
  og.setType('article')

  // Detailed Twitter Card configuration
  const twitter = meta.getTwitter()
  twitter.setCard('summary_large_image')
})
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"ssr-generate-meta-tags-on-server",children:"SSR: Generate Meta Tags on Server"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// server.js
import { useMeta } from '@dxtmisha/functional'

export function renderMetaTags(pageData) {
  const { title, description, image, canonical, getHtmlMeta } = useMeta()

  // Set values
  title.value = pageData.title
  description.value = pageData.description
  image.value = pageData.image
  canonical.value = pageData.url

  // Generate HTML string
  const metaHtml = getHtmlMeta()

  return \`
    <!DOCTYPE html>
    <html>
      <head>
        <title>\${pageData.title}</title>
        \${metaHtml}
      </head>
      <body>
        <!-- content -->
      </body>
    </html>
  \`
}
`})}),`
`,e.jsx(n.h3,{id:"manage-indexing-for-different-environments",children:"Manage Indexing for Different Environments"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { useMeta } from '@dxtmisha/functional'
import { onMounted } from 'vue'

const { robots } = useMeta()

onMounted(() => {
  // Disable indexing on dev/staging environments
  const isProduction = import.meta.env.PROD
  robots.value = isProduction ? 'index, follow' : 'noindex, nofollow'
})
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"integration-with-internationalization",children:"Integration with Internationalization"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { useMeta } from '@dxtmisha/functional'
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

const { locale } = useI18n()
const { meta, title, description } = useMeta()

watch(locale, (newLocale) => {
  // Update locale for Open Graph
  const localeMap = {
    'ru': 'ru_RU',
    'en': 'en_US',
    'de': 'de_DE'
  }
  meta.setLocale(localeMap[newLocale] || 'en_US')

  // Update meta tag content
  title.value = t('meta.title')
  description.value = t('meta.description')
}, { immediate: true })
<\/script>
`})}),`
`,e.jsx(n.h2,{id:"important-notes",children:"Important Notes"}),`
`,e.jsx(n.h3,{id:"singleton-pattern",children:"Singleton Pattern"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useMeta"})," composable uses a singleton pattern, which means all components share a single meta tags instance. This is useful for:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consistency"})," — changes in one component are reflected everywhere"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Performance"})," — no instance duplication"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Simplicity"})," — no need to pass state between components"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// In any application component
const { title } = useMeta()
title.value = 'New Title'

// In another component, you'll get the same value
const { title: sameTitle } = useMeta()
console.log(sameTitle.value) // 'New Title'
`})}),`
`,e.jsx(n.h3,{id:"automatic-synchronization",children:"Automatic Synchronization"}),`
`,e.jsx(n.p,{children:"All reactive property changes are automatically synchronized with the DOM. No need to call additional methods:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { title, description } = useMeta()

// These changes are immediately applied to the DOM
title.value = 'New Title'
description.value = 'New Description'
`})}),`
`,e.jsx(n.h3,{id:"open-graph-and-twitter-card",children:"Open Graph and Twitter Card"}),`
`,e.jsxs(n.p,{children:["When changing ",e.jsx(n.code,{children:"title"}),", ",e.jsx(n.code,{children:"image"}),", and ",e.jsx(n.code,{children:"canonical"}),", the corresponding Open Graph and Twitter Card tags are automatically updated. For detailed configuration, use ",e.jsx(n.code,{children:"meta.getOg()"})," and ",e.jsx(n.code,{children:"meta.getTwitter()"})," methods."]})]})}function h(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{h as default};
