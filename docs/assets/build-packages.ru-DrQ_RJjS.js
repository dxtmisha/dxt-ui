import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/# Команды/dxt-build-packages - Сборка пакетов`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-build-packages`,children:`dxt-build-packages`}),`
`,(0,c.jsxs)(n.p,{children:[`Команда `,(0,c.jsx)(n.code,{children:`dxt-build-packages`}),` обеспечивает автоматическую сборку измененных npm-пакетов в рабочем пространстве. Инструмент использует `,(0,c.jsx)(n.code,{children:`BuildPackages`}),` и `,(0,c.jsx)(n.code,{children:`PackageFile`}),` для сканирования активных директорий библиотек, отслеживания версий и инкрементальной компиляции пакетов при обнаружении изменений.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое сканирование монорепозитория`}),`: Обнаруживает активные директории пакетов внутри папки `,(0,c.jsx)(n.code,{children:`/packages/`}),`, содержащие корректный файл `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инкрементальное кэширование на основе версий`}),`: Избегает избыточных сборок благодаря ведению локального кэша сборок в файле `,(0,c.jsx)(n.code,{children:`./logs/ui-build.log.json`}),`. Сборка пакета запускается только в том случае, если его текущая версия в `,(0,c.jsx)(n.code,{children:`package.json`}),` изменилась по сравнению с сохраненной в кэше.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеллектуальный выбор скриптов`}),`: Автоматически выполняет скрипт `,(0,c.jsx)(n.code,{children:`"build-recovery"`}),`, если он определен в скриптах пакета, с переходом на стандартный скрипт `,(0,c.jsx)(n.code,{children:`"build"`}),`, если первый отсутствует.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Исключение тестовых пакетов`}),`: Автоматически пропускает пакеты, помеченные как тестовые (содержащие `,(0,c.jsx)(n.code,{children:`"ui-test": true`}),` в `,(0,c.jsx)(n.code,{children:`package.json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsx)(n.p,{children:`Процесс компиляции пакетов автоматизирует проверки и вызовы команд сборки:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сканирование директорий`}),`: Класс `,(0,c.jsx)(n.code,{children:`BuildPackages`}),` сканирует целевую директорию пакетов (по умолчанию `,(0,c.jsx)(n.code,{children:`/packages/`}),`) и считывает файл кэша сборок `,(0,c.jsx)(n.code,{children:`./logs/ui-build.log.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Фильтрация и валидация`}),`: Для каждой папки создается обертка `,(0,c.jsx)(n.code,{children:`PackageFile`}),` для проверки того, что она является пакетом, не является тестовым пакетом, и что ее текущая версия отличается от версии, записанной в кэше.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Выполнение сборки`}),`: Если требуется обновление, инструмент проверяет скрипты в `,(0,c.jsx)(n.code,{children:`package.json`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Если существует скрипт `,(0,c.jsx)(n.code,{children:`"build-recovery"`}),`, выполняется `,(0,c.jsx)(n.code,{children:`npm run build-recovery`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`В противном случае, если существует скрипт `,(0,c.jsx)(n.code,{children:`"build"`}),`, выполняется `,(0,c.jsx)(n.code,{children:`npm run build`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синхронизация логов`}),`: После успешной компиляции пакета его версия обновляется в кэше в оперативной памяти.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сохранение логов`}),`: Если один или несколько пакетов были успешно собраны, обновленный кэш сохраняется обратно в `,(0,c.jsx)(n.code,{children:`./logs/ui-build.log.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`дополнительная-информация`,children:`Дополнительная информация`}),`
`,(0,c.jsxs)(n.h3,{id:`файл-кэширования-логов-ui-buildlogjson`,children:[`Файл кэширования логов (`,(0,c.jsx)(n.code,{children:`ui-build.log.json`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Локальный кэш хранится по пути:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`./logs/ui-build.log.json
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Если вы хотите принудительно пересобрать все пакеты независимо от их версий, вы можете удалить этот файл или сбросить его содержимое до пустых скобок `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`исключение-тестовых-пакетов`,children:`Исключение тестовых пакетов`}),`
`,(0,c.jsxs)(n.p,{children:[`Если вы хотите, чтобы сборщик игнорировал конкретный пакет, добавьте следующее свойство в его файл `,(0,c.jsx)(n.code,{children:`package.json`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "ui-test": true
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};