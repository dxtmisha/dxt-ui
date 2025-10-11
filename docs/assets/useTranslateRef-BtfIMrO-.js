import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Dqnce8mp.js";import{M as l}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function a(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/functional/en/Composables/useTranslateRef"}),`
`,n.jsx(e.h1,{id:"composable-usetranslateref",children:"Composable useTranslateRef"}),`
`,n.jsx(e.p,{children:"Composable for getting translated texts by array of keys or string with key. Provides reactive variable that automatically updates when application language changes. Supports dynamic loading of translations from server and text templating with value substitution."}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reactive translations"})," — automatic updates when language changes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Batch loading"})," — fetch multiple translations at once"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Dynamic loading"})," — automatic loading of missing translations from server"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Templating"})," — value substitution in translation text"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Synchronous fallback"})," — instant return of key before translation loads"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Type safety"})," — full TypeScript support with automatic type inference"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Request optimization"})," — request batching to server (160ms timeout)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Geo integration"})," — automatic language detection from geolocation"]}),`
`]}),`
`,n.jsx(e.h2,{id:"function",children:"Function"}),`
`,n.jsx(e.h3,{id:"usetranslateref",children:n.jsx(e.code,{children:"useTranslateRef"})}),`
`,n.jsx(e.p,{children:"Creates reactive variable with translations by array of keys."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"names: (string | string[])[]"})," — array of translation keys or arrays with key and template parameters"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"ShallowRef<TranslateList<T>>"})," — reactive object with translations"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useTranslateRef } from '@dxtmisha/functional'

// Simple translation
const texts = useTranslateRef(['hello', 'goodbye', 'welcome'])
console.log(texts.value.hello) // 'Hello'
console.log(texts.value.goodbye) // 'Goodbye'

