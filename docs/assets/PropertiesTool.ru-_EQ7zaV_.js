import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesTool - Утилиты свойств`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestool`,children:`Класс PropertiesTool`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesTool`}),` предоставляет набор статических утилит для работы с именованием компонентов, путями и чтением файлов конфигурации дизайн-системы. Он служит вспомогательным инструментом для других классов, обеспечивая единообразие в формировании имен и доступ к файловым ресурсам.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандартизация имен`}),` — формирует единообразные названия компонентов и CSS-классов (camelCase).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Работа с конструктором`}),` — содержит логику для идентификации и загрузки базовых свойств конструктора.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с кэшем`}),` — обеспечивает эффективное чтение файлов свойств через систему кэширования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкая конфигурация`}),` — получает список активных дизайнов напрямую из настроек окружения.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс предоставляет только статические методы, поэтому создание экземпляра через `,(0,c.jsx)(n.code,{children:`new`}),` не требуется.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesTool } from '@dxtmisha/scripts'

// Прямой вызов статических методов
const isConst = PropertiesTool.isConstructor('basic')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`isconstructor`,children:(0,c.jsx)(n.code,{children:`isConstructor`})}),`
`,(0,c.jsx)(n.p,{children:`Проверяет, соответствует ли переданное имя дизайна ключу конструктора системы. Это необходимо для отделения базовых мета-свойств от свойств конкретных тем оформления.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`design: string`}),` — проверяемое название дизайна.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если дизайн является конструктором.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const result = PropertiesTool.isConstructor('dxt.constructor');
// Результат: true
`})}),`
`,(0,c.jsx)(n.h3,{id:`getdesigns`,children:(0,c.jsx)(n.code,{children:`getDesigns`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает список идентификаторов дизайнов, доступных в текущей среде. Список включает как системный конструктор, так и дизайн, указанный в основных настройках проекта.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string[]`}),` — массив названий дизайнов.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const list = PropertiesTool.getDesigns();
// Результат: ['dxt.constructor', 'my-project-design']
`})}),`
`,(0,c.jsx)(n.h3,{id:`getcomponentname`,children:(0,c.jsx)(n.code,{children:`getComponentName`})}),`
`,(0,c.jsxs)(n.p,{children:[`Формирует нормализованную строку имени компонента, объединяя название дизайна и имя самого компонента. Имя компонента автоматически преобразуется в `,(0,c.jsx)(n.code,{children:`camelCase`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`design: string`}),` — название дизайна.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component: string`}),` (опционально) — название компонента.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — сформированное имя (например, `,(0,c.jsx)(n.code,{children:`designName-componentName`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const name = PropertiesTool.getComponentName('basic', 'button-primary');
// Результат: "basic-buttonPrimary"
`})}),`
`,(0,c.jsx)(n.h3,{id:`getclassname`,children:(0,c.jsx)(n.code,{children:`getClassName`})}),`
`,(0,c.jsxs)(n.p,{children:[`Аналогичен `,(0,c.jsx)(n.code,{children:`getComponentName`}),`, но возвращает строку в формате CSS-селектора класса (с точкой в начале).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`design: string`}),` — название дизайна.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component: string`}),` (опционально) — название компонента.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — строка CSS-класса.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const selector = PropertiesTool.getClassName('basic', 'button');
// Результат: ".basic-button"
`})}),`
`,(0,c.jsx)(n.h3,{id:`readfile`,children:(0,c.jsx)(n.code,{children:`readFile`})}),`
`,(0,c.jsxs)(n.p,{children:[`Считывает и возвращает список свойств (tokens) из файловой системы. Для конструктора возвращает копию базовых свойств из `,(0,c.jsx)(n.code,{children:`properties.json`}),`, для остальных — считывает файл свойств через системный кэш.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`design: string`}),` — название дизайна.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string[] | undefined`}),` — путь к директории с файлом.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`PropertyList | undefined`}),` — объект со свойствами или `,(0,c.jsx)(n.code,{children:`undefined`}),`, если путь не указан.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const data = PropertiesTool.readFile('basic', ['src', 'theme', 'settings', 'button']);
`})}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`механизм-разрешения-имен`,children:`Механизм разрешения имен`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Трансформация регистра`}),`: Все входные имена компонентов перед объединением проходят через `,(0,c.jsx)(n.code,{children:`toCamelCase`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Префиксация`}),`: Публичные методы всегда добавляют имя дизайна в начало, что предотвращает коллизии стилей при использовании нескольких тем одновременно.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасное чтение`}),`: При чтении файлов через `,(0,c.jsx)(n.code,{children:`readFile`}),` для конструктора используется глубокое копирование (`,(0,c.jsx)(n.code,{children:`copyObject`}),`), что исключает случайную мутацию глобальных базовых настроек в процессе работы других инструментов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`формирование-css-класса-для-динамического-компонента`,children:`Формирование CSS-класса для динамического компонента`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesTool } from '@dxtmisha/scripts'

const design = 'basic'
const component = 'input-field'

const className = PropertiesTool.getClassName(design, component)
// Результат: .basic-inputField
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};