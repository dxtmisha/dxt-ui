import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/ru/scripts/Classes/DesignFlags - Генератор спрайтов флагов"}),`
`,n.jsx(s.h1,{id:"класс-designflags",children:"Класс DesignFlags"}),`
`,n.jsxs(s.p,{children:["Класс ",n.jsx(s.code,{children:"DesignFlags"})," предоставляет автоматизированное решение для генерации оптимизированных спрайтов изображений из коллекции SVG-иконок флагов. Он управляет рендерингом на основе холста, расчетом сетки и созданием файлов CSS-маппинга для эффективного отображения иконок с использованием позиционирования фона."]}),`
`,n.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Автоматическая сборка спрайта"})," — объединяет множество отдельных SVG-файлов в один оптимизированный спрайт формата ",n.jsx(s.code,{children:".webp"}),"."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Динамическая генерация CSS"})," — автоматически создает утилитарные классы с точными значениями ",n.jsx(s.code,{children:"background-position"})," для каждого флага."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Настраиваемая сетка"})," — позволяет настраивать размеры флагов и количество колонок в результирующем изображении."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Рендеринг на базе холста"})," — использует высокопроизводительную обработку изображений для плавного преобразования и масштабирования."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Сохранение пропорций"})," — гарантирует центрирование флагов внутри ячеек сетки с сохранением оригинальных пропорций дизайна."]}),`
`]}),`
`,n.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(s.p,{children:"Для инициализации генератора укажите исходную директорию и желаемые пропорции вывода."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"dir: string"})," — путь к директории, где расположены исходные SVG-иконки флагов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"width: number"})," — целевая ширина одного флага в сгенерированном спрайте (по умолчанию: 96)."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"height: number"})," — целевая высота одного флага в сгенерированном спрайте (по умолчанию: 72)."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"columns: number"})," — количество колонок иконок в сетке спрайта (по умолчанию: 12)."]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { DesignFlags } from '@dxtmisha/scripts'

const generator = new DesignFlags('assets/flags', 64, 48)
generator.make()
`})}),`
`,n.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(s.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"make(): Promise<void>"})," — координирует весь процесс: чтение файлов, отрисовку на холсте, сохранение изображения и запись CSS-файла."]}),`
`]}),`
`,n.jsx(s.h3,{id:"информация",children:"Информация"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"getLines(): number"})," — вычисляет общее количество строк, необходимых в сетке спрайта, на основе количества файлов и лимита колонок."]}),`
`]}),`
`,n.jsx(s.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(s.h3,{id:"рабочий-процесс-генерации",children:"Рабочий процесс генерации"}),`
`,n.jsxs(s.p,{children:["При выполнении ",n.jsx(s.code,{children:"make()"})," класс выполняет следующие шаги:"]}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Обнаружение"}),": сканирует исходную директорию на наличие ",n.jsx(s.code,{children:".svg"})," файлов и инициализирует размеры сетки."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Расчет макета"}),": определяет смещения плиток и поля центрирования для указанных размеров флагов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Отрисовка на холсте"}),": итеративно загружает каждое изображение и рисует его на холсте спрайта в рассчитанных координатах сетки."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Сбор данных"}),": записывает имя и координаты каждого флага для создания данных маппинга."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Экспорт ресурсов"}),":",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["сохраняет содержимое холста как изображение ",n.jsx(s.code,{children:"webp"})," в директории ",n.jsx(s.code,{children:"assets"}),"."]}),`
`,n.jsxs(s.li,{children:["генерирует файл ",n.jsx(s.code,{children:"flags.css"})," с определениями корневых переменных и индивидуальными классами-модификаторами ",n.jsx(s.code,{children:"--[name]"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"реализация-стилей",children:"Реализация стилей"}),`
`,n.jsxs(s.p,{children:["Сгенерированный CSS использует централизованный класс ",n.jsx(s.code,{children:".ui-sys-flags"}),", который хранит переменные размеров и ссылку на фоновое изображение. Индивидуальные модификаторы (например, ",n.jsx(s.code,{children:".ui-sys-flags--ru"}),") затем обновляют ",n.jsx(s.code,{children:"background-position"})," для изоляции конкретных иконок, сводя к минимуму количество вызовов отрисовки в браузере и HTTP-запросов."]})]})}function t(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{t as default};
