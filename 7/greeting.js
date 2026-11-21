import chalk from 'chalk';

export function greeting(name) {
  console.log(`Hello, ${chalk.blue(name)}!`);
  console.log(`Hello, ${name}!`);
}
