import { rowID, rowElementowElement } from './interface';
export function insertRow(row: rowElement): number;
export function deleteRow(rowId: rowID): void;
export function updateRow(rowId: rowID, row: rowElement): rowID;