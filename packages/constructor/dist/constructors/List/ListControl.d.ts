import { EventItem, ListDataRef } from '@dxtmisha/functional';
import { ListSearch } from './ListSearch';
import { ListGo } from './ListGo';
import { ListProps } from './props';
import { ComputedRef } from 'vue';
/**
 * Class for managing keyboard navigation and event handling in list components.
 * Provides keyboard shortcuts, search functionality, and navigation controls.
 *
 * Класс для управления навигацией с клавиатуры и обработкой событий в компонентах списка.
 * Предоставляет клавиатурные сокращения, функциональность поиска и элементы управления навигацией.
 */
export declare class ListControl {
    protected readonly props: ListProps;
    protected readonly search: ListSearch;
    protected readonly data: ListDataRef;
    protected readonly go: ListGo;
    protected event?: EventItem<HTMLElement, any>;
    /**
     * Creates an instance of ListControl for managing keyboard navigation and events.
     *
     * Создает экземпляр ListControl для управления навигацией с клавиатуры и событиями.
     * @param props input data/ входные данные
     * @param search search functionality controller / контроллер функциональности поиска
     * @param data list data manager / менеджер данных списка
     * @param go navigation controller / контроллер навигации
     */
    constructor(props: ListProps, search: ListSearch, data: ListDataRef, go: ListGo);
    /**
     * Checks if the menu is active.
     *
     * Проверяет, активное ли меню.
     */
    readonly isActive: ComputedRef<boolean>;
    /**
     * Checks if the event target is not an input.
     *
     * Проверяет, не является ли цель события input.
     * @param target selected element/ выбранный элемент
     */
    protected isNotInput(target: HTMLElement): boolean;
    /**
     * Gets the currently active input element with menu control.
     *
     * Получает текущий активный элемент input с управлением меню.
     * @returns active input element or undefined / активный элемент input или undefined
     */
    protected getActiveElement(): HTMLInputElement | undefined;
    /**
     * Starts the event.
     *
     * Запускает событие.
     */
    protected start(): void;
    /**
     * Stops the event.
     *
     * Останавливает событие.
     */
    protected stop(): void;
    /**
     * Updates the search value based on keyboard input.
     *
     * Обновляет значение поиска на основе ввода с клавиатуры.
     * @param event keyboard event / событие клавиатуры
     */
    protected updateSearch(event: KeyboardEvent): void;
    /**
     * Method for tracking keys when a window is open.
     *
     * Метод для отслеживания нажатий при открытом окне.
     * @param event event object/ объект события
     */
    protected readonly on: (event: KeyboardEvent) => void;
}
