const users = [
    { name: "Андрій", email: "andrii@test.com", age: 30 },
    { name: "Олена", age: 22 }, 
    { name: "Іван", email: "ivan@test.com" }, 
    { status: "active" } 
];

for (const user of users) {
    const { 
        name = "Unknown Name", 
        email = "no-email@example.com", 
        age = "age not specified" 
    } = user;

    console.log(`User Info: Name: ${name}, Email: ${email}, Age: ${age}`);
}