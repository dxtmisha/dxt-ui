//#region src/library/design.ts
var e = "d1", t = "@dxtmisha/d1", n = /((d1|dd)-?(accordion|action-?sheet|actions|anchor|area|arrow|badge|bars|block|button|cell|checkbox|chip|chip-?group|container|dialog|dummy|field|field-?counter|field-?label|field-?message|grid|grid-?item|group|header|horizontal-?scroll|icon|image|input|list|list-?group|list-?item|list-?menu|mask|menu|modal|motion-?axis|motion-?transform|page|progress|ripple|scrollbar|section|select|select-?value|skeleton|snackbar|snackbar-?item|tab-?item|tabs|tabs-?navigation|textarea|textarea-?autosize|tooltip|window))(?![\w-])/gi, r = /(?<=var\(--)(ref-blur|ref-font-family|ref-font-size|ref-font-weight|ref-index|ref-letterSpacing|ref-lineHeight|ref-opacity|ref-palette-red|ref-palette-orange|ref-palette-amber|ref-palette-yellow|ref-palette-lime|ref-palette-green|ref-palette-emerald|ref-palette-teal|ref-palette-cyan|ref-palette-sky|ref-palette-blue|ref-palette-indigo|ref-palette-violet|ref-palette-purple|ref-palette-fuchsia|ref-palette-pink|ref-palette-rose|ref-palette-slate|ref-palette-gray|ref-palette-zinc|ref-palette-neutral|ref-palette-stone|ref-palette-black|ref-palette-white|ref-screen|ref-shade|ref-shadow|ref-shadow-dark|ref-spacing|sys-background|sys-blur|sys-font-family|sys-font-size|sys-font-weight|sys-index|sys-letterSpacing|sys-lineHeight|sys-opacity|sys-opacity-primary|sys-opacity-surface|sys-palette|sys-rounded|sys-rounded-adaptive|sys-shade|sys-shade-dark|sys-shadow|sys-spacing|sys-spacing-grid-paddingX|sys-spacing-grid|sys-spacing-grid-gapX|sys-spacing-grid-gapY|sys-spacing-block|sys-spacing-size|sys-spacing-adaptive)/gi, i = [
	{
		name: "D1Accordion",
		reg: /^((d1|dd)-?(accordion))$/gi
	},
	{
		name: "D1ActionSheet",
		reg: /^((d1|dd)-?(action-?sheet))$/gi
	},
	{
		name: "D1Actions",
		reg: /^((d1|dd)-?(actions))$/gi
	},
	{
		name: "D1Anchor",
		reg: /^((d1|dd)-?(anchor))$/gi
	},
	{
		name: "D1Area",
		reg: /^((d1|dd)-?(area))$/gi
	},
	{
		name: "D1Arrow",
		reg: /^((d1|dd)-?(arrow))$/gi
	},
	{
		name: "D1Badge",
		reg: /^((d1|dd)-?(badge))$/gi
	},
	{
		name: "D1Bars",
		reg: /^((d1|dd)-?(bars))$/gi
	},
	{
		name: "D1Block",
		reg: /^((d1|dd)-?(block))$/gi
	},
	{
		name: "D1Button",
		reg: /^((d1|dd)-?(button))$/gi
	},
	{
		name: "D1Cell",
		reg: /^((d1|dd)-?(cell))$/gi
	},
	{
		name: "D1Checkbox",
		reg: /^((d1|dd)-?(checkbox))$/gi
	},
	{
		name: "D1Chip",
		reg: /^((d1|dd)-?(chip))$/gi
	},
	{
		name: "D1ChipGroup",
		reg: /^((d1|dd)-?(chip-?group))$/gi
	},
	{
		name: "D1Container",
		reg: /^((d1|dd)-?(container))$/gi
	},
	{
		name: "D1Dialog",
		reg: /^((d1|dd)-?(dialog))$/gi
	},
	{
		name: "D1Dummy",
		reg: /^((d1|dd)-?(dummy))$/gi
	},
	{
		name: "D1Field",
		reg: /^((d1|dd)-?(field))$/gi
	},
	{
		name: "D1FieldCounter",
		reg: /^((d1|dd)-?(field-?counter))$/gi
	},
	{
		name: "D1FieldLabel",
		reg: /^((d1|dd)-?(field-?label))$/gi
	},
	{
		name: "D1FieldMessage",
		reg: /^((d1|dd)-?(field-?message))$/gi
	},
	{
		name: "D1Grid",
		reg: /^((d1|dd)-?(grid))$/gi
	},
	{
		name: "D1GridItem",
		reg: /^((d1|dd)-?(grid-?item))$/gi
	},
	{
		name: "D1Group",
		reg: /^((d1|dd)-?(group))$/gi
	},
	{
		name: "D1Header",
		reg: /^((d1|dd)-?(header))$/gi
	},
	{
		name: "D1HorizontalScroll",
		reg: /^((d1|dd)-?(horizontal-?scroll))$/gi
	},
	{
		name: "D1Icon",
		reg: /^((d1|dd)-?(icon))$/gi
	},
	{
		name: "D1Image",
		reg: /^((d1|dd)-?(image))$/gi
	},
	{
		name: "D1Input",
		reg: /^((d1|dd)-?(input))$/gi
	},
	{
		name: "D1List",
		reg: /^((d1|dd)-?(list))$/gi
	},
	{
		name: "D1ListGroup",
		reg: /^((d1|dd)-?(list-?group))$/gi
	},
	{
		name: "D1ListItem",
		reg: /^((d1|dd)-?(list-?item))$/gi
	},
	{
		name: "D1ListMenu",
		reg: /^((d1|dd)-?(list-?menu))$/gi
	},
	{
		name: "D1Mask",
		reg: /^((d1|dd)-?(mask))$/gi
	},
	{
		name: "D1Menu",
		reg: /^((d1|dd)-?(menu))$/gi
	},
	{
		name: "D1Modal",
		reg: /^((d1|dd)-?(modal))$/gi
	},
	{
		name: "D1MotionAxis",
		reg: /^((d1|dd)-?(motion-?axis))$/gi
	},
	{
		name: "D1MotionTransform",
		reg: /^((d1|dd)-?(motion-?transform))$/gi
	},
	{
		name: "D1Page",
		reg: /^((d1|dd)-?(page))$/gi
	},
	{
		name: "D1Progress",
		reg: /^((d1|dd)-?(progress))$/gi
	},
	{
		name: "D1Ripple",
		reg: /^((d1|dd)-?(ripple))$/gi
	},
	{
		name: "D1Scrollbar",
		reg: /^((d1|dd)-?(scrollbar))$/gi
	},
	{
		name: "D1Section",
		reg: /^((d1|dd)-?(section))$/gi
	},
	{
		name: "D1Select",
		reg: /^((d1|dd)-?(select))$/gi
	},
	{
		name: "D1SelectValue",
		reg: /^((d1|dd)-?(select-?value))$/gi
	},
	{
		name: "D1Skeleton",
		reg: /^((d1|dd)-?(skeleton))$/gi
	},
	{
		name: "D1Snackbar",
		reg: /^((d1|dd)-?(snackbar))$/gi
	},
	{
		name: "D1SnackbarItem",
		reg: /^((d1|dd)-?(snackbar-?item))$/gi
	},
	{
		name: "D1TabItem",
		reg: /^((d1|dd)-?(tab-?item))$/gi
	},
	{
		name: "D1Tabs",
		reg: /^((d1|dd)-?(tabs))$/gi
	},
	{
		name: "D1TabsNavigation",
		reg: /^((d1|dd)-?(tabs-?navigation))$/gi
	},
	{
		name: "D1Textarea",
		reg: /^((d1|dd)-?(textarea))$/gi
	},
	{
		name: "D1TextareaAutosize",
		reg: /^((d1|dd)-?(textarea-?autosize))$/gi
	},
	{
		name: "D1Tooltip",
		reg: /^((d1|dd)-?(tooltip))$/gi
	},
	{
		name: "D1Window",
		reg: /^((d1|dd)-?(window))$/gi
	}
];
//#endregion
export { i as componentsList, n as componentsReg, e as designName, t as packageName, r as styleVarsReg };
