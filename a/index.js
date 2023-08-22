//1
function biger(x, y) {
    if (x > y) {
        return x;
    }
    else {
        return y;
    }
}
//2
function printbiger(x, y) {
    if (x > y) {
        console.log(x);
    }
    else {
        console.log(y);
    }
}
//3
function isOdd(x) {
    if (x % 2 === 0) {
        return "is double";
    }
    else {
        return "is odd";
    }
}
//4
function stringLen(x) {
    return x.length;
}
//5
function ownToN(x) {
    var arr = [];
    for (var index = 0; index < x; index++) {
        arr.push(index + 1);
    }
    return arr;
}
//6
function bigInArr(x) {
    var y = 0;
    for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
        var num = x_1[_i];
        if (num > y) {
            y = num;
        }
    }
    return y;
}
//8
function printPerson(x) {
    if (x.isStudent) {
        console.log("helow student! name: ".concat(x.name, ", age: ").concat(x.age, "."));
    }
}
//9
function isMinor(x) {
    if (x.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
11;
// type Reader = {
//     favouriteBook : book;
//     };
//12
function oldReader(readers) {
    var indexx = 0;
    var age = 0;
    for (var index = 0; index < readers.length; index++) {
        if (readers[index].age > age) {
            indexx = index;
        }
    }
    return readers[indexx];
}
//13
function oldook(readers) {
    var indexx = 0;
    var Year = readers[0].favoriteBook.Year;
    for (var index = 0; index < readers.length; index++) {
        if (readers[index].favoriteBook.Year > Year) {
            indexx = index;
        }
    }
    return readers[indexx].favoriteBook;
}
