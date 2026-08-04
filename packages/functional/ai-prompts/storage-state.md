# Reactive Storage & Browser State

Composable wrappers for persistent and synchronized browser state management.

## Available Composables
- **`useStorageRef<T>(key, defaultVal)`**: Reactive `localStorage` wrapper with cross-tab synchronization.
- **`useSessionRef<T>(key, defaultVal)`**: Reactive `sessionStorage` wrapper for session-scoped data.
- **`useCookieRef<T>(key, defaultVal, options)`**: SSR-safe reactive cookie state wrapper.
- **`useBroadcastValueRef<T>(channel, defaultVal)`**: Reactive cross-tab broadcast messaging using `BroadcastChannel`.
- **`useHashRef<T>(key, defaultVal)`**: Reactive synchronization with URL hash fragments.

### Example
```typescript
import {
  useStorageRef,
  useSessionRef,
  useCookieRef,
  useBroadcastValueRef,
  useHashRef
} from '@dxtmisha/functional';

const theme = useStorageRef<'light' | 'dark'>('theme', 'light');
const step = useSessionRef<number>('step', 1);
const token = useCookieRef<string>('auth', '', { secure: true });
const sync = useBroadcastValueRef<string>('ch', 'idle');
const page = useHashRef<string>('page', 'home');
```
