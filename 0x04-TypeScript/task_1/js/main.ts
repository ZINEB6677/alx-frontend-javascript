interface teacher {
  firstName: string;
  fullTimeEmployee: boolean;
  lastName: string;
  location: string;
  contract: boolean;
}

const teacher1: teacher = {
  firstName: 'omar',
  fullTimeEmployee: true,
  lastName: 'slaimi',
  location: 'los angeles',
  contract: true,
};
const teacher2: teacher = {
  firstName: 'Jana',
  fullTimeEmployee: false,
  lastName: 'hilton',
  location: 'London',
  contract: true,
};
const teacher3: teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);