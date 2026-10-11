// md5:713c3a8b8b7bbfee1ce48b00d498c1f4 true
import { type ElementType, type ReactElement, type ReactNode } from 'react';
import type { ItemList } from '@dxtmisha/functional-basic';
/** Creates a React element with an automatic stable fallback key and safely preserved children. @keywords react, render, createElement, stable key, element */
export declare function renderReact<T extends ItemList>(name: ElementType, props?: T, children?: ReactNode, index?: string): ReactElement;