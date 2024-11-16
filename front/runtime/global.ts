import { IEl } from "./el";
import { Component } from "./fc";
import { PriorityQueue } from "./priority-queue";

export enum FlushStatus {
	Pending,
	Flushing,
	None,
}

export const Var = {
	/** 当前在初始化的 */
	curInitFC: undefined as (undefined|Component),
	curRenderFC:  undefined as (undefined|Component),
	diffRoots: new PriorityQueue<IEl>((a, b) => a.level! - b.level!),
	promise: Promise.resolve(),
	flushStatus: FlushStatus.None,
}



type Key = keyof typeof Var;
type IVar = typeof Var;

export function getVar<T extends Key>(k: T) {
	return Var[k] as IVar[T];
}
export function setVar(k:Key, v: any) {
	Var[k] = v;
}

export const getData = () => Var.curInitFC?.data as any;