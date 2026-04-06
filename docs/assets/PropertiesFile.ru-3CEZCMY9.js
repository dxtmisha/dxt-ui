import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesFile - Оркестратор путей файловой системы`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiesfile`,children:`Класс PropertiesFile`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesFile`}),` — это комплексная статическая утилита, предназначенная для оркестрации всех задач, связанных с файловой системой, в инструментарии дизайн-системы. Он предоставляет кроссплатформенный интерфейс для манипуляций с путями, синхронного ввода-вывода и рекурсивного управления директориями, гарантируя согласованность поиска файлов и сохранения данных в различных операционных системах и средах разработки.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Нормализация путей`}),` — автоматически разрешает специфичные для ОС разделители путей и объединяет сегменты в стандартизированные строки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Рекурсивный обход`}),` — предоставляет специализированные методы для глубокого исследования структур директорий с дополнительной индексацией.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синхронный ввод-вывод`}),` — обрабатывает чтение (JSON/текст) и запись файлов с автоматическим созданием необходимых директорий.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Получение метаданных`}),` — извлекает временные метки файлов и статистические данные для логики аннулирования кэша.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасные операции`}),` — включает встроенные проверки существования записей, их типа (файл или директория) и статуса модуля.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Являясь статическим классом, `,(0,c.jsx)(n.code,{children:`PropertiesFile`}),` самоинициализируется и готов к использованию сразу после импорта.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesFile } from '@dxtmisha/scripts'

// Проверка существования конфигурации
if (PropertiesFile.is('design-ui.json')) {
  const config = PropertiesFile.readFile('design-ui.json')
}

