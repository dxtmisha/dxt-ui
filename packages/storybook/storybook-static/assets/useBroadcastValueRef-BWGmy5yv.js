import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-Zkkrlp1B.js";import{M as r}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function s(a){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/functional/ru/Composables/useBroadcastValueRef"}),`
`,n.jsx(e.h1,{id:"композабл-usebroadcastvalueref",children:"Композабл useBroadcastValueRef"}),`
`,n.jsx(e.p,{children:"Композабл для создания реактивной переменной, синхронизированной между вкладками браузера через Broadcast Channel API. Автоматически управляет передачей данных между открытыми вкладками одного домена в реальном времени без использования localStorage. Идеально подходит для синхронизации состояния приложения, уведомлений и обмена данными между вкладками."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Реальная синхронизация"})," — мгновенная передача данных между вкладками браузера"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Broadcast Channel API"})," — использует нативный браузерный API для эффективной коммуникации"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическая синхронизация"})," — изменения в одной вкладке автоматически отражаются во всех остальных"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Singleton паттерн"})," — переиспользование канала для одинаковых имён"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Уникальная идентификация"})," — каждая сессия браузера получает уникальный ID"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Типобезопасность"})," — полная поддержка TypeScript с дженериками"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Значения по умолчанию"})," — поддержка начальных значений и функций-фабрик"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Изоляция сессий"})," — данные не передаются между разными сессиями браузера"]}),`
`]}),`
`,n.jsx(e.h2,{id:"функция",children:"Функция"}),`
`,n.jsx(e.h3,{id:"usebroadcastvalueref",children:n.jsx(e.code,{children:"useBroadcastValueRef"})}),`
`,n.jsx(e.p,{children:"Создаёт реактивную переменную, синхронизированную между вкладками через Broadcast Channel."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — имя канала для связи между вкладками"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"defaultValue?: T | string | (() => (T | string))"})," — значение по умолчанию или функция для его генерации (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Ref<T | string | undefined>"})," — реактивная переменная Vue, синхронизированная между вкладками"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

// Простое использование
const sharedCounter = useBroadcastValueRef('counter')

// С значением по умолчанию
const activeTab = useBroadcastValueRef('active-tab', 'home')

// С функцией по умолчанию
const sessionId = useBroadcastValueRef('session', () => Math.random().toString(36))
`})}),`
`,n.jsx(e.h2,{id:"основное-использование",children:"Основное использование"}),`
`,n.jsx(e.h3,{id:"базовая-синхронизация",children:"Базовая синхронизация"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

// Создание синхронизированной переменной
const counter = useBroadcastValueRef('counter', 0)

// В первой вкладке
counter.value = 5

// Во второй вкладке автоматически обновляется
console.log(counter.value) // 5

// Изменение в любой вкладке отражается во всех остальных
counter.value = 10
// Все вкладки получат counter.value === 10 мгновенно
`})}),`
`,n.jsx(e.h3,{id:"singleton-паттерн",children:"Singleton паттерн"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// При повторном вызове с тем же именем возвращается существующий канал
const channel1 = useBroadcastValueRef('notifications', null)
const channel2 = useBroadcastValueRef('notifications', null)

console.log(channel1 === channel2) // true - тот же ref

channel1.value = { type: 'info', message: 'Привет!' }
console.log(channel2.value) // { type: 'info', message: 'Привет!' }
`})}),`
`,n.jsx(e.h2,{id:"использование-в-компонентах",children:"Использование в компонентах"}),`
`,n.jsx(e.h3,{id:"синхронизация-уведомлений",children:"Синхронизация уведомлений"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

export default {
  setup() {
    const notification = useBroadcastValueRef('notification', null)

    const showNotification = (message, type = 'info') => {
      notification.value = {
        id: Date.now(),
        type,
        message,
        timestamp: new Date()
      }
    }

    return {
      notification,
      showNotification
    }
  }
}

// Template:
// <div v-if="notification" class="notification">
//   <span>{{ notification.message }}</span>
//   <button @click="notification = null">×</button>
// </div>
//
// Уведомление показывается во всех открытых вкладках
`})}),`
`,n.jsx(e.h3,{id:"общий-счётчик",children:"Общий счётчик"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

export default {
  setup() {
    const cartCount = useBroadcastValueRef('cart-count', 0)

    const addToCart = () => {
      cartCount.value = (cartCount.value || 0) + 1
    }

    const removeFromCart = () => {
      if (cartCount.value > 0) {
        cartCount.value--
      }
    }

    return {
      cartCount,
      addToCart,
      removeFromCart
    }
  }
}

// Template:
// <div>
//   <span class="badge">{{ cartCount }}</span>
//   <button @click="addToCart">Добавить</button>
//   <button @click="removeFromCart">Удалить</button>
// </div>
//
// Счётчик синхронизируется между всеми вкладками
`})}),`
`,n.jsx(e.h2,{id:"синхронизация-состояния",children:"Синхронизация состояния"}),`
`,n.jsx(e.h3,{id:"активная-вкладка",children:"Активная вкладка"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useBroadcastValueRef } from '@dxtmisha/functional'
import { watch } from 'vue'

export default {
  setup() {
    const activeTab = useBroadcastValueRef('active-nav-tab', 'home')

    const setActiveTab = (tab) => {
      activeTab.value = tab
    }

    // Отслеживание изменений из других вкладок
    watch(activeTab, (newTab) => {
      console.log(\`Активная вкладка изменена на: \${newTab}\`)
    })

    return {
      activeTab,
      setActiveTab
    }
  }
}

// При переключении вкладки в одном окне,
// все остальные окна синхронизируются
`})}),`
`,n.jsx(e.h3,{id:"статус-авторизации",children:"Статус авторизации"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

export default {
  setup() {
    const isAuthenticated = useBroadcastValueRef('auth-status', false)
    const currentUser = useBroadcastValueRef('current-user', null)

    const login = (userData) => {
      currentUser.value = userData
      isAuthenticated.value = true
    }

    const logout = () => {
      currentUser.value = null
      isAuthenticated.value = false
    }

    return {
      isAuthenticated,
      currentUser,
      login,
      logout
    }
  }
}

// При входе/выходе в одной вкладке,
// все остальные вкладки обновляются мгновенно
`})}),`
`,n.jsx(e.h2,{id:"отличия-от-usestorageref",children:"Отличия от useStorageRef"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// useStorageRef - через localStorage (постоянное хранение)
const persistentData = useStorageRef('theme', 'light')
// - Данные сохраняются в localStorage
// - Синхронизация через storage event
// - Более медленная передача данных
// - Данные остаются после закрытия браузера

// useBroadcastValueRef - через Broadcast Channel (в памяти)
const realtimeData = useBroadcastValueRef('active-users', [])
// - Данные в памяти (не сохраняются)
// - Мгновенная синхронизация
// - Быстрая передача данных
// - Данные теряются при закрытии всех вкладок
// - Изоляция между сессиями браузера
`})}),`
`,n.jsx(e.h2,{id:"работа-с-типами-данных",children:"Работа с типами данных"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Числа
const counter = useBroadcastValueRef<number>('counter', 0)
counter.value = 42

// Строки
const message = useBroadcastValueRef<string>('message', '')
message.value = 'Привет из другой вкладки!'

// Объекты
const userState = useBroadcastValueRef('user-state', {
  id: null,
  name: '',
  online: false
})
userState.value = { id: 1, name: 'Иван', online: true }

// Массивы
const activeUsers = useBroadcastValueRef<number[]>('active-users', [])
activeUsers.value = [1, 2, 3, 4, 5]
`})}),`
`,n.jsx(e.h2,{id:"примеры-использования",children:"Примеры использования"}),`
`,n.jsx(e.h3,{id:"чат-между-вкладками",children:"Чат между вкладками"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const chatMessages = useBroadcastValueRef('chat-messages', [])

const sendMessage = (text) => {
  const message = {
    id: Date.now(),
    text,
    timestamp: new Date()
  }

  chatMessages.value = [...(chatMessages.value || []), message]
}

// Сообщения появляются во всех открытых вкладках мгновенно
`})}),`
`,n.jsx(e.h3,{id:"синхронизация-воспроизведения",children:"Синхронизация воспроизведения"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const playerState = useBroadcastValueRef('player', {
  isPlaying: false,
  currentTime: 0,
  track: null
})

const play = () => {
  playerState.value = { ...playerState.value, isPlaying: true }
}

const pause = () => {
  playerState.value = { ...playerState.value, isPlaying: false }
}

// Управление плеером в одной вкладке
// влияет на плееры во всех остальных
`})}),`
`,n.jsx(e.h3,{id:"общие-фильтры",children:"Общие фильтры"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const filters = useBroadcastValueRef('search-filters', {
  category: 'all',
  priceMin: 0,
  priceMax: 10000
})

const updateFilter = (key, value) => {
  filters.value = { ...filters.value, [key]: value }
}

// Изменение фильтров синхронизируется
// между всеми открытыми страницами поиска
`})}),`
`,n.jsx(e.h2,{id:"уникальная-идентификация-сессии",children:"Уникальная идентификация сессии"}),`
`,n.jsx(e.p,{children:"Композабл автоматически создаёт уникальный ID для каждой сессии браузера и сохраняет его в localStorage:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// При первом запуске генерируется случайный ID
// broadcast__name_1234567__counter
//            ^^^^^^^^^ - уникальный ID сессии

// Этот ID переиспользуется для всех каналов в рамках одной сессии
// Разные сессии браузера имеют разные ID и не пересекаются
`})}),`
`,n.jsx(e.h2,{id:"особенности-broadcast-channel-api",children:"Особенности Broadcast Channel API"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Broadcast Channel работает только:
// - В рамках одного origin (протокол + домен + порт)
// - Между вкладками одного браузера
// - В той же сессии браузера

// НЕ работает:
// - Между разными браузерами
// - Между разными доменами
// - В режиме инкогнито между обычными вкладками
`})})]})}function h(a={}){const{wrapper:e}={...t(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(s,{...a})}):s(a)}export{h as default};
