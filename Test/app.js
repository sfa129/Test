// ********* Logic Building Questions *********

1. 
// Using typeof demo === "object" to check if demo is an object might not work as expected in all cases. Here are some potential issues:

// Null: In JavaScript, the typeof operator returns "object" for null, which can lead to incorrect results if demo is null.

// Arrays: Arrays are also objects in JavaScript, so typeof demo === "object" would return true for arrays as well.

// Non-Plain Objects: Functions, arrays, and other non-primitive types are all considered objects in JavaScript. If you specifically want to check for plain objects (i.e., objects created with {} or new Object()), this check won't suffice.

if (demo instanceof Object && demo !== null) {
    
}


2.

const numberOfDisks = 3;
const sourceRod = 'A';
const auxiliaryRod = 'B';
const destinationRod = 'C';

function towerOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }
    towerOfHanoi(n - 1, source, destination, auxiliary);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, auxiliary, source, destination);
}

function playTowerOfHanoi(numberOfDisks, sourceRod, auxiliaryRod, destinationRod) {
    console.log(`Tower of Hanoi with ${numberOfDisks} disks:\n`);
    towerOfHanoi(numberOfDisks, sourceRod, auxiliaryRod, destinationRod);
}


playTowerOfHanoi(numberOfDisks, sourceRod, auxiliaryRod, destinationRod);



3.

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

function findMiddleElement(stack) {
    const auxiliaryStack = new Stack();
    const n = stack.size();
    const middleIndex = Math.floor(n / 2);

    for (let i = 0; i < middleIndex; i++) {
        auxiliaryStack.push(stack.pop());
    }

    const middleElement = stack.peek();

    while (!auxiliaryStack.isEmpty()) {
        stack.push(auxiliaryStack.pop());
    }

    return middleElement;
}


console.log("Stack elements:", stack.items);
console.log("Middle element:", findMiddleElement(stack));



4.

// The break and continue statements are both control flow statements used in loops. 

// Break Statement:
// The break statement is used to exit or terminate the loop immediately when a certain condition is met, 
// regardless of whether the loop has completed all its iterations or not.

// Continue Statement:
// The continue statement is used to skip the rest of the code inside the loop for the current iteration and 
// continue with the next iteration of the loop.


5. 

const words = ["cat", "dog", "tac", "god", "act"];

function printAnagramsTogether(words) {
    const hashTable = {};

    words.forEach(word => {
        const sortedWord = word.split('').sort().join('');

        if (!(sortedWord in hashTable)) {
            hashTable[sortedWord] = [];
        }

        hashTable[sortedWord].push(word);
    });

    for (const key in hashTable) {
        if (hashTable.hasOwnProperty(key)) {
            console.log(hashTable[key].join(' '));
        }
    }
}


printAnagramsTogether(words);



6.

// In JavaScript, neither method overloading nor method overriding are directly supported as they are in some other 
// object-oriented programming languages like Java or C++. However, JavaScript provides similar functionality through different mechanisms.

// Method Overloading:
// Method overloading refers to the ability to define multiple methods with the same name but different parameter lists within a class. 
// The appropriate method is selected based on the number or types of arguments passed during invocation. In JavaScript, 
// due to its dynamic nature, functions can be redefined or replaced dynamically, allowing for similar behavior to method overloading.

// Method Overriding:
// Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. 
// In JavaScript, inheritance is implemented using prototypes. Objects inherit properties and methods from their prototype objects. 
// Overriding can be achieved by redefining a method in the subclass that already exists in the superclass.


7.

const pastDate = new Date();

function timeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
}


console.log(timeAgo(pastDate)); 


// ************Framework and Language Related Questions******************

1. 


// In React, class components have a lifecycle that consists of various stages during the component's existence. Each stage offers different 
// opportunities for developers to interact with and control the behavior of their components. The lifecycle methods can be broadly categorized
// into three phases: mounting, updating, and unmounting.

// Mounting Phase:
// This phase occurs when an instance of a component is being created and inserted into the DOM. The mounting phase has the following 
// lifecycle methods:

// constructor(): This is the first method called during the creation of a component instance. It is used for initializing state and binding
//  event handlers.

// static getDerivedStateFromProps(): This method is invoked right before calling the render() method, both on the initial mount and on 
// subsequent updates. It allows the component to update its internal state based on changes in props.

// render(): This method is required and is responsible for rendering the component's UI based on its current state and props. 
// It returns React elements or null.

// componentDidMount(): This method is called after the component has been rendered into the DOM. It is commonly used for performing 
// side effects such as fetching data from an API or subscribing to events.

// Updating Phase:
// This phase occurs when a component is being re-rendered due to changes in its state or props. The updating phase has the following
//  lifecycle methods:

// static getDerivedStateFromProps(): Similar to the mounting phase, this method is called right before render() on every update. 
// It allows the component to update its internal state based on changes in props.

