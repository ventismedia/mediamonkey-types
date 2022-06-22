declare type callback = () => any;
declare type procedure = () => void;
declare type anyCallback = (...args: any) => any;
declare type eventCallback = (this: any, event: any) => any;

declare function parseFloat(source: any): number;
declare function parseInt(source: any): number;

/**
 * A number which is not a decimal.
 */
declare type integer = number;