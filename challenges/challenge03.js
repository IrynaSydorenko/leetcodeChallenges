let company = {
  sales: [
    {
      name: 'Іван',
      salary: 1000,
    },
    {
      name: 'Аліса',
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: 'Петро',
        salary: 2000,
      },
      {
        name: 'Олександр',
        salary: 1800,
      },
    ],

    internals: [
      {
        name: 'Евген',
        salary: 1300,
      },
    ],
  },
};

function getSallaries(company) {
  if (Array.isArray(company)) {
    return company.reduce((acc, person) => (acc += person.salary), 0);
  } else {
    let sum = 0;
    for (let subdepartment of Object.values(company)) {
      let result = getSallaries(subdepartment);
      sum += result;
    }
  }

  return sum;
}
