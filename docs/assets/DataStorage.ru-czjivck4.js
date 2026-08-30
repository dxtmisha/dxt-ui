import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/DataStorage - Обёртка Local и Session Storage`}),`
`,(0,c.jsx)(t.h1,{id:`класс-datastorage`,children:`Класс DataStorage`}),`
`,(0,c.jsxs)(t.p,{children:[`Универсальный класс для взаимодействия с `,(0,c.jsx)(t.code,{children:`localStorage`}),` и `,(0,c.jsx)(t.code,{children:`sessionStorage`}),` браузера. Включает в себя автоматическое создание префиксов, ограничение срока действия кэша (возраст), кэширование в памяти для активных экземпляров и автоматическую сериализацию JSON.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`DataStorage`}),` является `,(0,c.jsx)(t.strong,{children:`вспомогательным классом`}),`, предназначенным для низкоуровневого взаимодействия с хранилищем браузера. В большинстве случаев рекомендуется использовать специализированные классы, такие как `,(0,c.jsx)(t.code,{children:`Cookie`}),` или `,(0,c.jsx)(t.code,{children:`Api`}),`, для конкретных задач.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`основные-возможности`,children:`Основные возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическая сериализация`}),` — легко справляется с разбором и преобразованием в JSON-строку при хранении конфигураций и объектов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Хранение с учётом времени`}),` — позволяет сохранять объекты с временными метками и учитывать ограничения по возрасту значения во время его извлечения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление префиксами`}),` — поддерживает глобальные и специфичные для каждого экземпляра префиксы, позволяющие изолировать и группировать ключи в рамках `,(0,c.jsx)(t.code,{children:`localStorage`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Эффективная память`}),` — создает паттерн singleton для идентичных ключей, чтобы избежать одновременного чтения непосредственно с диска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка SSR`}),` — использует изоляцию на уровне запросов при серверном рендеринге, предотвращая утечку данных между параллельными сессиями.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`DataStorage(name, isSession)`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsx)(t.p,{children:`Класс поддерживает следующий дженерик для обеспечения строгой типизации сохраняемого значения:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`T`}),` — Тип данных, хранящихся в хранилище.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — название ключа в хранилище.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSession: boolean = false`}),` — нужно ли использовать `,(0,c.jsx)(t.code,{children:`sessionStorage`}),` (по умолчанию `,(0,c.jsx)(t.code,{children:`localStorage`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DataStorage } from '@dxtmisha/functional-basic'

// 1. Создание экземпляра для localStorage
const settings = new DataStorage('settings')

// 2. Создание экземпляра для sessionStorage
const session = new DataStorage('user_session', true)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`доступ-к-хранилищу`,children:`Доступ к хранилищу`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(defaultValue?: T | (() => T), cache?: number): T | undefined`}),` — Извлекает текущее сохраненное значение. Если указано время кэширования, возвращает `,(0,c.jsx)(t.code,{children:`undefined`}),`, если данные устарели.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(value?: T | (() => T)): T | undefined`}),` — Устанавливает или обновляет значение в хранилище. Передача `,(0,c.jsx)(t.code,{children:`undefined`}),` удаляет элемент.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`remove(): this`}),` — Удаляет соответствующий ключ из хранилища и очищает экземпляр в памяти.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`update(): this`}),` — Принудительно синхронизирует экземпляр памяти с актуальными данными из Storage API.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static setPrefix(newPrefix: string): void`}),` — Изменяет глобальный префикс, применяемый ко всем новым экземплярам. Префикс по умолчанию — `,(0,c.jsx)(t.code,{children:`ui-storage`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ssr-и-гидратация`,children:`SSR и Гидратация`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DataStorage`}),` полностью совместим с серверным рендерингом (SSR). Он использует специальный реестр для изоляции экземпляров между различными HTTP-запросами на сервере.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Чтобы избежать ошибок гидратации (когда HTML от сервера не совпадает с клиентским), рекомендуется вызывать метод `,(0,c.jsx)(t.code,{children:`get()`}),` внутри `,(0,c.jsx)(t.code,{children:`useEffect`}),` или других клиентских хуков. На сервере `,(0,c.jsx)(t.code,{children:`get()`}),` всегда будет возвращать `,(0,c.jsx)(t.code,{children:`undefined`}),` (или `,(0,c.jsx)(t.code,{children:`defaultValue`}),`), так как `,(0,c.jsx)(t.code,{children:`localStorage`}),` недоступен.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`использование-значений-по-умолчанию-и-кэша`,children:`Использование значений по умолчанию и кэша`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const settings = new DataStorage('user_settings')

// Получение данных с откатом к пустому объекту, если они не найдены
const currentSettings = settings.get({})

// Получение данных, только если они были сохранены в течение последних 60 секунд
const cachedItem = settings.get(undefined, 60)
`})}),`
`,(0,c.jsx)(t.h3,{id:`ручная-синхронизация`,children:`Ручная синхронизация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const storage = new DataStorage('shared_data')

// ... данные могли быть изменены в другой вкладке или части приложения
storage.update() // Синхронизируем память с диском
console.log(storage.get())
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};