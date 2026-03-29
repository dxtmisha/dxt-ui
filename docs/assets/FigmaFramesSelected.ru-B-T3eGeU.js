import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/figma-code/Classes/FigmaFramesSelected - Управление выбранными фреймами`}),`
`,(0,c.jsx)(n.h1,{id:`класс-figmaframesselected`,children:`Класс FigmaFramesSelected`}),`
`,(0,c.jsx)(n.p,{children:`Статический утилитарный класс для управления, кэширования и синхронизации списка выбранных фреймов в среде плагина Figma. Он отвечает за долговременное хранение и двустороннюю связь между плагином и UI плагина относительно состояния выбора фреймов.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Постоянное хранение`}),` — Использует `,(0,c.jsx)(n.code,{children:`FigmaStorage`}),` для сохранения списка идентификаторов выбранных фреймов между перезагрузками плагина.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое кэширование`}),` — Эффективно управляет кэшем выбранных идентификаторов по принципу синглтона для быстрого доступа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с мессенджером`}),` — Упрощает двустороннюю связь для получения и обновления состояния выбора.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`статические-методы`,children:`Статические методы`}),`
`,(0,c.jsx)(n.h3,{id:`has`,children:(0,c.jsx)(n.code,{children:`has`})}),`
`,(0,c.jsx)(n.p,{children:`Проверяет, выбран ли в данный момент фрейм с указанным идентификатором.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Уникальный идентификатор узла Figma (ID фрейма).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если фрейм выбран, `,(0,c.jsx)(n.code,{children:`false`}),` в противном случае.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const has = FigmaFramesSelected.has('123:456')
`})}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Получает текущий список идентификаторов выбранных фреймов, используя кэш при его наличии.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string[]`}),` — Массив идентификаторов выбранных фреймов.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const selectedIds = FigmaFramesSelected.get()
`})}),`
`,(0,c.jsx)(n.h3,{id:`toggle`,children:(0,c.jsx)(n.code,{children:`toggle`})}),`
`,(0,c.jsx)(n.p,{children:`Переключает состояние выбора фрейма.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Уникальный идентификатор узла Figma (ID фрейма).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: boolean`}),` — Выбрать (`,(0,c.jsx)(n.code,{children:`true`}),`) или отменить выбор (`,(0,c.jsx)(n.code,{children:`false`}),`) фрейма.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`FigmaFramesSelected.toggle('123:456', true)
`})}),`
`,(0,c.jsx)(n.h3,{id:`add`,children:(0,c.jsx)(n.code,{children:`add`})}),`
`,(0,c.jsx)(n.p,{children:`Добавляет идентификатор фрейма в список выбора и обновляет хранилище.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Уникальный идентификатор узла Figma (ID фрейма) для добавления.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`FigmaFramesSelected.add('123:456')
`})}),`
`,(0,c.jsx)(n.h3,{id:`remove`,children:(0,c.jsx)(n.code,{children:`remove`})}),`
`,(0,c.jsx)(n.p,{children:`Удаляет идентификатор фрейма из списка выбора и обновляет хранилище.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Уникальный идентификатор узла Figma (ID фрейма) для удаления.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`FigmaFramesSelected.remove('123:456')
`})}),`
`,(0,c.jsx)(n.h3,{id:`send`,children:(0,c.jsx)(n.code,{children:`send`})}),`
`,(0,c.jsx)(n.p,{children:`Настраивает прослушиватели событий через мессенджер плагина для обработки запросов списка выбора и обновлений из UI.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`FigmaFramesSelected.send()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};