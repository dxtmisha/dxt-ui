import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/DesignFigma - Класс интеграции макетов Figma`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designfigma`,children:`Класс DesignFigma`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignFigma`}),` обеспечивает базовое поведение контроллера для подключения к Figma REST API и извлечения координат макетов и структур векторных изображений. Он абстрагирует авторизацию токенов и упрощает пакетные запросы изображений узлов в чистые асинхронные рабочие процессы.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Внимание`}),`: Для использования этого класса и взаимодействия с целевыми эндпоинтами Figma строго требуется наличие корпоративной подписки Figma (Figma Enterprise или Organization).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Развязанная авторизация API`}),` — автоматически использует системные свойства для получения активного токена Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Опции генерации SVG`}),` — запрашивает узлы с сохранением тегов исходных идентификаторов и параметров обводки текста.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасное сетевое выполнение`}),` — корректно обрабатывает сетевые ошибки и ограничения API, возвращая безопасные значения `,(0,c.jsx)(n.code,{children:`undefined`}),` в качестве альтернативы.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Инициализируйте новый экземпляр `,(0,c.jsx)(n.code,{children:`DesignFigma`}),` с необходимыми учетными данными целевого файла Figma.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fileKey: string`}),` — Уникальный идентификатор целевого файла Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nodeId?: string`}),` — Конкретный идентификатор узла внутри файла для нацеливания.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`token?: string`}),` — Необязательный токен Figma API. По умолчанию используется значение `,(0,c.jsx)(n.code,{children:`PropertiesConfig.getFigmaToken()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignFigma } from '@dxtmisha/scripts'

const integrator = new DesignFigma('abc123xyz456', '1-24')
await integrator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsx)(n.p,{children:`Основной оркестрирующий метод, который запускает получение векторных ресурсов и выводит результирующее сопоставление в консоль.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<void>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`await integrator.make()
`})}),`
`,(0,c.jsx)(n.h3,{id:`initimage`,children:(0,c.jsx)(n.code,{children:`initImage`})}),`
`,(0,c.jsx)(n.p,{children:`Запрашивает URL-адреса изображений векторных макетов из Figma API для указанных идентификаторов узлов в формате SVG.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<Record<string, string> | undefined>`}),` — Промис, разрешающийся в объект, сопоставляющий идентификаторы узлов с соответствующими URL-адресами SVG, или `,(0,c.jsx)(n.code,{children:`undefined`}),` в случае ошибки.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const images = await integrator.initImage()
console.log(images) // { "1-24": "https://..." }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};