import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/DesignWikiStorm - Генератор метаданных для IDE`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designwikistorm`,children:`Класс DesignWikiStorm`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignWikiStorm`}),` — это специализированная утилита, предназначенная для сокращения разрыва между кодом дизайн-системы и инструментами продуктивности разработчиков. Он автоматизирует генерацию `,(0,c.jsx)(n.code,{children:`web-types.json`}),` — стандартизированного формата метаданных, используемого IDE от JetBrains (WebStorm, IntelliJ IDEA) для обеспечения продвинутого IntelliSense, автодополнения и подсказок по документации для компонентов Vue.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Соответствие стандарту Web-Types`}),` — генерирует метаданные, строго соответствующие официальной JSON-схеме Web-Types.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Оптимизация IntelliSense`}),` — преобразует свойства компонентов, события и слоты в определения, удобные для IDE.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое обнаружение директорий`}),` — рекурсивно сканирует библиотеку для идентификации всех компонентов и их соответствующих метаданных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамическое управление версиями`}),` — автоматически синхронизирует версию сгенерированных метаданных с текущей версией в `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с фреймворком`}),` — специально настроен для Vue.js, что гарантирует правильное распознавание тегов и атрибутов компонентов в `,(0,c.jsx)(n.code,{children:`.vue`}),` файлах.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Инициализируйте генератор, указав целевую директорию, в которой должен быть сохранен файл `,(0,c.jsx)(n.code,{children:`web-types.json`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dir: string`}),` — путь к выходной директории (по умолчанию `,(0,c.jsx)(n.code,{children:`'dist'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignWikiStorm } from '@dxtmisha/scripts'

const generator = new DesignWikiStorm('dist')
await generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): Promise<void>`}),` — запускает основной процесс генерации.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`рабочий-процесс-генерации-web-types`,children:`Рабочий процесс генерации Web-Types`}),`
`,(0,c.jsxs)(n.p,{children:[`При вызове `,(0,c.jsx)(n.code,{children:`make()`}),` класс координирует многоэтапный синтез данных:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Получение контекста`}),`: загружает `,(0,c.jsx)(n.code,{children:`package.json`}),` для получения имени библиотеки и текущей версии.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инициализация схемы`}),`: создает объект на основе схемы Web-Types, устанавливая фреймворк Vue и определяя разметку документации как Markdown.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Итерация компонентов`}),`: обходит каждый компонент, зарегистрированный в `,(0,c.jsx)(n.code,{children:`LibraryItems`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Анализ элементов`}),`: для каждого компонента создает экземпляр `,(0,c.jsx)(n.code,{children:`DesignWikiStormItem`}),`, который выполняет глубокий анализ исходных файлов компонента для извлечения:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tags`}),`: имена компонентов (например, `,(0,c.jsx)(n.code,{children:`d1-button`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Attributes`}),`: имена свойств, типы и значения по умолчанию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Events`}),`: имена генерируемых событий и их полезная нагрузка.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Slots`}),`: доступные точки настройки и их переменные области видимости.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сохранение`}),`: финальный консолидированный объект метаданных записывается в `,(0,c.jsx)(n.code,{children:`web-types.json`}),` в указанной директории.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`влияние-на-опыт-разработчика`,children:`Влияние на опыт разработчика`}),`
`,(0,c.jsxs)(n.p,{children:[`Благодаря генерации `,(0,c.jsx)(n.code,{children:`web-types.json`}),`, дизайн-система гарантирует, что разработчики, использующие инструменты JetBrains, получают тот же уровень поддержки, что и при работе с нативными HTML-элементами. Типы свойств проверяются в реальном времени внутри IDE, а комментарии к документации отображаются прямо в редакторе кода, что значительно снижает необходимость обращения к внешним страницам вики.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};