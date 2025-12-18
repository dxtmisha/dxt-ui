/**
 * Simple calculator class for basic math operations.
 *
 * Простой класс калькулятора для базовых математических операций.
 */
export declare class Calculator {
    private result;
    /**
     * Gets the current result.
     *
     * Получает текущий результат.
     */
    getResult(): number;
    /**
     * Sets the initial value.
     *
     * Устанавливает начальное значение.
     * @param value - The initial value / Начальное значение
     */
    setValue(value: number): this;
    /**
     * Adds a number to the current result.
     *
     * Добавляет число к текущему результату.
     * @param value - The number to add / Число для сложения
     */
    add(value: number): this;
    /**
     * Subtracts a number from the current result.
     *
     * Вычитает число из текущего результата.
     * @param value - The number to subtract / Число для вычитания
     */
    subtract(value: number): this;
    /**
     * Multiplies the current result by a number.
     *
     * Умножает текущий результат на число.
     * @param value - The number to multiply by / Число для умножения
     */
    multiply(value: number): this;
    /**
     * Divides the current result by a number.
     *
     * Делит текущий результат на число.
     * @param value - The number to divide by / Число для деления
     * @throws {Error} When dividing by zero / При делении на ноль
     */
    divide(value: number): this;
    /**
     * Raises the current result to a power.
     *
     * Возводит текущий результат в степень.
     * @param exponent - The exponent / Показатель степени
     */
    power(exponent: number): this;
    /**
     * Calculates the square root of the current result.
     *
     * Вычисляет квадратный корень из текущего результата.
     * @throws {Error} When result is negative / Когда результат отрицательный
     */
    sqrt(): this;
    /**
     * Resets the calculator to zero.
     *
     * Сбрасывает калькулятор на ноль.
     */
    reset(): this;
    /**
     * Checks if the result is even.
     *
     * Проверяет, является ли результат чётным.
     */
    isEven(): boolean;
    /**
     * Checks if the result is odd.
     *
     * Проверяет, является ли результат нечётным.
     */
    isOdd(): boolean;
    /**
     * Checks if the result is positive.
     *
     * Проверяет, является ли результат положительным.
     */
    isPositive(): boolean;
    /**
     * Checks if the result is negative.
     *
     * Проверяет, является ли результат отрицательным.
     */
    isNegative(): boolean;
    /**
     * Checks if the result is zero.
     *
     * Проверяет, является ли результат нулём.
     */
    isZero(): boolean;
}
