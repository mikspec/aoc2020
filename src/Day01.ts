
import * as fs from 'fs';
import * as readline from 'readline';

class PartA {

    main() {
        let myInterface = readline.createInterface({
            input: fs.createReadStream('data/day01.txt')
        });

        let expenses: number[] = [];
        myInterface.on('line', (line) => {
            expenses.push(parseInt(line));
        });

        myInterface.on('close', () => {

            const result = expenses.reduce(
                (acc: number[], v, i) =>
                    acc.concat(expenses.slice(i + 1).filter(w => w + v === 2020).map(w => w * v)), []).pop();
            console.log('Day01 part1 =', result);
        });
    }
}

let partA = new PartA();
partA.main();

class PartB {

    main() {
        let myInterface = readline.createInterface({
            input: fs.createReadStream('data/day01.txt')
        });

        let expenses: number[] = [];
        myInterface.on('line', (line) => {
            expenses.push(parseInt(line));
        });

        myInterface.on('close', () => {

            const result = expenses.reduce(
                (acc: number[], v, i) => {
                    let list2: number[] = expenses.slice(i + 1).filter(w => w + v < 2020);
                    return acc.concat(
                        list2.reduce(
                            (acc2: number[], w, j) =>
                                acc2.concat(list2.slice(j + 1)
                                    .filter(z => v + w + z === 2020)
                                    .map(z => v * w *z)), []));
                }, []).pop();
            console.log('Day01 part2 =', result);
        });
    }
}

let partB = new PartB();
partB.main(); 
