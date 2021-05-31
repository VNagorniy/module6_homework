/* Задание 1. 
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, 
но и, например, знаки, null и так далее. 
На этот раз оформите решение в виде функции, 
постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.*/

let arr = [15, 6, 85, 7, 142, 'ball', 'wall', 0];

function getEvenOddAndZero(arr) {
    let countEven = 0;
    let countOdd = 0;
    let countZero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!(isNaN(arr[i])) && typeof arr[i] == 'number') {
            if (arr[i] % 2 === 0) {
                if (arr[i] === 0) {
                    countZero++;
                } else {
                    countEven++;
                }
            } else {
                countOdd++;
            }
        }
    }

    console.log(`Четных элементов в массиве: ${countEven}`);
    console.log(`Нечетных элементов в массиве: ${countOdd}`);
    console.log(`Нулей в массиве: ${countZero}`);
}

getEvenOddAndZero(arr);