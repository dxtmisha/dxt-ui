import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignTypesBuildAbstract - Абстрактный компилятор деклараций TypeScript`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designtypesbuildabstract`,children:`Класс DesignTypesBuildAbstract`}),`
`,(0,c.jsxs)(t.p,{children:[`Абстрактный базовый класс `,(0,c.jsx)(t.code,{children:`DesignTypesBuildAbstract`}),` определяет интерфейс и общую архитектуру для компиляции исходных файлов TypeScript и Vue в файлы деклараций типов (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`) во временную директорию перед их обработкой и оптимизацией для ИИ.`]}),`
`,(0,c.jsx)(t.h2,{id:`конструктор`,children:`Конструктор`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`temporaryDirectory: string`}),` — путь к временной директории для хранения скомпилированных файлов деклараций. По умолчанию получается из `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getTypesTemporaryDirectory()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesBuildAbstract } from '@dxtmisha/scripts'

class CustomTypesBuild extends DesignTypesBuildAbstract {
  is(): boolean {
    // Проверка существования директории
    return false
  }

  clean(): this {
    // Очистка временной директории
    return this
  }

  build(): this {
    // Сборка деклараций типов
    return this
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-is-boolean`,children:(0,c.jsx)(t.code,{children:`abstract is(): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Проверяет, существует ли временная директория компиляции на диске.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-clean-this`,children:(0,c.jsx)(t.code,{children:`abstract clean(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Очищает или удаляет временную директорию компиляции со всеми сгенерированными декларациями.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-build-this`,children:(0,c.jsx)(t.code,{children:`abstract build(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Выполняет компиляцию деклараций типов из исходных файлов во временную директорию.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};