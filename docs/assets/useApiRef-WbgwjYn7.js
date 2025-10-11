import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Dqnce8mp.js";import{M as a}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"@dxtmisha/functional/ru/Composables/useApiRef"}),`
`,e.jsx(n.h1,{id:"композабл-useapiref",children:"Композабл useApiRef"}),`
`,e.jsx(n.p,{children:"Композабл для работы с HTTP-запросами в Vue 3 приложениях. Предоставляет реактивный интерфейс для выполнения API запросов с автоматическим управлением состоянием загрузки, поддержкой реактивности параметров, условным выполнением и трансформацией данных."}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Реактивные запросы"})," — автоматическое выполнение запросов при изменении параметров"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Управление состоянием"})," — автоматическое отслеживание состояния загрузки и готовности данных"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Условное выполнение"})," — возможность выполнять запросы только при выполнении условий"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Трансформация данных"})," — преобразование полученных данных перед сохранением"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Интеграция с Api"})," — использует класс Api для выполнения запросов с поддержкой кеширования"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Глобальные условия"})," — возможность установить глобальные условия для всех useApiRef"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоочистка"})," — опциональная очистка данных при размонтировании компонента"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TypeScript поддержка"})," — полная типизация с дженериками"]}),`
`]}),`
`,e.jsx(n.h2,{id:"базовое-использование",children:"Базовое использование"}),`
`,e.jsx(n.h3,{id:"простой-get-запрос",children:"Простой GET запрос"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useApiRef } from '@dxtmisha/functional'

// Выполняет GET запрос при монтировании компонента
const { data, loading, isStarting, reading } = useApiRef('/api/users')

// data - ref с данными ответа
// loading - ref с состоянием загрузки
// isStarting - computed, true до первой загрузки данных
// reading - computed, true во время чтения данных
`})}),`
`,e.jsx(n.h3,{id:"использование-в-компоненте",children:"Использование в компоненте"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup>
import { useApiRef } from '@dxtmisha/functional'

const { data: users, loading } = useApiRef('/api/users')
<\/script>

<template>
  <div v-if="loading">Загрузка...</div>
  <div v-else-if="users">
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>
`})}),`
`,e.jsx(n.h2,{id:"параметры",children:"Параметры"}),`
`,e.jsx(n.h3,{id:"path",children:e.jsx(n.code,{children:"path"})}),`
`,e.jsx(n.p,{children:"Путь к API endpoint. Может быть строкой или ref-ом для реактивности."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"RefOrNormal<string | undefined>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Статический путь
const { data } = useApiRef('/api/users')

// Реактивный путь
const userId = ref(1)
const { data: user } = useApiRef(computed(() => \`/api/users/\${userId.value}\`))

// При изменении userId автоматически выполняется новый запрос
userId.value = 2
`})}),`
`,e.jsx(n.h3,{id:"options",children:e.jsx(n.code,{children:"options"})}),`
`,e.jsx(n.p,{children:"Параметры запроса. Может быть HTTP методом, объектом настроек или ref-ом."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"ApiMethodItem | RefOrNormal<ApiFetch>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Указать только метод
const { data } = useApiRef('/api/users', 'POST')

// Полные настройки
const { data } = useApiRef('/api/users', {
  method: 'POST',
  request: { name: 'Иван', email: 'ivan@example.com' },
  headers: { 'Content-Type': 'application/json' }
})

// Реактивные параметры
const params = ref({ page: 1, limit: 10 })
const { data } = useApiRef('/api/users', computed(() => ({
  method: 'GET',
  request: params.value
})))

// При изменении params автоматически выполняется новый запрос
params.value = { page: 2, limit: 10 }
`})}),`
`,e.jsx(n.h3,{id:"reactivity",children:e.jsx(n.code,{children:"reactivity"})}),`
`,e.jsx(n.p,{children:"Включить или отключить автоматическое выполнение при изменении параметров."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"boolean"}),`
`,e.jsx(n.strong,{children:"По умолчанию:"})," ",e.jsx(n.code,{children:"true"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// С реактивностью (по умолчанию)
const params = ref({ page: 1 })
const { data, reset } = useApiRef('/api/users', { request: params }, true)

params.value.page = 2 // Автоматически выполнится запрос

// Без реактивности
const { data, reset } = useApiRef('/api/users', { request: params }, false)

params.value.page = 2 // Запрос НЕ выполнится
await reset() // Нужно вызвать reset вручную
`})}),`
`,e.jsx(n.h3,{id:"conditions",children:e.jsx(n.code,{children:"conditions"})}),`
`,e.jsx(n.p,{children:"Условие для выполнения запроса. Запрос выполняется только если условие истинно."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"RefType<boolean>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Запрос выполняется только когда isAuth === true
const isAuth = ref(false)
const { data } = useApiRef('/api/profile', undefined, true, isAuth)

// data будет undefined, пока isAuth === false
console.log(data.value) // undefined

isAuth.value = true // Запрос автоматически выполнится
`})}),`
`,e.jsx(n.h3,{id:"transformation",children:e.jsx(n.code,{children:"transformation"})}),`
`,e.jsx(n.p,{children:"Функция для преобразования полученных данных перед сохранением в ref."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"(data: T) => R"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Преобразование данных API в нужный формат
const { data } = useApiRef(
  '/api/users',
  undefined,
  true,
  undefined,
  (response) => {
    // response - данные от API
    // Возвращаем преобразованные данные
    return response.data.map(user => ({
      id: user.id,
      fullName: \`\${user.firstName} \${user.lastName}\`,
      isActive: user.status === 'active'
    }))
  }
)

// data содержит преобразованные данные
`})}),`
`,e.jsx(n.h3,{id:"unmounted",children:e.jsx(n.code,{children:"unmounted"})}),`
`,e.jsx(n.p,{children:"Очищать ли данные при размонтировании компонента."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"boolean"}),`
`,e.jsx(n.strong,{children:"По умолчанию:"})," ",e.jsx(n.code,{children:"undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Данные будут очищены при размонтировании компонента
const { data } = useApiRef('/api/users', undefined, true, undefined, undefined, true)

// При переходе на другую страницу data станет undefined
`})}),`
`,e.jsx(n.h2,{id:"возвращаемые-значения",children:"Возвращаемые значения"}),`
`,e.jsx(n.h3,{id:"data",children:e.jsx(n.code,{children:"data"})}),`
`,e.jsxs(n.p,{children:["Ref с данными ответа. ",e.jsx(n.code,{children:"undefined"})," до первой загрузки."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<R | undefined>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { data } = useApiRef('/api/users')

console.log(data.value) // undefined до загрузки
// После загрузки: массив пользователей
`})}),`
`,e.jsx(n.h3,{id:"loading",children:e.jsx(n.code,{children:"loading"})}),`
`,e.jsxs(n.p,{children:["Ref с состоянием загрузки. ",e.jsx(n.code,{children:"true"})," во время выполнения запроса."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<boolean>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { loading } = useApiRef('/api/users')

console.log(loading.value) // true во время загрузки, false после
`})}),`
`,e.jsx(n.h3,{id:"isstarting",children:e.jsx(n.code,{children:"isStarting"})}),`
`,e.jsxs(n.p,{children:["Computed, показывает, загружены ли данные хотя бы раз. ",e.jsx(n.code,{children:"true"})," до первой загрузки."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"ComputedRef<boolean>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { data, isStarting } = useApiRef('/api/users')

console.log(isStarting.value) // true до первой загрузки
// После первой загрузки всегда false, даже при повторных запросах
`})}),`
`,e.jsx(n.h3,{id:"reading",children:e.jsx(n.code,{children:"reading"})}),`
`,e.jsx(n.p,{children:"Computed, показывает активное чтение данных."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"ComputedRef<boolean>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { reading } = useApiRef('/api/users')

console.log(reading.value) // true во время чтения данных
`})}),`
`,e.jsx(n.h3,{id:"reset",children:e.jsx(n.code,{children:"reset"})}),`
`,e.jsx(n.p,{children:"Функция для принудительного выполнения запроса."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"() => Promise<void>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { data, reset } = useApiRef('/api/users')

// Принудительно перезагрузить данные
await reset()
`})}),`
`,e.jsx(n.h2,{id:"примеры-использования",children:"Примеры использования"}),`
`,e.jsx(n.h3,{id:"список-с-фильтрами",children:"Список с фильтрами"}),`
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
  currentPage.value = 1 // Сброс на первую страницу
  // Запрос выполнится автоматически
}
<\/script>

<template>
  <div>
    <input v-model="searchQuery" placeholder="Поиск...">
    <div v-if="loading">Загрузка...</div>
    <div v-else>
      <div v-for="user in users" :key="user.id">{{ user.name }}</div>
      <button @click="currentPage++">Следующая страница</button>
    </div>
  </div>
</template>
`})}),`
`,e.jsx(n.h3,{id:"условная-загрузка",children:"Условная загрузка"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup>
import { ref } from 'vue'
import { useApiRef } from '@dxtmisha/functional'

const showDetails = ref(false)
const userId = ref(1)

// Данные загружаются только когда showDetails === true
const { data: userDetails, loading } = useApiRef(
  computed(() => \`/api/users/\${userId.value}/details\`),
  undefined,
  true,
  showDetails
)

const toggleDetails = () => {
  showDetails.value = !showDetails.value
  // Если showDetails стало true, запрос выполнится автоматически
}
<\/script>

<template>
  <button @click="toggleDetails">
    {{ showDetails ? 'Скрыть' : 'Показать' }} детали
  </button>
  <div v-if="showDetails">
    <div v-if="loading">Загрузка деталей...</div>
    <div v-else-if="userDetails">{{ userDetails }}</div>
  </div>
</template>
`})}),`
`,e.jsx(n.h3,{id:"post-запрос-с-трансформацией",children:"POST запрос с трансформацией"}),`
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
  false, // Отключаем автоматическое выполнение
  undefined,
  (response) => {
    // Преобразуем ответ API
    return {
      id: response.id,
      fullName: \`\${response.firstName} \${response.lastName}\`,
      email: response.email,
      createdAt: new Date(response.created_at)
    }
  }
)

const handleSubmit = async () => {
  await reset() // Выполняем запрос вручную
  if (createdUser.value) {
    console.log('Пользователь создан:', createdUser.value)
  }
}
<\/script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="formData.firstName" placeholder="Имя">
    <input v-model="formData.lastName" placeholder="Фамилия">
    <input v-model="formData.email" placeholder="Email">
    <button :disabled="loading">
      {{ loading ? 'Отправка...' : 'Создать' }}
    </button>
  </form>
</template>
`})}),`
`,e.jsx(n.h3,{id:"множественные-запросы",children:"Множественные запросы"}),`
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
  <div v-if="isLoading">Загрузка данных...</div>
  <div v-else>
    <section>
      <h2>Пользователи</h2>
      <div v-for="user in users" :key="user.id">{{ user.name }}</div>
    </section>
    <section>
      <h2>Посты</h2>
      <div v-for="post in posts" :key="post.id">{{ post.title }}</div>
    </section>
    <section>
      <h2>Комментарии</h2>
      <div v-for="comment in comments" :key="comment.id">{{ comment.text }}</div>
    </section>
  </div>
</template>
`})}),`
`,e.jsx(n.h2,{id:"глобальные-условия",children:"Глобальные условия"}),`
`,e.jsxs(n.p,{children:["Функция ",e.jsx(n.code,{children:"setApiRefGlobalConditions"})," позволяет установить глобальное условие для всех useApiRef."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { setApiRefGlobalConditions, useApiRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// Глобальное условие - например, статус авторизации
const isAuthenticated = ref(false)
setApiRefGlobalConditions(isAuthenticated)

// Теперь все useApiRef будут учитывать это условие
const { data: profile } = useApiRef('/api/profile')
const { data: settings } = useApiRef('/api/settings')

// Запросы не выполнятся, пока isAuthenticated === false
isAuthenticated.value = true // Все запросы выполнятся автоматически
`})}),`
`,e.jsx(n.h2,{id:"интеграция-с-api-классом",children:"Интеграция с Api классом"}),`
`,e.jsx(n.p,{children:"useApiRef использует класс Api, поэтому все настройки Api применяются автоматически:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Api, useApiRef } from '@dxtmisha/functional'

// Настройка базового URL и заголовков
Api.setUrl('/api/v1/')
Api.setHeaders({
  'Authorization': 'Bearer token123',
  'Accept': 'application/json'
})

// useApiRef автоматически использует эти настройки
const { data } = useApiRef('/users') // Запрос к /api/v1/users с заголовками
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

// Типизация данных ответа
const { data } = useApiRef<User[]>('/api/users')

// Типизация с трансформацией
const { data } = useApiRef<User[], ApiResponse<User>>(
  '/api/users',
  undefined,
  true,
  undefined,
  (response) => response.data // response типизирован как ApiResponse<User>
)
`})}),`
`,e.jsx(n.h2,{id:"особенности-поведения",children:"Особенности поведения"}),`
`,e.jsx(n.h3,{id:"ленивая-инициализация",children:"Ленивая инициализация"}),`
`,e.jsxs(n.p,{children:["Запрос не выполняется до первого обращения к ",e.jsx(n.code,{children:"data"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const api = useApiRef('/api/users')

// Запрос еще не выполнен
console.log('Композабл создан')

// Запрос выполнится при первом обращении к data
console.log(api.data.value)
`})}),`
`,e.jsx(n.h3,{id:"автоматическая-реактивность",children:"Автоматическая реактивность"}),`
`,e.jsx(n.p,{children:"При использовании ref или computed в параметрах, запросы выполняются автоматически:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const userId = ref(1)
const { data } = useApiRef(computed(() => \`/api/users/\${userId.value}\`))

// Каждое изменение userId вызывает новый запрос
userId.value = 2 // Запрос к /api/users/2
userId.value = 3 // Запрос к /api/users/3
`})}),`
`,e.jsx(n.h3,{id:"предотвращение-дублирования",children:"Предотвращение дублирования"}),`
`,e.jsx(n.p,{children:"Если запрос уже выполняется, новый запрос не начнётся:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { reset, loading } = useApiRef('/api/users')

await reset() // Первый запрос
// loading.value === true

await reset() // Этот вызов будет проигнорирован, пока первый не завершится
`})})]})}function p(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{p as default};