// Безопасное объединение путей
const fullPath = PropertiesFile.joinPath(['src', 'tokens', 'colors.json'])
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы-проверки`,children:`Методы проверки`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(path): boolean`}),` — синхронно проверяет существование файла или директории.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDir(path): boolean`}),` — определяет, указывает ли путь на директорию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isModule(): boolean`}),` — определяет, подключен ли текущий пакет как внешний модуль.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы-работы-с-путями`,children:`Методы работы с путями`}),`
`,(0,c.jsx)(n.h3,{id:`joinpath`,children:(0,c.jsx)(n.code,{children:`joinPath`})}),`
`,(0,c.jsx)(n.p,{children:`Объединяет несколько сегментов пути в одну нормализованную строку пути, используя разделитель текущей ОС.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — массив сегментов или строка пути.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const path = PropertiesFile.joinPath(['src', 'styles', 'main.css'])
// Возвращает: "src/styles/main.css" (на Mac/Linux) или "src\\styles\\main.css" (на Windows)
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — объединенный и нормализованный путь.`]}),`
`,(0,c.jsx)(n.h3,{id:`joinpathbyname`,children:(0,c.jsx)(n.code,{children:`joinPathByName`})}),`
`,(0,c.jsx)(n.p,{children:`Формирует полный путь к файлу, объединяя путь к директории, имя файла и расширение.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — путь к директории.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — имя файла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extension: string`}),` — расширение файла (по умолчанию `,(0,c.jsx)(n.code,{children:`json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const filePath = PropertiesFile.joinPathByName('data', 'user-profile', 'json')
// Возвращает: "data/user-profile.json"
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`getpathdir`,children:(0,c.jsx)(n.code,{children:`getPathDir`})}),`
`,(0,c.jsx)(n.p,{children:`Извлекает путь к директории из полного пути. Если передан путь к директории, возвращает его без изменений.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — путь к файлу или директории.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const dirOnly = PropertiesFile.getPathDir('src/classes/App.ts')
// Возвращает: "src/classes"
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`getpathfile`,children:(0,c.jsx)(n.code,{children:`getPathFile`})}),`
`,(0,c.jsx)(n.p,{children:`Формирует массив сегментов пути к файлу.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — базовый путь.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — имя файла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extension: string`}),` — расширение (по умолчанию `,(0,c.jsx)(n.code,{children:`json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const segments = PropertiesFile.getPathFile('dist', 'manifest')
// Возвращает: ["dist", "manifest.json"]
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string[]`})]}),`
`,(0,c.jsx)(n.h3,{id:`getroot`,children:(0,c.jsx)(n.code,{children:`getRoot`})}),`
`,(0,c.jsxs)(n.p,{children:[`Возвращает текущий корневой путь проекта (`,(0,c.jsx)(n.code,{children:`process.cwd()`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const root = PropertiesFile.getRoot()
// Возвращает: "/Users/user/project"
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`getfilename`,children:(0,c.jsx)(n.code,{children:`getFileName`})}),`
`,(0,c.jsx)(n.p,{children:`Преобразует имя в kebab-case и добавляет расширение.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — имя элемента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extension: string`}),` — расширение (по умолчанию `,(0,c.jsx)(n.code,{children:`json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const name = PropertiesFile.getFileName('UserProfile', 'ts')
// Возвращает: "user-profile.ts"
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`sep`,children:(0,c.jsx)(n.code,{children:`sep`})}),`
`,(0,c.jsxs)(n.p,{children:[`Возвращает системный разделитель путей (`,(0,c.jsx)(n.code,{children:`/`}),` или `,(0,c.jsx)(n.code,{children:`\\`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const s = PropertiesFile.sep()
// Возвращает: "/"
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h2,{id:`методы-чтения`,children:`Методы чтения`}),`
`,(0,c.jsx)(n.h3,{id:`readfile`,children:(0,c.jsx)(n.code,{children:`readFile`})}),`
`,(0,c.jsx)(n.p,{children:`Синхронно читает и автоматически парсит содержимое файла. Если файл является JSON, возвращает объект, иначе — строку.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — путь к файлу.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const data = PropertiesFile.readFile<{ name: string }>('config.json')
// Возвращает: { name: "DXT" } (объект)
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`R | undefined`}),` — спарсенные данные или `,(0,c.jsx)(n.code,{children:`undefined`}),`, если файл не найден.`]}),`
`,(0,c.jsx)(n.h3,{id:`readfileonly`,children:(0,c.jsx)(n.code,{children:`readFileOnly`})}),`
`,(0,c.jsx)(n.p,{children:`Читает содержимое файла как строку без преобразования.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — путь к файлу.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const text = PropertiesFile.readFileOnly('README.md')
// Возвращает: "# Project Title..." (строка)
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string | undefined`})]}),`
`,(0,c.jsx)(n.h3,{id:`readdir`,children:(0,c.jsx)(n.code,{children:`readDir`})}),`
`,(0,c.jsx)(n.p,{children:`Читает содержимое директории (список имен элементов).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — путь к директории.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const items = PropertiesFile.readDir('src')
// Возвращает: ["index.ts", "classes", "types"]
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string[]`})]}),`
`,(0,c.jsx)(n.h3,{id:`readdirrecursive`,children:(0,c.jsx)(n.code,{children:`readDirRecursive`})}),`
`,(0,c.jsx)(n.p,{children:`Рекурсивно читает все файлы в директории и её поддиректориях.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — путь к директории.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const allFiles = PropertiesFile.readDirRecursive('src')
// Возвращает: ["index.ts", "classes/App.ts", "classes/DB.ts", ...]
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string[]`}),` — список путей ко всем найденным файлам.`]}),`
`,(0,c.jsx)(n.h2,{id:`методы-модификации`,children:`Методы модификации`}),`
`,(0,c.jsx)(n.h3,{id:`write`,children:(0,c.jsx)(n.code,{children:`write`})}),`
`,(0,c.jsx)(n.p,{children:`Записывает данные в файл, автоматически создавая необходимые директории.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — путь к директории.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — имя файла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — данные для записи.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extension: string`}),` — расширение (по умолчанию `,(0,c.jsx)(n.code,{children:`json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.write('dist/cache', 'data', { id: 1 })
// Создает dist/cache/data.json с JSON содержимым
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`writebypath`,children:(0,c.jsx)(n.code,{children:`writeByPath`})}),`
`,(0,c.jsx)(n.p,{children:`Записывает данные по точному пути.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — полный путь к файлу.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — данные.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transform: boolean`}),` — нужно ли преобразовывать объект в JSON (по умолчанию `,(0,c.jsx)(n.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.writeByPath('logs/error.log', 'Critical error', false)
// Пишет строку в файл без JSON-трансформации
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`createdir`,children:(0,c.jsx)(n.code,{children:`createDir`})}),`
`,(0,c.jsx)(n.p,{children:`Рекурсивно создает директорию, если она не существует.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — путь для создания.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.createDir('storage/images/2024')
// Создает всю цепочку папок
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`copy`,children:(0,c.jsx)(n.code,{children:`copy`})}),`
`,(0,c.jsx)(n.p,{children:`Копирует файл из одного места в другое.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — целевой путь.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathsSrc: PropertiesFilePath`}),` — исходный путь.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.copy('backup/config.json', 'config.json')
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`removefile`,children:(0,c.jsx)(n.code,{children:`removeFile`})}),`
`,(0,c.jsx)(n.p,{children:`Удаляет указанный файл.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — путь к файлу.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.removeFile('temp.tmp')
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`removedir`,children:(0,c.jsx)(n.code,{children:`removeDir`})}),`
`,(0,c.jsx)(n.p,{children:`Рекурсивно удаляет директорию со всем содержимым.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — путь к директории.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.removeDir('dist/old-version')
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`поток-синхронизации-путей-и-ввода-вывода`,children:`Поток синхронизации путей и ввода-вывода`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesFile`}),` выступает в качестве низкоуровневого слоя синхронизации для всей библиотеки:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Нормализация путей`}),`: Каждый метод внутренне вызывает `,(0,c.jsx)(n.code,{children:`joinPath`}),` и `,(0,c.jsx)(n.code,{children:`toSep`}),`, которые преобразуют все входящие косые черты в специфичный для ОС разделитель (например, `,(0,c.jsx)(n.code,{children:`\\`}),` в Windows).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Атомарная запись`}),`: При вызове `,(0,c.jsx)(n.code,{children:`write()`}),` класс сначала определяет целевую директорию и выполняет `,(0,c.jsx)(n.code,{children:`createDir()`}),`, который рекурсивно создает любые недостающие папки перед записью содержимого через `,(0,c.jsx)(n.code,{children:`fs.writeFileSync`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Рекурсивный контекст`}),`: Специализированные рекурсивные методы (`,(0,c.jsx)(n.code,{children:`readDirRecursive`}),` и др.) позволяют движкам документации и токенов обнаруживать каждый файл в дереве компонентов без ручного управления глубиной или лимитами рекурсии.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Разрешение корня`}),`: Класс поддерживает внутреннее свойство `,(0,c.jsx)(n.code,{children:`root`}),` (на основе `,(0,c.jsx)(n.code,{children:`process.cwd()`}),`), чтобы сегменты относительных путей всегда разрешались относительно базовой директории проекта.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};