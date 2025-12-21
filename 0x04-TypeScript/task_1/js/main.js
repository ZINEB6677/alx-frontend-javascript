"use strict";
var teacher1 = {
    firstName: 'omar',
    fullTimeEmployee: true,
    lastName: 'slaimi',
    location: 'los angeles',
    contract: true,
};
var teacher2 = {
    firstName: 'Jana',
    fullTimeEmployee: false,
    lastName: 'hilton',
    location: 'London',
    contract: true,
};
console.log(teacher1);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
    contract: true,
};
var director2 = {
    firstName: 'david',
    lastName: 'miller',
    location: 'New York',
    fullTimeEmployee: true,
    numberOfReports: 7,
    contract: false,
};
console.log(director1);
function printTeacher(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return firstName + ". " + lastName;
}
console.log(printTeacher({ firstName: 'John', lastName: 'Doe' }));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.lastName = lastName;
        this.firstName = firstName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
