import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-Dqnce8mp.js";import{M as c}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function s(a){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/functional/ru/Classes/BroadcastMessage"}),`
`,n.jsx(e.h1,{id:"класс-broadcastmessage",children:"Класс BroadcastMessage"}),`
`,n.jsx(e.p,{children:"Класс для работы с сообщениями BroadcastChannel между вкладками/окнами браузера. Обеспечивает коммуникацию в реальном времени между различными контекстами одного источника с автоматическим именованием каналов и обработкой сообщений."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Межвкладочная коммуникация"})," — отправка и получение сообщений между вкладками и окнами браузера"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическое именование каналов"})," — уникальные имена каналов для каждого экземпляра браузера, сохраняемые в localStorage"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Типобезопасная передача сообщений"})," — полная поддержка TypeScript с генерик-типами сообщений"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Обработка через callback"})," — гибкая обработка сообщений через callback-функции"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Обработка ошибок"})," — корректная обработка ошибок с логированием в консоль"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Безопасность SSR"})," — автоматическое определение окружения DOM runtime"]}),`
`]}),`
`,n.jsx(e.h2,{id:"основное-использование",children:"Основное использование"}),`
`,n.jsx(e.h3,{id:"конструктор",children:"Конструктор"}),`
`,n.jsx(e.p,{children:"Создаёт новый экземпляр BroadcastMessage с указанным именем канала и опциональным callback."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — идентификатор имени канала"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback?: (event: MessageEvent<Message>) => void"})," — опциональный callback для получаемых сообщений"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

// Создание канала с callback
const channel = new BroadcastMessage('user-updates', (event) => {
  console.log('Получено сообщение:', event.data)
})

