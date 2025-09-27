import { Ref } from 'vue';
/**
 * Changing the value for the reactive method.
 *
 * Изменение значения для реактивного метода.
 * @param item reactive element/ реактивный элемент
 * @param value values for replacement/ значения для замены
 */
export declare function setRef<T>(item: Ref<T>, value: T): void;
