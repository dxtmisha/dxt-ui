import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-C8vOrmRQ.js";import{M as r}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function s(a){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/functional/en/Composables/useHashRef"}),`
`,e.jsx(n.h1,{id:"composable-usehashref",children:"Composable useHashRef"}),`
`,e.jsx(n.p,{children:"Composable for creating a reactive variable synchronized with URL hash. Automatically manages reading and writing values to the hash part of the URL, providing two-way synchronization between Vue reactive state and browser address bar parameters."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Two-way synchronization"})," — automatic sync between ref and URL hash"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic persistence"})," — ref changes automatically reflect in URL"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reactivity"})," — URL hash changes automatically update ref"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Instance caching"})," — reuses ref for same parameter names"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type safety"})," — full TypeScript support with generics"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default values"})," — supports initial values and factory functions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Auto initialization"})," — loads existing values from URL on creation"]}),`
`]}),`
`,e.jsx(n.h2,{id:"function",children:"Function"}),`
`,e.jsx(n.h3,{id:"usehashref",children:e.jsx(n.code,{children:"useHashRef"})}),`
`,e.jsx(n.p,{children:"Creates a reactive variable synchronized with a parameter in URL hash."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — parameter name in hash URL"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | (() => T)"})," — default value or function to generate it (optional)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Ref<T>"})," — Vue reactive variable linked to hash parameter"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useHashRef } from '@dxtmisha/functional'

// Simple usage without default value
const currentTab = useHashRef('tab')
console.log(currentTab.value) // undefined (if hash is empty)

// With default value
const activeView = useHashRef('view', 'grid')
console.log(activeView.value) // 'grid' (if hash doesn't contain 'view')

