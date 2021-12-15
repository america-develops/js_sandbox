// SECTION 2.6 - Using The Console
    // Log to console
    // console.log('Hello World');
    // console.log(123);
    // console.log(true);
    // var greeting = 'Hello';
    // console.log(greeting);
    // console.log([1,2,3,4]);
    // console.log({a:1, b:2});
    // console.table({a:1, b:2});

    // console.error('This is some error');
    // console.clear();
    // console.warn('This is a warning');
    // console.time('Hello');
    //     console.log('Hello world');
    //     console.log('Hello world');
    //     console.log('Hello world');
    //     console.log('Hello world');
    //     console.log('Hello world');
    //     console.log('Hello world');
    // console.timeEnd('Hello');

    // console.clear();


// SECTION 2.7 - Variables
    // var, let, const

    // var name = 'John Doe';
    // console.log(name);
    // name = 'Steve Smith';
    // console.log(name);

    // // Init var
    // var greeting2;
    // console.log(greeting2);
    // greeting2 = 'Hello';
    // console.log(greeting2);

    // // variable names can only include letters, numbers, _, $
    // // cannot start with a number

    // // Multi word vars
    // var firstName = 'John'; // Camel case
    // var first_name = 'Sarah';   // underscore
    // var FirstName = 'Tom';      // Pascal case

    // LET
    // let name;
    // name = 'John Doe';
    // console.log(name);
    // name = 'Steve Smith';
    // console.log(name);

    // CONST
    // const name = 'John';
    // console.log(name);
    // can't reassign
    // name = 'Sara';
    // Hav to assign a value
    // const greeting;
    // const person = {
    //     name: 'John',
    //     age: 30
    // }
    
    // console.log(person);
    // person.name = 'Sara';
    // console.log(person);
    // person.age = 32;
    // console.log(person);

    // const numbers = [1,2,3,4,5];
    // console.log(numbers);
    // numbers.push(6);
    // console.log(numbers);
    // console.clear()


// SECTION 2.8 - Data Types in JavaScript

    // PRIMITIVE

    // String
    // const name = 'John Doe';
    // console.log(typeof name);
    // // Number
    // const age = '45';
    // console.log(typeof age);
    // // Boolean
    // const hasKids = true;
    // console.log(typeof hasKids);
    // // Null
    // const car = null;
    // console.log(typeof car);
    // // Undefined
    // let test;
    // console.log(typeof test);
    // // Symbol
    // const sym = Symbol();
    // console.log(typeof sym);

    // // REFERENCE TYPES - Objects
    // // Array
    // const hobbies = ['movies', 'music'];
    // console.log(typeof hobbies);
    // // Object literal
    // const address = {
    //     city: 'Boston',
    //     state: 'MA'
    // }
    // console.log(typeof address);
    // // Date
    // const today = new Date();
    // console.log(today);
    // console.log(typeof today);
    // console.clear();


