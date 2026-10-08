import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/media/Classes/MediaFiles - Каталог метаданных файлов и проверка путей`}),`
`,(0,c.jsx)(t.h1,{id:`класс-mediafiles`,children:`Класс MediaFiles`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`MediaFiles`}),` — это `,(0,c.jsx)(t.strong,{children:`основной статический класс (Static)`}),`, предоставляющий централизованный поиск по каталогу файлов, сопоставление по MIME-типам, определение нейтральных иконок категорий и валидацию путей/URL. Он служит ключевым поставщиком метаданных для `,(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),`, бесшовно взаимодействуя с `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),` для применения кастомных иконок.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Обширный каталог форматов`}),` — встроенные конфигурации для более чем 85 расширений файлов, категорий и MIME-типов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальный поиск с фолбэком`}),` — находит элементы по коду, расширению или MIME-типу, автоматически возвращая нейтральную иконку при неизвестном формате.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Нейтральные иконки категорий`}),` — быстрый доступ к общим иконкам для целых категорий файлов (например, `,(0,c.jsx)(t.code,{children:`image`}),`, `,(0,c.jsx)(t.code,{children:`video`}),`, `,(0,c.jsx)(t.code,{children:`document`}),`, `,(0,c.jsx)(t.code,{children:`table`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Проверка путей и ссылок`}),` — определяет, является ли переданная строка путем в файловой системе или веб-ссылкой (`,(0,c.jsx)(t.code,{children:`isLink`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с кастомными иконками`}),` — автоматически подставляет пользовательские иконки, зарегистрированные в `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс является статическим и не требует создания экземпляров. Все методы вызываются напрямую через `,(0,c.jsx)(t.code,{children:`MediaFiles`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`проверка-путей`,children:`Проверка путей`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static isLink(path: string): boolean`}),` — проверяет, является ли указанная строка путем к файлу или веб-ссылкой (наличие слешей `,(0,c.jsx)(t.code,{children:`/`}),`, `,(0,c.jsx)(t.code,{children:`\\`}),` или протоколов `,(0,c.jsx)(t.code,{children:`http://`}),`, `,(0,c.jsx)(t.code,{children:`https://`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`поиск-и-реестр`,children:`Поиск и реестр`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get(code: string): MediaFileItem | undefined`}),` — возвращает элемент метаданных файла по расширению или коду, с запасным поиском по MIME-типу или нейтральному элементу по умолчанию, с учетом кастомных иконок.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getByCategory(category: MediaFileCategory | MediaFileCategoryValue | string): MediaFileItem | undefined`}),` — возвращает нейтральный элемент конфигурации файла для заданной категории или кода файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getByMime(mime: string): MediaFileItem | undefined`}),` — возвращает элемент метаданных файла по его MIME-типу с учетом кастомных иконок.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getList(): MediaFileList`}),` — возвращает полный массив всех поддерживаемых элементов конфигураций файлов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getNeutral(): MediaFileItem | undefined`}),` — возвращает стандартный нейтральный элемент файла с примененной кастомной иконкой при ее наличии.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h3,{id:`mediafilecategory`,children:`MediaFileCategory`}),`
`,(0,c.jsxs)(t.p,{children:[`Перечисление поддерживаемых категорий файлов: `,(0,c.jsx)(t.code,{children:`archive`}),`, `,(0,c.jsx)(t.code,{children:`audio`}),`, `,(0,c.jsx)(t.code,{children:`code`}),`, `,(0,c.jsx)(t.code,{children:`config`}),`, `,(0,c.jsx)(t.code,{children:`database`}),`, `,(0,c.jsx)(t.code,{children:`document`}),`, `,(0,c.jsx)(t.code,{children:`executable`}),`, `,(0,c.jsx)(t.code,{children:`folder`}),`, `,(0,c.jsx)(t.code,{children:`font`}),`, `,(0,c.jsx)(t.code,{children:`image`}),`, `,(0,c.jsx)(t.code,{children:`presentation`}),`, `,(0,c.jsx)(t.code,{children:`system`}),`, `,(0,c.jsx)(t.code,{children:`table`}),`, `,(0,c.jsx)(t.code,{children:`text`}),`, `,(0,c.jsx)(t.code,{children:`vector`}),`, `,(0,c.jsx)(t.code,{children:`video`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafilegroup`,children:`MediaFileGroup`}),`
`,(0,c.jsx)(t.p,{children:`Перечисление классификационных групп элементов файлов:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`neutral`}),` — общая нейтральная иконка файла по умолчанию.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category`}),` — общая иконка категории файлов (например, изображение или документ).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`standard`}),` — стандартная иконка конкретного формата или расширения (например, PNG, PDF, ZIP).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafileitem`,children:`MediaFileItem`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string`}),` — уникальный код типа файла или первичное расширение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — понятное пользователю отображаемое название формата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extensions?: string[]`}),` — список поддерживаемых расширений файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime?: string`}),` — связанный MIME-тип.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon?: string`}),` — разрешенная SVG-разметка иконки или URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category?: MediaFileCategoryValue`}),` — категория файла из перечисления.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group?: MediaFileGroupValue`}),` — группа элемента из перечисления.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafilelist`,children:`MediaFileList`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`MediaFileItem[]`}),` — массив всех элементов конфигураций файлов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFiles, MediaFileCategory } from '@dxtmisha/media'

// Проверка, является ли строка путем или ссылкой
MediaFiles.isLink('https://example.com/assets/report.pdf') // true
MediaFiles.isLink('report.pdf') // false

// Поиск конфигурации по расширению или коду
const pdf = MediaFiles.get('pdf')
console.log(pdf?.name) // 'PDF'
console.log(pdf?.category) // 'document'

// Получение нейтральной иконки категории
const imageCategory = MediaFiles.getByCategory(MediaFileCategory.image)
console.log(imageCategory?.name) // 'Image'

// Поиск по MIME-типу
const jsonFile = MediaFiles.getByMime('application/json')
console.log(jsonFile?.code) // 'json'

// Базовая нейтральная иконка
const neutral = MediaFiles.getNeutral()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};