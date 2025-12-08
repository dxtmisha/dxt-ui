import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Zkkrlp1B.js";import{M as o}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/functional/ru/Classes/Ref/RouterItemRef"}),`
`,e.jsx(n.h1,{id:"класс-routeritemref",children:"Класс RouterItemRef"}),`
`,e.jsx(n.p,{children:"Статический класс для управления Vue Router. Обеспечивает глобальный доступ к экземпляру роутера и программную навигацию через простой API с поддержкой одноразовой инициализации."}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Глобальный доступ"})," — статический доступ к экземпляру Vue Router из любого места"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Простая навигация"})," — метод push для программных переходов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Одноразовая установка"})," — защита от случайной перезаписи роутера"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TypeScript поддержка"})," — полная типизация с RouteLocationRaw"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Безопасная навигация"})," — проверка наличия роутера перед выполнением"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vue Router интеграция"})," — прямая работа с официальным Vue Router"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Глобальная инициализация"})," — инициализация роутера на уровне приложения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Простой API"})," — минималистичный интерфейс для основных операций"]}),`
`]}),`
`,e.jsx(n.h2,{id:"методы-конфигурации",children:"Методы конфигурации"}),`
`,e.jsx(n.h3,{id:"set",children:e.jsx(n.code,{children:"set"})}),`
`,e.jsx(n.p,{children:"Устанавливает экземпляр Vue Router для глобального использования."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"router: Router"})," — экземпляр Vue Router"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { createRouter, createWebHistory } from 'vue-router'
import { RouterItemRef } from '@dxtmisha/functional'

// Создание и установка роутера
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/users/:id', component: User }
  ]
})

RouterItemRef.set(router)
`})}),`
`,e.jsx(n.h3,{id:"setonetime",children:e.jsx(n.code,{children:"setOneTime"})}),`
`,e.jsx(n.p,{children:"Устанавливает роутер только если он еще не установлен (защита от перезаписи)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"router: Router"})," — экземпляр Vue Router"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { RouterItemRef } from '@dxtmisha/functional'

// Безопасная установка (только первый раз)
RouterItemRef.setOneTime(router)
RouterItemRef.setOneTime(anotherRouter) // Будет проигнорировано

// Полезно в плагинах и библиотеках
function initializeLibrary(router) {
  RouterItemRef.setOneTime(router) // Не перезапишет существующий
}
`})}),`
`,e.jsx(n.h2,{id:"методы-получения-данных",children:"Методы получения данных"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsx(n.p,{children:"Возвращает текущий экземпляр Vue Router."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Router | undefined"})," — экземпляр роутера или undefined"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { RouterItemRef } from '@dxtmisha/functional'

// Получение роутера
const router = RouterItemRef.get()

if (router) {
  console.log('Текущий маршрут:', router.currentRoute.value)
  console.log('Доступные маршруты:', router.getRoutes())
} else {
  console.log('Роутер не инициализирован')
}
`})}),`
`,e.jsx(n.h2,{id:"методы-навигации",children:"Методы навигации"}),`
`,e.jsx(n.h3,{id:"push",children:e.jsx(n.code,{children:"push"})}),`
`,e.jsx(n.p,{children:"Программно переходит к новому маршруту."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"to: string | RouteLocationRaw"})," — целевой маршрут (строка или объект)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { RouterItemRef } from '@dxtmisha/functional'

// Простая навигация по строке
RouterItemRef.push('/users')
RouterItemRef.push('/products/123')

// Навигация с параметрами
RouterItemRef.push({
  name: 'user-profile',
  params: { id: '123' }
})

// Навигация с query параметрами
RouterItemRef.push({
  path: '/search',
  query: { q: 'laptop', category: 'electronics' }
})

// Навигация с hash
RouterItemRef.push({
  path: '/docs',
  hash: '#section-2'
})
`})}),`
`,e.jsx(n.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,e.jsx(n.h3,{id:"инициализация-в-приложении",children:"Инициализация в приложении"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// main.js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { RouterItemRef } from '@dxtmisha/functional'

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const app = createApp(App)
app.use(router)

// Глобальная установка
RouterItemRef.set(router)
`})}),`
`,e.jsx(n.h3,{id:"навигация-в-компонентах",children:"Навигация в компонентах"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// В любом месте приложения
export function navigateToUser(userId) {
  RouterItemRef.push({
    name: 'user',
    params: { id: userId }
  })
}

// В service классе
class AuthService {
  static login(credentials) {
    // ... логика авторизации
    RouterItemRef.push('/dashboard')
  }

  static logout() {
    // ... логика выхода
    RouterItemRef.push('/login')
  }
}
`})}),`
`,e.jsx(n.h3,{id:"условная-навигация",children:"Условная навигация"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function handleUserAction(user) {
  if (user.role === 'admin') {
    RouterItemRef.push('/admin/dashboard')
  } else if (user.role === 'moderator') {
    RouterItemRef.push('/moderator/panel')
  } else {
    RouterItemRef.push('/user/profile')
  }
}

// Навигация с проверкой
function safeNavigate(path) {
  if (RouterItemRef.get()) {
    RouterItemRef.push(path)
  } else {
    console.warn('Router не инициализирован')
  }
}
`})}),`
`,e.jsx(n.p,{children:"Класс RouterItemRef предоставляет простой глобальный доступ к Vue Router для программной навигации из любой части приложения без необходимости передачи экземпляра роутера."})]})}function a(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{a as default};
