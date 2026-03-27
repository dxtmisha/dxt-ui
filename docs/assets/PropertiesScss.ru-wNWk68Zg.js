import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/PropertiesScss - Генерация SCSS`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiesscss`,children:`Класс PropertiesScss`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesScss`}),` отвечает за преобразование токенов и свойств дизайн-системы в структурированный SCSS-код. Полученный код используется для интеграции переменных дизайна в стили библиотеки, обеспечивая синхронизацию между JSON-определениями и Sass-переменными.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая кодогенерация`}),` — создание полной SCSS-структуры для подключения в стили.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с миксинами`}),` — генерирует вызовы специальных миксинов (`,(0,c.jsx)(n.code,{children:`setDesignsDesigns`}),`, `,(0,c.jsx)(n.code,{children:`setDesignsRoot`}),` и др.) для автоматической настройки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка медиа-запросов`}),` — преобразует размеры устройств в SCSS-карту.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Обработка палитры`}),` — генерирует списки используемых цветов и уровней насыщенности.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Умное форматирование`}),` — корректно обрабатывает типы значений (цвета, размеры, ссылки) для соответствия синтаксису SCSS.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации генератора SCSS передайте экземпляр `,(0,c.jsx)(n.code,{children:`PropertiesItems`}),` в конструктор.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: PropertiesItems`}),` — объект управления всеми элементами свойств.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesItems, PropertiesScss } from '@dxtmisha/scripts'

const manager = new PropertiesItems(tokenData)
const generator = new PropertiesScss(manager)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает полную отформатированную строку SCSS, готовую к записи в файл. Эта строка включает в себя импорт основных переменных стилей и последовательные вызовы миксинов для регистрации дизайнов, корневых свойств, медиа-запросов, классов и палитры.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — полный текст SCSS файла.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const scssContent = generator.get();
// Результат: "@use \\"@dxtmisha/styles\\" as variables; \\n @include variables.setDesignsDesigns(...)"
`})}),`
`,(0,c.jsx)(n.h3,{id:`getproperties`,children:(0,c.jsx)(n.code,{children:`getProperties`})}),`
`,(0,c.jsx)(n.p,{children:`Генерирует специализированную структуру карты SCSS для всех свойств, определенных в системе. Этот метод фокусируется на общих токенах (переменных), которые должны быть доступны в глобальной области видимости CSS/SCSS.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — фрагмент SCSS с вызовом миксина `,(0,c.jsx)(n.code,{children:`setDesignsProperties`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const propertyMap = generator.getProperties();
`})}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`процесс-генерации-scss`,children:`Процесс генерации SCSS`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesScss`}),` выполняет многоэтапную трансформацию данных:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сбор дизайнов`}),`: Идентифицирует все активные дизайны и формирует список для миксина `,(0,c.jsx)(n.code,{children:`setDesignsDesigns`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Анализ категорий`}),`: Распределяет свойства по категориям (root, class, theme) для генерации соответствующих блоков.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Разрешение палитры`}),`: Использует `,(0,c.jsx)(n.code,{children:`PropertiesPalette`}),` для получения списка реально используемых цветов и шагов насыщенности.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синтаксический анализ значений`}),`: Метод `,(0,c.jsx)(n.code,{children:`getValueItem`}),` проверяет каждое значение на соответствие типам SCSS (строки оборачиваются в кавычки, HEX-коды и размеры с единицами измерения остаются без кавычек).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сборка структуры`}),`: Формирует вложенные карты (maps) SCSS, соблюдая правильные отступы и разделители для обеспечения валидности Sass-кода.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`полный-цикл-генерации`,children:`Полный цикл генерации`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesItems, PropertiesScss } from '@dxtmisha/scripts'

const items = new PropertiesItems(data)
const scss = new PropertiesScss(items)

// Получаем готовый код для записи в variables.scss
const fileData = scss.get()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};