// Создание канала без callback (можно установить позже)
const notifications = new BroadcastMessage('notifications')
`})}),`
`,n.jsx(e.h3,{id:"post",children:n.jsx(e.code,{children:"post"})}),`
`,n.jsx(e.p,{children:"Отправляет сообщение всем подключённым вкладкам/окнам на том же канале."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"message: Message"})," — сообщение для отправки"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

const userChannel = new BroadcastMessage('user-updates')

// Отправка простого сообщения
userChannel.post({ type: 'login', userId: 123 })

// Цепочка вызовов
userChannel
  .post({ type: 'status', value: 'online' })
  .post({ type: 'activity', timestamp: Date.now() })
`})}),`
`,n.jsx(e.h3,{id:"setcallback",children:n.jsx(e.code,{children:"setCallback"})}),`
`,n.jsx(e.p,{children:"Устанавливает или обновляет callback-функцию для обработки получаемых сообщений."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: (event: MessageEvent<Message>) => void"})," — callback-функция"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

const channel = new BroadcastMessage('app-events')

// Установка callback позже
channel.setCallback((event) => {
  console.log('Получено событие:', event.data)
})

// Обновление callback
channel.setCallback((event) => {
  if (event.data.type === 'refresh') {
    location.reload()
  }
})
`})}),`
`,n.jsx(e.h2,{id:"расширенные-примеры",children:"Расширенные примеры"}),`
`,n.jsx(e.h3,{id:"синхронизация-состояния-между-вкладками",children:"Синхронизация состояния между вкладками"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'
import { ref } from 'vue'

// Создание реактивного состояния
const userStatus = ref('offline')

// Создание канала broadcast
const statusChannel = new BroadcastMessage('user-status', (event) => {
  // Обновление локального состояния при изменениях из других вкладок
  userStatus.value = event.data.status
  console.log('Статус обновлён из другой вкладки:', event.data.status)
})

// Функция для обновления статуса и оповещения других вкладок
function updateStatus(newStatus) {
  userStatus.value = newStatus
  statusChannel.post({ status: newStatus, timestamp: Date.now() })
}

// Использование
updateStatus('online')  // Обновляет эту вкладку и уведомляет другие
`})}),`
`,n.jsx(e.h3,{id:"корзина-покупок-в-нескольких-вкладках",children:"Корзина покупок в нескольких вкладках"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

// Определение типов сообщений
interface CartMessage {
  action: 'add' | 'remove' | 'clear'
  productId?: number
  quantity?: number
}

// Создание канала с типизированными сообщениями
const cartChannel = new BroadcastMessage<CartMessage>('shopping-cart')

// Настройка обработчика сообщений
cartChannel.setCallback((event) => {
  const { action, productId, quantity } = event.data

  switch (action) {
    case 'add':
      console.log(\`Добавление \${quantity} товара \${productId}\`)
      addToCart(productId, quantity)
      break
    case 'remove':
      console.log(\`Удаление товара \${productId}\`)
      removeFromCart(productId)
      break
    case 'clear':
      console.log('Очистка корзины')
      clearCart()
      break
  }
})

// Трансляция обновлений корзины
function addProduct(productId, quantity) {
  addToCart(productId, quantity)
  cartChannel.post({ action: 'add', productId, quantity })
}
`})}),`
`,n.jsx(e.h3,{id:"синхронизация-состояния-аутентификации",children:"Синхронизация состояния аутентификации"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

interface AuthMessage {
  type: 'login' | 'logout' | 'token-refresh'
  userId?: number
  token?: string
}

const authChannel = new BroadcastMessage<AuthMessage>('auth-events', (event) => {
  switch (event.data.type) {
    case 'login':
      console.log('Пользователь вошёл:', event.data.userId)
      location.reload()
      break

    case 'logout':
      console.log('Пользователь вышел, перенаправление...')
      localStorage.removeItem('auth-token')
      window.location.href = '/login'
      break

    case 'token-refresh':
      console.log('Токен обновлён')
      localStorage.setItem('auth-token', event.data.token)
      break
  }
})

// Трансляция входа
function handleLogin(userId, token) {
  localStorage.setItem('auth-token', token)
  authChannel.post({ type: 'login', userId, token })
}

// Трансляция выхода
function handleLogout() {
  localStorage.removeItem('auth-token')
  authChannel.post({ type: 'logout' })
}
`})}),`
`,n.jsx(e.h3,{id:"уведомления-в-реальном-времени",children:"Уведомления в реальном времени"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'warning' | 'error' | 'success'
  timestamp: number
}

const notificationChannel = new BroadcastMessage<Notification>('notifications')

// Настройка обработчика уведомлений
notificationChannel.setCallback((event) => {
  const notification = event.data

  showNotification(notification.title, notification.message, notification.type)

  if (notification.type === 'error') {
    playErrorSound()
  }
})

// Отправка уведомления всем вкладкам
function broadcastNotification(title, message, type = 'info') {
  const notification = {
    id: crypto.randomUUID(),
    title,
    message,
    type,
    timestamp: Date.now()
  }

  notificationChannel.post(notification)
}

// Использование
broadcastNotification('Новое сообщение', 'У вас новое сообщение от Ивана', 'info')
`})}),`
`,n.jsx(e.h2,{id:"детали-реализации",children:"Детали реализации"}),`
`,n.jsx(e.h3,{id:"уникальное-именование-каналов",children:"Уникальное именование каналов"}),`
`,n.jsxs(e.p,{children:["Каждый экземпляр браузера генерирует уникальный идентификатор, сохраняемый в localStorage (",n.jsx(e.code,{children:"__broadcast-name"}),"). Это гарантирует изоляцию каналов между различными экземплярами браузера, при этом позволяя коммуникацию внутри одного экземпляра между вкладками."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Формат имени канала: name_{случайные_7_цифр}__ваше-имя-канала
// Пример: name_1234567__user-updates
`})}),`
`,n.jsx(e.h3,{id:"обработка-ошибок",children:"Обработка ошибок"}),`
`,n.jsx(e.p,{children:"BroadcastMessage корректно обрабатывает ошибки и логирует их в консоль:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const channel = new BroadcastMessage('my-channel')
// Если BroadcastChannel не поддерживается или инициализация не удалась,
// ошибка логируется: "BroadcastMessage my-channel: [детали ошибки]"
`})}),`
`,n.jsx(e.h3,{id:"совместимость-с-ssr",children:"Совместимость с SSR"}),`
`,n.jsxs(e.p,{children:["Класс автоматически определяет окружение DOM runtime с помощью ",n.jsx(e.code,{children:"isDomRuntime()"}),", что делает его безопасным для использования в контекстах SSR/SSG, где BroadcastChannel API недоступен."]}),`
`,n.jsx(e.h2,{id:"типобезопасность",children:"Типобезопасность"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

// Определение структуры сообщения
interface UserUpdate {
  userId: number
  action: 'online' | 'offline' | 'typing'
  timestamp: number
}

// Создание типизированного канала
const channel = new BroadcastMessage<UserUpdate>('users')

// TypeScript обеспечивает типобезопасность
channel.post({
  userId: 123,
  action: 'online',
  timestamp: Date.now()
}) // ✓ Валидно

channel.post({ invalid: 'data' }) // ✗ Ошибка TypeScript
`})}),`
`,n.jsx(e.h2,{id:"совместимость-с-браузерами",children:"Совместимость с браузерами"}),`
`,n.jsx(e.p,{children:"BroadcastChannel API поддерживается в:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Chrome/Edge 54+"}),`
`,n.jsx(e.li,{children:"Firefox 38+"}),`
`,n.jsx(e.li,{children:"Safari 15.4+"}),`
`,n.jsx(e.li,{children:"Opera 41+"}),`
`]}),`
`,n.jsx(e.p,{children:"Для старых браузеров рассмотрите использование полифилла или механизма запасного варианта."})]})}function u(a={}){const{wrapper:e}={...t(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(s,{...a})}):s(a)}export{u as default};