// shouldComponentUpdate(): This method determines whether the component should re-render or not. It allows developers to optimize performance
// by preventing unnecessary re-renders.

// render(): Same as in the mounting phase, this method is responsible for rendering the component's UI.

// componentDidUpdate(): This method is called after the component has been re-rendered. It is commonly used for performing side effects 
// after a re-render, such as updating the DOM in response to state or prop changes.

// Unmounting Phase:
// This phase occurs when a component is being removed from the DOM. The unmounting phase has the following lifecycle method:

// componentWillUnmount(): This method is called just before the component is unmounted and destroyed. It is used for cleanup tasks 
// such as removing event listeners or canceling timers to prevent memory leaks.



2. 


// Clean code and Clean Architecture principles can greatly improve the maintainability, scalability, and readability of a simple 
// e-commerce web app. Here's how we can apply these principles:

// 1.   Clean Code Principles:

//   i. Meaningful Names: Use descriptive and meaningful names for variables, functions, classes, and modules to make the code self-explanatory.
//      Readable and Consistent Formatting: Follow consistent indentation, spacing, and formatting conventions throughout the codebase to enhance 
//      readability.
//   ii.Small Functions and Classes: Keep functions and classes small and focused on doing one thing well. This improves code maintainability and 
//      makes it easier to understand and test.
//  iii.Single Responsibility Principle (SRP): Each module, class, or function should have a single responsibility or reason to change. This helps in keeping the codebase modular and easier to maintain.
//  iv. Don't Repeat Yourself (DRY): Avoid duplication of code by extracting common functionality into reusable functions, classes, or modules.
//   v. Comments and Documentation: Use comments sparingly and focus on writing self-explanatory code. Document complex algorithms or design decisions to aid understanding for other developers.
//   vi.Unit Testing: Write unit tests for critical functionality to ensure code correctness and facilitate refactoring with confidence.
// 
//2.    Clean Architecture:
//      Clean Architecture promotes separation of concerns and a clear separation of layers in the application. Here's how we can structure a simple e-commerce web app using Clean Architecture principles:

//    i.Outer Layers:

//      a. Presentation Layer: This layer consists of UI components such as React components, HTML templates, and CSS stylesheets. It should focus on presenting data to the user and handling user interactions.
//      b. Infrastructure Layer: This layer contains code that interacts with external systems such as databases, APIs, or external services. It encapsulates the implementation details of these external dependencies and provides interfaces for the application to interact with them.

//   ii.Inner Layers:

//      a. Application Layer: This layer contains business logic and use cases of the e-commerce application. It orchestrates interactions between the presentation layer and the domain layer. It should be independent of frameworks and external systems.
//      b. Domain Layer: This layer encapsulates the core business logic and domain entities of the e-commerce application. It should contain domain models, business rules, and validation logic. This layer should be framework-agnostic and independent of external dependencies.

//  iii.Dependencies Direction:

//      a.Dependencies should always point inward. This means that code in the inner layers should not depend on code in the outer layers. This ensures that the business logic remains decoupled from external concerns, making it easier to test and maintain.
//      b.Use of Interfaces and Dependency Injection:

//  iv.Use interfaces to define contracts between layers, allowing for loose coupling and easier testing.
//     Use dependency injection to inject dependencies into classes rather than hardcoding them. This makes the code more modular and flexible.


3.

//Throttle
function throttle(func, delay) {
    let lastCalledTime = 0;

    return function(...args) {
        const now = Date.now();
        if (now - lastCalledTime >= delay) {
            func.apply(this, args);
            lastCalledTime = now;
        }
    };
}

function logMessage(message) {
    console.log(message);
}

const throttledLog = throttle(logMessage, 1000); 

throttledLog("Hello"); 
throttledLog("World"); 

//Debounce
function debounce(func, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function saveInputValue(value) {
    console.log("Saving input value:", value);
}

const debouncedSave = debounce(saveInputValue, 1000); // Debounce saveInputValue to once per second

debouncedSave("Input 1"); 
debouncedSave("Input 2"); 


//context
const ThemeContext = React.createContext("light");

function ThemedComponent() {
    return (
        <ThemeContext.Consumer>
            {theme => <div>Current theme: {theme}</div>}
        </ThemeContext.Consumer>
    );
}

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <ThemedComponent />
        </ThemeContext.Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));


4.

// Storing private keys securely is critical to prevent unauthorized access and potential security breaches. This is the best practice
// for storing private keys in a codebase:

// Environment Variables:
// Store private keys as environment variables rather than hardcoding them directly into the codebase. Environment variables are configuration 
// values that are set outside the application and are accessed by the application at runtime. This approach keeps sensitive information separate 
// from the codebase and allows for easy configuration management across different environments.
