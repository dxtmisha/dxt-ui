import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/DesignStructureStyles - Компилятор стилей компонента`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designstructurestyles`,children:`Класс DesignStructureStyles`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignStructureStyles`}),` отвечает за преобразование структурных дизайн-токенов компонента в стандартизированный массив строк свойств CSS. Используя движок `,(0,c.jsx)(n.code,{children:`StylesProperties`}),`, он гарантирует, что каждый компонент наследует свою базовую визуальную идентичность напрямую из центральной конфигурации темы дизайн-системы.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Трансформация токенов в CSS`}),` — автоматически сопоставляет абстрактные токены дизайна с конкретными свойствами CSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Изоляция селекторов (BEM)`}),` — оборачивает сгенерированные стили в селектор уровня компонента (`,(0,c.jsx)(n.code,{children:`& { ... }`}),`) для обеспечения изоляции стилей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Иерархическое наследование`}),` — использует родительские структурные метаданные для точного разрешения вложенных переменных свойств.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандартизированное форматирование`}),` — применяет согласованные отступы и переносы строк, гарантируя читаемость сгенерированных файлов стилей.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Для инициализации компилятора стилей укажите идентификатор компонента, стили которого необходимо сгенерировать. Класс автоматически загрузит релевантные структурные метаданные.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component: string`}),` — идентификатор компонента (например, `,(0,c.jsx)(n.code,{children:`'button'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignStructureStyles } from '@dxtmisha/scripts'

const compiler = new DesignStructureStyles('button')
const stylesArray = compiler.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): string[]`}),` — запускает процесс трансформации и возвращает массив строк свойств CSS.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`рабочий-процесс-компиляции-стилей`,children:`Рабочий процесс компиляции стилей`}),`
`,(0,c.jsx)(n.p,{children:`При инициализации компилятор следует структурированному конвейеру:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Загрузка метаданных`}),`: использует логику родительского `,(0,c.jsx)(n.code,{children:`DesignStructureItemAbstract`}),` для получения специфического `,(0,c.jsx)(n.code,{children:`PropertyItemsItem`}),`, связанного с компонентом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Контекстный селектор`}),`: движок оборачивает все выходные свойства в самоссылающийся CSS-селектор (`,(0,c.jsx)(n.code,{children:`& { ... }`}),`) для поддержания совместимости с CSS-in-JS и препроцессорами.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Разрешение свойств`}),`: создается экземпляр `,(0,c.jsx)(n.code,{children:`StylesProperties`}),`, которому передаются собранные метаданные. Этот суб-движок обходит каждый токен, разрешая переменные темы, юниты и фолбэки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Буферизация вывода`}),`: финальный список свойств объединяется в плоский массив строк, готовый к внедрению в CSS-файл или тег стиля.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`интеграция-с-движком-тем`,children:`Интеграция с движком тем`}),`
`,(0,c.jsx)(n.p,{children:`Этот класс выступает в качестве моста между необработанными данными дизайна и финальным визуальным представлением. Централизуя логику компиляции стилей, система гарантирует, что изменения в основной архитектуре темы (такие как соглашения об именовании переменных или логика единиц измерения) автоматически распространяются на все компоненты во время следующего цикла сборки.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};