"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teacher1 = {
    firstName: 'omar',
    fullTimeEmployee: true,
    lastName: 'slaimi',
    location: 'los angeles',
    contract: true,
};
const teacher2 = {
    firstName: 'Jana',
    fullTimeEmployee: false,
    lastName: 'hilton',
    location: 'London',
    contract: true,
};
console.log(teacher1);
const director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
    contract: true,
};
const director2 = {
    firstName: 'david',
    lastName: 'miller',
    location: 'New York',
    fullTimeEmployee: true,
    numberOfReports: 7,
    contract: false,
};
console.log(director1);
function printTeacher({ firstName, lastName }) {
    return `${firstName}. ${lastName}`;
}
console.log(printTeacher({ firstName: 'John', lastName: 'Doe' }));
class StudentClass {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.lastName = lastName;
        this.firstName = firstName;
    }
    workOnHomework() {
        return "Currently working";
    }
    displayName() {
        return this.firstName;
    }
}
//# sourceMappingURL=main.js.map