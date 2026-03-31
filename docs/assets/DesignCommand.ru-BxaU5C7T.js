import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/DesignCommand - Базовый класс команд дизайна`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designcommand`,children:`Класс DesignCommand`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignCommand`}),` является базовым абстрактным классом, предназначенным для стандартизации генерации файлов и компонентов внутри дизайн-системы. Он предоставляет общую основу для чтения шаблонов, выполнения замен и записи результирующего кода в структуру проекта.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандартизированное выполнение`}),` — обеспечивает единую точку входа `,(0,c.jsx)(n.code,{children:`make()`}),` для всех задач генерации, связанных с дизайном.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление шаблонами`}),` — включает встроенные методы для чтения образцов и применения трансформаций с использованием специализированных объектов замены.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Соглашения об именовании`}),` — автоматически обрабатывает различные форматы имен (CamelCase, kebab-case и т.д.) как для компонентов, так и для проектов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Структурная целостность`}),` — использует `,(0,c.jsx)(n.code,{children:`DesignStructure`}),` для обеспечения соответствия сгенерированных файлов установленной иерархии дизайн-системы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с пакетами`}),` — предоставляет утилиты для обновления `,(0,c.jsx)(n.code,{children:`package.json`}),` новыми конфигурационными данными.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Являясь абстрактным классом, `,(0,c.jsx)(n.code,{children:`DesignCommand`}),` не инициализируется напрямую, а наследуется конкретными реализациями команд.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры (для наследников):`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`command: string`}),` — идентификатор компонента или действия.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: Record<string, string>`}),` — дополнительные параметры конфигурации.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// Пример конструктора наследника
class MyDesignCommand extends DesignCommand {
  constructor(command: string, options: Record<string, string>) {
    super(command, options)
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — запускает выполнение команды и основную логику инициализации.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`защищенный-api-для-наследников`,children:`Защищенный API (для наследников)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFile(name): boolean`}),` — проверяет наличие файла в целевой директории.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read(name): string`}),` — читает содержимое файла из целевой директории.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`readSample(name): string`}),` — читает файл шаблона из директории образцов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`readDefinable(name, callback?): DesignReplace`}),` — читает файл, если он существует, в противном случае использует его шаблон.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`write(name, value): void`}),` — записывает или перезаписывает файл с указанным содержимым.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`updatePackage(path, value): this`}),` — обновляет конкретный ключ в `,(0,c.jsx)(n.code,{children:`package.json`}),` проекта.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`рабочий-процесс-выполнения-команды`,children:`Рабочий процесс выполнения команды`}),`
`,(0,c.jsxs)(n.p,{children:[`Метод `,(0,c.jsx)(n.code,{children:`make()`}),` следует строгому паттерну выполнения:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Валидация`}),`: проверяет, предоставлен ли идентификатор команды.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инициализация`}),`: вызывает абстрактный метод `,(0,c.jsx)(n.code,{children:`initMain()`}),` (реализуется дочерними классами) для выполнения специфических файловых операций.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Логирование`}),`: обеспечивает вывод в консоль информации о начале и завершении команды.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`разрешение-имен`,children:`Разрешение имен`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignCommand`}),` предоставляет несколько помощников для согласованного именования:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName()`}),`: возвращает имя команды в CamelCase.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCode()`}),`: возвращает имя команды в kebab-case.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFullName()`}),`: комбинирует префикс дизайна с именем команды.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getProjectName()`}),`: возвращает стандартизированный идентификатор проекта.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};