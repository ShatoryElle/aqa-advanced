const initialArray = [1, 2, 3, 4, 5];

const mutatedArray = initialArray.map((element, index) => element * index);

console.log("Початковий масив:", initialArray);
console.log("Мутований масив (значення * індекс):", mutatedArray);