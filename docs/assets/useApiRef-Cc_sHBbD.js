import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-C8vOrmRQ.js";import{M as a}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"@dxtmisha/functional/en/Composables/useApiRef"}),`
`,e.jsx(n.h1,{id:"composable-useapiref",children:"Composable useApiRef"}),`
`,e.jsx(n.p,{children:"Composable for working with HTTP requests in Vue 3 applications. Provides reactive interface for executing API requests with automatic loading state management, reactive parameters support, conditional execution, and data transformation."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reactive requests"})," — automatic request execution when parameters change"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"State management"})," — automatic tracking of loading state and data readiness"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Conditional execution"})," — ability to execute requests only when conditions are met"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Data transformation"})," — transform received data before storing"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Api integration"})," — uses Api class for request execution with caching support"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global conditions"})," — ability to set global conditions for all useApiRef instances"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Auto cleanup"})," — optional data cleanup on component unmount"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TypeScript support"})," — full typing with generics"]}),`
`]}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.h3,{id:"simple-get-request",children:"Simple GET Request"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useApiRef } from '@dxtmisha/functional'

// Executes GET request on component mount
const { data, loading, isStarting, reading } = useApiRef('/api/users')

// data - ref with response data
// loading - ref with loading state
// isStarting - computed, true before first data load
// reading - computed, true while reading data
`})}),`
`,e.jsx(n.h3,{id:"component-usage",children:"Component Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup>
import { useApiRef } from '@dxtmisha/functional'

const { data: users, loading } = useApiRef('/api/users')
<\/script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="users">
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>
`})}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(n.h3,{id:"path",children:e.jsx(n.code,{children:"path"})}),`
`,e.jsx(n.p,{children:"Path to API endpoint. Can be a string or ref for reactivity."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"RefOrNormal<string | undefined>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Static path
const { data } = useApiRef('/api/users')

// Reactive path
const userId = ref(1)
const { data: user } = useApiRef(computed(() => \`/api/users/\${userId.value}\`))

// New request executes automatically when userId changes
userId.value = 2
`})}),`
`,e.jsx(n.h3,{id:"options",children:e.jsx(n.code,{children:"options"})}),`
`,e.jsx(n.p,{children:"Request parameters. Can be HTTP method, settings object, or ref."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"ApiMethodItem | RefOrNormal<ApiFetch>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Specify method only
const { data } = useApiRef('/api/users', 'POST')

// Full settings
const { data } = useApiRef('/api/users', {
  method: 'POST',
  request: { name: 'John', email: 'john@example.com' },
  headers: { 'Content-Type': 'application/json' }
})

// Reactive parameters
const params = ref({ page: 1, limit: 10 })
const { data } = useApiRef('/api/users', computed(() => ({
  method: 'GET',
  request: params.value
})))

// New request on params change
params.value = { page: 2, limit: 10 }
`})}),`
`,e.jsx(n.h3,{id:"reactivity",children:e.jsx(n.code,{children:"reactivity"})}),`
`,e.jsx(n.p,{children:"Enable or disable automatic execution on parameter changes."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"boolean"}),`
`,e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"true"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// With reactivity (default)
const params = ref({ page: 1 })
const { data, reset } = useApiRef('/api/users', { request: params }, true)

params.value.page = 2 // Request executes automatically

// Without reactivity
const { data, reset } = useApiRef('/api/users', { request: params }, false)

params.value.page = 2 // Request does NOT execute
await reset() // Need to call reset manually
`})}),`
`,e.jsx(n.h3,{id:"conditions",children:e.jsx(n.code,{children:"conditions"})}),`
`,e.jsx(n.p,{children:"Condition for request execution. Request executes only if condition is true."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"RefType<boolean>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Request executes only when isAuth === true
const isAuth = ref(false)
const { data } = useApiRef('/api/profile', undefined, true, isAuth)

// data will be undefined while isAuth === false
console.log(data.value) // undefined

isAuth.value = true // Request executes automatically
`})}),`
`,e.jsx(n.h3,{id:"transformation",children:e.jsx(n.code,{children:"transformation"})}),`
`,e.jsx(n.p,{children:"Function to transform received data before storing in ref."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"(data: T) => R"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Transform API data to needed format
const { data } = useApiRef(
  '/api/users',
  undefined,
  true,
  undefined,
  (response) => {
    // response - data from API
    // Return transformed data
    return response.data.map(user => ({
      id: user.id,
      fullName: \`\${user.firstName} \${user.lastName}\`,
      isActive: user.status === 'active'
    }))
  }
)

// data contains transformed data
`})}),`
`,e.jsx(n.h3,{id:"unmounted",children:e.jsx(n.code,{children:"unmounted"})}),`
`,e.jsx(n.p,{children:"Whether to clear data on component unmount."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"boolean"}),`
`,e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Data will be cleared on component unmount
const { data } = useApiRef('/api/users', undefined, true, undefined, undefined, true)

