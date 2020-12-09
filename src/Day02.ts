
import * as fs from 'fs';
import * as readline from 'readline';

class PartA {

    main() {
        let myInterface = readline.createInterface({
            input: fs.createReadStream('data/day02.txt')
        });

        let passwords: string[] = [];
        myInterface.on('line', (line) => {
            passwords.push(line);
        });

        myInterface.on('close', () => {

            console.log('Day02 part1 =', passwords.map(x =>
                Array.from(x.match(/(\d+)-(\d+) ([a-z]{1}): ([a-z]+)/) || []))
                .filter(w => {
                    const count = w[4].length - w[4].replace(new RegExp(w[3], "g"), '').length
                    return (count >= parseInt(w[1])) && (count <= parseInt(w[2]));
                }).length
            );
        });
    }
}

let partA = new PartA();
partA.main();

class PartB {

    main() {
        let myInterface = readline.createInterface({
            input: fs.createReadStream('data/day02.txt')
        });

        let passwords: string[] = [];
        myInterface.on('line', (line) => {
            passwords.push(line);
        });

        myInterface.on('close', () => {

            console.log('Day02 part2 =', passwords.map(x =>
                Array.from(x.match(/(\d+)-(\d+) ([a-z]{1}): ([a-z]+)/) || []))
                .map(reg => ((reg[4][parseInt(reg[1])-1] || '') + (reg[4][parseInt(reg[2])-1] || ''))
                    .split(reg[3]).length)
                .filter(count => count === 2).length
            );
        });
    }
}

let partB = new PartB();
partB.main();
