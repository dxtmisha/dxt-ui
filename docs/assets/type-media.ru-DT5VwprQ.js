import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI/properties/types/Адаптивность (media, container)`}),`
`,(0,c.jsx)(n.h1,{id:`адаптивность-media-container`,children:`Адаптивность (media, container)`}),`
`,(0,c.jsxs)(n.p,{children:[`Типы `,(0,c.jsx)(n.code,{children:`media`}),` и `,(0,c.jsx)(n.code,{children:`container`}),` управляют генерацией адаптивных правил (`,(0,c.jsx)(n.code,{children:`@media`}),` и `,(0,c.jsx)(n.code,{children:`@container`}),`). Они позволяют масштабировать интерфейс в зависимости от размеров вьюпорта или родительского блока.`]}),`
`,(0,c.jsx)(n.p,{children:`В системе выделяют четыре основных типа адаптивности, которые тесно интегрированы с точками останова (breakpoints) дизайна:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`media`}),`: Генерирует условие `,(0,c.jsx)(n.code,{children:`min-width`}),` (от указанной точки и выше). Если передать два значения через запятую (например, `,(0,c.jsx)(n.code,{children:`sm,md`}),`), будет сформирован диапазон `,(0,c.jsx)(n.code,{children:`(min-width: ...) and (max-width: ...)`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`media-max`}),`: Генерирует условие `,(0,c.jsx)(n.code,{children:`max-width`}),`. Система автоматически вычитает `,(0,c.jsx)(n.code,{children:`1px`}),` из значения точки останова, чтобы исключить наложение стилей на границе.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`container`}),` / `,(0,c.jsx)(n.strong,{children:`container-max`}),`: Работают идентично медиа-запросам, но генерируют правила `,(0,c.jsx)(n.code,{children:`@container`}),`, позволяя элементу адаптироваться к размеру родителя. Требуют наличия `,(0,c.jsx)(n.code,{children:`container-type`}),` у родительского элемента.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Объявить адаптивный запрос можно через шорткат с разделителем `,(0,c.jsx)(n.code,{children:`|`}),` (например, `,(0,c.jsx)(n.code,{children:`media-max|md`}),`) или явно через свойство `,(0,c.jsx)(n.code,{children:`_type`}),`. В качестве значения (`,(0,c.jsx)(n.code,{children:`value`}),`) принимаются как ключи дизайна (sm, md, lg), так и конкретные значения (768px).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "card": {
    "padding": "24px",
    
    "media-max|md": {            // Query по ширине экрана (media-max)
      "padding": "16px"
    },
    
    "mobile": {                  // Явное объявление типа (explicit)
      "_type": "container-max",  // Query по ширине родителя (container-max)
      "value": "400px",
      "padding": "8px"
    },
    
    "container-max|lg": {        // Шорткат для контейнера
       "padding": "20px"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ожидаемый результат генерации (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card {
  padding: 24px;

  @media (max-width: 960px) {    // media-max|md
    padding: 16px;
  }

  @container (max-width: 400px) { // _type: container-max
    padding: 8px;
  }
  
  @container (max-width: 1200px) { // container-max|lg
    padding: 20px;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`групповое-формирование-media-group`,children:`Групповое формирование (Media Group)`}),`
`,(0,c.jsxs)(n.p,{children:[`Специальные типы `,(0,c.jsx)(n.code,{children:`media-group`}),`, `,(0,c.jsx)(n.code,{children:`media-max-group`}),`, `,(0,c.jsx)(n.code,{children:`container-group`}),` и `,(0,c.jsx)(n.code,{children:`container-max-group`}),` позволяют автоматически генерировать набор адаптивных правил для всех доступных точек останова (breakpoints), определенных в системе.`]}),`
`,(0,c.jsx)(n.p,{children:`Это избавляет от необходимости вручную прописывать каждый медиа-запрос, если логика адаптации одинакова для разных размеров, но должна быть инкапсулирована в отдельные селекторы.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Пример конфигурации (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "group|icon": {
      "_type": "media-group",
      "padding": "8px"
    }
  }
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Результат генерации (SCSS):`}),`
При использовании `,(0,c.jsx)(n.code,{children:`media-group`}),` система создаст вложенные классы для каждого брейкпоинта, добавляя суффикс (например, `,(0,c.jsx)(n.code,{children:`iconSm`}),`, `,(0,c.jsx)(n.code,{children:`iconMd`}),`):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  &--iconSm { @media (min-width: 640px) { padding: 8px; } }
  &--iconMd { @media (min-width: 768px) { padding: 8px; } }
  &--iconLg { @media (min-width: 1024px) { padding: 8px; } }
  // и так далее для всех точек останова...
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};