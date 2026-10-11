# AI Package Memory: @dxtmisha/functional-react

## Naming Conventions
1. **Suffix Replacement (Ref -> React)**: When adapting or porting utilities, hooks, composables, functions, types, or classes from `@dxtmisha/functional` (which use the `Ref` suffix, e.g. `getRef`, `useDatetimeRef`, etc.), always replace the `Ref` suffix with `React` (e.g. `getReact`, `useDatetimeReact`, `setReact`, etc.). Never use `Ref` in suffixes or names for React utilities.
