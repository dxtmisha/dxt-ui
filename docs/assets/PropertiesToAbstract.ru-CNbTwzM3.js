import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/scripts/Classes/PropertiesToAbstract - Базовый класс трансформации"}),`
`,e.jsx(r.h1,{id:"абстрактный-класс-propertiestoabstract",children:"Абстрактный класс PropertiesToAbstract"}),`
`,e.jsxs(r.p,{children:["Класс ",e.jsx(r.code,{children:"PropertiesToAbstract"})," служит фундаментом для всех процессов преобразования свойств (токенов) в системе. Он определяет общий жизненный цикл трансформации: от инициализации данных до их сохранения в кэш."]}),`
`,e.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Стандартизация жизненного цикла"})," — гарантирует единый порядок выполнения операций (",e.jsx(r.code,{children:"init"})," -> ",e.jsx(r.code,{children:"write"}),") во всех наследниках."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Интеграция с PropertiesItems"})," — обеспечивает централизованное управление элементами свойств."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Управление кэшем"})," — автоматизирует процесс записи промежуточных результатов в указанный файл."]}),`
`]}),`
`,e.jsx(r.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsx(r.p,{children:"Поскольку класс является абстрактным, он не может быть создан напрямую. Он предназначен для расширения конкретными классами трансформации (например, для генерации SCSS или JSON)."}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Пример реализации наследника:"})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import { PropertiesToAbstract, PropertiesItems } from '@dxtmisha/scripts'

class MyPropertiesTransformer extends PropertiesToAbstract {
  protected readonly FILE_CACHE = 'my-cache-file.json'

  protected init(): void {
    // Логика инициализации и трансформации
    console.log('Transforming data...')
  }
}
`})}),`
`,e.jsx(r.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(r.h3,{id:"to",children:e.jsx(r.code,{children:"to"})}),`
`,e.jsx(r.p,{children:"Запускает полный цикл трансформации. Этот метод является публичной точкой входа и обеспечивает строгую последовательность действий: сначала инициализация данных, затем их запись."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const transformer = new MyPropertiesTransformer(items);
transformer.to(); // Запуск процесса
`})}),`
`,e.jsxs(r.h3,{id:"init-abstract",children:[e.jsx(r.code,{children:"init"})," (abstract)"]}),`
`,e.jsx(r.p,{children:"Абстрактный защищенный метод, который должен быть реализован в классах-наследниках. В этом методе должна быть сосредоточена основная логика обработки данных."}),`
`,e.jsxs(r.h3,{id:"write-protected",children:[e.jsx(r.code,{children:"write"})," (protected)"]}),`
`,e.jsxs(r.p,{children:["Записывает текущее состояние элементов свойств (",e.jsx(r.code,{children:"PropertiesItems"}),") в файл, путь к которому определен в ",e.jsx(r.code,{children:"FILE_CACHE"}),"."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Возвращает:"})," ",e.jsx(r.code,{children:"void"})]}),`
`,e.jsx(r.h2,{id:"свойства",children:"Свойства"}),`
`,e.jsxs(r.h3,{id:"file_cache-abstract",children:[e.jsx(r.code,{children:"FILE_CACHE"})," (abstract)"]}),`
`,e.jsx(r.p,{children:"Абстрактное свойство, определяющее путь к файлу, в который будут сохранены результаты трансформации. Должно быть переопределено в каждом конкретном классе-наследнике."}),`
`,e.jsx(r.h2,{id:"примеры",children:"Примеры"}),`
`,e.jsx(r.h3,{id:"создание-кастомного-трансформера",children:"Создание кастомного трансформера"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import { PropertiesToAbstract, PropertiesItems } from '@dxtmisha/scripts'

export class PropertiesToCustom extends PropertiesToAbstract {
  protected readonly FILE_CACHE = 'custom-tokens.json'

  protected init(): void {
    // Пример модификации данных перед записью
    forEach(this.items, (item) => {
      item.myData = 'processed'
    })
  }
}
`})})]})}function p(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{p as default};
