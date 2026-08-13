// md5:48c75bf6413790cc58415a746a67174a true
import { PlaceholderPropsBasic } from '@dxtmisha/constructor/Placeholder';
export declare const propsValues: {
    size: string[];
};
type PropsToken = {
    size?: 'sm' | 'md' | 'lg';
};
/** Type describing incoming properties @keywords placeholder props configuration */
export type PlaceholderProps = PlaceholderPropsBasic<ImageProps, ActionsProps> & PropsToken;
/** Default value for property @keywords defaults configuration */
export declare const defaults: object;