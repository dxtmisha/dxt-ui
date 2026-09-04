// md5:3c05237bc4d77bb471ddc39bd52b63e8 true
import type { ConstrClass } from '@dxtmisha/functional';

export type FormComponents = {};

export type FormEmits = ModelEmits & {
    /** Form input event. @keywords input, event */
    input: [
        event: InputEvent,
        data: FormElementsData,
        values: FormElementsValues
    ];
    /** Form input event (lite version). @keywords input, lite */
    inputLite: [
        data: FormElementsData,
        values: FormElementsValues
    ];
    /** Form input values event. @keywords input, values */
    inputValues: [
        values: FormElementsValues
    ];
    /** Form change event. @keywords change, event */
    change: [
        event: Event,
        data: FormElementsData,
        values: FormElementsValues
    ];
    /** Form change event (lite version). @keywords change, lite */
    changeLite: [
        data: FormElementsData,
        values: FormElementsValues
    ];
    /** Form change values event. @keywords change, values */
    changeValues: [
        values: FormElementsValues
    ];
    /** Form reset event. @keywords reset, event */
    reset: [
        event: Event
    ];
    /** Form submission event. @keywords submit, event */
    submit: [
        event: SubmitEvent
    ];
};

export interface FormExpose {
    /** Returns current form values. @keywords get, values, form data */
    getValues(): FormElementsValues;
    /** Sets value of specific form field. @keywords set, field, update */
    set(name: string, value: any): void;
    /** Sets multiple form field values. @keywords set values, batch, update */
    setValues(values: FormElementsValues): void;
    /** Validates form against validation constraints. @keywords validate, validity, check */
    checkValidity(): boolean;
    /** Submits the form programmatically. @keywords submit, send */
    reset(): void;
    /** Resets form fields to their initial values. @keywords reset, clear */
    submit(): void;
}

export interface FormSlots {
    /** Header slot for form title or top controls. @keywords slot, header */
    header?(props: any): any;
    /** Default slot for form content and input elements. @keywords slot, default, body */
    default?(props: any): any;
    /** Footer slot for form actions and buttons. @keywords slot, footer, actions */
    footer?(props: any): any;
}

export type FormClasses = {
    main: ConstrClass;
};