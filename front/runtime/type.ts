import { IEl } from "./el";

export type Func = (...args: any[]) => any;
export type FC<D = any, P = any> = (data: D & Record<any, any>, props: P & Record<any, any>) => () => IEl[] 