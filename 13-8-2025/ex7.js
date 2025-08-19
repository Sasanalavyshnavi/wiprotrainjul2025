const persons = [
    { name: "bhuvana", age: 19, city: "Raipur" },
    { name: "sneha", age: 18, city: "Chennai" },
    { name: "Pavani", age: 16, city: "Jaipur" },
    { name: "vyshnavi", age: 14, city: "Delhi" },
    { name: "ramya", age: 29, city: "Kolkata" }
];
const eligibleVoters = persons.filter(person => person.age >= 18);
console.log(eligibleVoters);