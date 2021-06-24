// Code for kata 1
function check(a, x) {
  return a.includes(x);
}

// Code for kata 2
function summation(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// Code for Kata 3
function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Code for Kata 4
function XO(str) {
  let split = str.toLowerCase().split("");
  if (!split.includes("x") && !split.includes("o")) {
    return true;
  } else if (!split.includes("x") || !split.includes("o")) {
    return false;
  } else {
    var x = 0,
      o = 0;
    split.forEach((element) => {
      if (element === "x") {
        x++;
      } else if (element === "o") {
        o++;
      }
    });
    if (x === o) {
      return true;
    } else {
      return false;
    }
  }
}

// Code for Kata 5
function sheepCount(arrayOfSheep) {
  let sheep = 0;
  arrayOfSheep.forEach((element) => {
    if (element === true) {
      sheep++;
    }
  });
  return sheep;
}
