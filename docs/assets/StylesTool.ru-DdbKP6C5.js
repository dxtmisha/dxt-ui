import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/StylesTool - Утилиты для обработки стилей`}),`
`,(0,c.jsx)(n.h1,{id:`класс-stylestool`,children:`Класс StylesTool`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`StylesTool`}),` представляет собой статическое хранилище утилит высокого уровня, предоставляющее основные функции для конвейера генерации стилей дизайн-системы. Он инкапсулирует логику управления директориями, контроля отступов, создания директив SCSS и преобразований для совместимости с Sass.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Централизуя эти низкоуровневые манипуляции со строками и поиск путей, класс обеспечивает согласованность во всех преобразователях `,(0,c.jsx)(n.code,{children:`StylesTo*`}),` и классах-генераторах.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Контроль отступов`}),` — предоставляет стандартную единицу отступа (2 пробела) и методы для её масштабирования в зависимости от уровня вложенности.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Построители директив`}),` — стандартизирует синтаксис для операторов SCSS `,(0,c.jsx)(n.code,{children:`@use`}),`, `,(0,c.jsx)(n.code,{children:`@import`}),` и `,(0,c.jsx)(n.code,{children:`@forward`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Определение путей`}),` — интегрируется с глобальной конфигурацией для определения места назначения генерируемых файлов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Совместимость с Sass`}),` — выполняет автоматическое преобразование синтаксиса пользовательских CSS-функций в безопасную интерполяцию Sass.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Вертикальное форматирование`}),` — управляет объединением строк с использованием символов CRLF для совместимости между Windows и UNIX.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы-работы-с-файлами-и-директориями`,children:`Методы работы с файлами и директориями`}),`
`,(0,c.jsx)(n.h3,{id:`getdir`,children:(0,c.jsx)(n.code,{children:`getDir`})}),`
`,(0,c.jsx)(n.p,{children:`Определяет структуру целевой директории для сохранения сгенерированных файлов стилей. Объединяет основной каталог стилей со специфическим именем проекта, определенным в конфигурации свойств.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string[]`}),` — Массив, представляющий сегменты пути целевой директории.`]}),`
`,(0,c.jsx)(n.h2,{id:`методы-работы-с-отступами`,children:`Методы работы с отступами`}),`
`,(0,c.jsx)(n.h3,{id:`getspace`,children:(0,c.jsx)(n.code,{children:`getSpace`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает базовую единицу отступа, используемую во всех сгенерированных файлах стилей проекта.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Строка, состоящая из 2 пробелов (`,(0,c.jsx)(n.code,{children:`  `}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`addspace`,children:(0,c.jsx)(n.code,{children:`addSpace`})}),`
`,(0,c.jsx)(n.p,{children:`Генерирует строку отступа на основе указанного уровня вложенности. Используется для выравнивания блоков кода внутри вложенных структур, таких как медиа-запросы или блоки селекторов.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`level: number`}),` — Желаемый уровень вложенности (0 — без отступа, 1 — 2 пробела, 2 — 4 пробела и т.д.).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Результирующая строка отступа.`]}),`
`,(0,c.jsx)(n.h3,{id:`increasespace`,children:(0,c.jsx)(n.code,{children:`increaseSpace`})}),`
`,(0,c.jsx)(n.p,{children:`Добавляет один дополнительный уровень отступа (2 пробела) к существующей строке отступов. Полезно при рекурсивном обходе дерева, где глубина увеличивается постепенно.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`space: string`}),` — Текущая строка отступа, которую необходимо расширить.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Обновленная строка отступа с одним дополнительным уровнем.`]}),`
`,(0,c.jsx)(n.h2,{id:`методы-директив-scss`,children:`Методы директив SCSS`}),`
`,(0,c.jsx)(n.h3,{id:`addimport`,children:(0,c.jsx)(n.code,{children:`addImport`})}),`
`,(0,c.jsxs)(n.p,{children:[`Создает стандартную директиву SCSS `,(0,c.jsx)(n.code,{children:`@import`}),` для заданного пути к файлу.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Путь к импортируемому файлу.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Отформатированная директива (например, `,(0,c.jsx)(n.code,{children:`@import "path/to/file";`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`adduse`,children:(0,c.jsx)(n.code,{children:`addUse`})}),`
`,(0,c.jsxs)(n.p,{children:[`Создает современную директиву SCSS `,(0,c.jsx)(n.code,{children:`@use`}),`, которая является рекомендуемым способом загрузки функций, миксинов и переменных в современном Sass.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Путь к модулю.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Отформатированная директива (например, `,(0,c.jsx)(n.code,{children:`@use "path/to/module";`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`addforward`,children:(0,c.jsx)(n.code,{children:`addForward`})}),`
`,(0,c.jsxs)(n.p,{children:[`Создает директиву SCSS `,(0,c.jsx)(n.code,{children:`@forward`}),`. Обычно используется в индексных файлах для предоставления доступа к членам подмодуля пользователям пакета.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Путь к пересылаемому модулю.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Отформатированная директива (например, `,(0,c.jsx)(n.code,{children:`@forward "path/to/module";`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`addimportproperties`,children:(0,c.jsx)(n.code,{children:`addImportProperties`})}),`
`,(0,c.jsxs)(n.p,{children:[`Генерирует специализированную директиву `,(0,c.jsx)(n.code,{children:`@use`}),` для основной библиотеки `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),`, создавая псевдоним `,(0,c.jsx)(n.code,{children:`ui`}),` для использования в сгенерированных блоках свойств.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Всегда возвращает `,(0,c.jsx)(n.code,{children:`'@use "@dxtmisha/styles" as ui;'`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`форматирование-и-утилиты`,children:`Форматирование и утилиты`}),`
`,(0,c.jsx)(n.h3,{id:`join`,children:(0,c.jsx)(n.code,{children:`join`})}),`
`,(0,c.jsxs)(n.p,{children:[`Объединяет массив сгенерированных строк кода в одну отформатированную строку. Использует CRLF (`,(0,c.jsx)(n.code,{children:`\\r\\n`}),`) в качестве разделителя строк для обеспечения единообразного форматирования в различных средах.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: string[]`}),` — Массив строк, представляющих отдельные строки кода.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Результирующая многострочная строка.`]}),`
`,(0,c.jsx)(n.h3,{id:`tofunctioncss`,children:(0,c.jsx)(n.code,{children:`toFunctionCss`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилита безопасности, которая преобразует вызовы пользовательских функций `,(0,c.jsx)(n.code,{children:`@function`}),` внутри значений свойств CSS в синтаксис интерполяции Sass (`,(0,c.jsx)(n.code,{children:`#{...}`}),`). Это предотвращает ошибки компиляции Sass, когда пользовательские функции используются в контекстах, требующих чистого вывода CSS.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Строка значения свойства CSS, содержащая потенциальные вызовы пользовательских функций.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Преобразованная строка с интерполированными вызовами функций.`]}),`
`,(0,c.jsx)(n.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesTool } from '@dxtmisha/scripts'

// 1. Получение уровня отступа
const indent = StylesTool.addSpace(2) // "    "

// 2. Создание импорта SCSS
const importLine = StylesTool.addImport('../tokens/colors')

// 3. Преобразование вызова пользовательской функции
const safeValue = StylesTool.toFunctionCss('@getOpacity(0.5)') // "#{getOpacity(0.5)}"

// 4. Объединение строк
const fileContent = StylesTool.join([
  StylesTool.addImportProperties(),
  importLine,
  \`.element {\`,
  \`\${indent}color: red;\`,
  \`}\`
])
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};