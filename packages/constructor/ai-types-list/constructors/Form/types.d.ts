// md5:e23bd1e2288b2cc74fb161f5a97e35b2 true
import type { ConstrClass } from '@dxtmisha/functional';

export type FormComponents = {};

export type FormEmits = ModelEmits & {
  /** Form input event. @keywords form, input, event */
  input: [
    event: InputEvent,
    data: FormElementsData,
    values: FormElementsValues
  ];
  /** Form input event without native event object. @keywords form, input, lite */
  inputLite: [
    data: FormElementsData,
    values: FormElementsValues
  ];
  /** Form input values update event. @keywords form, values, input */
  inputValues: [
    values: FormElementsValues
  ];
  /** Form change event. @keywords form, change, event */
  change: [
    event: InputEvent,
    data: FormElementsData,
    values: FormElementsValues
  ];
  /** Form change event without native event object. @keywords form, change, lite */
  changeLite: [
    data: FormElementsData,
    values: FormElementsValues
  ];
  /** Form change values update event. @keywords form, values, change */
  changeValues: [
    values: FormElementsValues
  ];
  /** Form reset event. @keywords form, reset, event */
  reset: [
    event: Event
  ];
  /** Form submission event. @keywords form, submit, event */
  submit: [
    event: SubmitEvent
  ];
};

export interface FormExpose {
  /** Checks whether the form satisfies validation constraints. @keywords form, checkValidity, validation */
  checkValidity(): boolean;
  /** Returns the current form values. @keywords form, getValues, values */
  getValues(): FormElementsValues;
  /** Resets the form to its initial state. @keywords form, reset */
  reset(): void;
  /** Sets the value of a specific form field. @keywords form, set, field */
  set(name: string, value: any): void;
  /** Sets multiple form field values. @keywords form, setValues, batch */
  setValues(values: FormElementsValues): void;
  /** Sets values for all form fields and clears omitted fields. @keywords form, setValuesAll, replace */
  setValuesAll(values: FormElementsValues): void;
  /** Submits the form. @keywords form, submit */
  submit(): void;
}

export interface FormSlots {
  /** Header slot for form title or top controls. @keywords form, slot, header */
  header?(props: any): any;
  /** Default slot for form content and input elements. @keywords form, slot, default */
  default?(props: any): any;
  /** Footer slot for form actions and buttons. @keywords form, slot, footer */
  footer?(props: any): any;
}

export type FormClasses = {
  main: ConstrClass;
};