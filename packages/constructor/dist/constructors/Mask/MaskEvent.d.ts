import { MaskBuffer } from './MaskBuffer';
import { MaskFocus } from './MaskFocus';
import { MaskCharacterLength } from './MaskCharacterLength';
import { MaskRight } from './MaskRight';
import { MaskSelection } from './MaskSelection';
import { MaskValueBasic } from './MaskValueBasic';
import { MaskEmit } from './MaskEmit';
import { MaskData } from './MaskData';
import { MaskEventSelection } from './basicTypes';
/**
 * Class for working with events.
 *
 * Класс для работы с событиями.
 */
export declare class MaskEvent {
    protected readonly buffer: MaskBuffer;
    protected readonly focus: MaskFocus;
    protected readonly characterLength: MaskCharacterLength;
    protected readonly right: MaskRight;
    protected readonly selection: MaskSelection;
    protected readonly valueBasic: MaskValueBasic;
    protected readonly emit: MaskEmit;
    protected readonly data: MaskData;
    /** Change flag/ Флаг изменения */
    protected change: boolean;
    /** Unidentified selection data/ Данные неопознанного выделения */
    protected unidentified?: MaskEventSelection;
    /**
     * Constructor
     * @param buffer object for managing cached input data/ объект управления кешированными вводимыми данными
     * @param focus object for handling input field focus/ объект для работы с фокусировкой поля ввода
     * @param characterLength object for managing input length/ объект управления длиной ввода
     * @param right object for right alignment/ объект для выравнивания направо
     * @param selection object for managing cursor position/ объект для управления положением курсора
     * @param valueBasic object for working with base values/ объект для работы с базовыми значениями
     * @param emit object for handling callback events/ объект для работы с обратными событиями
     * @param data object for managing input/ объект для управления вводом
     */
    constructor(buffer: MaskBuffer, focus: MaskFocus, characterLength: MaskCharacterLength, right: MaskRight, selection: MaskSelection, valueBasic: MaskValueBasic, emit: MaskEmit, data: MaskData);
    /**
     * Capture of the event in focus.
     *
     * Перехват события при получении фокуса.
     * @param event event object/ объект события
     */
    readonly onFocus: (event: FocusEvent) => void;
    /**
     * Capture of the event when focus is lost.
     *
     * Перехват события при потере фокуса.
     * @param event event object/ объект события
     */
    readonly onBlur: (event: FocusEvent) => void;
    /**
     * Intercepting key press to get a character.
     *
     * Перехват нажатия клавиши для получения символа.
     * @param event invoked event/ вызываемое событие
     */
    readonly onKeydown: (event: KeyboardEvent) => void;
    /**
     * Intercept key release to check arrow presses.
     *
     * Перехват отпускания клавиши для проверки нажатия стрелок.
     * @param event invoked event/ вызываемое событие
     */
    readonly onKeyup: (event: KeyboardEvent) => void;
    /**
     * Intercepting the event before data modification.
     *
     * Перехват события перед изменением данных.
     * @param event invoked event/ вызываемое событие
     */
    readonly onBeforeinput: (event: InputEvent) => void;
    /**
     * Intercepting the event during data modification.
     *
     * Перехват события при изменении данных.
     * @param event invoked event/ вызываемое событие
     */
    readonly onInput: (event: InputEvent) => void;
    /**
     * Intercept paste event for inserting data from clipboard.
     *
     * Перехват события вставки данных из буфера обмена.
     * @param event invoked event/ вызываемое событие
     */
    readonly onPaste: (event: ClipboardEvent) => void;
    /**
     * Intercept change event (autocomplete support).
     *
     * Перехват события изменения (поддержка автозаполнения).
     * @param event invoked event/ вызываемое событие
     */
    readonly onChange: (event: Event) => void;
    /**
     * Intercept click to adjust selection if needed.
     *
     * Перехват клика для корректировки выделения при необходимости.
     * @param event invoked event/ вызываемое событие
     */
    readonly onClick: (event: MouseEvent) => void;
    /**
     * Was a meta button pressed.
     *
     * Была ли нажата мета-кнопка.
     * @param event invoked event/ вызываемое событие
     */
    protected isMetaKey(event: KeyboardEvent): boolean;
    /**
     * Was a cut operation performed.
     *
     * Была ли выполнена операция вырезания.
     * @param event invoked event/ вызываемое событие
     */
    protected isCut(event: KeyboardEvent): boolean;
    /**
     * Checks key value in the event.
     *
     * Проверяет значение key в событии.
     * @param event invoked event/ вызываемое событие
     */
    protected isKey(event: KeyboardEvent): boolean;
    /**
     * Was there a selection.
     *
     * Было ли выделение.
     * @param info selection data/ данные выделения
     */
    protected isSelection(info: MaskEventSelection): boolean;
    /**
     * Getting data about selection on the event element.
     *
     * Получение данных о выделении у элемента события.
     * @param event invoked event/ вызываемое событие
     */
    protected getSelectionInfo(event: Event): MaskEventSelection;
    /**
     * Preparing to send an event.
     *
     * Подготовка для отправки события.
     * @param event invoked event/ вызываемое событие
     */
    protected makeChange(event: Event): void;
    /**
     * Changes cursor position if alignment is right.
     *
     * Изменяет позицию курсора, если выравнивание справа.
     * @param event invoked event/ вызываемое событие
     */
    protected makeToEnd(event: Event): void;
    /**
     * Check selection from the start (before special chars).
     *
     * Проверка выделения спереди (перед спецсимволами).
     * @param event invoked event/ вызываемое событие
     */
    protected makeToStart(event: Event): void;
}
