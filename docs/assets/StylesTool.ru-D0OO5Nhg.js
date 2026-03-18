import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function d(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/scripts/Classes/StylesTool - Утилиты для обработки стилей"}),`
`,n.jsx(s.h1,{id:"класс-stylestool",children:"Класс StylesTool"}),`
`,n.jsxs(s.p,{children:["Класс ",n.jsx(s.code,{children:"StylesTool"})," представляет собой статическое хранилище утилит высокого уровня, предоставляющее основные функции для конвейера генерации стилей дизайн-системы. Он инкапсулирует логику управления директориями, контроля отступов, создания директив SCSS и преобразований для совместимости с Sass."]}),`
`,n.jsxs(s.p,{children:["Централизуя эти низкоуровневые манипуляции со строками и поиск путей, класс обеспечивает согласованность во всех преобразователях ",n.jsx(s.code,{children:"StylesTo*"})," и классах-генераторах."]}),`
`,n.jsx(s.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Контроль отступов"})," — предоставляет стандартную единицу отступа (2 пробела) и методы для её масштабирования в зависимости от уровня вложенности."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Построители директив"})," — стандартизирует синтаксис для операторов SCSS ",n.jsx(s.code,{children:"@use"}),", ",n.jsx(s.code,{children:"@import"})," и ",n.jsx(s.code,{children:"@forward"}),"."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Определение путей"})," — интегрируется с глобальной конфигурацией для определения места назначения генерируемых файлов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Совместимость с Sass"})," — выполняет автоматическое преобразование синтаксиса пользовательских CSS-функций в безопасную интерполяцию Sass."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Вертикальное форматирование"})," — управляет объединением строк с использованием символов CRLF для совместимости между Windows и UNIX."]}),`
`]}),`
`,n.jsx(s.h2,{id:"методы-работы-с-файлами-и-директориями",children:"Методы работы с файлами и директориями"}),`
`,n.jsx(s.h3,{id:"getdir",children:n.jsx(s.code,{children:"getDir"})}),`
`,n.jsx(s.p,{children:"Определяет структуру целевой директории для сохранения сгенерированных файлов стилей. Объединяет основной каталог стилей со специфическим именем проекта, определенным в конфигурации свойств."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"string[]"})," — Массив, представляющий сегменты пути целевой директории."]}),`
`,n.jsx(s.h2,{id:"методы-работы-с-отступами",children:"Методы работы с отступами"}),`
`,n.jsx(s.h3,{id:"getspace",children:n.jsx(s.code,{children:"getSpace"})}),`
`,n.jsx(s.p,{children:"Возвращает базовую единицу отступа, используемую во всех сгенерированных файлах стилей проекта."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"string"})," — Строка, состоящая из 2 пробелов (",n.jsx(s.code,{children:"  "}),")."]}),`
`,n.jsx(s.h3,{id:"addspace",children:n.jsx(s.code,{children:"addSpace"})}),`
`,n.jsx(s.p,{children:"Генерирует строку отступа на основе указанного уровня вложенности. Используется для выравнивания блоков кода внутри вложенных структур, таких как медиа-запросы или блоки селекторов."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"level: number"})," — Желаемый уровень вложенности (0 — без отступа, 1 — 2 пробела, 2 — 4 пробела и т.д.)."]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"string"})," — Результирующая строка отступа."]}),`
`,n.jsx(s.h3,{id:"increasespace",children:n.jsx(s.code,{children:"increaseSpace"})}),`
`,n.jsx(s.p,{children:"Добавляет один дополнительный уровень отступа (2 пробела) к существующей строке отступов. Полезно при рекурсивном обходе дерева, где глубина увеличивается постепенно."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"space: string"})," — Текущая строка отступа, которую необходимо расширить."]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"string"})," — Обновленная строка отступа с одним дополнительным уровнем."]}),`
`,n.jsx(s.h2,{id:"методы-директив-scss",children:"Методы директив SCSS"}),`
`,n.jsx(s.h3,{id:"addimport",children:n.jsx(s.code,{children:"addImport"})}),`
`,n.jsxs(s.p,{children:["Создает стандартную директиву SCSS ",n.jsx(s.code,{children:"@import"})," для заданного пути к файлу."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"path: string"})," — Путь к импортируемому файлу."]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"string"})," — Отформатированная директива (например, ",n.jsx(s.code,{children:'@import "path/to/file";'}),")."]}),`
`,n.jsx(s.h3,{id:"adduse",children:n.jsx(s.code,{children:"addUse"})}),`
`,n.jsxs(s.p,{children:["Создает современную директиву SCSS ",n.jsx(s.code,{children:"@use"}),", которая является рекомендуемым способом загрузки функций, миксинов и переменных в современном Sass."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"path: string"})," — Путь к модулю."]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"string"})," — Отформатированная директива (например, ",n.jsx(s.code,{children:'@use "path/to/module";'}),")."]}),`
`,n.jsx(s.h3,{id:"addforward",children:n.jsx(s.code,{children:"addForward"})}),`
`,n.jsxs(s.p,{children:["Создает директиву SCSS ",n.jsx(s.code,{children:"@forward"}),". Обычно используется в индексных файлах для предоставления доступа к членам подмодуля пользователям пакета."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"path: string"})," — Путь к пересылаемому модулю."]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"string"})," — Отформатированная директива (например, ",n.jsx(s.code,{children:'@forward "path/to/module";'}),")."]}),`
`,n.jsx(s.h3,{id:"addimportproperties",children:n.jsx(s.code,{children:"addImportProperties"})}),`
`,n.jsxs(s.p,{children:["Генерирует специализированную директиву ",n.jsx(s.code,{children:"@use"})," для основной библиотеки ",n.jsx(s.code,{children:"@dxtmisha/styles"}),", создавая псевдоним ",n.jsx(s.code,{children:"ui"})," для использования в сгенерированных блоках свойств."]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"string"})," — Всегда возвращает ",n.jsx(s.code,{children:`'@use "@dxtmisha/styles" as ui;'`}),"."]}),`
`,n.jsx(s.h2,{id:"форматирование-и-утилиты",children:"Форматирование и утилиты"}),`
`,n.jsx(s.h3,{id:"join",children:n.jsx(s.code,{children:"join"})}),`
`,n.jsxs(s.p,{children:["Объединяет массив сгенерированных строк кода в одну отформатированную строку. Использует CRLF (",n.jsx(s.code,{children:"\\r\\n"}),") в качестве разделителя строк для обеспечения единообразного форматирования в различных средах."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"data: string[]"})," — Массив строк, представляющих отдельные строки кода."]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"string"})," — Результирующая многострочная строка."]}),`
`,n.jsx(s.h3,{id:"tofunctioncss",children:n.jsx(s.code,{children:"toFunctionCss"})}),`
`,n.jsxs(s.p,{children:["Утилита безопасности, которая преобразует вызовы пользовательских функций ",n.jsx(s.code,{children:"@function"})," внутри значений свойств CSS в синтаксис интерполяции Sass (",n.jsx(s.code,{children:"#{...}"}),"). Это предотвращает ошибки компиляции Sass, когда пользовательские функции используются в контекстах, требующих чистого вывода CSS."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"value: string"})," — Строка значения свойства CSS, содержащая потенциальные вызовы пользовательских функций."]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"string"})," — Преобразованная строка с интерполированными вызовами функций."]}),`
`,n.jsx(s.h2,{id:"пример-использования",children:"Пример использования"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { StylesTool } from '@dxtmisha/scripts'

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
`})})]})}function t(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(d,{...e})}):d(e)}export{t as default};
