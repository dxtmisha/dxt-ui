# AI Package Memory: @dxtmisha/functional

## Code Review & Validation Status
1. **Reviewed Entities Registry (`temp.md`)**: The file `temp.md` in the package root (`packages/functional/temp.md`) stores the list of entity file paths (e.g. `src/functions/ref/getRef.ts`) that have successfully passed code review and unit test validation.
2. **Pre-Review Check (`temp.md`)**: Before starting a code review for any entity, function, or file, check whether it is already listed in `temp.md`. If it is present in `temp.md`, immediately stop and inform the user that the code review has already passed.
3. **Review Completion Protocol**: When the developer confirms that the code review is complete ("код-ревью готово"):
   - Add the entity file path to `temp.md`.
   - Verify and update unit tests strictly following the instructions in `ai-prompts/test.md`.
   - Verify and update the entity's documentation for relevance in `src/storybook/`.
