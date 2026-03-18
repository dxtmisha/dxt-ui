import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/PropertiesFile - Оркестратор путей файловой системы"}),`
`,e.jsx(n.h1,{id:"класс-propertiesfile",children:"Класс PropertiesFile"}),`
`,e.jsxs(n.p,{children:["Класс ",e.jsx(n.code,{children:"PropertiesFile"})," — это комплексная статическая утилита, предназначенная для оркестрации всех задач, связанных с файловой системой, в инструментарии дизайн-системы. Он предоставляет кроссплатформенный интерфейс для манипуляций с путями, синхронного ввода-вывода и рекурсивного управления директориями, гарантируя согласованность поиска файлов и сохранения данных в различных операционных системах и средах разработки."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Нормализация путей"})," — автоматически разрешает специфичные для ОС разделители путей и объединяет сегменты в стандартизированные строки."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Рекурсивный обход"})," — предоставляет специализированные методы для глубокого исследования структур директорий с дополнительной индексацией."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Синхронный ввод-вывод"})," — обрабатывает чтение (JSON/текст) и запись файлов с автоматическим созданием необходимых директорий."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Получение метаданных"})," — извлекает временные метки файлов и статистические данные для логики аннулирования кэша."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Безопасные операции"})," — включает встроенные проверки существования записей, их типа (файл или директория) и статуса модуля."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Являясь статическим классом, ",e.jsx(n.code,{children:"PropertiesFile"})," самоинициализируется и готов к использованию сразу после импорта."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesFile } from '@dxtmisha/scripts'

// Проверка существования конфигурации
if (PropertiesFile.is('design-ui.json')) {
  const config = PropertiesFile.readFile('design-ui.json')
}

// Безопасное объединение путей
const fullPath = PropertiesFile.joinPath(['src', 'tokens', 'colors.json'])
`})}),`
`,e.jsx(n.h2,{id:"методы-проверки",children:"Методы проверки"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"is(path): boolean"})," — синхронно проверяет существование файла или директории."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isDir(path): boolean"})," — определяет, указывает ли путь на директорию."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isModule(): boolean"})," — определяет, подключен ли текущий пакет как внешний модуль."]}),`
`]}),`
`,e.jsx(n.h2,{id:"методы-работы-с-путями",children:"Методы работы с путями"}),`
`,e.jsx(n.h3,{id:"joinpath",children:e.jsx(n.code,{children:"joinPath"})}),`
`,e.jsx(n.p,{children:"Объединяет несколько сегментов пути в одну нормализованную строку пути, используя разделитель текущей ОС."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — массив сегментов или строка пути."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Пример:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const path = PropertiesFile.joinPath(['src', 'styles', 'main.css'])
// Возвращает: "src/styles/main.css" (на Mac/Linux) или "src\\styles\\main.css" (на Windows)
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string"})," — объединенный и нормализованный путь."]}),`
`,e.jsx(n.h3,{id:"joinpathbyname",children:e.jsx(n.code,{children:"joinPathByName"})}),`
`,e.jsx(n.p,{children:"Формирует полный путь к файлу, объединяя путь к директории, имя файла и расширение."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — путь к директории."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — имя файла."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"extension: string"})," — расширение файла (по умолчанию ",e.jsx(n.code,{children:"json"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Пример:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const filePath = PropertiesFile.joinPathByName('data', 'user-profile', 'json')
// Возвращает: "data/user-profile.json"
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.h3,{id:"getpathdir",children:e.jsx(n.code,{children:"getPathDir"})}),`
`,e.jsx(n.p,{children:"Извлекает путь к директории из полного пути. Если передан путь к директории, возвращает его без изменений."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — путь к файлу или директории."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Пример:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const dirOnly = PropertiesFile.getPathDir('src/classes/App.ts')
// Возвращает: "src/classes"
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.h3,{id:"getpathfile",children:e.jsx(n.code,{children:"getPathFile"})}),`
`,e.jsx(n.p,{children:"Формирует массив сегментов пути к файлу."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — базовый путь."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — имя файла."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"extension: string"})," — расширение (по умолчанию ",e.jsx(n.code,{children:"json"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Пример:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const segments = PropertiesFile.getPathFile('dist', 'manifest')
// Возвращает: ["dist", "manifest.json"]
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string[]"})]}),`
`,e.jsx(n.h3,{id:"getroot",children:e.jsx(n.code,{children:"getRoot"})}),`
`,e.jsxs(n.p,{children:["Возвращает текущий корневой путь проекта (",e.jsx(n.code,{children:"process.cwd()"}),")."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Пример:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const root = PropertiesFile.getRoot()
// Возвращает: "/Users/user/project"
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.h3,{id:"getfilename",children:e.jsx(n.code,{children:"getFileName"})}),`
`,e.jsx(n.p,{children:"Преобразует имя в kebab-case и добавляет расширение."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — имя элемента."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"extension: string"})," — расширение (по умолчанию ",e.jsx(n.code,{children:"json"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Пример:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const name = PropertiesFile.getFileName('UserProfile', 'ts')
// Возвращает: "user-profile.ts"
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.h3,{id:"sep",children:e.jsx(n.code,{children:"sep"})}),`
`,e.jsxs(n.p,{children:["Возвращает системный разделитель путей (",e.jsx(n.code,{children:"/"})," или ",e.jsx(n.code,{children:"\\"}),")."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Пример:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const s = PropertiesFile.sep()
// Возвращает: "/"
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.h2,{id:"методы-чтения",children:"Методы чтения"}),`
`,e.jsx(n.h3,{id:"readfile",children:e.jsx(n.code,{children:"readFile"})}),`
`,e.jsx(n.p,{children:"Синхронно читает и автоматически парсит содержимое файла. Если файл является JSON, возвращает объект, иначе — строку."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — путь к файлу."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Пример:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const data = PropertiesFile.readFile<{ name: string }>('config.json')
// Возвращает: { name: "DXT" } (объект)
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"R | undefined"})," — спарсенные данные или ",e.jsx(n.code,{children:"undefined"}),", если файл не найден."]}),`
`,e.jsx(n.h3,{id:"readfileonly",children:e.jsx(n.code,{children:"readFileOnly"})}),`
`,e.jsx(n.p,{children:"Читает содержимое файла как строку без преобразования."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — путь к файлу."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Пример:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const text = PropertiesFile.readFileOnly('README.md')
// Возвращает: "# Project Title..." (строка)
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string | undefined"})]}),`
`,e.jsx(n.h3,{id:"readdir",children:e.jsx(n.code,{children:"readDir"})}),`
`,e.jsx(n.p,{children:"Читает содержимое директории (список имен элементов)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — путь к директории."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Пример:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const items = PropertiesFile.readDir('src')
// Возвращает: ["index.ts", "classes", "types"]
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string[]"})]}),`
`,e.jsx(n.h3,{id:"readdirrecursive",children:e.jsx(n.code,{children:"readDirRecursive"})}),`
`,e.jsx(n.p,{children:"Рекурсивно читает все файлы в директории и её поддиректориях."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — путь к директории."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Пример:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const allFiles = PropertiesFile.readDirRecursive('src')
// Возвращает: ["index.ts", "classes/App.ts", "classes/DB.ts", ...]
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string[]"})," — список путей ко всем найденным файлам."]}),`
`,e.jsx(n.h2,{id:"методы-модификации",children:"Методы модификации"}),`
`,e.jsx(n.h3,{id:"write",children:e.jsx(n.code,{children:"write"})}),`
`,e.jsx(n.p,{children:"Записывает данные в файл, автоматически создавая необходимые директории."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — путь к директории."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — имя файла."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — данные для записи."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"extension: string"})," — расширение (по умолчанию ",e.jsx(n.code,{children:"json"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Пример:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`PropertiesFile.write('dist/cache', 'data', { id: 1 })
// Создает dist/cache/data.json с JSON содержимым
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.h3,{id:"writebypath",children:e.jsx(n.code,{children:"writeByPath"})}),`
`,e.jsx(n.p,{children:"Записывает данные по точному пути."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — полный путь к файлу."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — данные."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transform: boolean"})," — нужно ли преобразовывать объект в JSON (по умолчанию ",e.jsx(n.code,{children:"true"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Пример:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`PropertiesFile.writeByPath('logs/error.log', 'Critical error', false)
// Пишет строку в файл без JSON-трансформации
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.h3,{id:"createdir",children:e.jsx(n.code,{children:"createDir"})}),`
`,e.jsx(n.p,{children:"Рекурсивно создает директорию, если она не существует."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — путь для создания."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Пример:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`PropertiesFile.createDir('storage/images/2024')
// Создает всю цепочку папок
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.h3,{id:"copy",children:e.jsx(n.code,{children:"copy"})}),`
`,e.jsx(n.p,{children:"Копирует файл из одного места в другое."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — целевой путь."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pathsSrc: PropertiesFilePath"})," — исходный путь."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Пример:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`PropertiesFile.copy('backup/config.json', 'config.json')
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.h3,{id:"removefile",children:e.jsx(n.code,{children:"removeFile"})}),`
`,e.jsx(n.p,{children:"Удаляет указанный файл."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — путь к файлу."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Пример:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`PropertiesFile.removeFile('temp.tmp')
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.h3,{id:"removedir",children:e.jsx(n.code,{children:"removeDir"})}),`
`,e.jsx(n.p,{children:"Рекурсивно удаляет директорию со всем содержимым."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — путь к директории."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Пример:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`PropertiesFile.removeDir('dist/old-version')
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.h2,{id:"операции",children:"Операции"}),`
`,e.jsx(n.h3,{id:"поток-синхронизации-путей-и-ввода-вывода",children:"Поток синхронизации путей и ввода-вывода"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"PropertiesFile"})," выступает в качестве низкоуровневого слоя синхронизации для всей библиотеки:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Нормализация путей"}),": Каждый метод внутренне вызывает ",e.jsx(n.code,{children:"joinPath"})," и ",e.jsx(n.code,{children:"toSep"}),", которые преобразуют все входящие косые черты в специфичный для ОС разделитель (например, ",e.jsx(n.code,{children:"\\"})," в Windows)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Атомарная запись"}),": При вызове ",e.jsx(n.code,{children:"write()"})," класс сначала определяет целевую директорию и выполняет ",e.jsx(n.code,{children:"createDir()"}),", который рекурсивно создает любые недостающие папки перед записью содержимого через ",e.jsx(n.code,{children:"fs.writeFileSync"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Рекурсивный контекст"}),": Специализированные рекурсивные методы (",e.jsx(n.code,{children:"readDirRecursive"})," и др.) позволяют движкам документации и токенов обнаруживать каждый файл в дереве компонентов без ручного управления глубиной или лимитами рекурсии."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Разрешение корня"}),": Класс поддерживает внутреннее свойство ",e.jsx(n.code,{children:"root"})," (на основе ",e.jsx(n.code,{children:"process.cwd()"}),"), чтобы сегменты относительных путей всегда разрешались относительно базовой директории проекта."]}),`
`]})]})}function t(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{t as default};
