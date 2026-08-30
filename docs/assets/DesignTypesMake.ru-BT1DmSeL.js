import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignTypesMake - Движок генерации и кэширования типов для ИИ`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designtypesmake`,children:`Класс DesignTypesMake`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DesignTypesMake`}),` — это высокопроизводительный движок для сканирования скомпилированных файлов деклараций TypeScript (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`), отслеживания их изменений с помощью MD5-хешей, очистки от лишнего шаблонного кода и генерации единого файла типов `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`MD5-кэширование файлов`}),` — вычисляет контрольные суммы файлов деклараций и кэширует результаты обработки ИИ в папке `,(0,c.jsx)(t.code,{children:`ai-types-list/`}),`, предотвращая повторные дорогостоящие вызовы API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальная очистка деклараций`}),` — удаляет внутренние импорты, циклические ссылки, аннотации JSDoc, не относящиеся к публичному API, и нормализует синтаксис.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сквозная поддержка JS-кода`}),` — сканирует и объединяет связанные файлы JavaScript для предоставления глубокого контекста логики работы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Консолидация в один файл`}),` — объединяет десятки файлов деклараций в компактный файл `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` с оглавлением и удобной навигацией для ИИ.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ai: DesignTypesAi`}),` — экземпляр клиента ИИ для сжатия и оптимизации деклараций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir: string`}),` — путь к директории с декларациями типов (по умолчанию `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getTypesTemporaryDirectory()`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirDist: string`}),` — путь к директории скомпилированных JavaScript-файлов (по умолчанию `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getDistDir()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi, DesignTypesMake } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const makeTypes = new DesignTypesMake(ai)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`getfullcontent-string`,children:(0,c.jsx)(t.code,{children:`getFullContent(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает объединенный и оптимизированный контент всех деклараций типов проекта.`}),`
`,(0,c.jsx)(t.h3,{id:`getfulljscontent-string`,children:(0,c.jsx)(t.code,{children:`getFullJsContent(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает объединенный контент всех отфильтрованных JavaScript-файлов проекта.`}),`
`,(0,c.jsx)(t.h3,{id:`make-promisethis`,children:(0,c.jsx)(t.code,{children:`make(): Promise<this>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Выполняет полный цикл генерации, включая проверку кэша, обработку через ИИ и сохранение `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`makesave-this`,children:(0,c.jsx)(t.code,{children:`makeSave(): this`})}),`
`,(0,c.jsxs)(t.p,{children:[`Генерирует полный контент типов и сохраняет его в файл `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi, DesignTypesMake } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const makeTypes = new DesignTypesMake(ai)

await makeTypes.make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};