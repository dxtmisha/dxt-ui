import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-Zkkrlp1B.js";import{M as r}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/functional/en/Classes/Translate"}),`
`,e.jsx(n.h1,{id:"translate-class",children:"Translate Class"}),`
`,e.jsx(n.p,{children:"Static class for managing translations and localized text. Provides methods for fetching, caching, and displaying translated content with template replacement support and automatic locale detection."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Translation fetching"})," — retrieves translations from server API"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Text caching"})," — intelligent caching system with batch requests"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Template replacement"})," — supports placeholder replacement in translations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Locale awareness"})," — automatically uses current geographic locale"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Batch processing"})," — groups multiple translation requests for efficiency"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sync and async modes"})," — both synchronous and asynchronous text retrieval"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"List operations"})," — fetch multiple translations in single call"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic loading"})," — loads translations on demand"]}),`
`]}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsx(n.p,{children:"Asynchronously retrieves translation text by code with optional template replacement."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — translation code"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replacement?: string[] | Record<string, string | number>"})," — values for template replacement (optional)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<string>"})," — translated text"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Translate } from '@dxtmisha/functional'

// Basic translation
const text = await Translate.get('welcome.message')
// Returns: "Welcome to our application"

// With array replacement
const greeting = await Translate.get('hello.user', ['John'])
// Template: "Hello, [0]!" → Returns: "Hello, John!"

// With object replacement
const message = await Translate.get('items.count', { count: 5, type: 'products' })
// Template: "You have [count] [type]" → Returns: "You have 5 products"
`})}),`
`,e.jsx(n.h3,{id:"getsync",children:e.jsx(n.code,{children:"getSync"})}),`
`,e.jsx(n.p,{children:"Synchronously retrieves translation text (returns from cache or fallback)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — translation code"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"first?: boolean"})," — if false, returns empty string when text not found (default: false)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replacement?: string[] | Record<string, string | number>"})," — values for template replacement (optional)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — translated text or fallback"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Get cached translation
const text = Translate.getSync('button.save')
// Returns: "Save" (from cache) or "button.save" (fallback)

// Return empty string if not found
const empty = Translate.getSync('missing.key', false)
// Returns: "" if not in cache

// With replacement
const message = Translate.getSync('welcome.user', true, ['Alice'])
// Returns: "Welcome, Alice!" or fallback
`})}),`
`,e.jsx(n.h2,{id:"batch-operations",children:"Batch Operations"}),`
`,e.jsx(n.h3,{id:"getlist",children:e.jsx(n.code,{children:"getList"})}),`
`,e.jsx(n.p,{children:"Asynchronously retrieves multiple translations as an object."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"names: TranslateCode[]"})," — array of translation codes or [code, ...replacements] arrays"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<TranslateList<T>>"})," — object with code-text pairs"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Simple list
const texts = await Translate.getList(['save', 'cancel', 'submit'])
// Returns: { save: "Save", cancel: "Cancel", submit: "Submit" }

// With replacements
const messages = await Translate.getList([
  'welcome.user',
  ['items.count', '5', 'books'],
  'goodbye.message'
])
// Returns object with processed templates
`})}),`
`,e.jsx(n.h3,{id:"getlistsync",children:e.jsx(n.code,{children:"getListSync"})}),`
`,e.jsx(n.p,{children:"Synchronously retrieves multiple translations from cache."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"names: TranslateCode[]"})," — array of translation codes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"first?: boolean"})," — fallback behavior when text not found (default: false)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"TranslateList<T>"})," — object with code-text pairs"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Get cached translations
const texts = Translate.getListSync(['save', 'cancel', 'delete'])
// Returns: { save: "Save", cancel: "Cancel", delete: "Delete" }

// With fallback behavior
const empty = Translate.getListSync(['missing.key'], false)
// Returns: { 'missing.key': '' }
`})}),`
`,e.jsx(n.h2,{id:"data-management",children:"Data Management"}),`
`,e.jsx(n.h3,{id:"add",children:e.jsx(n.code,{children:"add"})}),`
`,e.jsx(n.p,{children:"Adds translation codes to loading queue for batch fetching."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"names: string | string[]"})," — translation code(s) to load"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<void>"})," — resolves when translations are loaded"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Add single translation
await Translate.add('new.message')

// Add multiple translations
await Translate.add(['header.title', 'footer.copyright', 'menu.items'])

