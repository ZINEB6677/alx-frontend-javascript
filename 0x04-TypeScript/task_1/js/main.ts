interface Teacher {
  firstName: string;
  fullTimeEmployee: boolean;
  lastName: string;
  location: string;
  contract: boolean;
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