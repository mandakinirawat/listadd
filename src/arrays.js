 const numbers = [12, 15, 12, 2, 6, 6, 2, 12];
  // {12: 2, 15:1, 2: 2, 6: 2}
  const lookup = {};
  for (const number of numbers) {
    lookup[number] = (lookup[number] ?? 0) + 1;
  }

  
  console.log(
    numbers.reduce(
      (acc, curr) => ({
        ...acc,
        [curr]: (acc[curr] ?? 0) + 1,
      }),
      {}
    )
  );
  console.log(numbers.reduce((acc, curr) => {
    if(acc.curr){
      acc.curr += 1;
    } else {
      acc = {
        ...acc,
        [curr]: 0
      }
    }
    return acc
  }, {}));

  // // numbers.reduce(({min, max}, curr) => ({
  // //   min: Math.min(min, curr),
  // //   max:  Math.max(max, curr)

  // }), {min: Infinity, max: -Infinity})

  const fruits = ["apple", "mango", "orange"];
  const firstletter = (word) => word.charAt(0);

  Array.prototype.myfun = function (logic) {
    let output = [];
    for (const i of this) {
      output = [...output, logic(i)];
    }
    return output;
  };

  console.log(fruits.myfun(firstletter));

  const str = "Mandakini";
  const str1 = "Rawat";

  String.prototype.myadd = function () {
    return this + "fun";
  };
  console.log(str.myadd());

  const name = "xyfdyfz";

  String.prototype.myCase = function () {
    return this[0] + this.slice(1, -1).toUpperCase() + this[this.length - 1];
  };
  console.log(name.myCase());

  // const num = [12, 13, 5, 12, 8, 13, 12, 8, 7, 12];
  // const look = {};

  // for (const i of num) {
  //   look[i] = (look[i] ?? 0) + 1;
  // }

  // console.log(look);

  // const num = [12, 13, 5, 12, 8, 13, 12, 8, 7, 12];

  // const a = num.reduce(
  //   (acc, curr) => ({
  //     ...acc,
  //     [curr]: (acc[curr] ?? 0) + 1,
  //   }),
  //   {}
  // );
  // console.log(a);

  const veg = ["brinzal", "patato", "gobhi"];
  const capletter = (word) =>
    word.charAt(0).toUpperCase() +
    word.slice(1, -1) +
    word.slice(-1).toUpperCase();

  Array.prototype.myveg = function (logic) {
    let out = [];
    for (const i of this) {
      out = [...out, logic(i)];
    }
    return out;
  };
  console.log(veg.myveg(capletter));

  const num = [[3,2], [5, 3], [4, 1]];

  console.log(num.reduce((acc, [count, value]) => ([
    ...acc,
    ...Array(count).fill(value)
  ]), []))

  const arr1 = [12, 3, 5, 12, 6, 3, 4, 5, 6, 5];
  const b =  arr1.reduce((acc, curr) => {
    if (acc.findIndex((curr) === -1)) {
        acc.push(curr);
      }
    return acc;
    }, []);

    console.log(b);

  console.log(
    arr1.reduce((acc, curr) => {
      if (Object.hasOwn(acc, curr)) 
      {
        acc = {
          ...acc,
          [curr]: acc[curr] + 1,
        };
      } else {
        acc = {
          ...acc,
          [curr]: 0,
        };
      }
      return acc;
    }, {})
  );

  

 const fruits = ['apple', 'mango', 'strawberry'];
const vegetables = ['Tomato', 'Potatp', 'Onoion'];
// ['a', 'm', 's']

const printFirstLetter = (str) => str.charAt(0);
const printAsciiLetter = (str) => str.toUpperCase();

Array.prototype.traverse = function(logic) {
    const output = [];
    for(let i=0; i< this.length; i++) 
        output.push(logic(this[i]))
    return output;
}

console.log(vegetables.traverse(printAsciiLetter))
  
console.log(fruits.traverse(printFirstLetter))

String.prototype.toMyCase = function() {
    return this[0].toLowerCase() + this.slice(1, -1).toUpperCase() + this[this.length - 1].toLowerCase();
}

console.log('mbhjgGTyufFfvYR'.toMyCase())