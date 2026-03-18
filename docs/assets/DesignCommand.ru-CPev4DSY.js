import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/DesignCommand - Базовый класс команд дизайна"}),`
`,n.jsx(e.h1,{id:"класс-designcommand",children:"Класс DesignCommand"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"DesignCommand"})," является базовым абстрактным классом, предназначенным для стандартизации генерации файлов и компонентов внутри дизайн-системы. Он предоставляет общую основу для чтения шаблонов, выполнения замен и записи результирующего кода в структуру проекта."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Стандартизированное выполнение"})," — обеспечивает единую точку входа ",n.jsx(e.code,{children:"make()"})," для всех задач генерации, связанных с дизайном."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление шаблонами"})," — включает встроенные методы для чтения образцов и применения трансформаций с использованием специализированных объектов замены."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Соглашения об именовании"})," — автоматически обрабатывает различные форматы имен (CamelCase, kebab-case и т.д.) как для компонентов, так и для проектов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Структурная целостность"})," — использует ",n.jsx(e.code,{children:"DesignStructure"})," для обеспечения соответствия сгенерированных файлов установленной иерархии дизайн-системы."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция с пакетами"})," — предоставляет утилиты для обновления ",n.jsx(e.code,{children:"package.json"})," новыми конфигурационными данными."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Являясь абстрактным классом, ",n.jsx(e.code,{children:"DesignCommand"})," не инициализируется напрямую, а наследуется конкретными реализациями команд."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры (для наследников):"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"command: string"})," — идентификатор компонента или действия."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options: Record<string, string>"})," — дополнительные параметры конфигурации."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Пример конструктора наследника
class MyDesignCommand extends DesignCommand {
  constructor(command: string, options: Record<string, string>) {
    super(command, options)
  }
}
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"make(): void"})," — запускает выполнение команды и основную логику инициализации."]}),`
`]}),`
`,n.jsx(e.h3,{id:"защищенный-api-для-наследников",children:"Защищенный API (для наследников)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isFile(name): boolean"})," — проверяет наличие файла в целевой директории."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"read(name): string"})," — читает содержимое файла из целевой директории."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"readSample(name): string"})," — читает файл шаблона из директории образцов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"readDefinable(name, callback?): DesignReplace"})," — читает файл, если он существует, в противном случае использует его шаблон."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"write(name, value): void"})," — записывает или перезаписывает файл с указанным содержимым."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"updatePackage(path, value): this"})," — обновляет конкретный ключ в ",n.jsx(e.code,{children:"package.json"})," проекта."]}),`
`]}),`
`,n.jsx(e.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(e.h3,{id:"рабочий-процесс-выполнения-команды",children:"Рабочий процесс выполнения команды"}),`
`,n.jsxs(e.p,{children:["Метод ",n.jsx(e.code,{children:"make()"})," следует строгому паттерну выполнения:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Валидация"}),": проверяет, предоставлен ли идентификатор команды."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Инициализация"}),": вызывает абстрактный метод ",n.jsx(e.code,{children:"initMain()"})," (реализуется дочерними классами) для выполнения специфических файловых операций."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Логирование"}),": обеспечивает вывод в консоль информации о начале и завершении команды."]}),`
`]}),`
`,n.jsx(e.h3,{id:"разрешение-имен",children:"Разрешение имен"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"DesignCommand"})," предоставляет несколько помощников для согласованного именования:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getName()"}),": возвращает имя команды в CamelCase."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getCode()"}),": возвращает имя команды в kebab-case."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getFullName()"}),": комбинирует префикс дизайна с именем команды."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getProjectName()"}),": возвращает стандартизированный идентификатор проекта."]}),`
`]})]})}function t(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{t as default};
