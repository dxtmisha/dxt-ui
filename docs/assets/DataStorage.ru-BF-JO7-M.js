import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/DataStorage - Обёртка Local и Session Storage`}),`
`,(0,c.jsx)(n.h1,{id:`класс-datastorage`,children:`Класс DataStorage`}),`
`,(0,c.jsxs)(n.p,{children:[`Универсальный класс для взаимодействия с `,(0,c.jsx)(n.code,{children:`localStorage`}),` и `,(0,c.jsx)(n.code,{children:`sessionStorage`}),` браузера. Включает в себя автоматическое создание префиксов, ограничение срока действия кэша (возраст), кэширование в памяти для активных экземпляров и автоматическую сериализацию JSON.`]}),`
`,(0,c.jsx)(n.h2,{id:`основные-возможности`,children:`Основные возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая сериализация`}),` — легко справляется с разбором и преобразованием в JSON-строку при хранении конфигураций и объектов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Хранение с учётом времени`}),` — позволяет сохранять объекты с временными метками и учитывать ограничения по возрасту значения во время его извлечения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление префиксами`}),` — поддерживает глобальные и специфичные для каждого экземпляра префиксы, позволяющие изолировать и группировать ключи в рамках `,(0,c.jsx)(n.code,{children:`localStorage`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Эффективная память`}),` — создает паттерн singleton для идентичных ключей, чтобы избежать одновременного чтения непосредственно с диска.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`DataStorage(name, isSession)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — название ключа в хранилище.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSession: boolean = false`}),` — нужно ли использовать `,(0,c.jsx)(n.code,{children:`sessionStorage`}),` (по умолчанию `,(0,c.jsx)(n.code,{children:`localStorage`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DataStorage } from '@dxtmisha/functional'

// 1. Создание экземпляра для localStorage
const settings = new DataStorage('settings')

// 2. Создание экземпляра для sessionStorage
const session = new DataStorage('user_session', true)
`})}),`
`,(0,c.jsx)(n.h2,{id:`глобальная-настройка`,children:`Глобальная настройка`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setPrefix(newPrefix: string): void`}),` (static) — Изменяет глобальный префикс, применяемый ко всем новым экземплярам. Префикс по умолчанию — `,(0,c.jsx)(n.code,{children:`ui-storage`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`управление-данными`,children:`Управление данными`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Получает текущую сохранённую структурированную конфигурацию.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | (() => T)`}),` — запасное значение, которое будет возвращено, если хранилище пусто.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cache?: number`}),` — максимально допустимый возраст (в секундах). Если данные старше, они считаются не существующими.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`}),` — сохраненное значение или `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Получение данных с откатом к пустому объекту, если они не найдены
const currentSettings = settings.get({})

// Получение данных, только если они были сохранены в течение последних 60 секунд
const cachedItem = settings.get(undefined, 60)
`})}),`
`,(0,c.jsx)(n.h3,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает или обновляет значение в механизме хранения.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: T | (() => T)`}),` — значение для сохранения. Передача `,(0,c.jsx)(n.code,{children:`undefined`}),` удалит элемент из хранилища.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`}),` — сохраненное значение.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`settings.set({ theme: 'dark', notifications: true })
`})}),`
`,(0,c.jsx)(n.h2,{id:`дополнительные-методы`,children:`Дополнительные методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(): this`}),` — Активно удаляет соответствующий ключ из среды `,(0,c.jsx)(n.code,{children:`localStorage`}),` или `,(0,c.jsx)(n.code,{children:`sessionStorage`}),`, а также немедленно очищает существующее значение в памяти.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`update(): this`}),` — Принудительно синхронизирует экземпляр памяти с текущими данными (raw) внутри физических API Storage.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};