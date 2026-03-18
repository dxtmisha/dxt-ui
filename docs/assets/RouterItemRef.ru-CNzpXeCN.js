import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/functional/Classes/RouterItemRef - Управление Vue Router"}),`
`,e.jsx(n.h1,{id:"класс-routeritemref",children:"Класс RouterItemRef"}),`
`,e.jsx(n.p,{children:"Статическое ядро для работы с Vue Router в функциональном слое. Обеспечивает единую точку доступа к роутеру, позволяя генерировать ссылки, выполнять переходы и нормализовать пути без прямой зависимости от контекста компонента."}),`
`,e.jsxs(n.p,{children:["Это позволяет использовать возможности роутера в классах и утилитах, где недоступны хуки ",e.jsx(n.code,{children:"useRouter"})," или ",e.jsx(n.code,{children:"useRoute"}),"."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Глобальный доступ"})," — сохранение экземпляра роутера для доступа из любого места приложения."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Безопасная генерация"})," — методы для создания ссылок по именам маршрутов с параметрами."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Нормализация"})," — преобразование различных форматов путей в стандартные свойства ",e.jsx(n.code,{children:"href"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"использование-настройка",children:"Использование (Настройка)"}),`
`,e.jsxs(n.p,{children:["Поскольку ",e.jsx(n.code,{children:"RouterItemRef"})," является статическим классом, его необходимо инициализировать один раз при создании приложения (обычно в ",e.jsx(n.code,{children:"main.ts"})," или в плагине)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { RouterItemRef } from '@dxtmisha/functional'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [...]
})

// Установка роутера для глобального использования
RouterItemRef.set(router)
`})}),`
`,e.jsx(n.h2,{id:"управление-экземпляром",children:"Управление экземпляром"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"static get(): Router | undefined"})," — Возвращает текущий установленный экземпляр роутера."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"static set(router: Router): void"})," — Устанавливает экземпляр роутера."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"static setOneTime(router: Router): void"})," — Устанавливает экземпляр роутера только в том случае, если он еще не был установлен. Полезно для предотвращения случайной перезаписи в плагинах."]}),`
`]}),`
`,e.jsx(n.h2,{id:"навигация-и-ссылки",children:"Навигация и Ссылки"}),`
`,e.jsx(n.p,{children:"Группа методов для управления историей переходов и генерации URL."}),`
`,e.jsx(n.h3,{id:"push",children:e.jsx(n.code,{children:"push"})}),`
`,e.jsxs(n.p,{children:["Выполняет программный переход на указанный маршрут. Является безопасной оберткой над ",e.jsx(n.code,{children:"router.push"}),". Если роутер еще не установлен, действие будет проигнорировано."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"to: string | RouteLocationRaw"})," — целевой путь или объект местоположения маршрута."]}),`
`]}),`
`,e.jsx(n.h3,{id:"getlink",children:e.jsx(n.code,{children:"getLink"})}),`
`,e.jsxs(n.p,{children:["Генерирует и возвращает строковый URL (href) для маршрута на основе его имени и параметров. Использует метод ",e.jsx(n.code,{children:"router.resolve"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — уникальное имя маршрута."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"params?: any"})," — динамические параметры пути (params)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"query?: any"})," — параметры запроса (query string)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string | undefined"})," — готовый URL или ",e.jsx(n.code,{children:"undefined"}),", если роутер не инициализирован."]}),`
`,e.jsx(n.h3,{id:"gethref",children:e.jsx(n.code,{children:"getHref"})}),`
`,e.jsxs(n.p,{children:["Возвращает стандартизированный объект свойств ссылки. Удобно для передачи в компоненты, ожидающие ",e.jsx(n.code,{children:"ConstrHrefProps"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name?: string"})," — имя маршрута."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"params?: any"})," — параметры пути."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"query?: any"})," — параметры запроса."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ConstrHrefProps"})," — объект ",e.jsx(n.code,{children:"{ href: string }"})," или ",e.jsx(n.code,{children:"{}"})," (пустой объект), если имя не передано."]}),`
`,e.jsx(n.h3,{id:"rawtohref",children:e.jsx(n.code,{children:"rawToHref"})}),`
`,e.jsxs(n.p,{children:["Специальный метод для нормализации. Преобразует объект местоположения (если в нем указано ",e.jsx(n.code,{children:"name"}),") в объект свойств ссылки."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"to?: string | RouteLocationRaw"})," — необработанные данные маршрута."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ConstrHrefProps"})," — результат работы ",e.jsx(n.code,{children:"getHref"})," или ",e.jsx(n.code,{children:"{}"}),"."]}),`
`,e.jsx(n.h2,{id:"примеры",children:"Примеры"}),`
`,e.jsx(n.h3,{id:"генерация-ссылки-в-коде",children:"Генерация ссылки в коде"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { RouterItemRef } from '@dxtmisha/functional'

// Получение URL для страницы пользователя
const userUrl = RouterItemRef.getLink('user-profile', { id: 123 })
// Результат: '/user/123' (в зависимости от настроек роутера)

// Использование для свойств компонентов
const linkProps = RouterItemRef.getHref('catalog', undefined, { category: 'electronics' })
// Результат: { href: '/catalog?category=electronics' }
`})}),`
`,e.jsx(n.h3,{id:"программный-переход",children:"Программный переход"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { RouterItemRef } from '@dxtmisha/functional'

const logout = () => {
    // Выполняем переход на главную страницу после выхода
    RouterItemRef.push({ name: 'home' })
}
`})})]})}function j(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{j as default};
