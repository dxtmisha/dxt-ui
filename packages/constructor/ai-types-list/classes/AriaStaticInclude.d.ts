// md5:87996436dcffa2ac87298fbc4d3056af true
/** Class returns static ARIA attributes @keywords aria static attributes role */
export declare class AriaStaticInclude {
	/** Get role by props @keywords aria role */
	static role(role?: RoleType): AriaList;
	/** Get ARIA atomic attribute @keywords aria atomic */
	static atomic(isAtomic?: boolean): AriaList;
	/** Get ARIA checked attribute @keywords aria checked */
	static checked(isChecked?: boolean): AriaList;
	/** Get ARIA controls attribute @keywords aria controls */
	static controls(controls?: string): AriaList;
	/** Get ARIA current attribute @keywords aria current */
	static current(value?: AriaList['aria-current']): AriaList;
	/** Get ARIA busy attribute @keywords aria busy */
	static busy(isBusy?: boolean): AriaList;
	/** Get ARIA describedby attribute @keywords aria describedby */
	static describedby(id?: string): AriaList;
	/** Get ARIA disabled attribute @keywords aria disabled */
	static disabled(isDisabled?: boolean): AriaList;
	/** Get ARIA expanded attribute @keywords aria expanded */
	static expanded(isExpanded?: boolean): AriaList;
	/** Get ARIA haspopup attribute @keywords aria haspopup */
	static haspopup(haspopup?: AriaList['aria-haspopup']): AriaList;
	/** Get ARIA label @keywords aria label */
	static label(label?: string | number): AriaList;
	/** Get ARIA labelledby attribute @keywords aria labelledby */
	static labelledby(id?: string): AriaList;
	/** Get ARIA invalid attribute @keywords aria invalid */
	static invalid(isInvalid?: boolean): AriaList;
	/** Get control role @keywords aria control */
	static control(id?: string, controls?: string, haspopup?: AriaList['aria-haspopup'], expanded?: boolean): AriaList;
	/** Get ARIA hidden attribute @keywords aria hidden */
	static hidden(isHidden?: boolean): AriaList;
	/** Get ARIA live attribute @keywords aria live */
	static live(live?: AriaList['aria-live']): AriaList;
	/** Get ARIA modal attribute @keywords aria modal */
	static ariaModal(isModal?: boolean): AriaList;
	/** Get modal role @keywords aria modal role */
	static modal(isModal?: boolean, ariaLabelledby?: string, ariaDescribedby?: string): AriaList;
	/** Get ARIA multiselectable attribute @keywords aria multiselectable */
	static multiselectable(isMultiselectable?: boolean): AriaList;
	/** Get ARIA selected attribute @keywords aria selected */
	static selected(isSelected?: boolean): AriaList;
	/** Get ARIA sort attribute @keywords aria sort */
	static sort(sortDir?: AriaList['aria-sort'] | string): AriaList;
	/** Get ARIA orientation attribute @keywords aria orientation */
	static orientation(orientation?: AriaList['aria-orientation']): AriaList;
	/** Returns ARIA value now, min and max @keywords aria min max value */
	static valueMinMax(value?: string | number, min?: string | number, max?: string | number): AriaList;
	/** Returns 'true' or 'false' based on boolean value @keywords aria boolean */
	static isTrueOrFalse(value?: boolean): AriaTrueOrFalse | undefined;
	/** Returns data as ARIA attribute @keywords aria data */
	protected static isDataToData<V>(name: string, value?: V): AriaList;
}