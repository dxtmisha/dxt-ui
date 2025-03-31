/**
 * In HTML documents, creates an element with the tag that is specified in the argument.
 *
 * В HTML-документах создаёт элемент с тегом, который указан в аргументе.
 * @param parentElement the DOM node's parent Element/ родитель для нового элемента
 * @param tagName A string that specifies the type of element to be created/ строка,
 * указывающая элемент какого типа должен быть создан
 * @param options an object with attributes or a function for processing an element/ объект
 * с атрибутами или функция для обработки элемента
 * @param referenceElement the node before which newNode is inserted/ элемент,
 * перед которым будет вставлен newElement
 */
export declare function createElement<T extends HTMLElement>(parentElement?: HTMLElement, tagName?: string, options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void), referenceElement?: HTMLElement): T | undefined;