// With templating
const messages = useTranslateRef([
  ['greeting', 'John'],
  ['count', '5']
])
console.log(messages.value.greeting) // 'Hello, John!'
console.log(messages.value.count) // 'Found: 5 items'
`})}),`
`,n.jsxs(e.h3,{id:"t-alias",children:[n.jsx(e.code,{children:"t"})," (alias)"]}),`
`,n.jsxs(e.p,{children:["Short alias for ",n.jsx(e.code,{children:"useTranslateRef"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"names: string[]"})," — array of translation keys"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"ShallowRef<TranslateList<T>>"})," — reactive object with translations"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { t } from '@dxtmisha/functional'

// Short notation
const texts = t(['save', 'cancel', 'delete'])
console.log(texts.value.save) // 'Save'
`})}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.h3,{id:"basic-translation",children:"Basic Translation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useTranslateRef } from '@dxtmisha/functional'

// Get multiple translations
const translations = useTranslateRef([
  'button.save',
  'button.cancel',
  'message.success'
])

// Access translations
console.log(translations.value['button.save']) // 'Save'
console.log(translations.value['button.cancel']) // 'Cancel'
console.log(translations.value['message.success']) // 'Success!'

// Automatic update on language change
// Geo.setLocation('ru-RU')
// translations.value['button.save'] === 'Сохранить'
`})}),`
`,n.jsxs(e.h3,{id:"using-t-alias",children:["Using ",n.jsx(e.code,{children:"t"})," alias"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { t } from '@dxtmisha/functional'

// Short notation for translations
const texts = t(['home', 'about', 'contact'])

console.log(texts.value.home) // 'Home'
console.log(texts.value.about) // 'About'
console.log(texts.value.contact) // 'Contact'
`})}),`
`,n.jsx(e.h2,{id:"usage-in-components",children:"Usage in Components"}),`
`,n.jsx(e.h3,{id:"basic-form",children:"Basic Form"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useTranslateRef } from '@dxtmisha/functional'

export default {
  setup() {
    const t = useTranslateRef([
      'form.name',
      'form.email',
      'form.submit',
      'form.reset'
    ])

    return { t }
  }
}

// Template:
// <form>
//   <input :placeholder="t['form.name']" />
//   <input :placeholder="t['form.email']" />
//   <button>{{ t['form.submit'] }}</button>
//   <button type="reset">{{ t['form.reset'] }}</button>
// </form>
`})}),`
`,n.jsx(e.h3,{id:"navigation-menu",children:"Navigation Menu"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { t } from '@dxtmisha/functional'

export default {
  setup() {
    const menu = t([
      'menu.home',
      'menu.products',
      'menu.services',
      'menu.contact'
    ])

    return { menu }
  }
}

// Template:
// <nav>
//   <a href="/">{{ menu['menu.home'] }}</a>
//   <a href="/products">{{ menu['menu.products'] }}</a>
//   <a href="/services">{{ menu['menu.services'] }}</a>
//   <a href="/contact">{{ menu['menu.contact'] }}</a>
// </nav>
`})}),`
`,n.jsx(e.h2,{id:"text-templating",children:"Text Templating"}),`
`,n.jsx(e.h3,{id:"value-substitution",children:"Value Substitution"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useTranslateRef } from '@dxtmisha/functional'

// Translations with parameters
// Translation file: { "greeting": "Hello, {0}!", "items": "Found {0} of {1}" }
const messages = useTranslateRef([
  ['greeting', 'John'],
  ['items', '5', '10']
])

console.log(messages.value.greeting) // 'Hello, John!'
console.log(messages.value.items) // 'Found 5 of 10'
`})}),`
`,n.jsx(e.h3,{id:"dynamic-parameters",children:"Dynamic Parameters"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { ref, computed } from 'vue'
import { useTranslateRef } from '@dxtmisha/functional'

export default {
  setup() {
    const userName = ref('John')
    const count = ref(5)

    // Base translations
    const t = useTranslateRef(['welcome', 'total'])

    // Dynamic substitution in template
    const welcomeMessage = computed(() =>
      t.value.welcome.replace('{0}', userName.value)
    )

    const totalMessage = computed(() =>
      t.value.total.replace('{0}', count.value)
    )

    return { welcomeMessage, totalMessage }
  }
}
`})}),`
`,n.jsx(e.h2,{id:"automatic-update-on-language-change",children:"Automatic Update on Language Change"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { watch } from 'vue'
import { useTranslateRef } from '@dxtmisha/functional'
import { Geo } from '@dxtmisha/functional'

// Translations automatically update on language change
const texts = useTranslateRef(['title', 'description'])

console.log(texts.value.title) // 'Title' (en-US)

// Change language
Geo.setLocation('ru-RU')

// texts.value automatically updates
// texts.value.title === 'Заголовок'

// Can track changes
watch(() => texts.value, (newTranslations) => {
  console.log('Translations updated:', newTranslations)
})
`})}),`
`,n.jsx(e.h2,{id:"integration-with-translate-class",children:"Integration with Translate Class"}),`
`,n.jsxs(e.p,{children:["Composable uses ",n.jsx(e.code,{children:"Translate"})," class for translation management:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Translate } from '@dxtmisha/functional'

// Set URL for loading translations
Translate.setUrl('/api/translations')

// Set request parameter name
Translate.setPropsName('keys')

// Add translations manually (for SSR or tests)
Translate.addSync({
  'button.save': 'Save',
  'button.cancel': 'Cancel'
})

// Get single translation
const text = await Translate.get('button.save')
console.log(text) // 'Save'

// Synchronous get
const syncText = Translate.getSync('button.save')
console.log(syncText) // 'Save'
`})}),`
`,n.jsx(e.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,n.jsx(e.h3,{id:"data-table",children:"Data Table"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const table = useTranslateRef([
  'table.name',
  'table.email',
  'table.status',
  'table.actions'
])

// In template:
// <thead>
//   <th>{{ table['table.name'] }}</th>
//   <th>{{ table['table.email'] }}</th>
//   <th>{{ table['table.status'] }}</th>
//   <th>{{ table['table.actions'] }}</th>
// </thead>
`})}),`
`,n.jsx(e.h3,{id:"validation-messages",children:"Validation Messages"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const validation = useTranslateRef([
  'validation.required',
  'validation.email',
  'validation.minLength',
  'validation.maxLength'
])

const validateField = (value) => {
  if (!value) return validation.value['validation.required']
  if (value.length < 3) return validation.value['validation.minLength']
  return null
}
`})}),`
`,n.jsx(e.h3,{id:"dynamic-content",children:"Dynamic Content"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { computed } from 'vue'

const status = ref('pending')
const messages = useTranslateRef([
  'status.pending',
  'status.approved',
  'status.rejected'
])

const statusText = computed(() =>
  messages.value[\`status.\${status.value}\`]
)

console.log(statusText.value) // 'Pending' (when status = 'pending')
`})})]})}function m(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{m as default};
