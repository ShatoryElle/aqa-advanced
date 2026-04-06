const users = [
    { name: "Андрій", email: "andrii30@gmail.com", age: 30 },
    { name: "Олена", email: "olena22@gmail.com", age: 22 },
    { name: "Іван", email: "ivan28@gmail.com", age: 28 }
];

for (const { name, email, age } of users) {
    console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}