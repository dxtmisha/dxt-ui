import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/BrowserItem - Менеджер безголового браузера`}),`
`,(0,c.jsx)(n.h1,{id:`класс-browseritem`,children:`Класс BrowserItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`BrowserItem`}),` представляет собой высокоуровневую обертку над `,(0,c.jsx)(n.strong,{children:`Puppeteer`}),`, предназначенную для управления экземплярами браузера Chromium, настройки области просмотра (viewport), выполнения скриптов в контексте браузера и создания скриншотов всей страницы либо ее постраничной нарезки.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматический жизненный цикл`}),` — ленивая инициализация и автоматическое управление жизненным циклом безголового браузера.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамическая настройка Viewport`}),` — конфигурирование размеров экрана, масштаба и обработка ошибок консоли при запуске.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкие конвейеры захвата`}),` — поддержка скриншотов всей страницы целиком или постраничной нарезки в несколько последовательных файлов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Извлечение стилей и DOM`}),` — встроенные методы для получения исходного HTML-кода, активных таблиц стилей CSS или метрик страницы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасное выполнение скриптов`}),` — выполнение пользовательских callback-функций непосредственно в активном контексте окна браузера.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`BrowserItem`}),` инициализируется целевым URL-адресом и необязательным объектом параметров конфигурации скриншота.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`url: string`}),` — URL-адрес веб-страницы для загрузки и захвата.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: ScreenshotOptions`}),` — (Опционально) Параметры viewport, формата, качества изображения и таймаута.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BrowserItem } from '@dxtmisha/scripts'

const browserItem = new BrowserItem('http://localhost:5173', {
  width: 1280,
  height: 800,
  format: 'png',
  fullPage: true
})
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`геттеры`,children:`Геттеры`}),`
`,(0,c.jsx)(n.h3,{id:`геттеры-конфигурации`,children:`Геттеры конфигурации`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`args: string[]`}),` — Аргументы запуска Puppeteer.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`waitUntil: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]`}),` — Условие завершения загрузки страницы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`timeout: number`}),` — Максимальный таймаут загрузки в миллисекундах.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`format: 'png' | 'jpeg' | 'webp'`}),` — Целевой формат изображения скриншота.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`width: number`}),` — Ширина области просмотра.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`height: number`}),` — Высота области просмотра.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`quality: number`}),` — Качество скриншота (0-100) для форматов JPEG/WebP.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fullPage: boolean`}),` — Флаг захвата всей страницы целиком.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extension: string`}),` — Вычисляемое расширение файла (например, `,(0,c.jsx)(n.code,{children:`".png"`}),`, `,(0,c.jsx)(n.code,{children:`".jpg"`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление-жизненным-циклом`,children:`Управление жизненным циклом`}),`
`,(0,c.jsx)(n.h4,{id:`getbrowser`,children:(0,c.jsx)(n.code,{children:`getBrowser`})}),`
`,(0,c.jsx)(n.p,{children:`Выполняет ленивую инициализацию и возвращает экземпляр браузера Puppeteer.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<Browser>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const browser = await browserItem.getBrowser()
`})}),`
`,(0,c.jsx)(n.h4,{id:`getpage`,children:(0,c.jsx)(n.code,{children:`getPage`})}),`
`,(0,c.jsx)(n.p,{children:`Создает или возвращает экземпляр страницы браузера, настраивая размеры viewport и подключая стандартные слушатели логирования.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<Page>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const page = await browserItem.getPage()
`})}),`
`,(0,c.jsx)(n.h4,{id:`getresponse`,children:(0,c.jsx)(n.code,{children:`getResponse`})}),`
`,(0,c.jsxs)(n.p,{children:[`Переходит по целевому URL-адресу с учетом заданных опций `,(0,c.jsx)(n.code,{children:`waitUntil`}),` и `,(0,c.jsx)(n.code,{children:`timeout`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<HTTPResponse | undefined>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const response = await browserItem.getResponse()
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`захват-и-действия`,children:`Захват и Действия`}),`
`,(0,c.jsx)(n.h4,{id:`screenshot`,children:(0,c.jsx)(n.code,{children:`screenshot`})}),`
`,(0,c.jsx)(n.p,{children:`Запускает процесс создания скриншота с сохранением в указанный путь. Автоматически выбирает режим захвата всей страницы или постраничной нарезки.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`outputPath: string`}),` — Путь к файлу для сохранения скриншотов.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<this>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`await browserItem.screenshot('./dist/screenshots/homepage')
`})}),`
`,(0,c.jsx)(n.h4,{id:`evaluate`,children:(0,c.jsx)(n.code,{children:`evaluate`})}),`
`,(0,c.jsx)(n.p,{children:`Выполняет пользовательскую функцию в контексте загруженной страницы.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pageFunction: Func | string`}),` — Код или функция для выполнения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`...args: Params`}),` — Дополнительные аргументы, передаваемые в функцию.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<Awaited<ReturnType<Func>> | undefined>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const title = await browserItem.evaluate(() => document.title)
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`утилиты`,children:`Утилиты`}),`
`,(0,c.jsx)(n.h3,{id:`извлечение-dom-данных`,children:`Извлечение DOM-данных`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDom(): Promise<string>`}),` — Возвращает полный HTML-код документа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBody(): Promise<string>`}),` — Возвращает внутреннее HTML-содержимое тега `,(0,c.jsx)(n.code,{children:`document.body`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStyles(): Promise<string>`}),` — Извлекает и объединяет все активные CSS-правила.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMetrics(): Promise<ScreenshotMetrics>`}),` — Возвращает прокручиваемые размеры страницы (ширину и высоту).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): Promise<this>`}),` — Сбрасывает состояние страницы, метрик и ответов.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`screenshotoptions`,children:`ScreenshotOptions`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`args?: string[]`}),` — Пользовательские флаги Chromium.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]`}),` — Триггер-условие окончания загрузки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`timeout?: number`}),` — Максимальный лимит времени на загрузку.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`format?: 'png' | 'jpeg' | 'webp'`}),` — Формат изображения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`width?: number`}),` — Начальная ширина области просмотра.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`height?: number`}),` — Начальная высота области просмотра.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`quality?: number`}),` — Качество сжатия изображения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fullPage?: boolean`}),` — Флаг захвата полной страницы.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};