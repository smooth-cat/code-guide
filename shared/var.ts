import { DocumentSymbol, Location, Position, Range, Uri as RawUri } from "vscode";

type Uri = RawUri & {
	relativePath: string;
}

export enum MsgType {
	DocSwitch = 'DocSwitch',
	CursorMove = 'CursorMove',
	SelectionChange = 'SelectionChange',
	CodeChanged = 'CodeChanged',
	DeleteFile = 'DeleteFile',
	RenameFile = 'RenameFile',
	Request = 'Request',
	Response = 'Response',
}

export enum ReqType {
	Command = 'Command',
	Eval = 'Eval'
}


export type IRange = [Position, Position]

export type Loc = {
	uri: Uri,
	range: IRange,
}

export type Reference = Loc & {
	name: string;
	lineText: string;
}

export type Define = Reference & {
	/** 包含声明关键字的字符串 */
	declaration: string;
};

export type FileRef = [Uri, Reference[]];

export type FetchRefRes = {
	define: Define,
	fileRefs: FileRef[],
}

export type DocNode = Pick<DocumentSymbol, 'name' | 'kind'> & {
	children: DocNode[],
	location: Loc,
	range: IRange,
}