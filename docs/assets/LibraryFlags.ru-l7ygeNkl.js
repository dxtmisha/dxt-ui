import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/LibraryFlags - Генератор подключения флагов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-libraryflags`,children:`Класс LibraryFlags`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`LibraryFlags`}),` отвечает за формирование файлов подключения флагов стран к дизайн-системе. Он создает точку входа TypeScript для регистрации флагов в качестве иконок и JSON-файл, содержащий список всех доступных идентификаторов флагов.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Генерация подключения флагов`}),` — создает файл инициализации TypeScript, который регистрирует флаги как глобальные иконки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Генерация списка идентификаторов`}),` — формирует JSON-файл для метаданных и автоматизированного выбора флагов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандартизация именования`}),` — автоматически форматирует идентификаторы флагов в соответствии с соглашением `,(0,c.jsx)(n.code,{children:`flag-[code]`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая обработка`}),` — сканирует и обрабатывает все доступные флаги из медиа-библиотеки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`LibraryFlags(items)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: LibraryItems`}),` — объект для работы со списком компонентов и управления записью файлов.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryFlags, LibraryItems } from '@dxtmisha/scripts'

// 1. Инициализация LibraryItems
const items = new LibraryItems()

// 2. Инициализация LibraryFlags
const flagGenerator = new LibraryFlags(items)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Запускает процесс генерации файлов подключения флагов (TS и JSON).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`структура-сгенерированных-файлов`,children:`Структура сгенерированных файлов`}),`
`,(0,c.jsxs)(n.p,{children:[`Метод `,(0,c.jsx)(n.code,{children:`make`}),` формирует два основных файла для интеграции флагов в библиотеку:`]}),`
`,(0,c.jsxs)(n.h3,{id:`1-подключение-флагов-flagsts`,children:[`1. Подключение флагов (`,(0,c.jsx)(n.code,{children:`flags.ts`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Регистрирует флаги как глобальные иконки с помощью менеджера `,(0,c.jsx)(n.code,{children:`Icons`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример структуры:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Icons } from '@dxtmisha/functional'
import flags from '@dxtmisha/media/flags'

export const makeFlags = (): void => {
  Icons.add('flag-ru', flags.ru)
  Icons.add('flag-us', flags.us)
}
`})}),`
`,(0,c.jsxs)(n.h3,{id:`2-идентификаторы-флагов-flagsjson`,children:[`2. Идентификаторы флагов (`,(0,c.jsx)(n.code,{children:`flags.json`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Простой массив строк, содержащий все сгенерированные ключи флагов.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример структуры:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`["flag-ru", "flag-us"]
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};