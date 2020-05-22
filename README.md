# JavaScript Guidelines & JavaScript_Application
---

## Introduction to JavaScript:

+ JavaScript was Invented by **Brendan Eich** during has time at **Netscape Communication** 
+ It's first name is Netscape's Mocha. It's not much more popular. At that time Java is most popular programming language
+ Changed Mocha Name to JavaScript at 1995
+ He collaberated with ECMA company in 1997 form it ECMA Script
+ Now Js is most popular & widely using for Client Side scripting


## What You Can Do with JavaScript?

+ You can modify the content of a web page by adding or removing elements

+ You can change the style and position of the elements on a web page

+ You can monitor events like mouse click, hover, etc.

+ You can create alert pop-ups to display info or warning messages to the user

+ You can validate user inputs before submitting it to the server

#### Variable:

+ Variables are fundamentals to all programming languages
+ Variable is used to storing the data like strings, numbers etc.,

* Syntax:
```var varName = value;```

+ It’s used to store the data like strings, numbers, Objects[array]

```javascript
Var a= "APSSDC";
Var b=1;
Console.log(a);
```

**General Rules for constructiong variable names are:**

+ A variable name must start with a letter, underscore (_), or dollar sign ($)
+ A variable name cannot start with a number.
+ A variable name can only contain alpha-numeric characters (A-z, 0-9) and underscores.
+ A variable name cannot contain spaces.
+ Variable names are case sensitive 

+ In JavaScript, variables can also be declared without having any initial values assigned to them. This is useful for variables which are supposed to hold values like user inputs

```javascript
// declearing variable without initial value
var data;
// value getting from user input
data="APSSDC";
```

#### Declaring Multiple Variables At Once:

+ In addition, you can also declare multiple variables and set their initial values in a single statement. Each variable are separated by commas, as demonstrated in the following example:

```javascript
// Declaring multiple Variables
var name = "APSSDC", age = 4;
 
/* Longer declarations can be written to span
multiple lines to improve the readability */
var name = "APSSDC",
age = 4;
```
+ **let & const** for declearing variables & it's **ES6** properties

+ Unlike var, which declare function-scoped variables, both let and const keywords declare variables scoped at block-level ({})
+ Block scoping means that a new scope is created between a pair of curly brackets {}.

```javascript
// let
let a=10
// Declaring constant its used for 
const PI = 3.14;
console.log(PI); // 3.14

// Trying to reassign
PI = 10; // error
```
## Data Types

+ datatypes are majorly two types of languages
    + Statically(c,c++, Java)
    + Dynamically(JS, Python, Ruby etc.,)
    + The latest ES6 has 7 data types. In those 7 data types 6 data types are premitive(predifined). i.e.,

      + **Numbers** : The number data type is used to represent positive or negative numbers. The numbers written using exponential notation e.g. 1.5e-4
      ```javascript
      var a = 25;         // integer
        var b = 80.5;       // floating-point number
        var c = 4.25e+6;    // exponential notation, same as 4.25e6 or 4250000
        var d = 4.25e-6;    // exponential notation, same as 0.00000425 
      ```
        
      + **String** : The string data type is used to represent textual data. it's created using single/double quotes

      ```javascript
      var a = "Let's have a cup of coffee."; // single quote inside double quotes
      var b = 'He said "Hello" and left.';  // double quotes inside single quotes

      ```
      + **Boolean** : The Boolean data type can hold only two values: **true or false**. 

      + **Undefined** :  If a variable has been declared, but has not been assigned a value, has the value undefined

      ```javascript
        var a;
        var b = "Hello World!"
        alert(a) // Output: undefined
        alert(b) // Output: Hello World!
      ```

      + **Null** : A `null` value means that there is no value. It is not equivalent to an empty string `("")` or `0`, it is simply nothing

      + **Object** : The object is a complex data type that allows you to store collections of data(it's key-value pair)
        + It has most important data type and forms the bulding blocks for moders JS. we'll learn about this in future concepts
      ```javascript
      var car = {
         modal: "AUDI",
        color: "white"
        }
      ```
    + **Array**: An array is a type of object used for storing multiple values in single variable.  Each value (also called an element) in an array has a numeric position, known as its index
    
    ```javascript
    var colors = ["Red", "Yellow", "Green", "Orange"];
    ```
## Loops:

+ **for ..in**:loops through the properties of an object or the elements of an array.

    + *syntax*:
    ```javascript
    for(variable in object) {
    // Code to be executed
    }
    ```
+ *Example*:
```javascript
var data=['apssdc','apssdc1','apssdc2','apssdc3']
for (i in data){
console.log(data[i]); 
}
//for( var a in data){
    here getting index values
// }
```

+ **for ..of**:It's iterable objects such as arrays, strings, etc., Also, the code inside the loop is executed for each element of the iterable object

    + *syntax*:
    ```javascript
    for(variable of object) {
    // Code to be executed
    }
    ```
+ **Example**:
```javascript
var a="APSSDC Welcome's you"
for (i of a){
console.log(i);  //A,P,S,S,D,C, ,W,e,l,c,o,m,e,',s, ,y,o,u
}
```

## DOM (Document Object Model):

+ The Document Object Model, or DOM for short, is a platform and language independent model to represent the HTML or XML documents
+ It defines the logical structure of the documents and the way in which they can be accessed and manipulated by an application program

![image.png](domimage.png)


#### DOM Manipulations:

```javascript
<body id='root'><body>

<script>
    var body=document.getElementById('root');
    var h2=document.createElement("h2"); // creating h2 element
    h2.textContent="Resume"; //add some text 
    body.appendChild(h2);
</script>
```

+ The above example we are creating **heading 2**  tag with some text on that it's appen to the root *ID*
