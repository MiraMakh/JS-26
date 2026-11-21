import chalk from "chalk";

function add(a, b) {
  console.log(chalk.green(`Adding ${a} + ${b}`));

  return a + b;
}

function multiply(a, b) {
  console.log(chalk.blue(`Multiplying ${a} * ${b}`));

  return a * b;
}

export { add, multiply };
