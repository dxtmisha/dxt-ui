import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignStructureStyles - Компилятор стилей компонента`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designstructurestyles`,children:`Класс DesignStructureStyles`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DesignStructureStyles`}),` отвечает за преобразование структурных дизайн-токенов компонента в стандартизированный массив строк свойств CSS. Используя движок `,(0,c.jsx)(t.code,{children:`StylesProperties`}),`, он гарантирует, что каждый компонент наследует свою базовую визуальную идентичность напрямую из центральной конфигурации темы дизайн-системы.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Трансформация токенов в CSS`}),` — автоматически сопоставляет абстрактные токены дизайна с конкретными свойствами CSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Изоляция селекторов (BEM)`}),` — оборачивает сгенерированные стили в селектор уровня компонента (`,(0,c.jsx)(t.code,{children:`& { ... }`}),`) для обеспечения изоляции стилей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Иерархическое наследование`}),` — использует родительские структурные метаданные для точного разрешения вложенных переменных свойств.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Стандартизированное форматирование`}),` — применяет согласованные отступы и переносы строк, гарантируя читаемость сгенерированных файлов стилей.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:`Для инициализации компилятора стилей укажите идентификатор компонента, стили которого необходимо сгенерировать. Класс автоматически загрузит релевантные структурные метаданные.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`component: string`}),` — идентификатор компонента (например, `,(0,c.jsx)(t.code,{children:`'button'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignStructureStyles } from '@dxtmisha/scripts'

const compiler = new DesignStructureStyles('button')
const stylesArray = compiler.get()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): string[]`}),` — запускает процесс трансформации и возвращает массив строк свойств CSS.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`рабочий-процесс-компиляции-стилей`,children:`Рабочий процесс компиляции стилей`}),`
`,(0,c.jsx)(t.p,{children:`При инициализации компилятор следует структурированному конвейеру:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Загрузка метаданных`}),`: использует логику родительского `,(0,c.jsx)(t.code,{children:`DesignStructureItemAbstract`}),` для получения специфического `,(0,c.jsx)(t.code,{children:`PropertyItemsItem`}),`, связанного с компонентом.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Контекстный селектор`}),`: движок оборачивает все выходные свойства в самоссылающийся CSS-селектор (`,(0,c.jsx)(t.code,{children:`& { ... }`}),`) для поддержания совместимости с CSS-in-JS и препроцессорами.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Разрешение свойств`}),`: создается экземпляр `,(0,c.jsx)(t.code,{children:`StylesProperties`}),`, которому передаются собранные метаданные. Этот суб-движок обходит каждый токен, разрешая переменные темы, юниты и фолбэки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Буферизация вывода`}),`: финальный список свойств объединяется в плоский массив строк, готовый к внедрению в CSS-файл или тег стиля.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`интеграция-с-движком-тем`,children:`Интеграция с движком тем`}),`
`,(0,c.jsx)(t.p,{children:`Этот класс выступает в качестве моста между необработанными данными дизайна и финальным визуальным представлением. Централизуя логику компиляции стилей, система гарантирует, что изменения в основной архитектуре темы (такие как соглашения об именовании переменных или логика единиц измерения) автоматически распространяются на все компоненты во время следующего цикла сборки.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};