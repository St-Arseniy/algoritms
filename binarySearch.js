/*С каждым шагом мы разрезаем наш набор данных пополам, полностью игнорируя то,
что нам не нужно, давая нам временную сложность O(log n). Если мы выполнили поиск числа в массиве 
из миллиона элементов, который занял десять шагов, поиск миллиарда элементов может занять всего 15-20 шагов.
Бинарный поиск имеет большой недостаток - он позволяет нам делать это только на отсортированных массивах,
но есть и другие решения, основанные на предварительной сортировке данных перед поиском.*/

 const binary = (arr, target) => {
    let start = 0;
    let end = arr.length;
    let pivot = Math.floor((start + end) / 2);
    let steps = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[pivot] !== target) {
        if (target < arr[pivot]) end = pivot;
        else start = pivot;
        pivot = Math.floor((start + end) / 2);
        steps++;
      };
  
      if (arr[pivot] === target) return `Found: ${target} in ${steps} steps`;
    };
  
    return 'Nothing Found';
  };
  
  console.log(linear(unsortedArr, 40)); // Nothing Found
  console.log(binary(arr, 44)); // 5 steps in 8 Milliseconds
  console.log(binary(arr, 43)); // 2 steps in 7 Milliseconds