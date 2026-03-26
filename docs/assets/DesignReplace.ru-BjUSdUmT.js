import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/DesignReplace - Движок трансформации шаблонов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designreplace`,children:`Класс DesignReplace`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignReplace`}),` — это основное ядро для преобразования необработанных шаблонов файлов в готовый к использованию исходный код проекта. Он использует специализированную систему меток для идентификации участков текста, которые должны быть динамически заменены именами компонентов, определениями свойств, типами или логикой стилизации, полученными из `,(0,c.jsx)(n.code,{children:`DesignStructure`}),` компонента.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеллектуальное разрешение меток`}),` — идентифицирует и заменяет блоки текста, ограниченные специфическими комментариями (например, `,(0,c.jsx)(n.code,{children:`// :type`}),` или `,(0,c.jsx)(n.code,{children:`<!-- :props -->`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Контекстное именование`}),` — автоматически преобразует универсальные плейсхолдеры, такие как `,(0,c.jsx)(n.code,{children:`[project]`}),`, `,(0,c.jsx)(n.code,{children:`[design]`}),` и `,(0,c.jsx)(n.code,{children:`[component]`}),`, на основе конфигурации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Внедрение типов`}),` — генерирует сложные объединения типов TypeScript и интерфейсы непосредственно из метаданных свойств.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Маппинг значений по умолчанию`}),` — разрешает и внедряет значения по умолчанию для свойств в объектные литералы или аргументы конструктора.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Условная генерация классов`}),` — создает оптимизированные объекты привязки классов Vue/TS и маппинги селекторов CSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Нормализация путей`}),` — автоматически разрешает относительные пути импорта в зависимости от расположения целевого файла в дереве проекта.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Для инициализации движка замены передайте структуру данных компонента, идентификатор целевой метки и строку шаблона.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`structure: DesignStructure`}),` — источник истины для метаданных компонента и структурных правил.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mark: string`}),` — основная метка, используемая в шаблонах для идентификации компонентов (например, `,(0,c.jsx)(n.code,{children:`'button'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`sample: string`}),` — текстовое содержимое шаблона для модификации.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignReplace } from '@dxtmisha/scripts'

const engine = new DesignReplace(structure, 'button', templateContent)
engine.replaceName().replaceType()
const output = engine.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): string`}),` — возвращает финальную версию шаблона после всех преобразований.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getNameFile(name: string): string`}),` — обрабатывает имя файла или строку для замены плейсхолдеров уровня проекта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceName(): this`}),` — заменяет основные метки имени компонента во всем шаблоне.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replacePath(): this`}),` — исправляет относительные пути (`,(0,c.jsx)(n.code,{children:`../../../`}),`), чтобы они указывали на правильное корневое расположение проекта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceMark(name: string, data: string[], end = ''): this`}),` — выполняет блочную замену для конкретной метки, внедряя массив строк.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceOnce(name?: string, removeReplacement?: boolean | Function): this`}),` — обрабатывает одноразовые маркеры замены (`,(0,c.jsx)(n.code,{children:`.once`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`автоматизация-свойств-и-типов`,children:`Автоматизация свойств и типов`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceType(constructor?: string): this`}),` — генерирует и внедряет типы TypeScript для всех свойств компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceDefault(): this`}),` — внедряет значения по умолчанию для свойств в шаблон.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceProps(): this`}),` — генерирует объекты определения свойств в стиле Vue.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replacePropsValues(): this`}),` — создает массивы допустимых значений для свойств (enums/unions).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`стилизация-и-классы`,children:`Стилизация и классы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceClasses(template?: Function, end = ''): this`}),` — генерирует список доступных CSS-классов на основе структуры.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceClassesValues(): this`}),` — создает логику динамической привязки классов для файлов реализации логики.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceStylesValues(): this`}),` — сопоставляет свойства компонента с пользовательскими переменными CSS (CSS Variables).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceConstructorClasses(): this`}),` — специализированный генератор классов для конструкторов компонентов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`система-меток`,children:`Система меток`}),`
`,(0,c.jsx)(n.p,{children:`Движок сканирует специфические паттерны комментариев, чтобы определить, куда внедрять код. Поддерживаются несколько стилей комментариев:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инлайн логика`}),`: `,(0,c.jsx)(n.code,{children:`// :label data`}),` или `,(0,c.jsx)(n.code,{children:`/* :label */ content /* :label.end */`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Комментарии шаблонов`}),`: `,(0,c.jsx)(n.code,{children:`<!-- :label --> content <!-- :label.end -->`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Специфичность свойств`}),`: `,(0,c.jsx)(n.code,{children:`:label.propertyName.none`}),` (используется для исключения конкретных свойств из блока).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`поток-трансформации`,children:`Поток трансформации`}),`
`,(0,c.jsxs)(n.p,{children:[`При вызове метода замены, такого как `,(0,c.jsx)(n.code,{children:`replaceType()`}),`, класс:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сканирует`}),`: находит начальный и конечный маркеры для метки `,(0,c.jsx)(n.code,{children:`type`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Обращается к структуре`}),`: итерирует по свойствам в предоставленной `,(0,c.jsx)(n.code,{children:`DesignStructure`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Разрешает логику`}),`: определяет правильный синтаксис TypeScript для каждого свойства на основе типа его значения (boolean, string или union).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Внедряет`}),`: заменяет содержимое между маркерами новым сгенерированным кодом, сохраняя исходные отступы.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};