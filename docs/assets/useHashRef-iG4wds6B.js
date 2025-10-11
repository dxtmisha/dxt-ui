import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Dqnce8mp.js";import{M as l}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function a(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/functional/ru/Composables/useHashRef"}),`
`,e.jsx(n.h1,{id:"композабл-usehashref",children:"Композабл useHashRef"}),`
`,e.jsx(n.p,{children:"Композабл для создания реактивной переменной, синхронизированной с URL hash. Автоматически управляет чтением и записью значений в hash часть URL, обеспечивая двустороннюю синхронизацию между реактивным состоянием Vue и параметрами в адресной строке браузера."}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Двусторонняя синхронизация"})," — автоматическая синхронизация между ref и URL hash"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматическое сохранение"})," — изменения ref автоматически отражаются в URL"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Реактивность"})," — изменения URL hash автоматически обновляют ref"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Кеширование экземпляров"})," — переиспользование ref для одинаковых имён параметров"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Типобезопасность"})," — полная поддержка TypeScript с дженериками"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Значения по умолчанию"})," — поддержка начальных значений и функций-фабрик"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматическая инициализация"})," — загрузка существующих значений из URL при создании"]}),`
`]}),`
`,e.jsx(n.h2,{id:"функция",children:"Функция"}),`
`,e.jsx(n.h3,{id:"usehashref",children:e.jsx(n.code,{children:"useHashRef"})}),`
`,e.jsx(n.p,{children:"Создаёт реактивную переменную, синхронизированную с параметром в URL hash."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — имя параметра в hash URL"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | (() => T)"})," — значение по умолчанию или функция для его генерации (опционально)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Ref<T>"})," — реактивная переменная Vue, связанная с hash параметром"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useHashRef } from '@dxtmisha/functional'

// Простое использование без значения по умолчанию
const currentTab = useHashRef('tab')
console.log(currentTab.value) // undefined (если hash пустой)

// С значением по умолчанию
const activeView = useHashRef('view', 'grid')
console.log(activeView.value) // 'grid' (если hash не содержит 'view')

// С функцией-фабрикой для значения по умолчанию
const userId = useHashRef('userId', () => Math.floor(Math.random() * 1000))
`})}),`
`,e.jsx(n.h2,{id:"основное-использование",children:"Основное использование"}),`
`,e.jsx(n.h3,{id:"базовая-синхронизация",children:"Базовая синхронизация"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useHashRef } from '@dxtmisha/functional'

// Создание ref, синхронизированного с hash
const currentPage = useHashRef('page', 1)

// При изменении ref - URL автоматически обновляется
currentPage.value = 2
// URL: #page=2

currentPage.value = 5
// URL: #page=5

// При изменении URL вручную - ref автоматически обновляется
// Пользователь меняет URL на: #page=10
console.log(currentPage.value) // 10
`})}),`
`,e.jsx(n.h3,{id:"работа-с-несколькими-параметрами",children:"Работа с несколькими параметрами"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Несколько независимых hash параметров
const searchQuery = useHashRef('q', '')
const sortOrder = useHashRef('sort', 'asc')
const pageNumber = useHashRef('page', 1)

searchQuery.value = 'vue композаблы'
sortOrder.value = 'desc'
pageNumber.value = 3

// URL: #q=vue композаблы;sort=desc;page=3

// Все параметры остаются синхронизированными
console.log(searchQuery.value) // 'vue композаблы'
console.log(sortOrder.value)   // 'desc'
console.log(pageNumber.value)  // 3
`})}),`
`,e.jsx(n.h3,{id:"кеширование-экземпляров",children:"Кеширование экземпляров"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// При повторном вызове с тем же именем возвращается существующий ref
const tab1 = useHashRef('activeTab', 'home')
const tab2 = useHashRef('activeTab', 'profile')

console.log(tab1 === tab2) // true - тот же ref

tab1.value = 'settings'
console.log(tab2.value) // 'settings' - оба указывают на один ref
`})}),`
`,e.jsx(n.h2,{id:"использование-в-компонентах",children:"Использование в компонентах"}),`
`,e.jsx(n.h3,{id:"управление-табами",children:"Управление табами"}),`
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
`,e.jsx(n.h3,{id:"пагинация-с-сохранением-состояния",children:"Пагинация с сохранением состояния"}),`
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
`,e.jsx(n.h3,{id:"фильтры-и-поиск",children:"Фильтры и поиск"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { watch } from 'vue'
import { useHashRef } from '@dxtmisha/functional'

export default {
  setup() {
    const searchQuery = useHashRef('q', '')
    const category = useHashRef('category', 'all')
    const sortBy = useHashRef('sort', 'date')

    // Отслеживание изменений для загрузки данных
    watch([searchQuery, category, sortBy], () => {
      console.log('Загрузка данных с параметрами:')
      console.log('Поиск:', searchQuery.value)
      console.log('Категория:', category.value)
      console.log('Сортировка:', sortBy.value)
      // Здесь выполняется запрос к API
    })

    return {
      searchQuery,
      category,
      sortBy
    }
  }
}
`})}),`
`,e.jsx(n.h2,{id:"работа-с-типами-данных",children:"Работа с типами данных"}),`
`,e.jsx(n.h3,{id:"числовые-значения",children:"Числовые значения"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Hash автоматически преобразует типы
const pageNumber = useHashRef<number>('page', 1)

pageNumber.value = 5
// URL: #page=5

// При загрузке из URL строка автоматически преобразуется
// URL: #page=10
console.log(typeof pageNumber.value) // 'number'
console.log(pageNumber.value)        // 10
`})}),`
`,e.jsx(n.h3,{id:"булевы-значения",children:"Булевы значения"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const isActive = useHashRef<boolean>('active', false)

isActive.value = true
// URL: #active=true

// Автоматическое преобразование из строки
// URL: #active=false
console.log(typeof isActive.value) // 'boolean'
console.log(isActive.value)        // false
`})}),`
`,e.jsx(n.h3,{id:"объекты-и-массивы",children:"Объекты и массивы"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Для сложных типов используется сериализация
const filters = useHashRef('filters', { min: 0, max: 100 })

filters.value = { min: 20, max: 80 }
// URL будет содержать сериализованное представление

// Значения восстанавливаются при загрузке
console.log(filters.value) // { min: 20, max: 80 }
`})}),`
`,e.jsx(n.h2,{id:"интеграция-с-классом-hash",children:"Интеграция с классом Hash"}),`
`,e.jsxs(n.p,{children:["Композабл использует класс ",e.jsx(n.code,{children:"Hash"})," для управления URL hash:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Hash } from '@dxtmisha/functional'

// Прямое использование класса
Hash.set('tab', 'profile')
console.log(Hash.get('tab')) // 'profile'

// useHashRef автоматически синхронизируется с Hash
const tab = useHashRef('tab')
console.log(tab.value) // 'profile'

// Изменения через Hash отражаются в ref
Hash.set('tab', 'settings')
console.log(tab.value) // 'settings'
`})}),`
`,e.jsx(n.h2,{id:"примеры-использования",children:"Примеры использования"}),`
`,e.jsx(n.h3,{id:"сохранение-состояния-формы",children:"Сохранение состояния формы"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const formData = {
  name: useHashRef('name', ''),
  email: useHashRef('email', ''),
  role: useHashRef('role', 'user')
}

// При заполнении формы состояние сохраняется в URL
formData.name.value = 'Иван'
formData.email.value = 'ivan@example.com'
formData.role.value = 'admin'

// URL: #name=Иван;email=ivan@example.com;role=admin

// При перезагрузке страницы состояние восстанавливается
`})}),`
`,e.jsx(n.h3,{id:"управление-модальными-окнами",children:"Управление модальными окнами"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const modalOpen = useHashRef('modal', null)

const openModal = (modalName) => {
  modalOpen.value = modalName
  // URL: #modal=confirmation
}

const closeModal = () => {
  modalOpen.value = null
  // URL: #modal=null или hash очищается
}

// Кнопка "Назад" в браузере закрывает модальное окно
`})})]})}function u(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{u as default};
