const persons = [
  { name: "Rakesh", age: 19, city: "Raipur" },
  { name: "Ravali", age: 18, city: "Chennai" },
  { name: "Prathap", age: 16, city: "Jaipur" },
  { name: "Mahesh", age: 14, city: "Delhi" },
  { name: "Janani", age: 29, city: "Kolkata" }
];

const res = persons.map(person => ({
  name: person.name,
  age: person.age,
  city: person.city,
  status: person.age >= 18 ? "Adult" : "Minor"
}));

console.log(res);