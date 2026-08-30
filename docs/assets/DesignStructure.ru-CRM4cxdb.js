import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignStructure - Движок разрешения данных компонента`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designstructure`,children:`Класс DesignStructure`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DesignStructure`}),` является фундаментальным разрешителем данных для компонентов дизайн-системы. Он координирует чтение, кэширование и обработку структурированных данных компонента, включая свойства, иерархии CSS-классов и токены стилей. Он выступает в качестве абстрактного слоя между сырыми файлами конфигурации и движками трансформации шаблонов.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Унифицированный доступ к данным`}),` — предоставляет централизованный API для получения всех метаданных, связанных с конкретным компонентом.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальное кэширование`}),` — использует `,(0,c.jsx)(t.code,{children:`PropertiesCache`}),` для предотвращения избыточных операций с файловой системой и ускорения обработки нескольких компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Маппинг подклассов`}),` — разрешает сложные иерархии CSS-классов для рекурсивных структур компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Предоставление токенов стилей`}),` — извлекает и форматирует токены дизайна в формат, готовый для генерации SCSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Оркестрация соглашений об именовании`}),` — стандартизирует именование компонентов, дизайнов и файлов во всем процессе сборки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:`Для инициализации разрешителя структуры укажите идентификатор компонента. Класс автоматически свяжет его с текущей конфигурацией дизайна проекта.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`component?: string`}),` — идентификатор компонента (например, `,(0,c.jsx)(t.code,{children:`'button'`}),`, `,(0,c.jsx)(t.code,{children:`'list'`}),`). По умолчанию: `,(0,c.jsx)(t.code,{children:`'component'`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignStructure } from '@dxtmisha/scripts'

const structure = new DesignStructure('button')
const properties = structure.get()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`получение-данных`,children:`Получение данных`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): DesignStructureList`}),` — возвращает полный список свойств и метаданных компонента с использованием кэширования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getClasses(): DesignStructureClassesList`}),` — разрешает иерархию CSS-классов компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStyles(): string[]`}),` — возвращает отформатированные токены стилей, полученные из структуры компонента.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`именование-и-идентификация`,children:`Именование и идентификация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDesign(): string`}),` — возвращает идентификатор текущей дизайн-системы (например, `,(0,c.jsx)(t.code,{children:`'misha'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDesignFirst(): string`}),` — возвращает идентификатор дизайна с заглавной буквы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComponentName(): string`}),` — возвращает исходное имя компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComponentNameFirst(): string`}),` — возвращает имя компонента с заглавной буквы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFullComponentName(): string`}),` — объединяет названия дизайна и компонента (например, `,(0,c.jsx)(t.code,{children:`'MishaButton'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFileName(): string`}),` — возвращает стандартизированное имя файла для реализации компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPathName(): string`}),` — возвращает уникальный идентификатор для ключей кэша и системных путей.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`конвейер-разрешения-resolution-pipeline`,children:`Конвейер разрешения (Resolution Pipeline)`}),`
`,(0,c.jsxs)(t.p,{children:[`При запросе данных (например, через `,(0,c.jsx)(t.code,{children:`get()`}),` или `,(0,c.jsx)(t.code,{children:`getClasses()`}),`) класс запускает модульный процесс разрешения:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Проверка кэша`}),`: сначала проверяется, существуют ли уже обработанные данные в `,(0,c.jsx)(t.code,{children:`PropertiesCache`}),` под ключом, сгенерированным `,(0,c.jsx)(t.code,{children:`getPathName()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Модульное делегирование`}),`: если данные в кэше отсутствуют, выполнение «тяжелой» работы делегируется специализированным классам «Read»:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`DesignStructureRead`}),`: управляет извлечением свойств и их значений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`DesignStructureClasses`}),`: управляет построением деревьев классов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`DesignStructureStyles`}),`: преобразует токены в строки стилей.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сохранение`}),`: разрешенные данные сохраняются обратно в кэш для повышения производительности при последующих вызовах в течение того же цикла сборки.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`интеграция-с-движками-шаблонов`,children:`Интеграция с движками шаблонов`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`DesignStructure`}),` служит «источником истины» для таких классов, как `,(0,c.jsx)(t.code,{children:`DesignReplace`}),`. Стандартизируя процесс разрешения имен и путей, он гарантирует, что каждый сгенерированный файл (Vue, TS, SCSS) использует согласованные идентификаторы и поддерживает корректные ссылки по относительным путям в рабочем пространстве.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};