import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/scripts/Classes/PropertiesSettings - Настройки компонентов"}),`
`,e.jsx(n.h1,{id:"класс-propertiessettings",children:"Класс PropertiesSettings"}),`
`,e.jsxs(n.p,{children:["Класс ",e.jsx(n.code,{children:"PropertiesSettings"})," отвечает за автоматический поиск и загрузку конфигурационных файлов компонентов (настроек) во всех активных дизайнах. Он сканирует специальные директории ",e.jsx(n.code,{children:"settings"})," и объединяет найденные токены в единый реестр, который затем используется для генерации стилей и типизации."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматическое сканирование"})," — самостоятельно находит все папки компонентов в путях ",e.jsx(n.code,{children:"components"})," и ",e.jsx(n.code,{children:"constructor"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Мульти-дизайнерская поддержка"})," — загружает настройки для каждого дизайна отдельно и объединяет их с учетом контекста."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Интеграция с конструктором"})," — содержит специальную логику для сбора свойств конструктора компонентов (",e.jsx(n.code,{children:"dxt.constructor"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Стандартизация"})," — автоматически преобразует сырые данные из файлов настроек в стандартизированный формат свойств через ",e.jsx(n.code,{children:"PropertiesStandard"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Для инициализации передайте экземпляр ",e.jsx(n.code,{children:"PropertiesPath"})," в конструктор."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesPath"})," — объект для работы с путями дизайн-системы."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesPath, PropertiesSettings } from '@dxtmisha/scripts'

const pathHandler = new PropertiesPath()
const settings = new PropertiesSettings(pathHandler)
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsx(n.p,{children:"Возвращает объединенный список всех свойств настроек, найденных в системе. Сюда входят как индивидуальные настройки компонентов каждого дизайна, так и общие свойства конструктора компонентов."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"PropertyList"})," — объект, содержащий все загруженные и стандартизированные настройки."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const allSettings = settings.get();
// Результат: { basic: { button: { ... } }, 'dxt.constructor': { ... } }
`})}),`
`,e.jsx(n.h2,{id:"операции",children:"Операции"}),`
`,e.jsx(n.h3,{id:"процесс-сбора-настроек",children:"Процесс сбора настроек"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"PropertiesSettings"})," выполняет поиск данных в несколько этапов:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Определение путей"}),": Класс получает актуальные пути к директориям ",e.jsx(n.code,{children:"settings"})," для каждого дизайна через менеджер путей."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Сканирование директорий"}),": Для каждого найденного пути сканируются все поддиректории (имена компонентов)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Чтение файлов"}),": Внутри каждой папки компонента ищется файл с токенами (настройками), который считывается через ",e.jsx(n.code,{children:"PropertiesFile"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Нормализация"}),": Полученные данные проходят через ",e.jsx(n.code,{children:"PropertiesStandard"})," для приведения их к единому формату (",e.jsx(n.code,{children:"PropertyItem"}),"), включая преобразование имен в kebab-case."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Генерация конструктора"}),": Параллельно вызывается ",e.jsx(n.code,{children:"getConstructorProperties()"}),", которая на основе списка найденных папок формирует мета-данные для конструктора компонентов."]}),`
`]}),`
`,e.jsx(n.h2,{id:"примеры",children:"Примеры"}),`
`,e.jsx(n.h3,{id:"сбор-всех-настроек-системы",children:"Сбор всех настроек системы"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesSettings, PropertiesPath } from '@dxtmisha/scripts'

const settingsManager = new PropertiesSettings(new PropertiesPath())
const config = settingsManager.get()

// Теперь config содержит все переменные компонентов для всех тем
`})})]})}function j(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{j as default};
