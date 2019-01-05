// TASK: Formatting JSON Data
// 1. Describe what JSON format is.
// 2. Delete the data types not permitted in JSON.
// 3. Replace placeholder-text with the corresponding data type,
//    properly formatted as JSON.

// Code Snippet
const myJsonObj = {
  myString: [some string],
  myNumber: [some number],
  myNull: [null],
  myBoolean: [false],
  myUndefined: [undefined],
  myArray: [some array],
  myFunction: [some function],
  myObject: [some object]
};

// Code Solution
const myJsonObj = {
  "myString": "Hello Imran",
  "myNumber": 123.87,
  "myNull": null,
  "myBoolean": true,
  "myArray": [20, 30, "orange"],
  "myObject": {
    "name": '"Alexander"',
    "age": 27
  }
};
