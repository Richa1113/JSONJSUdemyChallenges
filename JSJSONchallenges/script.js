//stringify an object to send over network as a string
let obj = {
    id: 1,
    name: "richa",
    job: "developer",
  };
  let str = JSON.stringify(obj);
  let x = str;

  //parsing the strings over network into object
  x = JSON.parse(str);
  //console.log(x.id); // we can get values from objects, which are parsed from json format.

  //we can have array of objects and then we can have stringify them
  let arrObjects = [
    { id: 1, title: "developer", task: "code" },
    { id: 2, title: "tester", task: "test" },
    { id: 3, title: "designer", task: "design" },
  ];

  x = JSON.stringify(arrObjects);
  //console.log(x);
  x = JSON.parse(x);

  if (true) {
    var z = 10; //var can be accessed from block in outside
    //console.log(z);
  }

  function print() {
    var y = 20; //but var cannot be accessed from a function scope
    //console.log(y);
  }
  print();
  //console.log(y);
  //console.log(z);
  //console.log(x);

  //let random1to100 = Math.floor(Math.random()*100 + 1);
  //above is for when 100 is included coz math.random gives maximum 99 so we have to add 1 to get 100 in random

  //the below does not include 100 and cant give 0
  let random1to100 = Math.floor(Math.random() * 100) + 1;

  //the below does not include 50 and cant give 0 as plus 1
  let random1to50 = Math.floor(Math.random() * 50) + 1;

  //if we want to include last number to as from 1 to 100(included)
  //let random1to50 = Math.floor(Math.random()*101) + 1;

  //console.log(random1to50);
  //get the addition of these two
  let add = function (x, y) {
    x = random1to100;
    y = random1to50;
    //console.log(`${x} + ${y} = ${x + y} `);
  };

  let subtract = function (x, y) {
    x = random1to100;
    y = random1to50;
    //console.log(`${x} - ${y} = ${x - y} `);
  };

  let product = function (x, y) {
    x = random1to100;
    y = random1to50;
    //console.log(`${x} * ${y} = ${x * y} `);
  };
  let quotient = function (x, y) {
    x = random1to100;
    y = random1to50;
    if (x > y) {
      //console.log(`${x} / ${y} = ${x / y} `);
    } else {
      //console.log(`${y} / ${x} = ${y / x} `);
    }
  };
  let remainder = function (x, y) {
    x = random1to100;
    y = random1to50;
    if (x > y) {
      //console.log(`${x} % ${y} = ${x % y} `);
    } else {
      //console.log(`${y} % ${x} = ${y % x} `);
    }
  };
  add();
  subtract();
  product();
  quotient();
  remainder();

  //***********************array challenge******************************//
  let arr = [1, 2, 3, 4, 5];
  let arrFunc = function (array) {
    let revArr = array.reverse();
    let arr6 = revArr.splice(0, 0, 6);
    let arr0 = revArr.splice(6, 0, 0);
    return revArr;
  };
  //console.log(arrFunc(arr));
  // let revArr = arr.reverse();
  // let arr6 = revArr.splice(0, 0, 6);
  // let arr0 = revArr.splice(6, 0, 0);
  // console.log(revArr);

  //challenge to get rid of common number in array
  arr2 = [1, 2, 3, 4, 5];
  arr3 = [5, 6, 7, 8, 9];
  //method 1
  //arrSpread.splice(4, 1);
  //console.log(arrSpread);

  //method 2
  arr4 = arr2.splice(0, 4);
  //console.log(arr4.concat(arr3));

  //******************************object challenge**************************//
  let library = [
    {
      title: "novels",
      author: "ameesh",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: "stories",
      author: "premchand",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: "poems",
      author: "mahadevi verma",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];
  //console.log(library);
  //library.status.read = true;
  library.forEach(function (item) {
    item.status.read = true;
  });
  //console.log(library);
  const { title: firstBook } = library[0];
  //console.log(firstBook);

  //turn the object to JSON string
  let stro = JSON.stringify(library);
  //console.log(stro);

  ///****************Function Challenge  *******************//
  // let giveCelcius = function(Ftemp){
  //    let Ctemp = (Ftemp - 32) * 5/9;
  //    return Ctemp;
  // };

  //or by arrow function
  let giveCelcius = (Ftemp) => {
    let Ctemp = ((Ftemp - 32) * 5) / 9;
    return Ctemp;
  };

  //console.log(`The temperature in celcius is ${giveCelcius(32)}\xB0C.`);

  //sorting an array and finding minimum and maximum number of array

  //(1)sorting number in ascending order and get arr[0], arr[arr.length-1]
  let arrUnsort = [34, 56, 11, 20, 88, 10, 4];
  // let arrSort = arrUnsort.sort(function(a, b){
  //   return(a - b);
  // });
  //console.log(arrSort);

  let arrSort = arrUnsort.sort((a, b) => {
    //sort array in ascending order
    return a - b;
  });

  //console.log(arrSort);

  // let arrSortDecs = arrUnsort.sort((a, b) => { // sort array in descending order
  //   return (b - a);
  // })

  // console.log(arrSortDecs);

  let objMinMax = {
    min: arrSort[0],
    max: arrSort[arrSort.length - 1],
  };
  //console.log(arrSort.length);
  //console.log(objMinMax);

  //(2) by arr.min and arr.max method

  // let minNo = function(arrUn){
  //   return Math.min.apply(null, arrUn);
  // };

  // let maxNo = function(arrun){
  //   return Math.max.apply(null, arrun);
  // }

  let minMax = function (arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
      min,
      max,
    };
  };

  console.log(minMax([4, 33, 10, 21, 3, 11]));

  //************IIFE*****************************//
  //challenge of displaying area of rectangle
  (function () {
    function area(len, wid) {
      let area = len * wid;
      console.log(
        `The area of reactangle having length ${len} and width ${wid} is ${area}`
      );
    }
    area(30, 55);
  })();

  //***************If, Else, Switch statement challenge**********//
  //challenge of making calculator using if esle and switch

  function calculate(num1, num2, operator) {
    if (operator == "+") {
      let result = num1 + num2;
      return result;
    }
    if (operator == "-") {
      let result = num1 - num2;
      return result;
    }
    if (operator == "*") {
      let result = num1 * num2;
      return result;
    }
    if (operator == "/") {
      let result = num1 / num2;
      return result;
    } else {
      //let result = num1 + num2;
      return console.error("operator is not significant");
    }
  }
  // console.log(calculate(40, 15, "+"));
  // console.log(calculate(40, 5, "-"));
  // console.log(calculate(40, 5, "*"));
  // console.log(calculate(40, 5, "/"));
  // console.log(calculate(40, 5, "&"));

  //calculator by switch statement
  function calculation(num1, num2, operator) {
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        result = "Invalid operator";
        break;
    }

    //console.log(result);
    return result;
  }

  // console.log(calculation(8, 8, "+"));
  // console.log(calculation(8, 8, "-"));
  // console.log(calculation(8, 8, "*"));
  // console.log(calculation(8, 8, "/"));
  // console.log(calculation(8, 8, "&"));

  //*********challenge of for, break, continue, while, do while***********//
  //fizzbuzz challenge

  // for (let i = 1; i <= 100; i++) {
  //   if (i % 3 === 0) {
  //     if (i % 5 === 0) {
  //       console.log("FizzzzBuzzzzzzz");
  //       continue;
  //     } else {
  //       console.log("Fizzzzzzzzzzzzzz");
  //       continue;
  //     }
  //   }
  //   if (i % 5 === 0) {
  //     if (i % 3 === 0) {
  //       console.log("FizzzzBuzzzzzzz");
  //       continue;
  //     } else {
  //       console.log("Buzzzzzzzzzzzzzz");
  //       continue;
  //     }
  //   }
  //   else {
  //     console.log(i);
  //   }
  // }

  //or
  for (let i = 1; i <= 100; i++) {
    // if(i % 3 === 0 && i % 5 ===0){
    //   console.log("FizzBuzz")
    // } or
    if (i % 15 === 0) {
      //console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      //console.log("Fizz");
    } else if (i % 5 === 0) {
      //console.log("Buzz");
    } else {
      //console.log(i);
    }
  }

  //or same printing challenge by do while loop
  let i = 1;
  while (i <= 100) {
    if (i % 15 === 0) {
      //console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      ////console.log("Fizz");
    } else if (i % 5 === 0) {
      //console.log("Buzz");
    } else {
      //console.log(i);
    }
    i++;
  }

  //***************array method challenges****************//
  //pick some values from an array to make another array of some specific values
  const people = [
    {
      firstNmae: "richa",
      lastName: "rawat",
      email: "richa@gmail.com",
      phone: "111-111-1111",
      age: 35,
    },
    {
      firstNmae: "ravi",
      lastName: "kesariya",
      email: "ravi@gmail.com",
      phone: "222-222-2222",
      age: 35,
    },
    {
      firstNmae: "tanishi",
      lastName: "singh",
      email: "tanishi@gmail.com",
      phone: "333-333-3333",
      age: 4,
    },
    {
      firstNmae: "swati",
      lastName: "rawat",
      email: "swati@gmail.com",
      phone: "444-444-4444",
      age: 24,
    },
    {
      firstNmae: "priyanka",
      lastName: "srivastava",
      email: "priya@gmail.com",
      phone: "555-555-5555",
      age: 35,
    },
  ];

  const youngPeople = people
  .filter((people) => people.age <= 30)
  .map((people) => ({
    name : people.firstNmae + " " + people.lastName,
    email : people.email
  }));
  //console.log(youngPeople);

  //add all the positive numbers of an array
  const arrPosNeg = [21, -34, 8, 11, -3, -80, 52, 3];

  const totPos = arrPosNeg.filter((elem) => 
  {
    return elem >= 0;
  })
  .reduce(function(accumulator, currentvalue){
      return accumulator + currentvalue;
  }, 0); //this 0 is here for initial value for accumulator if we set it 10 the sum will be 10+
  //console.log(totPos); //95 if initial value 0 will be 20 the sum will 95+20=115
  
  //convert first letter of array elements into capital letter
  const words = ["coder", "programmer", "developer"];
  // const capitalize = words.map(function(word) {
  //         word = word.charAt(0).toUpperCase().concat(words.substring(1, word.length));
  //         return words;
  // });
  //or
  const capitalize = words.map( (word) => {
    return word = word[0].toUpperCase() + word.slice(1, word.length);
  }); 
  console.log(capitalize);

  //DOM traversing
  let output;
  const parent = document.querySelector(".parent");
  output = parent.children;
  parent.children[0].style.color = "red";
  parent.children[1].innerText = "change";
  parent.children[2].style.color = "green";
  output = parent.children[3].className;
  parent.children[3].setAttribute('title', 'new');
  //console.log(parent.children[3]);

  //***************insertAdjacentHtml/Element/Text******************//
  
  //***************insertAdjacentElement
  const thirdElem = parent.children[2];
  const elem = document.createElement("h1");
  elem.innerText = "insertAdjacentElement";
  //element.insertAdjacentElement(position, element)
  
  //beforebegin
  //thirdElem.insertAdjacentElement("beforebegin", elem);

  //afterbegin
  //thirdElem.insertAdjacentElement("afterbegin", elem);
  //console.log(thirdElem);
  
  //beforend
  //thirdElem.insertAdjacentElement("beforeend", elem);

  //afterend
  //thirdElem.insertAdjacentElement("afterend", elem);
  
  //*************insertAdjacentHtml
  const elemHtml = "<h3>I am html element<h3>";
  
  //beforebegin
  //thirdElem.insertAdjacentHTML("beforebegin", elemHtml);

  //afterbegin
  //thirdElem.insertAdjacentHTML("afterbegin", elemHtml);

  //beforeend
  //thirdElem.insertAdjacentHTML("beforeend", elemHtml);

  //afterend
  //thirdElem.insertAdjacentHTML("afterend", elemHtml);
  
  //**************insertAdjacentText
  const text = "this is text";

  //beforebegin
  //thirdElem.insertAdjacentText("beforebegin", text);

  //afterbegin
  //thirdElem.insertAdjacentText("afterbegin", text);

  //beforeend
  //thirdElem.insertAdjacentText("beforeend", text);

  //afterend
  //thirdElem.insertAdjacentText("afterend", text);

  //**********insertBefore ***************//
  //The insertBefore() method inserts a child node before an existing child

  const fourthElem = parent.lastElementChild;
  //console.log(fourthElem);

  const h1 = document.createElement("h1");
  const text1 = document.createTextNode("i am h1 element");
  h1.appendChild(text1);

  //before last child
  //parent.insertBefore(h1, fourthElem);
  

  //insert at the last of elements
  //parent.insertBefore(h1, null);

  //challenge to make insertAfter()(home made method) method like insertBefore()
  
  //method 1
  // function insertAfter(newEl, existingEl, text){
  //   const newEl1 = document.createElement(newEl);
  //   const text1 = document.createTextNode(text);
  //   newEl1.appendChild(text1);
  //   existingEl.insertAdjacentElement("afterend", newEl1);
  // }

  // insertAfter("li", fourthElem, "insert me after");
  
  //method 2
  
  //creating new element
  function insertAfter(newEl, existingEl){
    existingEl.insertAdjacentElement("afterend", newEl);
  }

  const li = document.createElement("li");
  const text2 = document.createTextNode("insert me after");
  li.appendChild(text2);

  insertAfter(li, fourthElem);
  insertAfter(li, thirdElem);


