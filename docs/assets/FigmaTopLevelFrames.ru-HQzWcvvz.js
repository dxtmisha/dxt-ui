import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma-code/Classes/FigmaTopLevelFrames - Управление фреймами верхнего уровня`}),`
`,(0,c.jsx)(n.h1,{id:`класс-figmatoplevelframes`,children:`Класс FigmaTopLevelFrames`}),`
`,(0,c.jsx)(n.p,{children:`Статический утилитарный класс для управления, кэширования и передачи списка фреймов верхнего уровня в среде плагина Figma. Он служит связующим звеном между структурой документа Figma и UI плагина через выделенный мессенджер.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое кэширование`}),` — эффективно управляет кэшем отформатированных данных фреймов по принципу синглтона.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с мессенджером`}),` — упрощает двустороннюю связь между плагином и UI относительно списков фреймов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Обработка узлов`}),` — использует `,(0,c.jsx)(n.code,{children:`FigmaFrame`}),` для извлечения и форматирования основных свойств узлов (ID, имя, экспорт в JPG) для отображения в UI.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`статические-методы`,children:`Статические методы`}),`
`,(0,c.jsx)(n.h3,{id:`getlistdata`,children:(0,c.jsx)(n.code,{children:`getListData`})}),`
`,(0,c.jsx)(n.p,{children:`Получает и кэширует отформатированный список фреймов верхнего уровня. Он обрабатывает каждый основной фрейм с текущей страницы, извлекая его ID, имя и экспортируя его в формат JPG.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFramesList>`}),` — Промис, который разрешается в массив отформатированных данных фреймов.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const frames = await FigmaTopLevelFrames.getListData()
`})}),`
`,(0,c.jsx)(n.h3,{id:`send`,children:(0,c.jsx)(n.code,{children:`send`})}),`
`,(0,c.jsxs)(n.p,{children:[`Настраивает прослушиватель запросов фреймов с помощью мессенджера плагина. При получении сообщения `,(0,c.jsx)(n.code,{children:`UI_FIGMA_FRAMES_POST_NAME`}),` из UI, он автоматически получает актуальные данные и отправляет их обратно.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`FigmaTopLevelFrames.send()
`})}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`uifigmaframeslist`,children:(0,c.jsx)(n.code,{children:`UiFigmaFramesList`})}),`
`,(0,c.jsx)(n.p,{children:`Массив объектов, представляющих обработанные данные фреймов для UI.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — уникальный ID узла Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — отображаемое имя фрейма.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image: Uint8Array | string`}),` — экспортированные данные JPG.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: FigmaItem`}),` — экземпляр обертки `,(0,c.jsx)(n.code,{children:`FigmaItem`}),` для дальнейших операций.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};