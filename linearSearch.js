//Мне нужно что-то, так что просматривайте все один за другим, пока не найдете это.


const linear = (arr, target) => {
    let steps = 0;
  
    for (let i = 0; i < arr.length; i++) {
      steps++;
      if (arr[i] === target) return `Found: ${arr[i]} in ${steps} steps`;
    };
  };
  
  console.log(linear(unsortedArr, 40)); // 40 steps in 40 Milliseconds
  console.log(linear(sortedArr, 40)); // 40 steps in 40 Milliseconds