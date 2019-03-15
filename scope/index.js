const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB
        // Ben
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          
          // Log B: personC
          // CardiB
        }
      }

      personC = personA;

      // Log C: personB
      // CardiB
    }

    changePerson();

    // Log D: personC
    // Paul

    const result = [
      { A: 'Ben' },
      { B: 'CardiB' },
      { C: 'CardiB' },
      { D: 'Paul'}
    ];

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28; // let adheres to block scope (let will never leave here) this is a block scope
      }

      // Log A: number
      // 75

      function newNumber() {
        number = 64;

        // Log B: number
        // 64
      }

      newNumber();

      // Log C: number
      // 64
    }

    numberFunction();

    // Log D: number
    // 30

    const result = [
      { A: 75},
      { B: 64}, 
      { C: 64},
      { D: 30}
    ];

    return result;

    // Annotation:
    // in our global scope: First we declare a global variable called 'number' and assign it to a the value of 30
    // Next, there is a function called 'numberFunction', numberFunction doesn't get invoked until line 76, which brings us back up to line 53
    // 1st console.log = is on line 60
    // 2nd console.log = is within the nested function 'newNumber' on line 66
    // 3rd console.log = is after newNumber is invoked on line 72
    // 4th console.log =   
    // Write your annotation here as a comment
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting
      //Yo

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
        //Hey
      }

      newPhrase();

      // Log C: greeting
      //Hey
    }

    greetingFunction();

    // Log D: greeting
    // Hello

    const result = [
      { A: 'Yo'},
      { B: 'Hey'}, 
      { C: 'Hey'},
      { D: 'Hello'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting
      // hi


      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
        // welcome
      };

      newGreeting();

      // Log C: greeting
      // welcome
    };

    greetingGenerator();

    // Log D: greeting
    // howdy

    const result = [
      { A: 'hi'},
      { B: 'welcome'}, 
      { C: 'welcome'},
      { D: 'howdy'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name 2
        // Nathaniel
      }

      // Log B: name 3
      // Nathaniel

    }

    // Log C: name 1
    // Brittany

    sayName();

    // Log D: name 4
    // Brittany

    const result = [
      { C: 'Brittany'},
      { A: 'Nathaniel'},
      { B: 'Nathaniel'},
      { D: 'Brittany'}
    ];

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog 1
      // spot

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog 2
        // spot

        dog = 'Biscuit';

        // Log C: dog 3
        // Biscuit

      }

      rollOver();

      // Log D: dog 4
      // Biscuit
    }

    petDog();

    // Log E: dog 5
    // Biscuit
    

    const result = [
      {'A': 'Spot'},
      {'B': 'Spot'},
      {'C': 'Biscuit'},
      {'D': 'Biscuit'},
      {'E': 'Biscuit'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit // 1 not defined
          const fruit = 'strawberry';
        }
        // Log B: fruit // 2 'mango'
      }
      // Log C: fruit // 3 'mango'
      
      
    }

    eatFruit();

    // Log D: fruit // 4 apple


    const result = [ 
      { A: 'reference error'},
      { B: 'mango' },
      { C: 'mango' },
      { D: 'apple' }
    ];

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num run 1st
      // A: 4 

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum
      }

      newNum = num;

      // Log C: newNum
    };

    const fn2 = function(num){
      // Log D: num

      num = num + 1;

      // Log E: num 
    };

    fn1();

    const result = [
      {A:  4},
      {D:  9},
      {E:  10},
      {B:  9},
      {C:  4}
    ];

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger 75 1st
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger 0 2nd
      }

      // Log C: hunger 75 3rd
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger 80 4th

    eatSnack();
    // Log E: hunger 55 5th

    const result = [
      {A: 75},
      {B:  0},
      {C: 75},
      {D: 80},
      {A: 55},
      {B:  0},
      {C: 55},
      {E: 55}
    ];

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich 
    // ketchup sandwich 1st

    const addChipotle = () => {
      // Log B: toppings 
      /// undefined 3rd
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich 
      // 'not a mediocre sandwich' 4th
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping 
      // gouda 2nd

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    // 'not a mediocre sandwich' 5th
   
    // Log F: amandaBynes
    // National Treasure 6th

    const result = [
      { A: 'ketchup sandwich' },
      { D: 'gouda'},
      { B: undefined },
      { C: 'not a mediocre sandwich' },
      { E: 'not a mediocre sandwich' },
      { F: 'National Treasure'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num
      // 7 1st
    }

    foo();

    // Log B: num
    // 7 2nd ?

    const result = [
      {A: 7},
      {B: 7}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
        // 95 1st
      }

      addPoints();

      // Log B: grade
      // 90 2nd
    }

    losePoints();

    // Log C: grade
    // 90 3rd

    const result = [
      {A: 95},
      {B: 90},
      {C: 90}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      //5 1st
      num = 6;
      // Log B: num
      // 6 2nd
    }
    
    function second() {
      // Log C: num
      // error
      let num = 7;
    }

    first();
    second();

    // Log D: num
    // 6 4th

    const result = [
      {A: 5},
      {B: 6},
      {C: 'reference error'},
      {D: 6}
 
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor
      // Pam 2nd

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor
      // Pam 3rd

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
        // Louisa 4th
      }

      rename();

      // Log D: instructor
      // Louisa 5th

    }

    // Log E: instructor
    // Pam 1st

    changeInstructor();

    // Log F: instructor

    const result = [
      {E: 'Pam'},
      {A: 'Pam'},
      {B: 'Pam'},
      {C: 'Louisa'},
      {D: 'Louisa'},
      {F: 'Louisa'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      // undefined 2nd
      var shoe = 'boot';
    }

    // Log B: shoe
    // flipflop 1st
    putOnShoe();
    // Log C: shoe
    // flipflop 3rd

    const result = [
      {B: 'flipflop'},
      {A: undefined},
      {C: 'flipflop'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch
        // ?
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
    }

    orderLunch();

    // Log C: lunch

    const result = [
      {B: 'soup'},
      {C: 'soup'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid
      // pandora
      wildKids.push(kid);
      // Log B: wildKids
      // ['Antigone', 'Pandora'];
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid
        //  mandy
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid
        // Antigone
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid;
      // pandora
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = [
      {A: 'Pandora'},
      {B: ['Antigone', 'Pandora'] },
      {C: 'Mandy' },
      {D: 'Antigone'},
      {E: 'Pandora'},
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName
    //Rody

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName
      // RodyToy 

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName
        // Tesla
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName
    // RodyToyDaniels

    const result = [
      {A: 'Rody'}, 
      {B: 'RodyToy'}, 
      {C: 'Tesla'}, 
      {D: 'RodyToyDaniels'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;