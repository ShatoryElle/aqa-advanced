const car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
};

const car2 = {
    brand: "Tesla",
    model: "Model S",
    owner: 2024
};

const car3 = { ...car1, ...car2 };

console.log(car3);