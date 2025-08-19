const persons = [
  { name: "Rakesh", age: 19, city: "Raipur" },
  { name: "Ravali", age: 18, city: "Chennai" },
  { name: "Prathap", age: 16, city: "Jaipur" },
  { name: "Mahesh", age: 14, city: "Delhi" },
  { name: "Janani", age: 29, city: "Kolkata" }
];
const res = [];
for (let i = 0; i < persons.length; i++) {
  const person = persons[i];
  const l1 = {
    name: person.name,
    age: person.age,
    city: person.city,
    status: person.age >= 18 ? "Adult" : "Minor"
  };
  res.push(l1);
}
console.log(res);