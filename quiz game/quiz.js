const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyper Tool Multi Language", correct: false }
    ]
  },
  {
    question: "Which HTML tag is used to display a picture?",
    answers: [
      { text: "<img>", correct: true },
      { text: "<picture>", correct: false },
      { text: "<src>", correct: false },
      { text: "<image>", correct: false }
    ]
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    answers: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false },
      { text: "<hyperlink>", correct: false }
    ]
  },
  {
    question: "Which HTML element is used to define the largest heading?",
    answers: [
      { text: "<h1>", correct: true },
      { text: "<h6>", correct: false },
      { text: "<head>", correct: false },
      { text: "<heading>", correct: false }
    ]
  },
  {
    question: "Which attribute is used to provide a unique name to an HTML element?",
    answers: [
      { text: "id", correct: true },
      { text: "class", correct: false },
      { text: "name", correct: false },
      { text: "key", correct: false }
    ]
  },
  {
    question: "Which element is used to display a numbered list?",
    answers: [
      { text: "<ol>", correct: true },
      { text: "<ul>", correct: false },
      { text: "<dl>", correct: false },
      { text: "<list>", correct: false }
    ]
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    answers: [
      { text: "<br>", correct: true },
      { text: "<break>", correct: false },
      { text: "<lb>", correct: false },
      { text: "<line>", correct: false }
    ]
  },
  {
    question: "Which attribute is used to specify a link destination in an <a> tag?",
    answers: [
      { text: "href", correct: true },
      { text: "src", correct: false },
      { text: "link", correct: false },
      { text: "url", correct: false }
    ]
  },
  {
    question: "Which HTML tag is used to display a table?",
    answers: [
      { text: "<table>", correct: true },
      { text: "<tab>", correct: false },
      { text: "<tr>", correct: false },
      { text: "<td>", correct: false }
    ]
  },
  {
    question: "Which HTML tag is used to play a video?",
    answers: [
      { text: "<video>", correct: true },
      { text: "<movie>", correct: false },
      { text: "<media>", correct: false },
      { text: "<play>", correct: false }
    ]
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Creative Style System", correct: false },
      { text: "Computer Style Sheets", correct: false },
      { text: "Colorful Style Syntax", correct: false }
    ]
  },
  {
    question: "Which property is used to change the text color in CSS?",
    answers: [
      { text: "color", correct: true },
      { text: "text-color", correct: false },
      { text: "font-color", correct: false },
      { text: "foreground-color", correct: false }
    ]
  },
  {
    question: "Which CSS property controls the text size?",
    answers: [
      { text: "font-size", correct: true },
      { text: "text-size", correct: false },
      { text: "size", correct: false },
      { text: "font-style", correct: false }
    ]
  },
  {
    question: "Which symbol is used to select an id in CSS?",
    answers: [
      { text: "#", correct: true },
      { text: ".", correct: false },
      { text: "@", correct: false },
      { text: "&", correct: false }
    ]
  },
  {
    question: "Which CSS property is used to set the background color?",
    answers: [
      { text: "background-color", correct: true },
      { text: "color-background", correct: false },
      { text: "bg-color", correct: false },
      { text: "background-style", correct: false }
    ]
  },
  {
    question: "Which CSS property is used to make text bold?",
    answers: [
      { text: "font-weight", correct: true },
      { text: "bold", correct: false },
      { text: "text-bold", correct: false },
      { text: "font-style", correct: false }
    ]
  },
  {
    question: "Which unit is NOT relative in CSS?",
    answers: [
      { text: "px", correct: true },
      { text: "%", correct: false },
      { text: "em", correct: false },
      { text: "rem", correct: false }
    ]
  },
  {
    question: "Which property is used to control the spacing between lines of text?",
    answers: [
      { text: "line-height", correct: true },
      { text: "letter-spacing", correct: false },
      { text: "word-spacing", correct: false },
      { text: "text-spacing", correct: false }
    ]
  },
  {
    question: "Which value of position property makes an element stay fixed in one spot?",
    answers: [
      { text: "fixed", correct: true },
      { text: "static", correct: false },
      { text: "relative", correct: false },
      { text: "absolute", correct: false }
    ]
  },
  {
    question: "Which CSS property makes text italic?",
    answers: [
      { text: "font-style", correct: true },
      { text: "text-style", correct: false },
      { text: "font-weight", correct: false },
      { text: "style", correct: false }
    ]
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      { text: "var", correct: true },
      { text: "int", correct: false },
      { text: "letvar", correct: false },
      { text: "declare", correct: false }
    ]
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "##", correct: false },
      { text: "<!-- -->", correct: false },
      { text: "/* */", correct: false }
    ]
  },
  {
    question: "Which method is used to display text in an alert box?",
    answers: [
      { text: "alert()", correct: true },
      { text: "msg()", correct: false },
      { text: "prompt()", correct: false },
      { text: "display()", correct: false }
    ]
  },
  {
    question: "How do you write 'Hello World' in the console?",
    answers: [
      { text: "console.log('Hello World');", correct: true },
      { text: "print('Hello World');", correct: false },
      { text: "echo('Hello World');", correct: false },
      { text: "log.console('Hello World');", correct: false }
    ]
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: [
      { text: "=", correct: true },
      { text: "==", correct: false },
      { text: "===", correct: false },
      { text: ":=", correct: false }
    ]
  },
  {
    question: "Which function is used to convert a string to an integer?",
    answers: [
      { text: "parseInt()", correct: true },
      { text: "toInteger()", correct: false },
      { text: "parse()", correct: false },
      { text: "int()", correct: false }
    ]
  },
  {
    question: "Which JavaScript method removes the last element from an array?",
    answers: [
      { text: "pop()", correct: true },
      { text: "push()", correct: false },
      { text: "shift()", correct: false },
      { text: "remove()", correct: false }
    ]
  },
  {
    question: "What is the correct way to write a function in JavaScript?",
    answers: [
      { text: "function myFunction() {}", correct: true },
      { text: "def myFunction() {}", correct: false },
      { text: "func myFunction() {}", correct: false },
      { text: "function: myFunction() {}", correct: false }
    ]
  },
  {
    question: "Which event occurs when a user clicks on an HTML element?",
    answers: [
      { text: "onclick", correct: true },
      { text: "onhover", correct: false },
      { text: "onpress", correct: false },
      { text: "onchange", correct: false }
    ]
  },
  {
    question: "Which value is NOT a boolean in JavaScript?",
    answers: [
      { text: "yes", correct: true },
      { text: "true", correct: false },
      { text: "false", correct: false },
      { text: "Boolean(0)", correct: false }
    ]
  }
];




