// md5:fff2f2bfd16b11a03ec97bec7429db26 true
import type { ConstrClass } from '@dxtmisha/functional';

export type FieldComponents = IconComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude & ProgressComponentInclude;

export type FieldEmits = EventClickEmits;

export interface FieldExpose {}

export interface FieldSlots extends CaptionSlots, PrefixSlots, SuffixSlots, FieldLabelSlotsInclude {
  /** Slot for displaying content before the input area. @keywords leading, before */
  leading?(props: FieldControl): any;
  /** Slot for displaying content after the input area. @keywords trailing, after */
  trailing?(props: FieldControl): any;
  /** Default slot for the input element. @keywords default, input */
  default?(props: FieldControl): any;
}

export type FieldClasses = {
  main: ConstrClass;
  body: string;
  bodyInput: string;
  bodyTitle: string;
  bodyTitleLabel: string;
  bodyTitleLabelText: string;
  bodyScoreboard: string;
  bodyScoreboardLeft: string;
  bodyScoreboardRight: string;
  bodyScoreboardSpace: string;
  bodyScoreboardInput: string;
  bodyBorder: string;
  required: string;
};