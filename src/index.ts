#! /usr/bin/env node
import random from 'quick-random';
import chalk from 'chalk';
import DiceType from './types';

const args = process.argv.slice(1);

const dices: DiceType[] = [
    {
        name: 'd4',
        func: () => random.number(1, 4)
    },
    {
        name: 'd6',
        func: () => random.number(1, 6)
    },
    {
        name: 'd8',
        func: () => random.number(1, 8)
    },
    {
        name: 'd10',
        func: () => random.number(1, 10)
    },
    {
        name: 'd12',
        func: () => random.number(1, 12)
    },
    {
        name: 'd20',
        func: () => random.number(1, 20)
    },
    {
        name: 'd100',
        func: () => random.number(1, 10) * 10
    }
]


if (args.length < 2) {
    console.log(`Usage: npx dnd-roll ${chalk.yellow('<dice type>')}`);
    process.exit();
}


if (args[1].toLocaleLowerCase() === '-h' || args[1].toLocaleLowerCase() === '--help') {
    console.log(`Usage: npx dnd-roll ${chalk.yellow('<dice type>')}`);

    console.log(`Dice types: ${chalk.green('d4')}, ${chalk.green('d6')}, ${chalk.green('d8')}, ${chalk.green('d10')}, ${chalk.green('d12')}, ${chalk.green('d20')}, ${chalk.green('d100')}`);
    process.exit(0);
}


const dice = dices.find(dice => dice.name === args[1]);

if (!dice) {
    console.log(`Invalid dice type: ${chalk.red(args[1])}`);
    process.exit(1);
}

console.log(`Rolling ${chalk.green(dice.name)}...`);
console.log(`Result: ${chalk.yellow(dice.func())}`);