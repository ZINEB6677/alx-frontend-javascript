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