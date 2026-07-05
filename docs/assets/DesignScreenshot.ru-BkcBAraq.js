import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/DesignScreenshot - Автоматическое создание скриншотов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designscreenshot`,children:`Класс DesignScreenshot`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignScreenshot`}),` представляет собой специализированную утилиту разработчика, предназначенную для автоматического захвата скриншотов компонентов/страниц, HTML-кода и стилей путем запуска локального сервера разработки в фоновом режиме и сканирования его с помощью безголового браузера (headless browser).`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматический запуск сервера`}),` — запускает дочерний процесс `,(0,c.jsx)(n.code,{children:`npm run dev`}),` в фоновом режиме и считывает поток его вывода.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоопределение порта`}),` — парсит текстовый поток вывода терминала для извлечения адреса локального сервера (`,(0,c.jsx)(n.code,{children:`http://localhost:...`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Единый конвейер захвата`}),` — использует `,(0,c.jsx)(n.code,{children:`BrowserItem`}),` для захвата скриншотов всей страницы, получения HTML-тела страницы и извлечения активных стилей CSS с последующим сохранением всех файлов в папку `,(0,c.jsx)(n.code,{children:`./ai-screenshot/`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Самозавершающийся цикл`}),` — автоматически завершает фоновый процесс дочернего сервера разработки сразу после успешного захвата данных, сохраняя системные ресурсы.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignScreenshot`}),` может быть инициализирован с необязательным префиксом имени выходного файла.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`file: string`}),` — (Опционально) Префикс пути к выходному файлу (по умолчанию: `,(0,c.jsx)(n.code,{children:`'./ai-screenshot/screenshot'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignScreenshot } from '@dxtmisha/scripts'

const capturer = new DesignScreenshot('./ai-screenshot/mockup-preview')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsx)(n.h4,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsx)(n.p,{children:`Запускает процесс создания скриншотов: создает структуру выходных каталогов, запускает сервер разработки и вешает слушатели вывода для триггера захвата.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<void>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`await capturer.make()
`})}),`
`,(0,c.jsx)(n.h4,{id:`makeurl`,children:(0,c.jsx)(n.code,{children:`makeUrl`})}),`
`,(0,c.jsx)(n.p,{children:`Извлекает адрес локального сервера из консольного вывода команды.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: string`}),` — Кусок stdout-потока терминала.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.h3,{id:`защищенные-методы-и-свойства`,children:`Защищенные методы и свойства`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isReading: boolean`}),` — Флаг-предохранитель для предотвращения нескольких параллельных вызовов захвата.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`url?: string`}),` — Обнаруженный адрес локального сервера разработки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listener(): Promise<boolean>`}),` — Триггер безголового браузера, который захватывает скриншоты, HTML-тело и стили.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`makeServer(): this`}),` — Запускает фоновый дочерний процесс `,(0,c.jsx)(n.code,{children:`npm run dev`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};