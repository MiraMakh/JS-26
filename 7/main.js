import chalk from 'chalk';
import { greeting } from './greeting.js';
import * as math from './math.js';

greeting('David');

const sum = math.add(5, 7);
console.log(chalk.underline.bgBlue(`Sum: ${sum}`));

const product = math.multiply(3, 4);
console.log(chalk.magenta(`Product: ${product}`));

/* document.getElementById('sum').textContent = `Sum: ${sum}`;
document.getElementById('product').textContent = `Product: ${product}`; */

/* alert(import.meta.url); */
