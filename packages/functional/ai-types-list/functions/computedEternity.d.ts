// md5:f00dcc7c205662101adc1ffb2b4fe70a
import { type Ref } from 'vue';
/** Return value type of the computedEternity function / Тип возвращаемого значения функции computedEternity */
export type ComputedEternityValue<T, I = T | undefined> = [I] extends [undefined] ? (T | undefined) : (T | (I extends () => infer R ? R : I));
/**
 * Creates a computed property that is computed on demand and cached.
 * The value is updated automatically when dependencies change, but only if it has been accessed at least once.
 * Only the latest evaluation can update the value; results of obsolete evaluations are ignored.
 * Current evaluation errors reset the cached value to the initial state and are reported through ErrorCenter.
 * The watcher remains active throughout the life of the application.
 * Without a DOM runtime, evaluation is skipped and the initial state is returned.
 *
 * Создаёт вычисляемое свойство, которое вычисляется по требованию и кешируется.
 * Значение обновляется автоматически при изменении зависимостей, но только если к нему был осуществлён доступ хотя бы один раз.
 * Значение обновляет только последнее вычисление; результаты устаревших вычислений игнорируются.
 * Ошибки актуального вычисления сбрасывают кешированное значение к начальному состоянию и передаются в ErrorCenter.
 * Наблюдатель остаётся активным на протяжении работы всего приложения.
 * Вне DOM-среды вычисление пропускается и возвращается начальное значение.
 *
 * @template T resolved result type / тип результата вычисления
 * @template I initial state type / тип начального значения
 * @param getter synchronous or asynchronous evaluator or direct value; reactive dependencies are tracked before the first await / синхронное или асинхронное вычисление или прямое значение; реактивные зависимости отслеживаются до первого await
 * @param initialState initial cached value or a factory executed immediately during ref creation / начальное кешированное значение или фабрика, выполняемая сразу при создании ref
 * @returns custom ref with the initial or latest resolved value; assigning to value reports a read-only error through ErrorCenter / custom ref с начальным или последним актуальным результатом; присваивание value передаёт ошибку только для чтения в ErrorCenter
 */
export declare function computedEternity<T, I = T | undefined>(getter: (() => Promise<T> | T) | Promise<T> | T, initialState?: (() => I) | I): Ref<ComputedEternityValue<T, I>>;
