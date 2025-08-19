const customers = [
  {
    id: 1,
    nome: "Leonardo",
    time: "Flamengo",
    idade: 22,
  },
  {
    id: 2,
    nome: "Gabriela",
    time: "Vasco",
    idade: 20,
  },
  {
    id: 3,
    nome: "Lilian",
    time: "Flamengo",
    idade: 1,
  },
];

function selectCustomers() {
  return customers;
}

function selectCustomer(id) {
  return customers.find((c) => c.id === id);
}

module.exports = {
  selectCustomers,
  selectCustomer,
};
