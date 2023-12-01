import { readFileSync } from "fs";

function solve(input) {
  const stringArr = input.split(" ");
  let sum = 0;
  stringArr.forEach((str) => {
    let number = str.replace(/[^0-9\.]+/g, "");
    if (number.length === 1) {
      number = number + number;
    }
    if (number.length > 2) {
      const firstNumber = number[0];
      const lastNumber = number[number.length - 1];
      number = firstNumber + lastNumber;
    }
    sum += parseInt(number);
  });
  console.log(sum);
}
const data = readFileSync("data.txt").toString().replace(/\n/g, " ");
solve(data);
