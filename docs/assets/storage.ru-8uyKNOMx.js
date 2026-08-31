import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/2. Хранение данных`}),`
`,(0,c.jsx)(t.h1,{id:`хранение-данных`,children:`Хранение данных`}),`
`,(0,c.jsx)(t.p,{children:`Библиотека предоставляет набор инструментов для долговременного хранения данных, включая работу с LocalStorage, SessionStorage, Cookie и управление Хэшем URL.`}),`
`,(0,c.jsx)(t.h2,{id:`локальное-и-сессионное-хранилище-datastorage`,children:`Локальное и сессионное хранилище (DataStorage)`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DataStorage`}),` упрощает работу с хранилищами браузера, обеспечивая автоматическую сериализацию объектов в JSON, управление глобальными префиксами через `,(0,c.jsx)(t.code,{children:`setPrefix`}),` (по умолчанию `,(0,c.jsx)(t.code,{children:`ui-storage`}),`) и механизм контроля TTL. Он гарантирует синхронизацию данных в рамках приложения за счет возврата единого инстанса для каждого ключа и корректно обрабатывает отсутствие DOM в SSR-окружениях.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { DataStorage } from '@dxtmisha/functional-basic'

// Установка глобального префикса (необязательно)
DataStorage.setPrefix('my-project')

// 1. Инициализация (по умолчанию localStorage)
const storage = new DataStorage('user_settings')

// 2. Сохранение данных (автоматически переводится в JSON)
storage.set({ theme: 'dark', language: 'ru' })

// 3. Получение данных со значением по умолчанию
const settings = storage.get({ theme: 'light' })
`})}),`
`,(0,c.jsx)(t.h3,{id:`сессионное-хранилище`,children:`Сессионное хранилище`}),`
`,(0,c.jsxs)(t.p,{children:[`Для использования `,(0,c.jsx)(t.code,{children:`sessionStorage`}),` (данные очищаются при закрытии вкладки) передайте `,(0,c.jsx)(t.code,{children:`true`}),` вторым аргументом в конструктор:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const session = new DataStorage('temp_data', true)
`})}),`
`,(0,c.jsx)(t.h3,{id:`кэширование-ttl`,children:`Кэширование (TTL)`}),`
`,(0,c.jsxs)(t.p,{children:[`Вы можете ограничить актуальность данных, указав время жизни кэша (в секундах) при вызове `,(0,c.jsx)(t.code,{children:`get`}),`. Это позволяет автоматически считать данные устаревшими без их явного удаления.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// Получить данные, только если они были сохранены не более часа назад (3600 сек)
const recentData = storage.get(undefined, 3600)
`})}),`
`,(0,c.jsx)(t.h2,{id:`cookie-cookie`,children:`Cookie (Cookie)`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`Cookie`}),` предоставляет удобный интерфейс для управления куками, скрывая сложности работы со строкой `,(0,c.jsx)(t.code,{children:`document.cookie`}),`. Он автоматически считывает текущие данные браузера при инициализации, поддерживает настройки безопасности `,(0,c.jsx)(t.code,{children:`SameSite`}),` и позволяет корректно удалять записи через метод `,(0,c.jsx)(t.code,{children:`remove()`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Cookie } from '@dxtmisha/functional-basic'

const myCookie = new Cookie('auth_token')

// Установка куки с дополнительными параметрами
myCookie.set('secure_value', { 
  age: 3600 * 24, // 1 день
  sameSite: 'lax'
})

// Получение значения
const token = myCookie.get()
`})}),`
`,(0,c.jsx)(t.h2,{id:`url-хэш-hash`,children:`URL Хэш (Hash)`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`Hash`}),` превращает URL-адрес в реактивное хранилище состояния (`,(0,c.jsx)(t.code,{children:`#key:value;`}),`), что идеально подходит для сохранения фильтров или открытых вкладок. Данные автоматически синхронизируются с внутренним объектом `,(0,c.jsx)(t.code,{children:`Hash`}),`, позволяя мгновенно обновлять интерфейс при изменениях в строке браузера без перезагрузки страницы.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Hash } from '@dxtmisha/functional-basic'

// 1. Установка значений: URL изменится на ...#tab:profile;filter:active
Hash.set('tab', 'profile')
Hash.set('filter', 'active')

// 2. Получение значения (с необязательным значением по умолчанию)
const currentTab = Hash.get('tab', 'home')
`})}),`
`,(0,c.jsx)(t.h3,{id:`отслеживание-изменений`,children:`Отслеживание изменений`}),`
`,(0,c.jsxs)(t.p,{children:[`Метод `,(0,c.jsx)(t.code,{children:`addWatch`}),` позволяет подписаться на изменение конкретных параметров в URL. Это удобно для выполнения действий при смене вкладок или применении фильтров пользователем.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// 1. Реактивное отслеживание
const onTabChange = (newTab) => {
  console.log('Пользователь переключился на:', newTab)
}

Hash.addWatch('tab', onTabChange)

// 2. Удаление слушателя при необходимости
// Hash.removeWatch('tab', onTabChange)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};