// SECTION 2.9 - Type Conversion
    // let val;

    // // Number to string
    //     val = 5;
    //     // Output
    //     console.log(val);
    //     console.log(typeof val);
    //     console.log(val.length);
    //     // Conversion
    //     val = String(val);
    //     // Output
    //     console.log(val);
    //     console.log(typeof val);
    //     console.log(val.length);
    //     console.log('');

    // // Bool to string
    //     val = true;
    //     // Output
    //     console.log(val);
    //     console.log(typeof val);
    //     console.log(val.length);
    //     // Conversion
    //     val = String(val);
    //     // Output
    //     console.log(val);
    //     console.log(typeof val);
    //     console.log(val.length);
    //     console.log('');

    // // Date to string
    //     val = new Date();
    //     // Output
    //     console.log(val);
    //     console.log(typeof val);
    //     console.log(val.length);
    //     // Conversion
    //     val = String(val);
    //     // Output
    //     console.log(val);
    //     console.log(typeof val);
    //     console.log(val.length);
    //     console.log('');

    // // Array to string
    //     val = [1,2,3,4];
    //     // Output
    //     console.log(val);
    //     console.log(typeof val);
    //     console.log(val.length);
    //     // Conversion
    //     val = String(val);
    //     // Output
    //     console.log(val);
    //     console.log(typeof val);
    //     console.log(val.length);
    //     console.log('');

    // // toString() method
    //     // Number
    //         val = 5
    //         // Output
    //         console.log(val);
    //         console.log(typeof val);
    //         console.log(val.length);
    //         // Conversion via toString()
    //         val = val.toString();
    //         // Output
    //         console.log(val);
    //         console.log(typeof val);
    //         console.log(val.length);
    //         console.log('');
    //     // Boolean
    //         val = true;
    //         // Output
    //         console.log(val);
    //         console.log(typeof val);
    //         console.log(val.length);
    //         // Conversion via toString()
    //         val = val.toString();
    //         // Output
    //         console.log(val);
    //         console.log(typeof val);
    //         console.log(val.length);
    //         console.log('');
    
    // // String to Number
    //     val = '5';
    //     val = true;
    //     val = null;
    //     val = 'Hello';
    //     val = [1,2,3];
    //     // Output
    //     console.log(val);
    //     console.log(typeof val);
    //     //console.log(val.length);
    //     //console.log(val.toFixed());
    //     // Conversion
    //     val = Number(val);

    //     val = parseInt('100.30');
    //     val = parseFloat('100.30');
    //     // Output
    //     console.log(val);
    //     console.log(typeof val);
    //     //console.log(val.length);
    //     console.log(val.toFixed(2));

    //     console.clear();

    //     const val1 = String(5);
    //     const val2 = 6;
    //     const sum = Number(val1) + val2;

    //     console.log(sum);
    //     console.log(typeof sum);

    //     console.clear();


// SECTION 2.10 - Numbers & the Match Object
    // const num1 = 100;
    // const num2 = 60;
    // let val3;

    // // Simple math with numbers
    // val3 = num1 + num2;
    // val3 = num1 * num2;
    // val3 = num1 - num2;
    // val3 = num1 / num2;
    // val3 = num1 % num2;

    // // Math Object
    // val3 = Math.PI;
    // val3 = Math.E;
    // val3 = Math.round(2.4);
    // val3 = Math.ceil(2.4);
    // val3 = Math.floor(2.4);
    // val3 = Math.sqrt(64);
    // val3 = Math.abs(-3);
    // val3 = Math.pow(8, 2);
    // val3 = Math.min(1,2,3,4,5,0,6, -2);
    // val3 = Math.max(1,2,3,4,5,0,6, -2);
    // val3 = Math.random();
    // val3 = Math.floor(Math.random()*10);

    // console.log(val3);
    // console.clear();


// SECTION 2.11 - String methods and concatenation
    // const firstName = 'William';
    // const lastName = 'Johnson';
    // const age2 = 36;
    // const str = 'Hello there my name is Brad';
    // const tag = 'web design, web development';

    // let val4;

    // val4 = firstName + lastName;

    // // Concatenation
    // val4 = firstName + ' ' + lastName;
    // // Append
    // val4 = 'Brad ';
    // val4 += 'Traversy';

    // val4 = 'Hello, my name is ' + firstName + ' and I am ' + age2;

    // // Escaping
    // val4 = 'That\'s awesome, I can\'t wait';

    // // length
    // val4 = firstName.length;

    // // concat
    // val4 = firstName.concat(' ', lastName);
    // val4 = firstName.toUpperCase();
    // val4 = firstName.toLowerCase();

    // val4 = firstName[2];

    // // indexOf()
    // val4 = firstName.indexOf('l');
    // val4 = firstName.lastIndexOf('l');

    // // charAt()
    // val4 = firstName.charAt(0);
    // // get last char
    // val4 = firstName.charAt(firstName.length - 1);

    // // substring
    // val4 = firstName.substring(0, 4);

    // // slice
    // val4 = firstName.slice(0,4);
    // val4 = firstName.slice(-3);

    // // split()
    // val4 = str.split(' ');
    // val4 = tag.split(',');

    // // replace
    // val4 = str.replace('Brad', 'Jack');

    // // includes
    // val4 = str.includes('Hello');
    // val4 = str.includes('foo');

    // console.log(val4);
    // console.clear();


// SECTION 2.12 - Template literals