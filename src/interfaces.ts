export interface StrObjectArrayBool {
  [index: string]: Array<boolean>;
}

export interface StrObjectStr {
  [index: string]: string;
}

export interface StrObjectArrayStr {
  [index: string]: Array<string>;
}

export interface StrObjectObjectArrayStr {
  [index: string]: StrObjectArrayStr;
}