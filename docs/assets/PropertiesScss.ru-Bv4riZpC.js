import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/PropertiesScss - Генерация SCSS"}),`
`,s.jsx(e.h1,{id:"класс-propertiesscss",children:"Класс PropertiesScss"}),`
`,s.jsxs(e.p,{children:["Класс ",s.jsx(e.code,{children:"PropertiesScss"})," отвечает за преобразование токенов и свойств дизайн-системы в структурированный SCSS-код. Полученный код используется для интеграции переменных дизайна в стили библиотеки, обеспечивая синхронизацию между JSON-определениями и Sass-переменными."]}),`
`,s.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Автоматическая кодогенерация"})," — создание полной SCSS-структуры для подключения в стили."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Интеграция с миксинами"})," — генерирует вызовы специальных миксинов (",s.jsx(e.code,{children:"setDesignsDesigns"}),", ",s.jsx(e.code,{children:"setDesignsRoot"})," и др.) для автоматической настройки."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Поддержка медиа-запросов"})," — преобразует размеры устройств в SCSS-карту."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Обработка палитры"})," — генерирует списки используемых цветов и уровней насыщенности."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Умное форматирование"})," — корректно обрабатывает типы значений (цвета, размеры, ссылки) для соответствия синтаксису SCSS."]}),`
`]}),`
`,s.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,s.jsxs(e.p,{children:["Для инициализации генератора SCSS передайте экземпляр ",s.jsx(e.code,{children:"PropertiesItems"})," в конструктор."]}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"Параметры:"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"items: PropertiesItems"})," — объект управления всеми элементами свойств."]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`import { PropertiesItems, PropertiesScss } from '@dxtmisha/scripts'

const manager = new PropertiesItems(tokenData)
const generator = new PropertiesScss(manager)
`})}),`
`,s.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,s.jsx(e.h3,{id:"get",children:s.jsx(e.code,{children:"get"})}),`
`,s.jsx(e.p,{children:"Возвращает полную отформатированную строку SCSS, готовую к записи в файл. Эта строка включает в себя импорт основных переменных стилей и последовательные вызовы миксинов для регистрации дизайнов, корневых свойств, медиа-запросов, классов и палитры."}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Возвращает:"})," ",s.jsx(e.code,{children:"string"})," — полный текст SCSS файла."]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`const scssContent = generator.get();
// Результат: "@use \\"@dxtmisha/styles\\" as variables; \\n @include variables.setDesignsDesigns(...)"
`})}),`
`,s.jsx(e.h3,{id:"getproperties",children:s.jsx(e.code,{children:"getProperties"})}),`
`,s.jsx(e.p,{children:"Генерирует специализированную структуру карты SCSS для всех свойств, определенных в системе. Этот метод фокусируется на общих токенах (переменных), которые должны быть доступны в глобальной области видимости CSS/SCSS."}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Возвращает:"})," ",s.jsx(e.code,{children:"string"})," — фрагмент SCSS с вызовом миксина ",s.jsx(e.code,{children:"setDesignsProperties"}),"."]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`const propertyMap = generator.getProperties();
`})}),`
`,s.jsx(e.h2,{id:"операции",children:"Операции"}),`
`,s.jsx(e.h3,{id:"процесс-генерации-scss",children:"Процесс генерации SCSS"}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"PropertiesScss"})," выполняет многоэтапную трансформацию данных:"]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Сбор дизайнов"}),": Идентифицирует все активные дизайны и формирует список для миксина ",s.jsx(e.code,{children:"setDesignsDesigns"}),"."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Анализ категорий"}),": Распределяет свойства по категориям (root, class, theme) для генерации соответствующих блоков."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Разрешение палитры"}),": Использует ",s.jsx(e.code,{children:"PropertiesPalette"})," для получения списка реально используемых цветов и шагов насыщенности."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Синтаксический анализ значений"}),": Метод ",s.jsx(e.code,{children:"getValueItem"})," проверяет каждое значение на соответствие типам SCSS (строки оборачиваются в кавычки, HEX-коды и размеры с единицами измерения остаются без кавычек)."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Сборка структуры"}),": Формирует вложенные карты (maps) SCSS, соблюдая правильные отступы и разделители для обеспечения валидности Sass-кода."]}),`
`]}),`
`,s.jsx(e.h2,{id:"примеры",children:"Примеры"}),`
`,s.jsx(e.h3,{id:"полный-цикл-генерации",children:"Полный цикл генерации"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`import { PropertiesItems, PropertiesScss } from '@dxtmisha/scripts'

const items = new PropertiesItems(data)
const scss = new PropertiesScss(items)

// Получаем готовый код для записи в variables.scss
const fileData = scss.get()
`})})]})}function j(n={}){const{wrapper:e}={...i(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(r,{...n})}):r(n)}export{j as default};