// Automatic batching (requests are grouped within 160ms)
Translate.add('text1') // Queued
Translate.add('text2') // Queued
Translate.add('text3') // All sent in single request
`})}),`
`,e.jsx(n.h3,{id:"addsync",children:e.jsx(n.code,{children:"addSync"})}),`
`,e.jsx(n.p,{children:"Directly adds translations to cache (for development/testing)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: Record<string, string>"})," — key-value pairs of translations"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Add translations directly
Translate.addSync({
  'welcome.message': 'Welcome to our app',
  'button.save': 'Save Changes',
  'error.required': 'This field is required'
})

// Translations available immediately
const text = Translate.getSync('welcome.message') // "Welcome to our app"
`})}),`
`,e.jsx(n.h3,{id:"addnormalorsync",children:e.jsx(n.code,{children:"addNormalOrSync"})}),`
`,e.jsx(n.p,{children:"Intelligently adds translations based on environment (API call vs direct)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: Record<string, string>"})," — translation data"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<void>"})," — resolves when added"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Automatically chooses method based on Api.isLocalhost()
await Translate.addNormalOrSync({
  'app.title': 'My Application',
  'nav.home': 'Home',
  'nav.about': 'About'
})
// Development: adds directly to cache
// Production: queues for API request
`})}),`
`,e.jsx(n.h2,{id:"configuration",children:"Configuration"}),`
`,e.jsx(n.h3,{id:"seturl",children:e.jsx(n.code,{children:"setUrl"})}),`
`,e.jsx(n.p,{children:"Changes the API endpoint for translation requests."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"url: string"})," — API endpoint path"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Translate"})," — class reference for chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Change translation API endpoint
Translate.setUrl('/api/v2/translations')

// Chaining
Translate.setUrl('/custom/translate').setPropsName('translations')
`})}),`
`,e.jsx(n.h3,{id:"setpropsname",children:e.jsx(n.code,{children:"setPropsName"})}),`
`,e.jsx(n.p,{children:"Changes the request parameter name for translation codes."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — parameter name for API requests"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Translate"})," — class reference for chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Change request parameter name
Translate.setPropsName('codes')

// API request will use: { codes: ['text1', 'text2'] }
// Instead of default: { list: ['text1', 'text2'] }
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"basic-translation-setup",children:"Basic Translation Setup"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Translate } from '@dxtmisha/functional'

// Configure translation endpoint
Translate.setUrl('/api/translations')

// Load initial translations
await Translate.add(['app.title', 'nav.menu', 'footer.copyright'])

// Use translations
const title = await Translate.get('app.title')
document.title = title
`})}),`
`,e.jsx(n.h3,{id:"form-validation-messages",children:"Form Validation Messages"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Load validation messages
const validationTexts = await Translate.getList([
  'validation.required',
  'validation.email',
  ['validation.minLength', '8'], // With replacement
  'validation.password'
])

// Use in validation
if (!email) {
  showError(validationTexts['validation.required'])
}
if (password.length < 8) {
  showError(validationTexts['validation.minLength']) // "Minimum 8 characters"
}
`})}),`
`,e.jsx(n.h3,{id:"dynamic-content-loading",children:"Dynamic Content Loading"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Component initialization
class MyComponent {
  async loadTexts() {
    // Add needed translations to queue
    await Translate.add([
      'component.title',
      'component.description',
      'button.action'
    ])

    // Update UI
    this.updateTexts()
  }

  updateTexts() {
    // Get cached translations immediately
    this.title = Translate.getSync('component.title')
    this.description = Translate.getSync('component.description')
    this.buttonText = Translate.getSync('button.action')
  }
}
`})}),`
`,e.jsx(n.h3,{id:"template-replacement-examples",children:"Template Replacement Examples"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Array-based replacement
const welcome = await Translate.get('welcome.user', ['John', 'Doe'])
// Template: "Welcome, [0] [1]!" → "Welcome, John Doe!"

// Object-based replacement
const notification = await Translate.get('notification.message', {
  user: 'Alice',
  count: 3,
  item: 'messages'
})
// Template: "Hi [user], you have [count] new [item]"
// Result: "Hi Alice, you have 3 new messages"

// Complex template
const status = await Translate.get('order.status', {
  id: '#12345',
  status: 'shipped',
  date: '2024-01-15'
})
// Template: "Order [id] is [status] on [date]"
// Result: "Order #12345 is shipped on 2024-01-15"
`})})]})}function x(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{x as default};
