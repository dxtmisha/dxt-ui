// md5:3b29e75e859011ec67f29a7b718a92bf true
import { type Ref } from 'vue';

/** Ensures the provided value is wrapped in a Vue Ref. @keywords vue ref toRef reactive wrap */
export declare function toRefItem<T>(item: RefOrNormal<T>): Ref<T>;