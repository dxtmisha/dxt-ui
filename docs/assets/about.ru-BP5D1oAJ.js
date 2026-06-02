import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI Figma/! О библиотеке`}),`
`,(0,c.jsx)(n.h1,{id:`экосистема-ui-figma`,children:`Экосистема UI Figma`}),`
`,(0,c.jsxs)(n.p,{children:[`Система `,(0,c.jsx)(n.code,{children:`UI Figma`}),` представляет собой комплексную инфраструктуру для разработки плагинов Figma. Она разработана для устранения барьера между «стороной кода» (backend плагина) и «стороной UI» (frontend), обеспечивая бесшовное взаимодействие, реактивное управление данными и полную типизацию.`]}),`
`,(0,c.jsx)(n.p,{children:`В основе системы лежит трехуровневая архитектура, где каждый уровень отвечает за свою часть жизненного цикла плагина.`}),`
`,(0,c.jsx)(n.h2,{id:`три-уровня-взаимодействия`,children:`Три уровня взаимодействия`}),`
`,(0,c.jsx)(n.h3,{id:`1-основа-связи-dxtmishafigma`,children:`1. Основа связи (@dxtmisha/figma)`}),`
`,(0,c.jsx)(n.p,{children:`Фундаментальный пакет, определяющий протоколы взаимодействия. Содержит:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Константы типов сообщений.`}),`
`,(0,c.jsx)(n.li,{children:`Общие типы данных и интерфейсы.`}),`
`,(0,c.jsx)(n.li,{children:`Абстрактные классы мессенджеров для стандартизации обмена данными.`}),`
`,(0,c.jsx)(n.li,{children:`Утилиты для маршрутизации сообщений между UI и песочницей Figma.`}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`2-логика-плагина-dxtmishafigma-code`,children:`2. Логика плагина (@dxtmisha/figma-code)`}),`
`,(0,c.jsx)(n.p,{children:`Пакет, работающий в среде выполнения Figma (Sandbox). Это «мозг» плагина, имеющий прямой доступ к Figma API:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Анализ элементов`}),`: Классы `,(0,c.jsx)(n.code,{children:`FigmaItem`}),` и `,(0,c.jsx)(n.code,{children:`FigmaFrame`}),` для глубокого исследования структуры документа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Хранение данных`}),`: `,(0,c.jsx)(n.code,{children:`FigmaStorage`}),` для работы с PluginData (хранение данных в самом файле документа).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Экспорт`}),`: Инструменты для автоматизированного создания скриншотов и экспорта ресурсов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синхронизация`}),`: Классы `,(0,c.jsx)(n.code,{children:`FigmaTopLevelFrames`}),` и `,(0,c.jsx)(n.code,{children:`FigmaFramesSelected`}),` для передачи актуального состояния документа в UI.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`3-реактивный-интерфейс-dxtmishafigma-ref`,children:`3. Реактивный интерфейс (@dxtmisha/figma-ref)`}),`
`,(0,c.jsx)(n.p,{children:`Пакет для разработки пользовательского интерфейса на Vue 3. Он превращает асинхронные ответы от плагина в удобные реактивные ссылки (composables):`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Реактивные хранилища`}),`: `,(0,c.jsx)(n.code,{children:`useFigmaStorage`}),` и `,(0,c.jsx)(n.code,{children:`useFigmaClientStorage`}),` для мгновенной связи данных UI с хранилищем Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Наблюдатели`}),`: `,(0,c.jsx)(n.code,{children:`useFigmaUiFrames`}),` для автоматического обновления списка доступных фреймов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление выбором`}),`: `,(0,c.jsx)(n.code,{children:`useFigmaUiSelected`}),` для связи выделенных элементов в UI со списком выбора в плагине.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`возможности-системы`,children:`Возможности системы`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Бесшовное взаимодействие`}),`
Разработчику больше не нужно вручную прописывать `,(0,c.jsx)(n.code,{children:`postMessage`}),` и слушатели событий. Система берет на себя маршрутизацию и проверку типов.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Реактивность «из коробки»`}),`
Использование Vue Composition API позволяет строить интерфейс плагина так же просто, как обычное веб-приложение, при этом данные будут автоматически сохраняться в документе Figma.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Типобезопасность`}),`
Все сообщения и структуры данных строго типизированы, что исключает ошибки при передаче данных между изолированными средами (UI и Sandbox).`]}),`
`,(0,c.jsx)(n.h2,{id:`преимущества-использования`,children:`Преимущества использования`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ускорение разработки`}),`: Готовая база для типичных задач (выделение, чтение настроек, скриншоты).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Чистая архитектура`}),`: Четкое разделение ответственности между бизнес-логикой плагина и его интерфейсом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Масштабируемость`}),`: Легкое добавление новых функций за счет модульной структуры и использования паттерна Messenger.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`git`,children:`Git`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/figma`,rel:`nofollow`,children:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/figma`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};