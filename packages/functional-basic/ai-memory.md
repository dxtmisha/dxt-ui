# Coding Guidelines

- Type files must have the `Types` suffix in their name (e.g. `*Types.ts` or `*Types.d.ts`).
- `ApiCache` (and `ApiFetch.cache`) is intentionally a global, shared cache across SSR requests designed strictly for public, user-independent requests. Do not treat its shared cross-request storage as an SSR isolation bug.
- `temp.md` contains the list of package entities (functions, utilities) that have successfully passed code review and testing / `temp.md` содержит список сущностей пакета, которые успешно прошли код-ревью и тестирование.
- Before starting a code review for any entity, function, or file, check whether it is already listed in `temp.md`. If it is present in `temp.md`, immediately stop and inform the user that the code review has already passed / Прежде чем начать код-ревью любой сущности, функции или файла, проверьте, есть ли они в `temp.md`. Если есть, немедленно остановитесь и сообщите пользователю, что код-ревью уже пройден.
- When the developer confirms that code review is complete ("код-ревью готово"): 1) Add the entity name to `temp.md`; 2) Verify and update unit tests according to `ai-prompts/test.md`; 3) Verify and update the entity's documentation for relevance in `src/storybook/` / Когда разработчик подтверждает завершение код-ревью ("код-ревью готово"): 1) Добавить название сущности в `temp.md`; 2) Проверить и обновить тесты по `ai-prompts/test.md`; 3) Проверить актуальность документации сущности в `src/storybook/`.

