/// <reference path="./crud.d.ts" />
import { insertRow, deleteRow, updateRow } from './crud.js';
import { RowElement, RowID } from './interface.js';

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
    };
const newRowID: RowID = insertRow(row);
const updatedRow: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23
    };
updateRow(newRowID, updatedRow);
deleteRow(newRowID);
