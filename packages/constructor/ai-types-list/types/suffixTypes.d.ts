// md5:cf6442973ca4e7a81a5efcb4b6b7e125 true
export interface SuffixSlots {
  /** Suffix slot content @keywords suffix, slot */
  suffix?(props: any): any;
}

export type SuffixProps = {
  /** Suffix text or number @keywords suffix, text */
  suffix?: string | number;
  /** Unique identifier for the suffix element @keywords suffix, id */
  suffixId?: string;
};