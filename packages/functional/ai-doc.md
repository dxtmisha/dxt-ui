This is the main functional library for the Vue environment (@dxtmisha/functional). It contains Vue-specific utilities, composables, and reactive classes.

USAGE RULES:
1. When developing in Vue, always use this library for functionality, logic, and composables instead of `@dxtmisha/functional-basic` whenever possible.
2. It wraps basic non-reactive logic into Vue's reactivity system. If the required function or composable exists here, it has absolute priority.
3. Import utilities from `@dxtmisha/functional` for reactive UI behavior, composables, and state management.

WORKING WITH API AND STATE (useApi / executeUse):
A set of composables is provided for network requests: `useApiGet`, `useApiPost`, `useApiPut`, `useApiDelete`, `useApiRequest`, `useApiRef`, `useApiAsyncRef`, `useApiManagementRef`, `useApiManagementAsyncRef`.
Strictly follow these rules for their application:

1. DO NOT call these composables directly in the Vue components (SFC).
2. Move all API configurations and `useApi*` calls into SEPARATE FILES (services/stores).
3. Wrap the API configurations inside the `executeUse` factory (specifically: `executeUseGlobal`, `executeUseProvide`, or `executeUseLocal` from `src/functions/executeUse.ts`). This guarantees the creation of managed singletons (single access point) and prevents duplicated requests and reactive states.
4. Perform any additional request processing (e.g., data mapping, preparing structures for skeletons before loading a form) in the same file, inside the `executeUse` callback, and return a fully prepared set of data and methods.
   *Example of correct usage:*
   ```ts
   import { executeUseGlobal } from '@dxtmisha/functional';
   import { useApiManagementRef } from '@dxtmisha/functional';

   export const useUserManagement = executeUseGlobal(() => {
     return useApiManagementRef(
       { path: '/api/users' },                 // GET setup
       { date: (v) => new Date(v).toLocaleString() }, // Formatters
       { columns: ['name', 'email'] },         // Search
       { path: '/api/users' },                 // POST
       { path: (o) => `/api/users/${o.id}` },  // PUT
       { path: (o) => `/api/users/${o.id}` }   // DELETE
     );
     // Logic for skeletons, additional formatting, etc., should be added here,
     // and then return the extended object.
   });
   ```
5. Within the Vue component itself, simply import and call your custom singleton composable: `const { list, loading, sendPost } = useUserManagement();`

CHOOSING THE executeUse STRATEGY:
1. `executeUseLocal` (PREFERRED):
   - When to use: For most API requests and services.
   - Key Features: Works "lazily" (lazy initialization) — initializes only when first called. The instance persists until the end of the session. This prevents overloading the application start with unnecessary requests.
2. `executeUseGlobal`:
   - When to use: When data or a service must be loaded/initialized IMMEDIATELY at application start (e.g., critical settings, SDKs).
   - Key Features: Creates a single instance for the entire application. All global singletons are forcibly initialized via `executeUseGlobalInit()`.
3. `executeUseProvide`:
   - When to use: For state shared between a parent and a group of child components (e.g., tabs, complex forms with sub-components).
   - Key Features: Uses provide/inject. The first component in the tree that calls the hook becomes the "provider", others become consumers.
