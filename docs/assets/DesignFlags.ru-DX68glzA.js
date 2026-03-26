import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/DesignFlags - Генератор спрайтов флагов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designflags`,children:`Класс DesignFlags`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignFlags`}),` предоставляет автоматизированное решение для генерации оптимизированных спрайтов изображений из коллекции SVG-иконок флагов. Он управляет рендерингом на основе холста, расчетом сетки и созданием файлов CSS-маппинга для эффективного отображения иконок с использованием позиционирования фона.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая сборка спрайта`}),` — объединяет множество отдельных SVG-файлов в один оптимизированный спрайт формата `,(0,c.jsx)(n.code,{children:`.webp`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамическая генерация CSS`}),` — автоматически создает утилитарные классы с точными значениями `,(0,c.jsx)(n.code,{children:`background-position`}),` для каждого флага.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Настраиваемая сетка`}),` — позволяет настраивать размеры флагов и количество колонок в результирующем изображении.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Рендеринг на базе холста`}),` — использует высокопроизводительную обработку изображений для плавного преобразования и масштабирования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сохранение пропорций`}),` — гарантирует центрирование флагов внутри ячеек сетки с сохранением оригинальных пропорций дизайна.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Для инициализации генератора укажите исходную директорию и желаемые пропорции вывода.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dir: string`}),` — путь к директории, где расположены исходные SVG-иконки флагов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`width: number`}),` — целевая ширина одного флага в сгенерированном спрайте (по умолчанию: 96).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`height: number`}),` — целевая высота одного флага в сгенерированном спрайте (по умолчанию: 72).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`columns: number`}),` — количество колонок иконок в сетке спрайта (по умолчанию: 12).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignFlags } from '@dxtmisha/scripts'

const generator = new DesignFlags('assets/flags', 64, 48)
generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): Promise<void>`}),` — координирует весь процесс: чтение файлов, отрисовку на холсте, сохранение изображения и запись CSS-файла.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`информация`,children:`Информация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLines(): number`}),` — вычисляет общее количество строк, необходимых в сетке спрайта, на основе количества файлов и лимита колонок.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`рабочий-процесс-генерации`,children:`Рабочий процесс генерации`}),`
`,(0,c.jsxs)(n.p,{children:[`При выполнении `,(0,c.jsx)(n.code,{children:`make()`}),` класс выполняет следующие шаги:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Обнаружение`}),`: сканирует исходную директорию на наличие `,(0,c.jsx)(n.code,{children:`.svg`}),` файлов и инициализирует размеры сетки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Расчет макета`}),`: определяет смещения плиток и поля центрирования для указанных размеров флагов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Отрисовка на холсте`}),`: итеративно загружает каждое изображение и рисует его на холсте спрайта в рассчитанных координатах сетки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сбор данных`}),`: записывает имя и координаты каждого флага для создания данных маппинга.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Экспорт ресурсов`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`сохраняет содержимое холста как изображение `,(0,c.jsx)(n.code,{children:`webp`}),` в директории `,(0,c.jsx)(n.code,{children:`assets`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`генерирует файл `,(0,c.jsx)(n.code,{children:`flags.css`}),` с определениями корневых переменных и индивидуальными классами-модификаторами `,(0,c.jsx)(n.code,{children:`--[name]`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`реализация-стилей`,children:`Реализация стилей`}),`
`,(0,c.jsxs)(n.p,{children:[`Сгенерированный CSS использует централизованный класс `,(0,c.jsx)(n.code,{children:`.ui-sys-flags`}),`, который хранит переменные размеров и ссылку на фоновое изображение. Индивидуальные модификаторы (например, `,(0,c.jsx)(n.code,{children:`.ui-sys-flags--ru`}),`) затем обновляют `,(0,c.jsx)(n.code,{children:`background-position`}),` для изоляции конкретных иконок, сводя к минимуму количество вызовов отрисовки в браузере и HTTP-запросов.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};