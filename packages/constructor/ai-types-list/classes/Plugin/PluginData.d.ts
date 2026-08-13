// md5:1637c3c8bd0b92918f948712cb4a90e3 true
export type PluginComponentItem = {
    name: string;
    importPath: string;
};

export type PluginComponentImports = Record<string, PluginComponentItem>;

/** Class for storing plugin data. @keywords plugin data design components vars */
export declare class PluginData {
    /** Creates plugin data instance. @keywords constructor plugin data */
    constructor(design: string, packageName: string, componentsReg: RegExp, styleVarsReg: RegExp, componentsList: PluginComponentImports);
    /** Checks if the code contains a component. @keywords has component check */
    hasComponent(code: string): boolean;
    /** Checks if the code contains variables. @keywords has vars check */
    hasVars(code: string): boolean;
    /** Returns the design name. @keywords get design name */
    getDesign(): string;
    /** Returns the package name. @keywords get package name */
    getPackageName(): string;
    /** Returns a list of all components in the code. @keywords get components list */
    getComponents(code: string): PluginComponentImports;
    /** Returns the regular expression for finding variables. @keywords get style vars regex */
    getStyleVarsReg(): RegExp;
    /** Returns the style modification map. @keywords get style modification */
    getStyleModification(): Record<string, string>;
}