import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/scripts/Classes/DesignStructureStyles - Компилятор стилей компонента"}),`
`,n.jsx(s.h1,{id:"класс-designstructurestyles",children:"Класс DesignStructureStyles"}),`
`,n.jsxs(s.p,{children:["Класс ",n.jsx(s.code,{children:"DesignStructureStyles"})," отвечает за преобразование структурных дизайн-токенов компонента в стандартизированный массив строк свойств CSS. Используя движок ",n.jsx(s.code,{children:"StylesProperties"}),", он гарантирует, что каждый компонент наследует свою базовую визуальную идентичность напрямую из центральной конфигурации темы дизайн-системы."]}),`
`,n.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Трансформация токенов в CSS"})," — автоматически сопоставляет абстрактные токены дизайна с конкретными свойствами CSS."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Изоляция селекторов (BEM)"})," — оборачивает сгенерированные стили в селектор уровня компонента (",n.jsx(s.code,{children:"& { ... }"}),") для обеспечения изоляции стилей."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Иерархическое наследование"})," — использует родительские структурные метаданные для точного разрешения вложенных переменных свойств."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Стандартизированное форматирование"})," — применяет согласованные отступы и переносы строк, гарантируя читаемость сгенерированных файлов стилей."]}),`
`]}),`
`,n.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(s.p,{children:"Для инициализации компилятора стилей укажите идентификатор компонента, стили которого необходимо сгенерировать. Класс автоматически загрузит релевантные структурные метаданные."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"component: string"})," — идентификатор компонента (например, ",n.jsx(s.code,{children:"'button'"}),")."]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { DesignStructureStyles } from '@dxtmisha/scripts'

const compiler = new DesignStructureStyles('button')
const stylesArray = compiler.get()
`})}),`
`,n.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(s.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"make(): string[]"})," — запускает процесс трансформации и возвращает массив строк свойств CSS."]}),`
`]}),`
`,n.jsx(s.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(s.h3,{id:"рабочий-процесс-компиляции-стилей",children:"Рабочий процесс компиляции стилей"}),`
`,n.jsx(s.p,{children:"При инициализации компилятор следует структурированному конвейеру:"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Загрузка метаданных"}),": использует логику родительского ",n.jsx(s.code,{children:"DesignStructureItemAbstract"})," для получения специфического ",n.jsx(s.code,{children:"PropertyItemsItem"}),", связанного с компонентом."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Контекстный селектор"}),": движок оборачивает все выходные свойства в самоссылающийся CSS-селектор (",n.jsx(s.code,{children:"& { ... }"}),") для поддержания совместимости с CSS-in-JS и препроцессорами."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Разрешение свойств"}),": создается экземпляр ",n.jsx(s.code,{children:"StylesProperties"}),", которому передаются собранные метаданные. Этот суб-движок обходит каждый токен, разрешая переменные темы, юниты и фолбэки."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Буферизация вывода"}),": финальный список свойств объединяется в плоский массив строк, готовый к внедрению в CSS-файл или тег стиля."]}),`
`]}),`
`,n.jsx(s.h3,{id:"интеграция-с-движком-тем",children:"Интеграция с движком тем"}),`
`,n.jsx(s.p,{children:"Этот класс выступает в качестве моста между необработанными данными дизайна и финальным визуальным представлением. Централизуя логику компиляции стилей, система гарантирует, что изменения в основной архитектуре темы (такие как соглашения об именовании переменных или логика единиц измерения) автоматически распространяются на все компоненты во время следующего цикла сборки."})]})}function j(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{j as default};
