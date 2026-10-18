// md5:26a38c56099f16975c7a24a704c301db true
export type InputSearchPropsToken = {};
/** Search input component basic properties contract. @keywords search input properties field */
export type InputSearchPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & TextSearchPropsInclude & Omit<FieldBasicProps<string>, 'type'> & FieldLengthProps & FieldUxProps & {
    /** HTML input type. @keywords type search text */
    type?: 'search' | 'text';
    /** Minimum character length to trigger search. @keywords minQuery threshold length */
    minQuery?: number;
    /** Debounce delay in milliseconds before search execution. @keywords delay debounce timeout */
    delay?: number;
};
export type InputSearchProps = InputSearchPropsBasic & InputSearchPropsToken;
/** Default properties for the search input component. @keywords defaults input search */
export declare const defaultsInputSearch: {
    type: string;
    autocomplete: string;
    autocapitalize: string;
    autocorrect: string;
    spellcheck: boolean;
    enterKeyHint: string;
    inputMode: string;
    cancel: boolean;
    icon: string;
    minQuery: number;
    delay: number;
};