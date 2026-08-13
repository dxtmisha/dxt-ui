import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesImport - Резолвер внешних токенов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiesimport`,children:`Класс PropertiesImport`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesImport`}),` — это специализированный менеджер для разрешения и интеграции ссылок на внешние файлы внутри кластеров токенов дизайна. Он позволяет разработчикам модульно распределять определения свойств по нескольким файлам или директориям, предоставляя мощные механизмы глубокого связывания со специфическими структурами данных и рекурсивного объединения независимых наборов токенов в единую унифицированную конфигурацию.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Модульное разрешение`}),` — прозрачно включает внешние `,(0,c.jsx)(t.code,{children:`.json`}),` файлы или целые директории в дерево свойств.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Глубокие ссылки (Deep-Linking)`}),` — поддерживает идентификаторы фрагментов (например, `,(0,c.jsx)(t.code,{children:`#path.to.node`}),`) для импорта только определенных подмножеств внешнего файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Рекурсивный импорт директорий`}),` — автоматически сопоставляет структуры папок с пространствами имен свойств при ссылке на директорию.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Контекстное разрешение`}),` — отслеживает текущий уровень директории для правильного разрешения относительных путей файлов во время глубокого обхода.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Нормализованное слияние`}),` — гарантирует, что импортированные данные проходят через `,(0,c.jsx)(t.code,{children:`PropertiesStandard`}),` перед объединением с родительским деревом.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`PropertiesImport(properties, root)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`properties: PropertyList`}),` — начальный список свойств (дерево токенов) для обработки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`root: string[]`}),` — сегменты базового пути для разрешения относительных ссылок на файлы.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesImport } from '@dxtmisha/scripts'

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
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to(properties, root): PropertyList`}),` — разрешает и объединяет все внешние ссылки на файлы внутри кластера свойств.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`поток-разрешения-внешних-ссылок`,children:`Поток разрешения внешних ссылок`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`PropertiesImport`}),` управляет многоэтапным конвейером разрешения:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Детекция`}),`: При обходе дерева класс ищет элементы, где `,(0,c.jsx)(t.code,{children:`value`}),` является строкой, а метаданные типа соответствуют `,(0,c.jsx)(t.code,{children:`PropertyType.file`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Парсинг ссылки`}),`: Строка ссылки (например, `,(0,c.jsx)(t.code,{children:`theme/colors.json#primary`}),`) разделяется на физический `,(0,c.jsx)(t.code,{children:`path`}),` файла и опциональный фрагмент внутренней ссылки `,(0,c.jsx)(t.code,{children:`link`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Выполнение ввода-вывода`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Одиночный файл`}),`: Читает целевой файл через `,(0,c.jsx)(t.code,{children:`PropertiesCache`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Директория`}),`: Сопоставляет все файлы `,(0,c.jsx)(t.code,{children:`.json`}),` в папке с дочерними свойствами, названными по имени файлов.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Глубокое извлечение`}),`: Если присутствует идентификатор фрагмента (`,(0,c.jsx)(t.code,{children:`#`}),`), класс проходит по прочитанному объекту, чтобы вернуть только запрошенный подпуть.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Стандартизация и рекурсия`}),`: Извлеченные данные передаются в `,(0,c.jsx)(t.code,{children:`PropertiesStandard`}),` для нормализации, а затем рекурсивно возвраруются в `,(0,c.jsx)(t.code,{children:`to()`}),` для разрешения любых `,(0,c.jsx)(t.em,{children:`вложенных`}),` импортов внутри только что включенного файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Слияние`}),`: Итоговые данные рекурсивно объединяются с родительской структурой с помощью `,(0,c.jsx)(t.code,{children:`replaceRecursive`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};