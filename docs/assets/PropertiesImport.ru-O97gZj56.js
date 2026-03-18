import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(r){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/ru/scripts/Classes/PropertiesImport - Резолвер внешних токенов"}),`
`,n.jsx(e.h1,{id:"класс-propertiesimport",children:"Класс PropertiesImport"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"PropertiesImport"})," — это специализированный менеджер для разрешения и интеграции ссылок на внешние файлы внутри кластеров токенов дизайна. Он позволяет разработчикам модульно распределять определения свойств по нескольким файлам или директориям, предоставляя мощные механизмы глубокого связывания со специфическими структурами данных и рекурсивного объединения независимых наборов токенов в единую унифицированную конфигурацию."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Модульное разрешение"})," — прозрачно включает внешние ",n.jsx(e.code,{children:".json"})," файлы или целые директории в дерево свойств."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Глубокие ссылки (Deep-Linking)"})," — поддерживает идентификаторы фрагментов (например, ",n.jsx(e.code,{children:"#path.to.node"}),") для импорта только определенных подмножеств внешнего файла."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Рекурсивный импорт директорий"})," — автоматически сопоставляет структуры папок с пространствами имен свойств при ссылке на директорию."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Контекстное разрешение"})," — отслеживает текущий уровень директории для правильного разрешения относительных путей файлов во время глубокого обхода."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нормализованное слияние"})," — гарантирует, что импортированные данные проходят через ",n.jsx(e.code,{children:"PropertiesStandard"})," перед объединением с родительским деревом."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Для инициализации объекта вызовите конструктор ",n.jsx(e.code,{children:"PropertiesImport(properties, root)"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"properties: PropertyList"})," — начальный список свойств (дерево токенов) для обработки."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"root: string[]"})," — сегменты базового пути для разрешения относительных ссылок на файлы."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { PropertiesImport } from '@dxtmisha/scripts'

// 1. Подготовка исходных данных и контекста пути
const initialProperties = { 
  button: { type: 'file', value: 'components/button.json' } 
}
const rootPath = ['src', 'tokens']

// 2. Создание экземпляра импортера
const importer = new PropertiesImport(initialProperties, rootPath)

// 3. Запуск процесса разрешения внешних ссылок
const resolvedData = importer.to()
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"to(properties, root): PropertyList"})," — разрешает и объединяет все внешние ссылки на файлы внутри кластера свойств."]}),`
`]}),`
`,n.jsx(e.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(e.h3,{id:"поток-разрешения-внешних-ссылок",children:"Поток разрешения внешних ссылок"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"PropertiesImport"})," управляет многоэтапным конвейером разрешения:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Детекция"}),": При обходе дерева класс ищет элементы, где ",n.jsx(e.code,{children:"value"})," является строкой, а метаданные типа соответствуют ",n.jsx(e.code,{children:"PropertyType.file"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Парсинг ссылки"}),": Строка ссылки (например, ",n.jsx(e.code,{children:"theme/colors.json#primary"}),") разделяется на физический ",n.jsx(e.code,{children:"path"})," файла и опциональный фрагмент внутренней ссылки ",n.jsx(e.code,{children:"link"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Выполнение ввода-вывода"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Одиночный файл"}),": Читает целевой файл через ",n.jsx(e.code,{children:"PropertiesCache"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Директория"}),": Сопоставляет все файлы ",n.jsx(e.code,{children:".json"})," в папке с дочерними свойствами, названными по имени файлов."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Глубокое извлечение"}),": Если присутствует идентификатор фрагмента (",n.jsx(e.code,{children:"#"}),"), класс проходит по прочитанному объекту, чтобы вернуть только запрошенный подпуть."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Стандартизация и рекурсия"}),": Извлеченные данные передаются в ",n.jsx(e.code,{children:"PropertiesStandard"})," для нормализации, а затем рекурсивно возвраруются в ",n.jsx(e.code,{children:"to()"})," для разрешения любых ",n.jsx(e.em,{children:"вложенных"})," импортов внутри только что включенного файла."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Слияние"}),": Итоговые данные рекурсивно объединяются с родительской структурой с помощью ",n.jsx(e.code,{children:"replaceRecursive"}),"."]}),`
`]})]})}function x(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{x as default};
