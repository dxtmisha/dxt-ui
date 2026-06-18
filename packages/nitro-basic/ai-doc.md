INFRASTRUCTURE LIBRARY (SSR/NITRO):
This package serves as the foundation for building Server-Side Rendering (SSR) applications using Nitro and Vue 3. It handles low-level operations for headers, storage, cookies, and server-side routing.

1. PURPOSE: The library is used exclusively for initializing and configuring the application's server infrastructure. it includes server bootstrap mechanisms (`uiBootstrapServer`), SSR application creation (`uiCreateSsrApp`), and Nitro plugins.
2. USAGE RESTRICTION: Functions and mixins from this package ARE NOT intended for use within regular Vue components or application business logic. All tools required for daily development should be imported from the corresponding high-level packages (e.g., `@dxtmisha/functional` or `@dxtmisha/d1`).
3. DO NOT CONNECT: Avoid direct inclusion of this package in the user interface. It is responsible for the server's "skeleton" and its configuration, which should remain hidden from the application developer.

Study this package only if you need to modify the server lifecycle logic, server request handling, or state synchronization mechanisms between the server and the client (hydration).


