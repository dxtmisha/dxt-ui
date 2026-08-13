import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/ErrorCenterInstance - Экземпляр ошибок`}),`
`,(0,c.jsx)(t.h1,{id:`класс-errorcenterinstance`,children:`Класс ErrorCenterInstance`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ErrorCenterInstance`}),` — это основной движок системы ошибок. Он объединяет в себе реестр причин и менеджер обработчиков. Вы можете создавать независимые экземпляры этого класса для разных частей приложения, чтобы изолировать их логику обработки ошибок.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Изолированное хранилище`}),` — ведение локального списка причин ошибок.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальное слияние`}),` — автоматическое дополнение данных ошибки на основе системы приоритетов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Делегирование обработки`}),` — использование `,(0,c.jsx)(t.code,{children:`ErrorCenterHandler`}),` для вызова функций обратного вызова.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chainable API`}),` — поддержка цепочки вызовов для конфигурации.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для создания экземпляра используйте конструктор `,(0,c.jsx)(t.code,{children:`ErrorCenterInstance(causes, handler)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`causes?: ErrorCenterCauseList`}),` — начальный список причин ошибок.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`handler?: ErrorCenterHandler`}),` — экземпляр обработчика (если не указан, создается новый).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ErrorCenterInstance } from '@dxtmisha/functional-basic'

const myErrorCenter = new ErrorCenterInstance([
  { group: 'api', code: '404', label: 'Не найдено' }
])
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`on(cause: ErrorCenterCauseItem): this`}),` — Запускает процесс обработки. Склеивает данные из реестра с входными данными и передает их обработчику.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`проверка`,children:`Проверка`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`has(code: string, group?: string): boolean`}),` — Поиск в локальном реестре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(code: string, group?: string): ErrorCenterCauseItem | undefined`}),` — Получение данных из реестра.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(cause: ErrorCenterCauseItem): this`}),` — Добавление ошибки в локальный реестр.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addList(causes: ErrorCenterCauseList): this`}),` — Пакетное добавление ошибок.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this`}),` — Регистрация реакции на группу.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addHandlerList(handlers: ErrorCenterHandlerList): this`}),` — Пакетная регистрация реакций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setIsConsole(isConsole: ErrorCenterHandlerIsConsole): this`}),` — Устанавливает флаг или функцию фильтрации вывода в консоль.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h4,{id:`errorcentercauseitem`,children:(0,c.jsx)(t.code,{children:`ErrorCenterCauseItem`})}),`
`,(0,c.jsx)(t.p,{children:`Объект, описывающий конкретную ошибку.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group?: ErrorCenterGroup`}),` — группа ошибки (например, 'api').`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string`}),` — уникальный код ошибки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`priority?: number`}),` — уровень приоритета (по умолчанию `,(0,c.jsx)(t.code,{children:`500`}),`). Используется при слиянии данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`label?: string`}),` — заголовок ошибки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`message?: string`}),` — описание ошибки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`details?: any`}),` — дополнительные данные.`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`errorcenterhandlercallback`,children:(0,c.jsx)(t.code,{children:`ErrorCenterHandlerCallback`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`(cause: ErrorCenterCauseItem) => void`}),` — функция обработки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`инициализация-со-словарем`,children:`Инициализация со словарем`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const myEC = new ErrorCenterInstance([
  { group: 'db', code: 'connection_lost', label: 'БД недоступна' }
]);

myEC.addHandler('db', (cause) => alert(cause.label));
myEC.on({ group: 'db', code: 'connection_lost' });
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};