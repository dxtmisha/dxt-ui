import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/DesignStructure - Движок разрешения данных компонента`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designstructure`,children:`Класс DesignStructure`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignStructure`}),` является фундаментальным разрешителем данных для компонентов дизайн-системы. Он координирует чтение, кэширование и обработку структурированных данных компонента, включая свойства, иерархии CSS-классов и токены стилей. Он выступает в качестве абстрактного слоя между сырыми файлами конфигурации и движками трансформации шаблонов.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Унифицированный доступ к данным`}),` — предоставляет централизованный API для получения всех метаданных, связанных с конкретным компонентом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеллектуальное кэширование`}),` — использует `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` для предотвращения избыточных операций с файловой системой и ускорения обработки нескольких компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Маппинг подклассов`}),` — разрешает сложные иерархии CSS-классов для рекурсивных структур компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Предоставление токенов стилей`}),` — извлекает и форматирует токены дизайна в формат, готовый для генерации SCSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Оркестрация соглашений об именовании`}),` — стандартизирует именование компонентов, дизайнов и файлов во всем процессе сборки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Для инициализации разрешителя структуры укажите идентификатор компонента. Класс автоматически свяжет его с текущей конфигурацией дизайна проекта.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component?: string`}),` — идентификатор компонента (например, `,(0,c.jsx)(n.code,{children:`'button'`}),`, `,(0,c.jsx)(n.code,{children:`'list'`}),`). По умолчанию: `,(0,c.jsx)(n.code,{children:`'component'`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignStructure } from '@dxtmisha/scripts'

const structure = new DesignStructure('button')
const properties = structure.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`получение-данных`,children:`Получение данных`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): DesignStructureList`}),` — возвращает полный список свойств и метаданных компонента с использованием кэширования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getClasses(): DesignStructureClassesList`}),` — разрешает иерархию CSS-классов компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStyles(): string[]`}),` — возвращает отформатированные токены стилей, полученные из структуры компонента.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`именование-и-идентификация`,children:`Именование и идентификация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDesign(): string`}),` — возвращает идентификатор текущей дизайн-системы (например, `,(0,c.jsx)(n.code,{children:`'misha'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDesignFirst(): string`}),` — возвращает идентификатор дизайна с заглавной буквы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getComponentName(): string`}),` — возвращает исходное имя компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getComponentNameFirst(): string`}),` — возвращает имя компонента с заглавной буквы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFullComponentName(): string`}),` — объединяет названия дизайна и компонента (например, `,(0,c.jsx)(n.code,{children:`'MishaButton'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFileName(): string`}),` — возвращает стандартизированное имя файла для реализации компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPathName(): string`}),` — возвращает уникальный идентификатор для ключей кэша и системных путей.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`конвейер-разрешения-resolution-pipeline`,children:`Конвейер разрешения (Resolution Pipeline)`}),`
`,(0,c.jsxs)(n.p,{children:[`При запросе данных (например, через `,(0,c.jsx)(n.code,{children:`get()`}),` или `,(0,c.jsx)(n.code,{children:`getClasses()`}),`) класс запускает модульный процесс разрешения:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Проверка кэша`}),`: сначала проверяется, существуют ли уже обработанные данные в `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` под ключом, сгенерированным `,(0,c.jsx)(n.code,{children:`getPathName()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Модульное делегирование`}),`: если данные в кэше отсутствуют, выполнение «тяжелой» работы делегируется специализированным классам «Read»:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`DesignStructureRead`}),`: управляет извлечением свойств и их значений.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`DesignStructureClasses`}),`: управляет построением деревьев классов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`DesignStructureStyles`}),`: преобразует токены в строки стилей.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сохранение`}),`: разрешенные данные сохраняются обратно в кэш для повышения производительности при последующих вызовах в течение того же цикла сборки.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`интеграция-с-движками-шаблонов`,children:`Интеграция с движками шаблонов`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignStructure`}),` служит «источником истины» для таких классов, как `,(0,c.jsx)(n.code,{children:`DesignReplace`}),`. Стандартизируя процесс разрешения имен и путей, он гарантирует, что каждый сгенерированный файл (Vue, TS, SCSS) использует согласованные идентификаторы и поддерживает корректные ссылки по относительным путям в рабочем пространстве.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};