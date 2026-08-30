import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignCommand - Базовый класс команд дизайна`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designcommand`,children:`Класс DesignCommand`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DesignCommand`}),` является базовым абстрактным классом, предназначенным для стандартизации генерации файлов и компонентов внутри дизайн-системы. Он предоставляет общую основу для чтения шаблонов, выполнения замен и записи результирующего кода в структуру проекта.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Стандартизированное выполнение`}),` — обеспечивает единую точку входа `,(0,c.jsx)(t.code,{children:`make()`}),` для всех задач генерации, связанных с дизайном.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление шаблонами`}),` — включает встроенные методы для чтения образцов и применения трансформаций с использованием специализированных объектов замены.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Соглашения об именовании`}),` — автоматически обрабатывает различные форматы имен (CamelCase, kebab-case и т.д.) как для компонентов, так и для проектов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Структурная целостность`}),` — использует `,(0,c.jsx)(t.code,{children:`DesignStructure`}),` для обеспечения соответствия сгенерированных файлов установленной иерархии дизайн-системы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с пакетами`}),` — предоставляет утилиты для обновления `,(0,c.jsx)(t.code,{children:`package.json`}),` новыми конфигурационными данными.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Являясь абстрактным классом, `,(0,c.jsx)(t.code,{children:`DesignCommand`}),` не инициализируется напрямую, а наследуется конкретными реализациями команд.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры (для наследников):`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`command: string`}),` — идентификатор компонента или действия.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: Record<string, string>`}),` — дополнительные параметры конфигурации.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Пример конструктора наследника
class MyDesignCommand extends DesignCommand {
  constructor(command: string, options: Record<string, string>) {
    super(command, options)
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — запускает выполнение команды и основную логику инициализации.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`защищенный-api-для-наследников`,children:`Защищенный API (для наследников)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isFile(name): boolean`}),` — проверяет наличие файла в целевой директории.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`read(name): string`}),` — читает содержимое файла из целевой директории.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`readSample(name): string`}),` — читает файл шаблона из директории образцов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`readDefinable(name, callback?): DesignReplace`}),` — читает файл, если он существует, в противном случае использует его шаблон.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`write(name, value): void`}),` — записывает или перезаписывает файл с указанным содержимым.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`updatePackage(path, value): this`}),` — обновляет конкретный ключ в `,(0,c.jsx)(t.code,{children:`package.json`}),` проекта.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`рабочий-процесс-выполнения-команды`,children:`Рабочий процесс выполнения команды`}),`
`,(0,c.jsxs)(t.p,{children:[`Метод `,(0,c.jsx)(t.code,{children:`make()`}),` следует строгому паттерну выполнения:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Валидация`}),`: проверяет, предоставлен ли идентификатор команды.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инициализация`}),`: вызывает абстрактный метод `,(0,c.jsx)(t.code,{children:`initMain()`}),` (реализуется дочерними классами) для выполнения специфических файловых операций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Логирование`}),`: обеспечивает вывод в консоль информации о начале и завершении команды.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`разрешение-имен`,children:`Разрешение имен`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`DesignCommand`}),` предоставляет несколько помощников для согласованного именования:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName()`}),`: возвращает имя команды в CamelCase.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCode()`}),`: возвращает имя команды в kebab-case.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFullName()`}),`: комбинирует префикс дизайна с именем команды.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getProjectName()`}),`: возвращает стандартизированный идентификатор проекта.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};