import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/1. UI/2. Глобальные токены и медиа`}),`
`,(0,c.jsx)(t.h1,{id:`глобальные-токены-и-медиа-srcmedia`,children:`Глобальные токены и медиа (src/media)`}),`
`,(0,c.jsxs)(t.p,{children:[`Каталог `,(0,c.jsx)(t.code,{children:`src/media`}),` предназначен для хранения глобальных дизайн-токенов и медиа-ресурсов (иконок) вашей дизайн-системы. Структура файлов и набор токенов в каждом проекте индивидуальны и зависят от требований вашего дизайна.`]}),`
`,(0,c.jsx)(t.h2,{id:`1-структура-каталога`,children:`1. Структура каталога`}),`
`,(0,c.jsx)(t.p,{children:`Пример базовой организации:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`src/media/
├── icons/                   # SVG-иконки проекта
│   └── *.svg
├── tokens/                  # JSON-файлы дизайн-токенов (цвета, сетки, отступы и др.)
│   └── *.json
└── properties.json          # Главный файл конфигурации глобальных токенов
`})}),`
`,(0,c.jsx)(t.h2,{id:`2-конфигурация-токенов-propertiesjson`,children:`2. Конфигурация токенов (properties.json)`}),`
`,(0,c.jsxs)(t.p,{children:[`Файл `,(0,c.jsx)(t.code,{children:`src/media/properties.json`}),` объединяет токены проекта, распределяет их по категориям и определяет, как они будут скомпилированы:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "ref": {
    "value": {
      "file|ref": "tokens/ref.json"
    },
    "_type": "var",
    "_category": "root"
  },
  "sys": {
    "value": {
      "file|sys": "tokens/sys.json"
    },
    "_type": "var",
    "_category": "root"
  },
  "color": {
    "value": {
      "file|color": "tokens/color.json"
    },
    "_category": "class"
  },
  "dark": {
    "value": {
      "file|dark": "tokens/dark.json"
    },
    "_category": "theme"
  }
}
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"file|<name>": "path.json"`}),` — подключает отдельный JSON-файл с токенами.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"_type": "var"`}),` — экспортирует токены в виде CSS-переменных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"_category": "root"`}),` — корневые системные переменные.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"_category": "class"`}),` — переиспользуемые группы стилей для компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"_category": "theme"`}),` — токены для переопределения тем оформления (например, темного режима).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`3-добавление-иконок-icons`,children:`3. Добавление иконок (icons)`}),`
`,(0,c.jsx)(t.p,{children:`Для добавления новых иконок:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Поместите векторные файлы `,(0,c.jsx)(t.code,{children:`.svg`}),` в папку `,(0,c.jsx)(t.code,{children:`src/media/icons/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Запустите генерацию:`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run ui
`})}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Скрипт автоматически найдет все иконки, создаст асинхронный импорт и зарегистрирует их в `,(0,c.jsx)(t.code,{children:`Icons`}),`. После этого иконка доступна по имени файла во всех компонентах:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<d1-button icon="my-icon">Кнопка</d1-button>
`})}),`
`,(0,c.jsx)(t.h2,{id:`4-синхронизация`,children:`4. Синхронизация`}),`
`,(0,c.jsx)(t.p,{children:`После любых изменений в токенах или добавления иконок запустите команду:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run ui
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Команда пересоберет SCSS-миксины, обновит `,(0,c.jsx)(t.code,{children:`ui-properties.scss`}),`, подключит иконки и обновит типы.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};