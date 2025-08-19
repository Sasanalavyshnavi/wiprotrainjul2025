const employees = [
    { name: "Ramesh", role: "Manager", id: 101, salary: 70000 },
    { name: "Javali", role: "Developer", id: 102, salary: 50000 },
    { name: "Lavanya", role: "QA", id: 103, salary: 50000 },
    { name: "Raju", role: "Manager", id: 104, salary: 95000 },
    { name: "Bhargavi", role: "Developer", id: 105, salary: 71000 },
    { name: "janani", role: "Manager", id: 106, salary: 100000 }
];
const managers = employees.filter(emp => emp.role == "Manager").reduce((total, emp) => total + emp.salary, 0);
console.log(managers);