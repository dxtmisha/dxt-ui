import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToAbstract - Базовый класс трансформации`}),`
`,(0,c.jsx)(n.h1,{id:`абстрактный-класс-propertiestoabstract`,children:`Абстрактный класс PropertiesToAbstract`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),` служит фундаментом для всех процессов преобразования свойств (токенов) в системе. Он определяет общий жизненный цикл трансформации: от инициализации данных до их сохранения в кэш.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандартизация жизненного цикла`}),` — гарантирует единый порядок выполнения операций (`,(0,c.jsx)(n.code,{children:`init`}),` -> `,(0,c.jsx)(n.code,{children:`write`}),`) во всех наследниках.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с PropertiesItems`}),` — обеспечивает централизованное управление элементами свойств.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление кэшем`}),` — автоматизирует процесс записи промежуточных результатов в указанный файл.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Поскольку класс является абстрактным, он не может быть создан напрямую. Он предназначен для расширения конкретными классами трансформации (например, для генерации SCSS или JSON).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример реализации наследника:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToAbstract, PropertiesItems } from '@dxtmisha/scripts'

class MyPropertiesTransformer extends PropertiesToAbstract {
  protected readonly FILE_CACHE = 'my-cache-file.json'

  protected init(): void {
    // Логика инициализации и трансформации
    console.log('Transforming data...')
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`to`,children:(0,c.jsx)(n.code,{children:`to`})}),`
`,(0,c.jsx)(n.p,{children:`Запускает полный цикл трансформации. Этот метод является публичной точкой входа и обеспечивает строгую последовательность действий: сначала инициализация данных, затем их запись.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const transformer = new MyPropertiesTransformer(items);
transformer.to(); // Запуск процесса
`})}),`
`,(0,c.jsxs)(n.h3,{id:`init-abstract`,children:[(0,c.jsx)(n.code,{children:`init`}),` (abstract)`]}),`
`,(0,c.jsx)(n.p,{children:`Абстрактный защищенный метод, который должен быть реализован в классах-наследниках. В этом методе должна быть сосредоточена основная логика обработки данных.`}),`
`,(0,c.jsxs)(n.h3,{id:`write-protected`,children:[(0,c.jsx)(n.code,{children:`write`}),` (protected)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Записывает текущее состояние элементов свойств (`,(0,c.jsx)(n.code,{children:`PropertiesItems`}),`) в файл, путь к которому определен в `,(0,c.jsx)(n.code,{children:`FILE_CACHE`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`свойства`,children:`Свойства`}),`
`,(0,c.jsxs)(n.h3,{id:`file_cache-abstract`,children:[(0,c.jsx)(n.code,{children:`FILE_CACHE`}),` (abstract)`]}),`
`,(0,c.jsx)(n.p,{children:`Абстрактное свойство, определяющее путь к файлу, в который будут сохранены результаты трансформации. Должно быть переопределено в каждом конкретном классе-наследнике.`}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`создание-кастомного-трансформера`,children:`Создание кастомного трансформера`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToAbstract, PropertiesItems } from '@dxtmisha/scripts'

export class PropertiesToCustom extends PropertiesToAbstract {
  protected readonly FILE_CACHE = 'custom-tokens.json'

  protected init(): void {
    // Пример модификации данных перед записью
    forEach(this.items, (item) => {
      item.myData = 'processed'
    })
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};