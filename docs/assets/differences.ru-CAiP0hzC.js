import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";function i(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:`разница-между-table-и-tableflex`,children:`Разница между Table и TableFlex`}),`
`,(0,o.jsxs)(t.p,{children:[`Оба компонента предоставляют единый интерфейс для работы со структурированными данными (`,(0,o.jsx)(t.code,{children:`columns`}),`, `,(0,o.jsx)(t.code,{children:`header`}),`, `,(0,o.jsx)(t.code,{children:`list`}),`, `,(0,o.jsx)(t.code,{children:`sort`}),`, `,(0,o.jsx)(t.code,{children:`search`}),`), но построены на разной технологической базе:`]}),`
`,(0,o.jsx)(t.h3,{id:`table`,children:`Table`}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`Table`}),` — классическая таблица на базе семантических тегов HTML (`,(0,o.jsx)(t.code,{children:`<table>`}),`, `,(0,o.jsx)(t.code,{children:`<thead>`}),`, `,(0,o.jsx)(t.code,{children:`<tbody>`}),`, `,(0,o.jsx)(t.code,{children:`<tr>`}),`, `,(0,o.jsx)(t.code,{children:`<th>`}),`, `,(0,o.jsx)(t.code,{children:`<td>`}),`).`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Особенности и плюсы:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Автоматический расчет ширины колонок`}),`: Браузер самостоятельно выравнивает ширину столбцов во всех строках по самому длинному содержимому.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Нативная табличная семантика (A11y)`}),`: Полная встроенная поддержка табличной структурой скринридерами из коробки.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsxs)(t.strong,{children:[`Поддержка нативного `,(0,o.jsx)(t.code,{children:`rowspan`})]}),`: Объединение ячеек по вертикали между несколькими строками работает нативно на уровне табличного движка.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Ограничения:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Ограниченная адаптивность`}),`: Классическую сетку `,(0,o.jsx)(t.code,{children:`<table>`}),` сложно адаптировать под мобильные устройства (например, превратить строки в мобильные карточки).`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Высокая нагрузка при виртуализации`}),`: Динамическая вставка и удаление строк из `,(0,o.jsx)(t.code,{children:`<table>`}),` вызывают тяжелый пересчет макета браузера (reflow).`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Типичные сценарии:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Классические аналитические таблицы и отчеты`}),`
`,(0,o.jsx)(t.li,{children:`Таблицы с динамической шириной колонок по тексту`}),`
`,(0,o.jsxs)(t.li,{children:[`Таблицы с вертикальным объединением ячеек (`,(0,o.jsx)(t.code,{children:`rowspan`}),`)`]}),`
`,(0,o.jsx)(t.li,{children:`Десктопные интерфейсы без необходимости мобильной трансформации`}),`
`]}),`
`,(0,o.jsx)(t.h3,{id:`tableflex`,children:`TableFlex`}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`TableFlex`}),` — адаптивная флекс-таблица на базе блочных элементов (`,(0,o.jsx)(t.code,{children:`<div>`}),`) с использованием макета Flexbox (`,(0,o.jsx)(t.code,{children:`display: flex`}),`).`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Особенности и плюсы:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Высокая гибкость и мобильная адаптивность`}),`: Элементы легко перестраиваются под мобильные устройства и адаптивные брейкпоинты (вплоть до превращения строк в карточки).`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Поддержка виртуального скролла и отложенной загрузки`}),`: Эффективный рендеринг и виртуализация огромных наборов данных с помощью `,(0,o.jsx)(t.code,{children:`TableFlexRecordLazy`}),` (`,(0,o.jsx)(t.code,{children:`lazy`}),`).`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Полный контроль над пропорциями колонок`}),`: Точная настройка размеров колонок через `,(0,o.jsx)(t.code,{children:`flex-grow`}),`, `,(0,o.jsx)(t.code,{children:`flex-basis`}),` и `,(0,o.jsx)(t.code,{children:`min-width: 0`}),`.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsxs)(t.strong,{children:[`Простое позиционирование зафиксированных колонок (`,(0,o.jsx)(t.code,{children:`stickyLeft`}),`)`]}),`: Легкая фиксация столбцов без табличных ограничений.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Ограничения:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Независимый расчет ширины ячеек`}),`: Каждая строка является отдельным flex-контейнером. Чтобы колонки во всех строках стояли ровно, требуется задавать `,(0,o.jsx)(t.code,{children:`min-width: 0`}),` или явные пропорции `,(0,o.jsx)(t.code,{children:`flex-grow`}),`.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsxs)(t.strong,{children:[`Отсутствие нативного `,(0,o.jsx)(t.code,{children:`rowspan`})]}),`: Вертикальное объединение ячеек не поддерживается нативно из-за изолированности flex-строк.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Типичные сценарии:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Списки и таблицы, адаптируемые под мобильные экраны`}),`
`,(0,o.jsx)(t.li,{children:`Высоконагруженные таблицы с виртуализацией большого количества строк`}),`
`,(0,o.jsx)(t.li,{children:`Таблицы с точным контролем пропорций столбцов через CSS`}),`
`]}),`
`,(0,o.jsx)(t.h3,{id:`выбор-компонента`,children:`Выбор компонента`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Используйте Table`}),`, когда нужна классическая таблица с авто-выравниванием колонок по содержимому и поддержкой `,(0,o.jsx)(t.code,{children:`rowspan`}),` на десктопе.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Используйте TableFlex`}),`, когда нужна адаптивность под мобильные устройства, виртуальный скролл или ленивая загрузка большого объема данных.`]}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=r(),t()})))()}s();export{a as default};