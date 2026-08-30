import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignScreenshot - Автоматическое создание скриншотов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designscreenshot`,children:`Класс DesignScreenshot`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DesignScreenshot`}),` представляет собой специализированную утилиту разработчика, предназначенную для автоматического захвата скриншотов компонентов/страниц, HTML-кода и стилей путем запуска локального сервера разработки в фоновом режиме и сканирования его с помощью безголового браузера (headless browser).`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматический запуск сервера`}),` — запускает дочерний процесс `,(0,c.jsx)(t.code,{children:`npm run dev`}),` в фоновом режиме и считывает поток его вывода.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоопределение порта`}),` — парсит текстовый поток вывода терминала для извлечения адреса локального сервера (`,(0,c.jsx)(t.code,{children:`http://localhost:...`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Единый конвейер захвата`}),` — использует `,(0,c.jsx)(t.code,{children:`BrowserItem`}),` для захвата скриншотов всей страницы, получения HTML-тела страницы и извлечения активных стилей CSS с последующим сохранением всех файлов в папку `,(0,c.jsx)(t.code,{children:`./ai-screenshot/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Самозавершающийся цикл`}),` — автоматически завершает фоновый процесс дочернего сервера разработки сразу после успешного захвата данных, сохраняя системные ресурсы.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`DesignScreenshot`}),` может быть инициализирован с необязательным префиксом имени выходного файла.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`file: string`}),` — (Опционально) Префикс пути к выходному файлу (по умолчанию: `,(0,c.jsx)(t.code,{children:`'./ai-screenshot/screenshot'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignScreenshot } from '@dxtmisha/scripts'

const capturer = new DesignScreenshot('./ai-screenshot/mockup-preview')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsx)(t.h4,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsx)(t.p,{children:`Запускает процесс создания скриншотов: создает структуру выходных каталогов, запускает сервер разработки и вешает слушатели вывода для триггера захвата.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`Promise<void>`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`await capturer.make()
`})}),`
`,(0,c.jsx)(t.h4,{id:`makeurl`,children:(0,c.jsx)(t.code,{children:`makeUrl`})}),`
`,(0,c.jsx)(t.p,{children:`Извлекает адрес локального сервера из консольного вывода команды.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: string`}),` — Кусок stdout-потока терминала.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`this`})]}),`
`,(0,c.jsx)(t.h3,{id:`защищенные-методы-и-свойства`,children:`Защищенные методы и свойства`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isReading: boolean`}),` — Флаг-предохранитель для предотвращения нескольких параллельных вызовов захвата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`url?: string`}),` — Обнаруженный адрес локального сервера разработки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listener(): Promise<boolean>`}),` — Триггер безголового браузера, который захватывает скриншоты, HTML-тело и стили.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`makeServer(): this`}),` — Запускает фоновый дочерний процесс `,(0,c.jsx)(t.code,{children:`npm run dev`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};