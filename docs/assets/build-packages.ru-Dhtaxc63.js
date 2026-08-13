import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/# Команды/dxt-build-packages - Сборка пакетов`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-build-packages`,children:`dxt-build-packages`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-build-packages`}),` обеспечивает автоматическую сборку измененных npm-пакетов в рабочем пространстве. Инструмент использует `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` и `,(0,c.jsx)(t.code,{children:`PackageFile`}),` для сканирования активных директорий библиотек, отслеживания версий и инкрементальной компиляции пакетов при обнаружении изменений.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое сканирование монорепозитория`}),`: Обнаруживает активные директории пакетов внутри папки `,(0,c.jsx)(t.code,{children:`/packages/`}),`, содержащие корректный файл `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инкрементальное кэширование на основе версий`}),`: Избегает избыточных сборок благодаря ведению локального кэша сборок в файле `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`. Сборка пакета запускается только в том случае, если его текущая версия в `,(0,c.jsx)(t.code,{children:`package.json`}),` изменилась по сравнению с сохраненной в кэше.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальный выбор скриптов`}),`: Автоматически выполняет скрипт `,(0,c.jsx)(t.code,{children:`"build-recovery"`}),`, если он определен в скриптах пакета, с переходом на стандартный скрипт `,(0,c.jsx)(t.code,{children:`"build"`}),`, если первый отсутствует.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Исключение тестовых пакетов`}),`: Автоматически пропускает пакеты, помеченные как тестовые (содержащие `,(0,c.jsx)(t.code,{children:`"ui-test": true`}),` в `,(0,c.jsx)(t.code,{children:`package.json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsx)(t.p,{children:`Процесс компиляции пакетов автоматизирует проверки и вызовы команд сборки:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сканирование директорий`}),`: Класс `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` сканирует целевую директорию пакетов (по умолчанию `,(0,c.jsx)(t.code,{children:`/packages/`}),`) и считывает файл кэша сборок `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Фильтрация и валидация`}),`: Для каждой папки создается обертка `,(0,c.jsx)(t.code,{children:`PackageFile`}),` для проверки того, что она является пакетом, не является тестовым пакетом, и что ее текущая версия отличается от версии, записанной в кэше.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Выполнение сборки`}),`: Если требуется обновление, инструмент проверяет скрипты в `,(0,c.jsx)(t.code,{children:`package.json`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Если существует скрипт `,(0,c.jsx)(t.code,{children:`"build-recovery"`}),`, выполняется `,(0,c.jsx)(t.code,{children:`npm run build-recovery`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`В противном случае, если существует скрипт `,(0,c.jsx)(t.code,{children:`"build"`}),`, выполняется `,(0,c.jsx)(t.code,{children:`npm run build`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синхронизация логов`}),`: После успешной компиляции пакета его версия обновляется в кэше в оперативной памяти.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сохранение логов`}),`: Если один или несколько пакетов были успешно собраны, обновленный кэш сохраняется обратно в `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`дополнительная-информация`,children:`Дополнительная информация`}),`
`,(0,c.jsxs)(t.h3,{id:`файл-кэширования-логов-ui-buildlogjson`,children:[`Файл кэширования логов (`,(0,c.jsx)(t.code,{children:`ui-build.log.json`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Локальный кэш хранится по пути:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Если вы хотите принудительно пересобрать все пакеты независимо от их версий, вы можете удалить этот файл или сбросить его содержимое до пустых скобок `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`исключение-тестовых-пакетов`,children:`Исключение тестовых пакетов`}),`
`,(0,c.jsxs)(t.p,{children:[`Если вы хотите, чтобы сборщик игнорировал конкретный пакет, добавьте следующее свойство в его файл `,(0,c.jsx)(t.code,{children:`package.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "ui-test": true
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};