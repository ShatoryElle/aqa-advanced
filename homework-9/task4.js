const person = {
    firstName: "Вікторія",
    lastName: "Шпитко",
    age: 23
};

person.email = "shatory@gmail.com";
delete person.age;

console.log(person);