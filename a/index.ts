// exercise 1
//1
function biger(x: number, y: number): number {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
//2
function printbiger(x: number, y: number): void {
  if (x > y) {
    console.log(x);
  } else {
    console.log(y);
  }
}
//3
function isOdd(x: number): string {
  if (x % 2 === 0) {
    return "is double";
  } else {
    return "is odd";
  }
}
//4
function stringLen(x: string): number {
  return x.length;
}
//5
function ownToN(x: number): number[] {
  const arr: number[] = [];
  for (let index = 0; index < x; index++) {
    arr.push(index + 1);
  }
  return arr;
}
//6
function bigInArr(x: number[]): number {
  let y: number = 0;
  for (const num of x) {
    if (num > y) {
      y = num;
    }
  }
  return y;
}
//7
type person = { name: string; age: number; isStudent: boolean };
//8
function printPerson(x: person): void {
  if (x.isStudent) {
    console.log(`helow student! name: ${x.name}, age: ${x.age}.`);
  }
}
//9
function isMinor(x: person): boolean {
  if (x.age > 18) {
    return true;
  } else {
    return false;
  }
}
//10
interface book {
  Title: string;
  Author: string;
  Year: number;
}
//11;
type Reader = person & {
  favoriteBook: book;
};
//12
function oldReader(readers: Reader[]): Reader {
    let indexx:number = 0
    let age:number = 0
    for (let index = 0; index < readers.length; index++) {
        if (readers[index].age > age){
            indexx = index
        }
    }
  return readers[indexx];
}
//13
function oldook(readers: Reader[]): book {
    let indexx:number = 0
    let Year:number = readers[0].favoriteBook.Year
    for (let index = 0; index < readers.length; index++) {
        if (readers[index].favoriteBook.Year > Year){
            indexx = index
        }
    }
  return readers[indexx].favoriteBook;
}

// exercise 2
//1
function sumDubled(x: number[]): number {
  let y: number = 0;
  for (const num of x) {
    if (num % 2 === 0) {
      y += num;
    }
  }
  return y;
}
//2
type AreaMeasurements = {height:number, width:number}
function area(x:AreaMeasurements ): number {
  return x.height*x.width;
}
//3
function isPalindrome(x: string): boolean {
  const y:string = x.split('').reverse().join('')
  return x === y;
}
//4
function capitalLetters(x: string[]): string[] {
  return x.map((ed:string):string => ed[0].toUpperCase()+ed.slice(1).toLowerCase());
}
//5
function RemoveDuplicates(x: number[]): number[] {
  return [...new Set(x)];
}