// With factory function for default value
const userId = useHashRef('userId', () => Math.floor(Math.random() * 1000))
`})}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.h3,{id:"basic-synchronization",children:"Basic Synchronization"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useHashRef } from '@dxtmisha/functional'

// Create ref synchronized with hash
const currentPage = useHashRef('page', 1)

// When ref changes - URL automatically updates
currentPage.value = 2
// URL: #page=2

currentPage.value = 5
// URL: #page=5

// When URL changes manually - ref automatically updates
// User changes URL to: #page=10
console.log(currentPage.value) // 10
`})}),`
`,e.jsx(n.h3,{id:"working-with-multiple-parameters",children:"Working with Multiple Parameters"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Multiple independent hash parameters
const searchQuery = useHashRef('q', '')
const sortOrder = useHashRef('sort', 'asc')
const pageNumber = useHashRef('page', 1)

searchQuery.value = 'vue composables'
sortOrder.value = 'desc'
pageNumber.value = 3

// URL: #q=vue composables;sort=desc;page=3

// All parameters stay synchronized
console.log(searchQuery.value) // 'vue composables'
console.log(sortOrder.value)   // 'desc'
console.log(pageNumber.value)  // 3
`})}),`
`,e.jsx(n.h3,{id:"instance-caching",children:"Instance Caching"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Repeated calls with same name return existing ref
const tab1 = useHashRef('activeTab', 'home')
const tab2 = useHashRef('activeTab', 'profile')

console.log(tab1 === tab2) // true - same ref

tab1.value = 'settings'
console.log(tab2.value) // 'settings' - both point to same ref
`})}),`
`,e.jsx(n.h2,{id:"usage-in-components",children:"Usage in Components"}),`
`,e.jsx(n.h3,{id:"tab-management",children:"Tab Management"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useHashRef } from '@dxtmisha/functional'

export default {
  setup() {
    const activeTab = useHashRef('tab', 'overview')

    return {
      activeTab,
      tabs: ['overview', 'details', 'settings']
    }
  }
}

// Template:
// <div>
//   <button
//     v-for="tab in tabs"
//     :key="tab"
//     @click="activeTab = tab"
//     :class="{ active: activeTab === tab }"
//   >
//     {{ tab }}
//   </button>
// </div>
`})}),`
`,e.jsx(n.h3,{id:"pagination-with-state-persistence",children:"Pagination with State Persistence"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { computed } from 'vue'
import { useHashRef } from '@dxtmisha/functional'

export default {
  setup() {
    const currentPage = useHashRef('page', 1)
    const itemsPerPage = 20
    const totalItems = 100

    const totalPages = computed(() =>
      Math.ceil(totalItems / itemsPerPage)
    )

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++
      }
    }

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--
      }
    }

    return {
      currentPage,
      totalPages,
      nextPage,
      prevPage
    }
  }
}
`})}),`
`,e.jsx(n.h3,{id:"filters-and-search",children:"Filters and Search"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { watch } from 'vue'
import { useHashRef } from '@dxtmisha/functional'

export default {
  setup() {
    const searchQuery = useHashRef('q', '')
    const category = useHashRef('category', 'all')
    const sortBy = useHashRef('sort', 'date')

    // Watch changes to load data
    watch([searchQuery, category, sortBy], () => {
      console.log('Loading data with params:')
      console.log('Search:', searchQuery.value)
      console.log('Category:', category.value)
      console.log('Sort:', sortBy.value)
      // API request here
    })

    return {
      searchQuery,
      category,
      sortBy
    }
  }
}
`})}),`
`,e.jsx(n.h2,{id:"working-with-data-types",children:"Working with Data Types"}),`
`,e.jsx(n.h3,{id:"numeric-values",children:"Numeric Values"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Hash automatically converts types
const pageNumber = useHashRef<number>('page', 1)

pageNumber.value = 5
// URL: #page=5

// When loading from URL, string is automatically converted
// URL: #page=10
console.log(typeof pageNumber.value) // 'number'
console.log(pageNumber.value)        // 10
`})}),`
`,e.jsx(n.h3,{id:"boolean-values",children:"Boolean Values"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const isActive = useHashRef<boolean>('active', false)

isActive.value = true
// URL: #active=true

// Automatic conversion from string
// URL: #active=false
console.log(typeof isActive.value) // 'boolean'
console.log(isActive.value)        // false
`})}),`
`,e.jsx(n.h3,{id:"objects-and-arrays",children:"Objects and Arrays"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// For complex types, serialization is used
const filters = useHashRef('filters', { min: 0, max: 100 })

filters.value = { min: 20, max: 80 }
// URL will contain serialized representation

// Values are restored on load
console.log(filters.value) // { min: 20, max: 80 }
`})}),`
`,e.jsx(n.h2,{id:"integration-with-hash-class",children:"Integration with Hash Class"}),`
`,e.jsxs(n.p,{children:["The composable uses ",e.jsx(n.code,{children:"Hash"})," class to manage URL hash:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Hash } from '@dxtmisha/functional'

// Direct class usage
Hash.set('tab', 'profile')
console.log(Hash.get('tab')) // 'profile'

// useHashRef automatically syncs with Hash
const tab = useHashRef('tab')
console.log(tab.value) // 'profile'

// Changes via Hash reflect in ref
Hash.set('tab', 'settings')
console.log(tab.value) // 'settings'
`})}),`
`,e.jsx(n.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,e.jsx(n.h3,{id:"form-state-persistence",children:"Form State Persistence"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const formData = {
  name: useHashRef('name', ''),
  email: useHashRef('email', ''),
  role: useHashRef('role', 'user')
}

// When filling form, state is saved to URL
formData.name.value = 'John'
formData.email.value = 'john@example.com'
formData.role.value = 'admin'

// URL: #name=John;email=john@example.com;role=admin

// On page reload, state is restored
`})}),`
`,e.jsx(n.h3,{id:"modal-window-management",children:"Modal Window Management"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const modalOpen = useHashRef('modal', null)

const openModal = (modalName) => {
  modalOpen.value = modalName
  // URL: #modal=confirmation
}

const closeModal = () => {
  modalOpen.value = null
  // URL: #modal=null or hash is cleared
}

// Browser "Back" button closes modal
`})})]})}function d(a={}){const{wrapper:n}={...t(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}export{d as default};
