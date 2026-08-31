import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{d as i,f as a,s as o}from"./blocks-8NMpF0hx.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/wiki/styles/# Контейнеры элементов`}),`
`,(0,l.jsx)(t.h1,{id:`контейнеры-элементов`,children:`Контейнеры элементов`}),`
`,(0,l.jsxs)(t.p,{children:[`Класс `,(0,l.jsx)(t.code,{children:`.wiki-storybook-item`}),` — универсальный контейнер для демонстрации компонентов. Он обеспечивает стандартные скругления, рамки и управление пропорциями.`]}),`
`,(0,l.jsx)(t.h2,{id:`базовое-использование`,children:`Базовое использование`}),`
`,(0,l.jsxs)(t.p,{children:[`По умолчанию элемент имеет пропорции `,(0,l.jsx)(t.strong,{children:`1:1`}),` и максимальную ширину `,(0,l.jsx)(t.strong,{children:`1080px`}),`.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-html`,children:`<div class="wiki-storybook-item">
  <!-- Контент -->
</div>
`})}),`
`,(0,l.jsx)(i,{children:(0,l.jsx)(`div`,{class:`wiki-storybook-item`,children:(0,l.jsx)(t.p,{children:`Элемент 1:1`})})}),`
`,(0,l.jsx)(t.h2,{id:`метки`,children:`Метки`}),`
`,(0,l.jsxs)(t.p,{children:[`Внутренний элемент `,(0,l.jsx)(t.code,{children:`.wiki-storybook-item__label`}),` предназначен для подписей. По умолчанию он прижат к левому верхнему углу.`]}),`
`,(0,l.jsx)(t.h3,{id:`позиционирование-метки`,children:`Позиционирование метки:`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsx)(t.li,{children:`Стандарт: Абсолютное позиционирование поверх контента.`}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item__label--static`}),`: Статичное позиционирование (обычный текстовый блок).`]}),`
`]}),`
`,(0,l.jsx)(i,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex-column`,children:[(0,l.jsxs)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--compact`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item__label`,children:`Overlay Label`}),(0,l.jsx)(`div`,{class:`wiki-storybook-dummy--size--sm wiki-storybook-dummy--color--blue`})]}),(0,l.jsxs)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--compact`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item__label wiki-storybook-item__label--static`,children:`Static Label`}),(0,l.jsx)(`div`,{class:`wiki-storybook-dummy--size--sm wiki-storybook-dummy--color--blue`})]})]})}),`
`,(0,l.jsx)(t.h2,{id:`пропорции`,children:`Пропорции`}),`
`,(0,l.jsx)(t.p,{children:`Модификаторы для изменения соотношения сторон:`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--auto`}),`: автоматическая высота под контент`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--rectangle`}),`: соотношение `,(0,l.jsx)(t.strong,{children:`16:9`})]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--widescreen`}),`: соотношение `,(0,l.jsx)(t.strong,{children:`32:9`})]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--compact`}),`: соотношение `,(0,l.jsx)(t.strong,{children:`64:9`})]}),`
`]}),`
`,(0,l.jsx)(i,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex-column`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto`,children:`Автоматическая высота`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--rectangle`,children:`Элемент 16:9`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--widescreen`,children:`Элемент 32:9`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--compact`,children:`Элемент 64:9`})]})}),`
`,(0,l.jsx)(t.h2,{id:`сетки-и-размеры`,children:`Сетки и размеры`}),`
`,(0,l.jsxs)(t.p,{children:[`Классы в формате `,(0,l.jsx)(t.code,{children:`--squared--[size]`}),` управляют шириной элемента внутри сетки `,(0,l.jsx)(t.code,{children:`.wiki-storybook-group`}),`.`]}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--squared--xs`}),`: Занимает 3 колонки на мобильных, 2 на десктопе.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--squared--sm`}),`: Занимает 6 колонок на мобильных, 2 или 4 на десктопе.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--squared--md`}),`: Занимает 12 колонок на мобильных, 4 или 6 на десктопе.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--squared--lg`}),`: Занимает 12 колонок на мобильных, 6 на десктопе.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--squared--max`}),`: Занимает все 12 колонок на любом устройстве.`]}),`
`]}),`
`,(0,l.jsx)(i,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-group`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--xs`,children:`XS`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--xs`,children:`XS`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--sm`,children:`SM`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--widescreen wiki-storybook-item--squared--md`,children:`MD`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--widescreen wiki-storybook-item--squared--max`,children:`MAX`})]})}),`
`,(0,l.jsx)(t.h2,{id:`дополнительные-модификаторы`,children:`Дополнительные модификаторы`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--widthAuto`}),`: Устанавливает автоматическую ширину (по умолчанию `,(0,l.jsx)(t.code,{children:`100%`}),`).`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--overflowVisible`}),`: Позволяет контенту выходить за границы (отключает `,(0,l.jsx)(t.code,{children:`hidden`}),`).`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--overflowAuto`}),`: Включает стандартную прокрутку браузера (`,(0,l.jsx)(t.code,{children:`overflow: auto`}),`).`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--borderNone`}),`: Удаляет стандартную рамку (границу).`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--padding`}),`: Добавляет стандартный отступ `,(0,l.jsx)(t.code,{children:`16px`}),`.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--center`}),`: Центрирует содержимое контента.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--rtl`}),`: Устанавливает направление текста справа налево (для тестирования RTL).`]}),`
`]}),`
`,(0,l.jsx)(i,{children:(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding wiki-storybook-item--center`,children:(0,l.jsx)(t.p,{children:`Контент с паддингом в центре (width: auto)`})})})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};