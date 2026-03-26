import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Classes/RouterItemRef - Управление Vue Router`}),`
`,(0,c.jsx)(n.h1,{id:`класс-routeritemref`,children:`Класс RouterItemRef`}),`
`,(0,c.jsx)(n.p,{children:`Статическое ядро для работы с Vue Router в функциональном слое. Обеспечивает единую точку доступа к роутеру, позволяя генерировать ссылки, выполнять переходы и нормализовать пути без прямой зависимости от контекста компонента.`}),`
`,(0,c.jsxs)(n.p,{children:[`Это позволяет использовать возможности роутера в классах и утилитах, где недоступны хуки `,(0,c.jsx)(n.code,{children:`useRouter`}),` или `,(0,c.jsx)(n.code,{children:`useRoute`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальный доступ`}),` — сохранение экземпляра роутера для доступа из любого места приложения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасная генерация`}),` — методы для создания ссылок по именам маршрутов с параметрами.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Нормализация`}),` — преобразование различных форматов путей в стандартные свойства `,(0,c.jsx)(n.code,{children:`href`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`использование-настройка`,children:`Использование (Настройка)`}),`
`,(0,c.jsxs)(n.p,{children:[`Поскольку `,(0,c.jsx)(n.code,{children:`RouterItemRef`}),` является статическим классом, его необходимо инициализировать один раз при создании приложения (обычно в `,(0,c.jsx)(n.code,{children:`main.ts`}),` или в плагине).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { RouterItemRef } from '@dxtmisha/functional'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [...]
})

// Установка роутера для глобального использования
RouterItemRef.set(router)
`})}),`
`,(0,c.jsx)(n.h2,{id:`управление-экземпляром`,children:`Управление экземпляром`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static get(): Router | undefined`}),` — Возвращает текущий установленный экземпляр роутера.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static set(router: Router): void`}),` — Устанавливает экземпляр роутера.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static setOneTime(router: Router): void`}),` — Устанавливает экземпляр роутера только в том случае, если он еще не был установлен. Полезно для предотвращения случайной перезаписи в плагинах.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`навигация-и-ссылки`,children:`Навигация и Ссылки`}),`
`,(0,c.jsx)(n.p,{children:`Группа методов для управления историей переходов и генерации URL.`}),`
`,(0,c.jsx)(n.h3,{id:`push`,children:(0,c.jsx)(n.code,{children:`push`})}),`
`,(0,c.jsxs)(n.p,{children:[`Выполняет программный переход на указанный маршрут. Является безопасной оберткой над `,(0,c.jsx)(n.code,{children:`router.push`}),`. Если роутер еще не установлен, действие будет проигнорировано.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`to: string | RouteLocationRaw`}),` — целевой путь или объект местоположения маршрута.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`getlink`,children:(0,c.jsx)(n.code,{children:`getLink`})}),`
`,(0,c.jsxs)(n.p,{children:[`Генерирует и возвращает строковый URL (href) для маршрута на основе его имени и параметров. Использует метод `,(0,c.jsx)(n.code,{children:`router.resolve`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — уникальное имя маршрута.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`params?: any`}),` — динамические параметры пути (params).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`query?: any`}),` — параметры запроса (query string).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string | undefined`}),` — готовый URL или `,(0,c.jsx)(n.code,{children:`undefined`}),`, если роутер не инициализирован.`]}),`
`,(0,c.jsx)(n.h3,{id:`gethref`,children:(0,c.jsx)(n.code,{children:`getHref`})}),`
`,(0,c.jsxs)(n.p,{children:[`Возвращает стандартизированный объект свойств ссылки. Удобно для передачи в компоненты, ожидающие `,(0,c.jsx)(n.code,{children:`ConstrHrefProps`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name?: string`}),` — имя маршрута.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`params?: any`}),` — параметры пути.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`query?: any`}),` — параметры запроса.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ConstrHrefProps`}),` — объект `,(0,c.jsx)(n.code,{children:`{ href: string }`}),` или `,(0,c.jsx)(n.code,{children:`{}`}),` (пустой объект), если имя не передано.`]}),`
`,(0,c.jsx)(n.h3,{id:`rawtohref`,children:(0,c.jsx)(n.code,{children:`rawToHref`})}),`
`,(0,c.jsxs)(n.p,{children:[`Специальный метод для нормализации. Преобразует объект местоположения (если в нем указано `,(0,c.jsx)(n.code,{children:`name`}),`) в объект свойств ссылки.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`to?: string | RouteLocationRaw`}),` — необработанные данные маршрута.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ConstrHrefProps`}),` — результат работы `,(0,c.jsx)(n.code,{children:`getHref`}),` или `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`генерация-ссылки-в-коде`,children:`Генерация ссылки в коде`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { RouterItemRef } from '@dxtmisha/functional'

// Получение URL для страницы пользователя
const userUrl = RouterItemRef.getLink('user-profile', { id: 123 })
// Результат: '/user/123' (в зависимости от настроек роутера)

// Использование для свойств компонентов
const linkProps = RouterItemRef.getHref('catalog', undefined, { category: 'electronics' })
// Результат: { href: '/catalog?category=electronics' }
`})}),`
`,(0,c.jsx)(n.h3,{id:`программный-переход`,children:`Программный переход`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { RouterItemRef } from '@dxtmisha/functional'

const logout = () => {
    // Выполняем переход на главную страницу после выхода
    RouterItemRef.push({ name: 'home' })
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};