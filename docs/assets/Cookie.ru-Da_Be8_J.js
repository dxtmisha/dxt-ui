import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/Cookie - Управление Cookie`}),`
`,(0,c.jsx)(t.h1,{id:`класс-cookie`,children:`Класс Cookie`}),`
`,(0,c.jsxs)(t.p,{children:[`Удобная обертка для управления браузерными куки. Автоматически синхронизируется между памятью и API DOM `,(0,c.jsx)(t.code,{children:`document.cookie`}),`, позволяя реактивно устанавливать, извлекать и удалять куки с гарантией согласованных значений по умолчанию.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Включает тесную интеграцию с `,(0,c.jsx)(t.code,{children:`CookieStorage`}),` для низкоуровневого управления и уважает глобальную блокировку через `,(0,c.jsx)(t.code,{children:`CookieBlock`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синхронизация с памятью`}),` — поддерживает запись куки в памяти для предотвращения ненужных обращений к DOM`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Понимание окружения`}),` — определяет, выполняется ли код в среде DOM. В SSR или при тестировании элегантно переходит на хранение только в памяти`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Глобальный контроль блокировки`}),` — безопасно интегрируется с `,(0,c.jsx)(t.code,{children:`CookieBlock`}),`. Если запись куки глобально отключена, класс уважает это и приостанавливает все изменения в DOM`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Логика по умолчанию`}),` — получение значения может лениво инициализировать его стандартом по умолчанию, если оно еще не существует`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`конструктор`,children:`Конструктор`}),`
`,(0,c.jsxs)(t.p,{children:[`Экземпляр `,(0,c.jsx)(t.code,{children:`Cookie`}),` может быть создан для управления конкретным cookie. Если экземпляр с таким именем уже существует, будет возвращен существующий.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — имя cookie для управления`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsx)(t.h4,{id:`get`,children:(0,c.jsx)(t.code,{children:`get`})}),`
`,(0,c.jsx)(t.p,{children:`Читает значение cookie. Если значение не существует и передано значение по умолчанию, оно будет сохранено и возвращено. Поддерживает функции для ленивого вычисления значения по умолчанию.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: T | string | (() => T | string)`}),` — значение по умолчанию или функция, возвращающая значение`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: CookieOptions`}),` — параметры cookie (используются при установке значения по умолчанию)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`T | string | undefined`}),` — значение из куки или заданное по умолчанию`]}),`
`,(0,c.jsx)(t.h4,{id:`set`,children:(0,c.jsx)(t.code,{children:`set`})}),`
`,(0,c.jsxs)(t.p,{children:[`Сохраняет или обновляет значение cookie с указанными параметрами. Поддерживает функции для динамического вычисления значения. Если активна блокировка через `,(0,c.jsx)(t.code,{children:`CookieBlock`}),`, значение сохраняется только в памяти.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: T | string | (() => T | string)`}),` — значение для хранения или функция, возвращающая значение`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: CookieOptions`}),` — параметры cookie (время жизни, SameSite, дополнительные аргументы)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h4,{id:`remove`,children:(0,c.jsx)(t.code,{children:`remove`})}),`
`,(0,c.jsxs)(t.p,{children:[`Удаляет cookie, устанавливая пустое значение и Max-Age в `,(0,c.jsx)(t.code,{children:`-1`}),`, что заставляет браузер немедленно удалить запись.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h3,{id:`статические-методы`,children:`Статические методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getInstance<T>(name: string): Cookie<T>`}),` — Возвращает существующий экземпляр или создает новый по имени`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`вспомогательные`,children:`Вспомогательные`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`CookieStorage.update()`}),` — Обновляет данные из `,(0,c.jsx)(t.code,{children:`document.cookie`})]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h3,{id:`cookieoptions`,children:(0,c.jsx)(t.code,{children:`CookieOptions`})}),`
`,(0,c.jsx)(t.p,{children:`Объект конфигурации для параметров cookie:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`age?: number`}),` — время жизни в секундах (атрибут Max-Age). По умолчанию: 7 дней (604800 сек)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sameSite?: 'strict' | 'lax'`}),` — политика SameSite. По умолчанию: `,(0,c.jsx)(t.code,{children:`'strict'`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`arguments?: string[]`}),` — дополнительные директивы для строки cookie`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`базовое-использование`,children:`Базовое использование`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { Cookie } from '@dxtmisha/functional'

// Создание экземпляра для управления cookie 'theme'
const themeCookie = new Cookie('theme')

// Чтение с дефолтным значением
const currentTheme = themeCookie.get('dark')

// Установка значения
themeCookie.set('light')

// Установка с параметрами
themeCookie.set('dark', {
  age: 60 * 60 * 24 * 30, // 30 дней
  sameSite: 'lax'
})

// Удаление
themeCookie.remove()
`})}),`
`,(0,c.jsx)(t.h3,{id:`использование-getinstance`,children:`Использование getInstance`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { Cookie } from '@dxtmisha/functional'

// Получение или создание экземпляра
const cookie = Cookie.getInstance<string>('user')

// Все вызовы getInstance с одним именем возвращают один и тот же экземпляр
const sameCookie = Cookie.getInstance<string>('user')

console.log(cookie === sameCookie) // true
`})}),`
`,(0,c.jsx)(t.h3,{id:`интеграция-с-cookieblock`,children:`Интеграция с CookieBlock`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { Cookie, CookieBlock } from '@dxtmisha/functional'

// Блокировка всех операций записи
CookieBlock.set(true)

const cookie = new Cookie('blocked')

// Значение сохраняется в памяти, но не в DOM
cookie.set('value')

// Разблокировка
CookieBlock.set(false)

// Теперь запись работает нормально
cookie.set('newValue')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};