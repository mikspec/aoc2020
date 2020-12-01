
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
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
            console.log('Day01 part1 =',
                expenses.map((value1, index1) => {
                    return expenses.filter((value2, index2) => {
                        return ((index1 !== index2) && ((value1 + value2) === 2020))
                    });
                }).filter((arr: number[]) => arr.length > 0).map(arr => arr.pop()).reduce((prev, curr)=> {
                    return (prev || 0) * (curr || 0);
                }));
        });
    }
}

let partA = new PartA();
partA.main(); 
