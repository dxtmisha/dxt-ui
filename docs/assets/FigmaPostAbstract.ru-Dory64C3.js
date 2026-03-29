import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/figma/Classes/FigmaPostAbstract - Базовый класс сообщений`}),`
`,(0,c.jsx)(n.h1,{id:`класс-figmapostabstract`,children:`Класс FigmaPostAbstract`}),`
`,(0,c.jsx)(n.p,{children:`Базовый абстрактный класс для управления обменом сообщениями между плагином Figma (backend) и UI (frontend). Обеспечивает структурированную основу для двусторонней связи со встроенной проверкой и управлением несколькими слушателями.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Двусторонняя поддержка`}),` — База как для `,(0,c.jsx)(n.code,{children:`FigmaPluginMessenger`}),`, так и для `,(0,c.jsx)(n.code,{children:`FigmaUiMessenger`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Проверка сообщений`}),` — Использует `,(0,c.jsx)(n.code,{children:`FigmaPostCode`}),`, чтобы гарантировать, что сообщения исходят из того же экземпляра плагина.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Множественные слушатели`}),` — Поддерживает несколько колбэков для одного типа сообщения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Цепочка вызовов`}),` — Методы, такие как `,(0,c.jsx)(n.code,{children:`make`}),` и `,(0,c.jsx)(n.code,{children:`add`}),`, возвращают `,(0,c.jsx)(n.code,{children:`this`}),`, что позволяет писать более лаконичный код.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`публичные-методы`,children:`Публичные методы`}),`
`,(0,c.jsx)(n.h3,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsxs)(n.p,{children:[`Инициализирует слушатель сообщений. Этот метод гарантирует, что специфичная для среды настройка (`,(0,c.jsx)(n.code,{children:`prepare`}),`) будет выполнена ровно один раз, независимо от того, сколько раз вызывается `,(0,c.jsx)(n.code,{children:`make`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const messenger = new FigmaPluginMessenger().make()
`})}),`
`,(0,c.jsx)(n.h3,{id:`add`,children:(0,c.jsx)(n.code,{children:`add`})}),`
`,(0,c.jsx)(n.p,{children:`Регистрирует функцию обратного вызова (колбэк), которая будет выполнена при получении сообщения определенного типа.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Уникальный идентификатор типа сообщения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: UiFigmaMessengerCallback<Message>`}),` — Функция, вызываемая при получении сообщения. Получает данные сообщения в качестве первого аргумента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`once: boolean = false`}),` — Если установлено значение `,(0,c.jsx)(n.code,{children:`true`}),`, колбэк будет автоматически удален после одного вызова.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger
  .add('update-selection', (data) => console.log('Выбор:', data.count))
  .add('init', (data) => console.log('Init:', data), true)
  .add('close', () => figma.closePlugin())
`})}),`
`,(0,c.jsx)(n.h3,{id:`remove`,children:(0,c.jsx)(n.code,{children:`remove`})}),`
`,(0,c.jsx)(n.p,{children:`Удаляет ранее зарегистрированную функцию обратного вызова для определенного типа сообщения.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Уникальный идентификатор типа сообщения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: UiFigmaMessengerCallback<Message>`}),` — Функция, которая будет удалена из слушателей.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const onUpdate = (data) => console.log('Выбор:', data.count)

messenger
  .add('update-selection', onUpdate)
  .remove('update-selection', onUpdate)
`})}),`
`,(0,c.jsx)(n.h2,{id:`структуры-данных`,children:`Структуры данных`}),`
`,(0,c.jsx)(n.h3,{id:`uifigmamessengerdata`,children:(0,c.jsx)(n.code,{children:`UiFigmaMessengerData`})}),`
`,(0,c.jsx)(n.p,{children:`Структура объекта данных, передаваемого через систему сообщений:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — Код проверки из `,(0,c.jsx)(n.code,{children:`FigmaPostCode`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Идентификатор сообщения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message: Message`}),` — Сами полезные данные сообщения.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};