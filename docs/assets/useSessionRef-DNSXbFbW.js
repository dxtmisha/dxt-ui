import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-Dqnce8mp.js";import{M as r}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/functional/en/Composables/useSessionRef"}),`
`,e.jsx(n.h1,{id:"composable-usesessionref",children:"Composable useSessionRef"}),`
`,e.jsx(n.p,{children:"Composable for creating a reactive variable synchronized with sessionStorage. Automatically manages reading and writing values to browser session storage with singleton pattern. Data persists only within the current tab/window and is deleted when it closes."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Two-way synchronization"})," — automatic sync between ref and sessionStorage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic persistence"})," — ref changes automatically saved to sessionStorage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tab isolation"})," — data not synchronized between tabs (unlike localStorage)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Temporary storage"})," — data deleted when tab/browser closes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Singleton pattern"})," — reuses ref for same keys"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type safety"})," — full TypeScript support with generics"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default values"})," — supports initial values and factory functions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DataStorage integration"})," — uses DataStorage class for storage management"]}),`
`]}),`
`,e.jsx(n.h2,{id:"function",children:"Function"}),`
`,e.jsx(n.h3,{id:"usesessionref",children:e.jsx(n.code,{children:"useSessionRef"})}),`
`,e.jsx(n.p,{children:"Creates a reactive variable synchronized with sessionStorage."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — key name in sessionStorage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | (() => T)"})," — default value or function to generate it (optional)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Ref<T | undefined>"})," — Vue reactive variable linked to sessionStorage"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useSessionRef } from '@dxtmisha/functional'

// Simple usage
const wizardStep = useSessionRef('wizard-step')

// With default value
const currentStep = useSessionRef('current-step', 1)

// With factory function
const sessionId = useSessionRef('session-id', () => Math.random().toString(36))
`})}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.h3,{id:"basic-synchronization",children:"Basic Synchronization"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useSessionRef } from '@dxtmisha/functional'

// Create ref synchronized with sessionStorage
const wizardProgress = useSessionRef('wizard-progress', { step: 1 })

// When ref changes - sessionStorage automatically updates
wizardProgress.value = { step: 2, data: { name: 'John' } }

// On page reload (in same tab) value is restored
console.log(wizardProgress.value) // { step: 2, data: { name: 'John' } }

// When tab closes, data is deleted
`})}),`
`,e.jsx(n.h3,{id:"singleton-pattern",children:"Singleton Pattern"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Repeated calls with same name return existing ref
const step1 = useSessionRef('wizard-step', 1)
const step2 = useSessionRef('wizard-step', 2)

console.log(step1 === step2) // true - same ref

step1.value = 3
console.log(step2.value) // 3 - both point to same ref
`})}),`
`,e.jsx(n.h2,{id:"usage-in-components",children:"Usage in Components"}),`
`,e.jsx(n.h3,{id:"multi-step-wizard",children:"Multi-step Wizard"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useSessionRef } from '@dxtmisha/functional'

export default {
  setup() {
    const currentStep = useSessionRef('wizard-step', 1)
    const formData = useSessionRef('wizard-data', {
      name: '',
      email: '',
      phone: ''
    })

    const nextStep = () => {
      currentStep.value++
    }

    const prevStep = () => {
      if (currentStep.value > 1) {
        currentStep.value--
      }
    }

    return {
      currentStep,
      formData,
      nextStep,
      prevStep
    }
  }
}

// Template:
// <div>
//   <div v-if="currentStep === 1">
//     <input v-model="formData.name" placeholder="Name" />
//   </div>
//   <div v-if="currentStep === 2">
//     <input v-model="formData.email" placeholder="Email" />
//   </div>
//   <button @click="prevStep">Back</button>
//   <button @click="nextStep">Next</button>
// </div>
`})}),`
`,e.jsx(n.h3,{id:"temporary-filter-state",children:"Temporary Filter State"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useSessionRef } from '@dxtmisha/functional'

export default {
  setup() {
    const filters = useSessionRef('search-filters', {
      category: 'all',
      priceMin: 0,
      priceMax: 10000,
      sortBy: 'name'
    })

    const resetFilters = () => {
      filters.value = {
        category: 'all',
        priceMin: 0,
        priceMax: 10000,
        sortBy: 'name'
      }
    }

    return { filters, resetFilters }
  }
}
`})}),`
`,e.jsx(n.h2,{id:"differences-from-usestorageref",children:"Differences from useStorageRef"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// useStorageRef - data persists between browser sessions
const persistentTheme = useStorageRef('theme', 'light')
// Data remains even after browser closes

// useSessionRef - data deleted when tab closes
const temporaryFilters = useSessionRef('filters', {})
// Data deleted when tab/browser closes

// useStorageRef syncs between tabs
// useSessionRef isolated per tab
`})}),`
`,e.jsx(n.h2,{id:"working-with-data-types",children:"Working with Data Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Numbers
const step = useSessionRef<number>('step', 1)
step.value = 2

// Booleans
const isCompleted = useSessionRef<boolean>('completed', false)
isCompleted.value = true

// Objects
const wizardData = useSessionRef('wizard-data', {
  step: 1,
  userData: {},
  timestamp: Date.now()
})

// Arrays
const selectedItems = useSessionRef<number[]>('selected', [])
selectedItems.value.push(42)
`})}),`
`,e.jsx(n.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,e.jsx(n.h3,{id:"form-progress-persistence",children:"Form Progress Persistence"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const registrationForm = useSessionRef('registration', {
  step: 1,
  personal: { name: '', email: '' },
  address: { street: '', city: '' },
  completed: false
})

// Data saved as form is filled
registrationForm.value.personal.name = 'John'
registrationForm.value.step = 2

// On page reload (F5) data is restored
// On tab close - everything is deleted
`})}),`
`,e.jsx(n.h3,{id:"temporary-modal-state",children:"Temporary Modal State"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const modalState = useSessionRef('modal', {
  isOpen: false,
  activeTab: 'details',
  scrollPosition: 0
})

const openModal = () => {
  modalState.value.isOpen = true
}

const closeModal = () => {
  modalState.value.isOpen = false
}
`})}),`
`,e.jsx(n.h3,{id:"shopping-cart-temporary",children:"Shopping Cart (Temporary)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const cart = useSessionRef<CartItem[]>('temp-cart', [])

const addToCart = (item: CartItem) => {
  cart.value = [...cart.value, item]
}

const removeFromCart = (itemId: number) => {
  cart.value = cart.value.filter(item => item.id !== itemId)
}

const clearCart = () => {
  cart.value = []
}

// Cart is automatically cleared when tab closes
`})})]})}function u(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{u as default};
