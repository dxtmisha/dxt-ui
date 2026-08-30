import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignTypesMakeAbstract - Абстрактный генератор типов для ИИ`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designtypesmakeabstract`,children:`Класс DesignTypesMakeAbstract`}),`
`,(0,c.jsxs)(t.p,{children:[`Абстрактный класс `,(0,c.jsx)(t.code,{children:`DesignTypesMakeAbstract`}),` определяет базовый интерфейс и архитектуру для обработки файлов деклараций TypeScript, отслеживания изменений по MD5-хешам и генерации оптимизированных для ИИ определений типов (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`конструктор`,children:`Конструктор`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ai: DesignTypesAi`}),` — экземпляр `,(0,c.jsx)(t.code,{children:`DesignTypesAi`}),` для обработки и оптимизации через ИИ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir: string`}),` — путь к входной директории с файлами деклараций. По умолчанию получается из `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getTypesTemporaryDirectory()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirDist: string`}),` — путь к директории со скомпилированным JavaScript-кодом. По умолчанию получается из `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getDistDir()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi, DesignTypesMakeAbstract } from '@dxtmisha/scripts'

class CustomTypesMake extends DesignTypesMakeAbstract {
  getFullContent(): string {
    return ''
  }

  getFullJsContent(): string {
    return ''
  }

  async make(): Promise<this> {
    return this
  }

  makeSave(): this {
    return this
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-getfullcontent-string`,children:(0,c.jsx)(t.code,{children:`abstract getFullContent(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Считывает обработанные файлы деклараций, объединяет их в единую строку и очищает содержимое от лишнего шаблонного кода.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-getfulljscontent-string`,children:(0,c.jsx)(t.code,{children:`abstract getFullJsContent(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Считывает и объединяет содержимое всех отфильтрованных файлов скомпилированного JavaScript.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-make-promisethis`,children:(0,c.jsx)(t.code,{children:`abstract make(): Promise<this>`})}),`
`,(0,c.jsx)(t.p,{children:`Выполняет полный цикл генерации определений типов, включая MD5-кэширование, обработку через ИИ и вызов сохранения.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-makesave-this`,children:(0,c.jsx)(t.code,{children:`abstract makeSave(): this`})}),`
`,(0,c.jsxs)(t.p,{children:[`Генерирует итоговый контент типов и сохраняет его в файл `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};