interface Teacher {
  readonly firstName: string;
  fullTimeEmployee: boolean;
  readonly lastName: string;
  location: string;
  contract: boolean;
  yearsOfExperience?: number;
  [propName: string]: any;
}

const teacher1: Teacher = {
  firstName: 'omar',
  fullTimeEmployee: true,
  lastName: 'slaimi',
  location: 'los angeles',
  contract: true,
};
const teacher2: Teacher = {
  firstName: 'Jana',
  fullTimeEmployee: false,
  lastName: 'hilton',
  location: 'London',
  contract: true,
};

console.log(teacher1);
interface Director extends Teacher {
  numberOfReports: number;
}
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
  contract: true,
};
const director2: Director = {
  firstName: 'david',
  lastName: 'miller',
  location: 'New York',
  fullTimeEmployee: true,
  numberOfReports: 7,
  contract: false,
};
console.log(director1);
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (
    firstName: string, 
    lastName: string
): string => {
    return `${firstName}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));