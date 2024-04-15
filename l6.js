const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
  }
  for(let f in person){
    console.log(f + ": " + person[f])
}
console.log("First name: " + person.firstName + "\nLast name: " + person.lastName + "\nAge: "+person.age + "\nWhere to find: "+ person.location)