// On page navigation, data becomes undefined
`})}),`
`,e.jsx(n.h2,{id:"return-values",children:"Return Values"}),`
`,e.jsx(n.h3,{id:"data",children:e.jsx(n.code,{children:"data"})}),`
`,e.jsxs(n.p,{children:["Ref with response data. ",e.jsx(n.code,{children:"undefined"})," before first load."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<R | undefined>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { data } = useApiRef('/api/users')

console.log(data.value) // undefined before load
// After load: array of users
`})}),`
`,e.jsx(n.h3,{id:"loading",children:e.jsx(n.code,{children:"loading"})}),`
`,e.jsxs(n.p,{children:["Ref with loading state. ",e.jsx(n.code,{children:"true"})," during request execution."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Ref<boolean>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { loading } = useApiRef('/api/users')

console.log(loading.value) // true during load, false after
`})}),`
`,e.jsx(n.h3,{id:"isstarting",children:e.jsx(n.code,{children:"isStarting"})}),`
`,e.jsxs(n.p,{children:["Computed showing if data has been loaded at least once. ",e.jsx(n.code,{children:"true"})," before first load."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"ComputedRef<boolean>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { data, isStarting } = useApiRef('/api/users')

console.log(isStarting.value) // true before first load
// After first load always false, even on subsequent requests
`})}),`
`,e.jsx(n.h3,{id:"reading",children:e.jsx(n.code,{children:"reading"})}),`
`,e.jsx(n.p,{children:"Computed showing active data reading."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"ComputedRef<boolean>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { reading } = useApiRef('/api/users')

console.log(reading.value) // true while reading data
`})}),`
`,e.jsx(n.h3,{id:"reset",children:e.jsx(n.code,{children:"reset"})}),`
`,e.jsx(n.p,{children:"Function to force request execution."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"() => Promise<void>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { data, reset } = useApiRef('/api/users')

// Force reload data
await reset()
`})}),`
`,e.jsx(n.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,e.jsx(n.h3,{id:"list-with-filters",children:"List with Filters"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup>
import { ref, computed } from 'vue'
import { useApiRef } from '@dxtmisha/functional'

const searchQuery = ref('')
const currentPage = ref(1)

const { data: users, loading } = useApiRef(
  '/api/users',
  computed(() => ({
    method: 'GET',
    request: {
      search: searchQuery.value,
      page: currentPage.value,
      limit: 20
    }
  }))
)

const handleSearch = (query) => {
  searchQuery.value = query
  currentPage.value = 1 // Reset to first page
  // Request executes automatically
}
<\/script>

<template>
  <div>
    <input v-model="searchQuery" placeholder="Search...">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="user in users" :key="user.id">{{ user.name }}</div>
      <button @click="currentPage++">Next page</button>
    </div>
  </div>
</template>
`})}),`
`,e.jsx(n.h3,{id:"conditional-loading",children:"Conditional Loading"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup>
import { ref } from 'vue'
import { useApiRef } from '@dxtmisha/functional'

const showDetails = ref(false)
const userId = ref(1)

// Data loads only when showDetails === true
const { data: userDetails, loading } = useApiRef(
  computed(() => \`/api/users/\${userId.value}/details\`),
  undefined,
  true,
  showDetails
)

const toggleDetails = () => {
  showDetails.value = !showDetails.value
  // If showDetails becomes true, request executes automatically
}
<\/script>

<template>
  <button @click="toggleDetails">
    {{ showDetails ? 'Hide' : 'Show' }} details
  </button>
  <div v-if="showDetails">
    <div v-if="loading">Loading details...</div>
    <div v-else-if="userDetails">{{ userDetails }}</div>
  </div>
</template>
`})}),`
`,e.jsx(n.h3,{id:"post-request-with-transformation",children:"POST Request with Transformation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup>
import { ref } from 'vue'
import { useApiRef } from '@dxtmisha/functional'

const formData = ref({
  firstName: '',
  lastName: '',
  email: ''
})

const { data: createdUser, loading, reset } = useApiRef(
  '/api/users',
  {
    method: 'POST',
    request: formData
  },
  false, // Disable automatic execution
  undefined,
  (response) => {
    // Transform API response
    return {
      id: response.id,
      fullName: \`\${response.firstName} \${response.lastName}\`,
      email: response.email,
      createdAt: new Date(response.created_at)
    }
  }
)

const handleSubmit = async () => {
  await reset() // Execute request manually
  if (createdUser.value) {
    console.log('User created:', createdUser.value)
  }
}
<\/script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="formData.firstName" placeholder="First name">
    <input v-model="formData.lastName" placeholder="Last name">
    <input v-model="formData.email" placeholder="Email">
    <button :disabled="loading">
      {{ loading ? 'Submitting...' : 'Create' }}
    </button>
  </form>
</template>
`})}),`
`,e.jsx(n.h3,{id:"multiple-requests",children:"Multiple Requests"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup>
import { useApiRef } from '@dxtmisha/functional'

const { data: users, loading: usersLoading } = useApiRef('/api/users')
const { data: posts, loading: postsLoading } = useApiRef('/api/posts')
const { data: comments, loading: commentsLoading } = useApiRef('/api/comments')

const isLoading = computed(() =>
  usersLoading.value || postsLoading.value || commentsLoading.value
)
<\/script>

<template>
  <div v-if="isLoading">Loading data...</div>
  <div v-else>
    <section>
      <h2>Users</h2>
      <div v-for="user in users" :key="user.id">{{ user.name }}</div>
    </section>
    <section>
      <h2>Posts</h2>
      <div v-for="post in posts" :key="post.id">{{ post.title }}</div>
    </section>
    <section>
      <h2>Comments</h2>
      <div v-for="comment in comments" :key="comment.id">{{ comment.text }}</div>
    </section>
  </div>
</template>
`})}),`
`,e.jsx(n.h2,{id:"global-conditions",children:"Global Conditions"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"setApiRefGlobalConditions"})," function allows setting a global condition for all useApiRef instances."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { setApiRefGlobalConditions, useApiRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// Global condition - e.g., authentication status
const isAuthenticated = ref(false)
setApiRefGlobalConditions(isAuthenticated)

// Now all useApiRef will consider this condition
const { data: profile } = useApiRef('/api/profile')
const { data: settings } = useApiRef('/api/settings')

// Requests won't execute while isAuthenticated === false
isAuthenticated.value = true // All requests execute automatically
`})}),`
`,e.jsx(n.h2,{id:"integration-with-api-class",children:"Integration with Api Class"}),`
`,e.jsx(n.p,{children:"useApiRef uses the Api class, so all Api settings apply automatically:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Api, useApiRef } from '@dxtmisha/functional'

// Configure base URL and headers
Api.setUrl('/api/v1/')
Api.setHeaders({
  'Authorization': 'Bearer token123',
  'Accept': 'application/json'
})

// useApiRef automatically uses these settings
const { data } = useApiRef('/users') // Request to /api/v1/users with headers
`})}),`
`,e.jsx(n.h2,{id:"typescript",children:"TypeScript"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface User {
  id: number
  name: string
  email: string
}

interface ApiResponse<T> {
  data: T[]
  total: number
}

// Type response data
const { data } = useApiRef<User[]>('/api/users')

// Type with transformation
const { data } = useApiRef<User[], ApiResponse<User>>(
  '/api/users',
  undefined,
  true,
  undefined,
  (response) => response.data // response typed as ApiResponse<User>
)
`})}),`
`,e.jsx(n.h2,{id:"behavior-features",children:"Behavior Features"}),`
`,e.jsx(n.h3,{id:"lazy-initialization",children:"Lazy Initialization"}),`
`,e.jsxs(n.p,{children:["Request doesn't execute until first access to ",e.jsx(n.code,{children:"data"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const api = useApiRef('/api/users')

// Request not executed yet
console.log('Composable created')

// Request executes on first access to data
console.log(api.data.value)
`})}),`
`,e.jsx(n.h3,{id:"automatic-reactivity",children:"Automatic Reactivity"}),`
`,e.jsx(n.p,{children:"When using ref or computed in parameters, requests execute automatically:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const userId = ref(1)
const { data } = useApiRef(computed(() => \`/api/users/\${userId.value}\`))

// Each userId change triggers a new request
userId.value = 2 // Request to /api/users/2
userId.value = 3 // Request to /api/users/3
`})}),`
`,e.jsx(n.h3,{id:"preventing-duplicates",children:"Preventing Duplicates"}),`
`,e.jsx(n.p,{children:"If a request is already running, a new request won't start:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { reset, loading } = useApiRef('/api/users')

await reset() // First request
// loading.value === true

await reset() // This call will be ignored until the first completes
`})})]})}function p(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{p as default};
