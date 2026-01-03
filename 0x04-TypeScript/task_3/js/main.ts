/// <reference path="./crud.d.ts" />
import { insertRow, deleteRow, updateRow } from './crud.js';
import { rowElement, rowID } from './interface.js';

const row :rowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
    };
const newRowID: rowID = insertRow(row);
const updatedRow: rowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23
    };
updateRow(newRowID, updatedRow);
deleteRow(newRowID);
