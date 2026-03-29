import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/LibraryExport - Генератор экспорта`}),`
`,(0,c.jsx)(n.h1,{id:`класс-libraryexport`,children:`Класс LibraryExport`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`LibraryExport`}),` отвечает за агрегацию и генерацию единого файла экспорта для библиотеки. Он сканирует назначенные директории на наличие файлов TypeScript и Vue, создавая единую точку входа, которая упрощает импорт библиотеки.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Генерация единого экспорта`}),` — создает комплексную точку входа для всех экспортируемых компонентов и утилит.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Умная идентификация файлов`}),` — автоматически обрабатывает экспорт для `,(0,c.jsx)(n.code,{children:`.ts`}),` файлов (используя `,(0,c.jsx)(n.code,{children:`export *`}),`) и `,(0,c.jsx)(n.code,{children:`.vue`}),` файлов (используя `,(0,c.jsx)(n.code,{children:`import`}),`, затем `,(0,c.jsx)(n.code,{children:`export const`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция стилей`}),` — автоматически включает глобальные стили CSS или SCSS, если они существуют.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Фильтрация`}),` — исключает файлы тестов (`,(0,c.jsx)(n.code,{children:`.test.`}),`) и файлы, помеченные флагом `,(0,c.jsx)(n.code,{children:`UI_FLAG_NOT_EXPORT`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Инициализируйте и запустите генератор экспорта с помощью метода `,(0,c.jsx)(n.code,{children:`make`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryExport } from '@dxtmisha/scripts'

const generator = new LibraryExport()
generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`генерация`,children:`Генерация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — основная точка входа, которая запускает процесс поиска файлов и генерации.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример-сгенерированного-вывода`,children:`Пример сгенерированного вывода`}),`
`,(0,c.jsx)(n.p,{children:`Сгенерированный файл агрегирует импорты и экспорты следующим образом:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import './style.css'

// Components
import _DxtButton from './components/DxtButton/DxtButton.vue'
export const DxtButton = _DxtButton

// Utilities
export * from './functions/myFunction'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};