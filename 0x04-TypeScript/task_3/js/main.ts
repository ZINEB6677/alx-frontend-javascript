/// <reference path="./crud.d.ts" />
import { insertRow, deleteRow, updateRow } from './crud.js';
import { RowElement, RowID } from './interface.js';

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
    };

const CRUD = {
    insertRow: insertRow,
    deleteRow: deleteRow,
    updateRow: updateRow
};
const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { ...row, age: 23 }
CRUD.updateRow(newRowID, updatedRow)
CRUD.deleteRow(newRowID);
