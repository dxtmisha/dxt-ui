import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/functional-basic/Classes/DataStorage - Обёртка Local и Session Storage"}),`
`,n.jsx(e.h1,{id:"класс-datastorage",children:"Класс DataStorage"}),`
`,n.jsxs(e.p,{children:["Универсальный класс для взаимодействия с ",n.jsx(e.code,{children:"localStorage"})," и ",n.jsx(e.code,{children:"sessionStorage"})," браузера. Включает в себя автоматическое создание префиксов, ограничение срока действия кэша (возраст), кэширование в памяти для активных экземпляров и автоматическую сериализацию JSON."]}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическая сериализация"})," — легко справляется с разбором и преобразованием в JSON-строку при хранении конфигураций и объектов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Хранение с учётом времени"})," — позволяет сохранять объекты с временными метками и учитывать ограничения по возрасту значения во время его извлечения."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление префиксами"})," — поддерживает глобальные и специфичные для каждого экземпляра префиксы, позволяющие изолировать и группировать ключи в рамках ",n.jsx(e.code,{children:"localStorage"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Эффективная память"})," — создает паттерн singleton для идентичных ключей, чтобы избежать одновременного чтения непосредственно с диска."]}),`
`]}),`
`,n.jsx(e.h2,{id:"глобальная-настройка",children:"Глобальная настройка"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setPrefix(newPrefix: string): void"})," (static) — Изменяет глобальный префикс, применяемый ко всем новым экземплярам. Префикс по умолчанию — ",n.jsx(e.code,{children:"ui-storage"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"управление-данными",children:"Управление данными"}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Получает текущую сохранённую структурированную конфигурацию."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"defaultValue?: T | (() => T)"})," — запасное значение, которое будет возвращено, если хранилище пусто."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cache?: number"})," — максимально допустимый возраст (в секундах). Если данные старше, они считаются не существующими."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"T | undefined"})," — сохраненное значение или ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Получение данных с откатом к пустому объекту, если они не найдены
const currentSettings = settings.get({})

// Получение данных, только если они были сохранены в течение последних 60 секунд
const cachedItem = settings.get(undefined, 60)
`})}),`
`,n.jsx(e.h3,{id:"set",children:n.jsx(e.code,{children:"set"})}),`
`,n.jsx(e.p,{children:"Устанавливает или обновляет значение в механизме хранения."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: T | (() => T)"})," — значение для сохранения. Передача ",n.jsx(e.code,{children:"undefined"})," удалит элемент из хранилища."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"T | undefined"})," — сохраненное значение."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`settings.set({ theme: 'dark', notifications: true })
`})}),`
`,n.jsx(e.h2,{id:"дополнительные-методы",children:"Дополнительные методы"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"remove(): this"})," — Активно удаляет соответствующий ключ из среды ",n.jsx(e.code,{children:"localStorage"})," или ",n.jsx(e.code,{children:"sessionStorage"}),", а также немедленно очищает существующее значение в памяти."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"update(): this"})," — Принудительно синхронизирует экземпляр памяти с текущими данными (raw) внутри физических API Storage."]}),`
`]})]})}function j(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};
