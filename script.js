/* =========================================================
   STEP 1: DOM ELEMENTS
========================================================= */
const startQuizBtn = document.getElementById("start-quiz-btn");
const quizSection = document.getElementById("quiz-section");
const previousBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

const quizTitle = document.getElementById("quiz-title");
const quizProgress = document.getElementById("quiz-progress");
const questionText = document.getElementById("question-text");
const answersEl = document.getElementById("answer-buttons");

/* =====================================================================
   STEP 2: Redirect user to quiz page when Start Quiz button is clicked
========================================================= */
if (startQuizBtn) {
  startQuizBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "quizCards.html";
  });
}

/* =========================================================
   STEP 3A: Quiz questions data (grouped by category & topic)
========================================================= */
const programming = {
  c: [
    {
      question: "Which header file is required for printf()?",
      options: ["stdio.h", "stdlib.h", "conio.h", "string.h"],
      answer: "stdio.h",
    },
    {
      question: "What is the default return type of main() in C?",
      options: ["int", "void", "char", "float"],
      answer: "int",
    },
    {
      question: "Which operator is used to access value at a pointer?",
      options: ["*", "&", "->", "."],
      answer: "*",
    },
    {
      question: "Which keyword is used to define constants?",
      options: ["define", "const", "static", "final"],
      answer: "const",
    },
    {
      question: "Which function is used to allocate memory?",
      options: ["alloc()", "malloc()", "calloc()", "memalloc()"],
      answer: "malloc()",
    },
    {
      question: "Which loop guarantees at least one execution?",
      options: ["for", "while", "do-while", "goto"],
      answer: "do-while",
    },
    {
      question: "What is sizeof(int) in most 32-bit compilers?",
      options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
      answer: "4 bytes",
    },
    {
      question: "Which storage class has the longest lifetime?",
      options: ["auto", "register", "static", "extern"],
      answer: "static",
    },
    {
      question: "Which operator is used to get the address of a variable?",
      options: ["*", "&", "->", "@"],
      answer: "&",
    },
    {
      question: "Which symbol is used for single-line comments in C99?",
      options: ["//", "/* */", "#", "--"],
      answer: "//",
    },
  ],
  java: [
    {
      question: "What does JVM stand for?",
      options: [
        "Java Virtual Machine",
        "Java Variable Method",
        "Joint Virtual Module",
        "Java Verified Mode",
      ],
      answer: "Java Virtual Machine",
    },
    {
      question: "Which keyword is used for inheritance in Java?",
      options: ["inherits", "extends", "implements", "super"],
      answer: "extends",
    },
    {
      question: "Which method is the entry point of a Java program?",
      options: ["main()", "start()", "execute()", "run()"],
      answer: "main()",
    },
    {
      question: "Which of these is not a Java primitive type?",
      options: ["int", "boolean", "float", "string"],
      answer: "string",
    },
    {
      question: "Which package is imported by default?",
      options: ["java.util", "java.lang", "java.io", "java.net"],
      answer: "java.lang",
    },
    {
      question: "Which keyword prevents a class from being subclassed?",
      options: ["final", "static", "sealed", "private"],
      answer: "final",
    },
    {
      question: "Which operator is used for object reference comparison?",
      options: ["==", "equals()", "!=", "compareTo()"],
      answer: "==",
    },
    {
      question: "Which of these is a marker interface?",
      options: ["Serializable", "Runnable", "Cloneable", "All of the above"],
      answer: "Serializable",
    },
    {
      question: "What is JDK?",
      options: [
        "Java Development Kit",
        "Java Deployment Key",
        "Java Debugging Kit",
        "Java Data Kernel",
      ],
      answer: "Java Development Kit",
    },
    {
      question: "Which keyword is used to handle exceptions?",
      options: ["catch", "throw", "try", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "Which collection allows duplicate elements?",
      options: ["Set", "Map", "List", "None"],
      answer: "List",
    },
    {
      question: "Which access modifier makes a member visible to all classes?",
      options: ["private", "public", "protected", "default"],
      answer: "public",
    },
    {
      question: "Which keyword is used to inherit from an interface?",
      options: ["inherit", "extends", "implements", "uses"],
      answer: "implements",
    },
    {
      question: "Which loop checks the condition after executing the body?",
      options: ["for", "while", "do-while", "foreach"],
      answer: "do-while",
    },
    {
      question: "Which keyword is used to allocate memory dynamically in Java?",
      options: ["malloc", "alloc", "new", "create"],
      answer: "new",
    },
  ],
  python: [
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["func", "def", "function", "lambda"],
      answer: "def",
    },
    {
      question: "Which data type is immutable?",
      options: ["list", "dict", "set", "tuple"],
      answer: "tuple",
    },
    {
      question: "Which operator is used for floor division?",
      options: ["/", "//", "%", "**"],
      answer: "//",
    },
    {
      question: "What is the output of: type([])?",
      options: ["list", "tuple", "dict", "set"],
      answer: "list",
    },
    {
      question: "Which keyword is used for exception handling?",
      options: ["catch", "try", "except", "finally"],
      answer: "except",
    },
  ],
};

const coreConcepts = {
  dbms: [
    {
      question: "What does DBMS stand for?",
      options: [
        "Database Management System",
        "Data Backup Management System",
        "Database Manipulation System",
        "Data Business Management System",
      ],
      answer: "Database Management System",
    },
    {
      question: "Which of these is NOT a type of database model?",
      options: ["Hierarchical", "Relational", "Object-Oriented", "Procedural"],
      answer: "Procedural",
    },
    {
      question: "Which language is used to query databases?",
      options: ["HTML", "SQL", "C++", "NoSQL"],
      answer: "SQL",
    },
    {
      question: "Which key uniquely identifies a record?",
      options: ["Foreign Key", "Primary Key", "Candidate Key", "Alternate Key"],
      answer: "Primary Key",
    },
    {
      question: "Which command is used to remove a table in SQL?",
      options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
      answer: "DROP",
    },
    {
      question: "Which normal form removes partial dependency?",
      options: ["1NF", "2NF", "3NF", "BCNF"],
      answer: "2NF",
    },
    {
      question: "Which join returns all records from both tables?",
      options: ["INNER JOIN", "LEFT JOIN", "FULL OUTER JOIN", "CROSS JOIN"],
      answer: "FULL OUTER JOIN",
    },
    {
      question: "Which SQL clause is used to group rows?",
      options: ["GROUP BY", "ORDER BY", "HAVING", "WHERE"],
      answer: "GROUP BY",
    },
    {
      question: "Which isolation level avoids dirty reads?",
      options: [
        "Read Uncommitted",
        "Read Committed",
        "Repeatable Read",
        "Serializable",
      ],
      answer: "Read Committed",
    },
    {
      question: "Which index improves search performance?",
      options: ["Clustered Index", "Non-clustered Index", "Both", "None"],
      answer: "Both",
    },
  ],

  networks: [
    {
      question: "What does IP stand for?",
      options: [
        "Internet Provider",
        "Internet Protocol",
        "Internal Program",
        "Information Process",
      ],
      answer: "Internet Protocol",
    },
    {
      question: "Which layer of OSI model is responsible for routing?",
      options: ["Application", "Transport", "Network", "Data Link"],
      answer: "Network",
    },
    {
      question: "Which protocol is used to transfer web pages?",
      options: ["FTP", "SMTP", "HTTP", "SNMP"],
      answer: "HTTP",
    },
    {
      question: "Which device connects multiple networks together?",
      options: ["Switch", "Router", "Hub", "Repeater"],
      answer: "Router",
    },
    {
      question: "Which IP address class supports the largest number of hosts?",
      options: ["Class A", "Class B", "Class C", "Class D"],
      answer: "Class A",
    },
    {
      question: "What is the default port for HTTPS?",
      options: ["21", "25", "80", "443"],
      answer: "443",
    },
    {
      question: "Which protocol is used to send emails?",
      options: ["SMTP", "POP3", "IMAP", "FTP"],
      answer: "SMTP",
    },
    {
      question: "Which layer ensures error-free delivery?",
      options: ["Application", "Session", "Transport", "Physical"],
      answer: "Transport",
    },
    {
      question: "Which of these is not a guided transmission medium?",
      options: ["Coaxial cable", "Fiber optic", "Twisted pair", "Radio waves"],
      answer: "Radio waves",
    },
    {
      question: "Which IP version uses 128-bit addressing?",
      options: ["IPv4", "IPv6", "IPX", "None"],
      answer: "IPv6",
    },
  ],

  oops: [
    {
      question: "What does OOP stand for?",
      options: [
        "Object Oriented Programming",
        "Open Operating Process",
        "Optimized Object Processing",
        "Only Object Programs",
      ],
      answer: "Object Oriented Programming",
    },
    {
      question: "Which of the following is not a feature of OOP?",
      options: ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
      answer: "Compilation",
    },
    {
      question:
        "Which concept allows the same function name to have different implementations?",
      options: ["Encapsulation", "Abstraction", "Polymorphism", "Inheritance"],
      answer: "Polymorphism",
    },
    {
      question: "Which keyword is used for inheritance in Java?",
      options: ["inherits", "extends", "implements", "super"],
      answer: "extends",
    },
    {
      question:
        "Which concept hides internal details and shows only functionality?",
      options: ["Encapsulation", "Abstraction", "Polymorphism", "Overloading"],
      answer: "Abstraction",
    },
    {
      question:
        "Which method is called automatically when an object is created?",
      options: ["constructor", "destructor", "init()", "main()"],
      answer: "constructor",
    },
    {
      question: "Which of these is used to destroy an object in C++?",
      options: ["constructor", "delete", "free", "destructor"],
      answer: "destructor",
    },
    {
      question: "Which OOP feature helps prevent unauthorized access?",
      options: ["Abstraction", "Polymorphism", "Encapsulation", "Inheritance"],
      answer: "Encapsulation",
    },
    {
      question: "Which of these is not an access modifier in Java?",
      options: ["public", "private", "protected", "internal"],
      answer: "internal",
    },
    {
      question: "Which concept allows reusing existing code?",
      options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
      answer: "Inheritance",
    },
  ],

  os: [
    {
      question: "Which of the following is NOT an operating system?",
      options: ["Linux", "Windows", "Oracle", "MacOS"],
      answer: "Oracle",
    },
    {
      question: "Which OS is open-source?",
      options: ["Windows", "Linux", "MacOS", "DOS"],
      answer: "Linux",
    },
    {
      question: "Which of these is responsible for process management?",
      options: ["Compiler", "Kernel", "Shell", "Cache"],
      answer: "Kernel",
    },
    {
      question:
        "Which scheduling algorithm gives priority to the shortest job?",
      options: ["FCFS", "SJF", "Round Robin", "Priority"],
      answer: "SJF",
    },
    {
      question:
        "Which memory management technique suffers from external fragmentation?",
      options: ["Paging", "Segmentation", "Swapping", "Virtual Memory"],
      answer: "Segmentation",
    },
    {
      question: "Which type of OS is used in real-time systems?",
      options: ["Batch OS", "Distributed OS", "RTOS", "Network OS"],
      answer: "RTOS",
    },
    {
      question: "Which command is used to list files in Linux?",
      options: ["ls", "dir", "list", "show"],
      answer: "ls",
    },
    {
      question: "Which technique allows multiple processes to share the CPU?",
      options: [
        "Multiprogramming",
        "Multithreading",
        "Time Sharing",
        "All of these",
      ],
      answer: "All of these",
    },
    {
      question: "Which system call creates a new process in Unix/Linux?",
      options: ["exec()", "fork()", "create()", "spawn()"],
      answer: "fork()",
    },
    {
      question: "Which is the fastest memory?",
      options: ["RAM", "Cache", "Hard Disk", "Virtual Memory"],
      answer: "Cache",
    },
  ],
};

const webDev = {
  html: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "Hyper Text Marketing Language",
        "Hyperlink Text Marking Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which HTML tag is used for the largest heading?",
      options: ["<head>", "<h1>", "<h6>", "<heading>"],
      answer: "<h1>",
    },
    {
      question: "Which attribute is used to provide an image path?",
      options: ["src", "href", "link", "alt"],
      answer: "src",
    },
    {
      question: "Which tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      answer: "<a>",
    },
    {
      question: "Which HTML element is used to create a list with bullets?",
      options: ["<ol>", "<ul>", "<li>", "<dl>"],
      answer: "<ul>",
    },
    {
      question: "Which tag is used to insert a line break?",
      options: ["<break>", "<lb>", "<br>", "<line>"],
      answer: "<br>",
    },
    {
      question: "Which attribute provides alternative text for an image?",
      options: ["src", "alt", "title", "href"],
      answer: "alt",
    },
    {
      question: "Which tag is used to define a table row?",
      options: ["<td>", "<th>", "<tr>", "<row>"],
      answer: "<tr>",
    },
    {
      question: "Which tag is used to define an unordered list?",
      options: ["<ol>", "<ul>", "<li>", "<list>"],
      answer: "<ul>",
    },
    {
      question: "Which HTML element is used to display a numbered list?",
      options: ["<ol>", "<ul>", "<li>", "<dl>"],
      answer: "<ol>",
    },
  ],
  css: [
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which CSS property changes text color?",
      options: ["font-color", "color", "text-color", "background-color"],
      answer: "color",
    },
    {
      question: "Which symbol is used for ID selectors?",
      options: [".", "#", "*", "&"],
      answer: "#",
    },
    {
      question: "Which CSS property is used to change background color?",
      options: ["color", "background", "background-color", "bgcolor"],
      answer: "background-color",
    },
    {
      question: "Which CSS property controls text size?",
      options: ["font-size", "text-size", "size", "font"],
      answer: "font-size",
    },
    {
      question: "Which CSS property makes text bold?",
      options: ["font-style", "text-decoration", "font-weight", "style"],
      answer: "font-weight",
    },
    {
      question: "Which property is used to change the font?",
      options: ["font-family", "font-style", "font-weight", "font-type"],
      answer: "font-family",
    },
    {
      question: "Which unit is relative to the root element’s font size?",
      options: ["em", "px", "%", "rem"],
      answer: "rem",
    },
    {
      question: "Which property is used to create space inside an element?",
      options: ["margin", "padding", "border", "spacing"],
      answer: "padding",
    },
    {
      question: "Which property sets the space outside an element?",
      options: ["margin", "padding", "border", "spacing"],
      answer: "margin",
    },
  ],
  nodejs: [
    {
      question: "What is Node.js?",
      options: [
        "A programming language",
        "A JavaScript runtime environment",
        "A database system",
        "A web framework",
      ],
      answer: "A JavaScript runtime environment",
    },
    {
      question: "Which engine powers Node.js?",
      options: ["SpiderMonkey", "JavaScriptCore", "V8", "Chakra"],
      answer: "V8",
    },
    {
      question: "Which command initializes a Node.js project?",
      options: ["npm start", "node init", "npm init", "node create"],
      answer: "npm init",
    },
    {
      question: "Which module is used to create a web server in Node.js?",
      options: ["http", "fs", "url", "path"],
      answer: "http",
    },
    {
      question:
        "Which keyword is used to import modules in Node.js (CommonJS)?",
      options: ["include", "import", "require", "use"],
      answer: "require",
    },
    {
      question: "Which of these is NOT a Node.js core module?",
      options: ["fs", "http", "events", "express"],
      answer: "express",
    },
    {
      question: "Which method is used to read files asynchronously?",
      options: ["fs.readFile()", "fs.read()", "fs.openFile()", "fs.getFile()"],
      answer: "fs.readFile()",
    },
    {
      question: "Which object is available globally in Node.js?",
      options: ["window", "document", "global", "process"],
      answer: "global",
    },
    {
      question: "Which event is fired when a stream ends?",
      options: ["close", "data", "end", "finish"],
      answer: "end",
    },
    {
      question: "Which command is used to install a package globally?",
      options: [
        "npm install <pkg>",
        "npm install -g <pkg>",
        "node add <pkg>",
        "npm global <pkg>",
      ],
      answer: "npm install -g <pkg>",
    },
  ],
  reactjs: [
    {
      question: "What is React?",
      options: [
        "A JavaScript framework",
        "A JavaScript library for building UIs",
        "A CSS framework",
        "A database",
      ],
      answer: "A JavaScript library for building UIs",
    },
    {
      question: "Who developed React?",
      options: ["Google", "Facebook", "Microsoft", "Twitter"],
      answer: "Facebook",
    },
    {
      question: "What is JSX?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "Java Extended Syntax",
        "JSON Extension",
      ],
      answer: "JavaScript XML",
    },
    {
      question: "Which hook is used for state in React?",
      options: ["useContext", "useState", "useEffect", "useRef"],
      answer: "useState",
    },
    {
      question: "Which hook is used for side effects in React?",
      options: ["useContext", "useState", "useEffect", "useRef"],
      answer: "useEffect",
    },
    {
      question: "How do you pass data to a child component?",
      options: ["using props", "using state", "using hooks", "using context"],
      answer: "using props",
    },
    {
      question: "What is used to render UI in React?",
      options: ["render()", "ReactDOM.render()", "component()", "show()"],
      answer: "ReactDOM.render()",
    },
    {
      question: "Which keyword creates a class component?",
      options: ["class", "component", "function", "reactclass"],
      answer: "class",
    },
    {
      question: "Which hook is used to access DOM elements?",
      options: ["useEffect", "useState", "useRef", "useContext"],
      answer: "useRef",
    },
    {
      question: "Which React feature improves performance?",
      options: ["Virtual DOM", "Real DOM", "Shadow DOM", "Context API"],
      answer: "Virtual DOM",
    },
  ],
};

/* =========================================================
   STEP 3B: ALL QUIZ DATA (MASTER OBJECT)
========================================================= */
const quizData = {
  programming,
  coreConcepts,
  webDev,
};

/* =========================================================
   STEP 4: Read quiz category & topic from URL parameters
========================================================= */
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const topic = params.get("topic");

/* =========================================================
   STEP 5: Select questions based on category & topic
========================================================= */
let questions = [];
if (quizData[category] && quizData[category][topic]) {
  questions = quizData[category][topic];
}

/* =========================================================
   STEP 6: Quiz state variables
========================================================= */
let currentQuestionIndex = 0;
let score = 0;
const userAnswers = new Array(questions?.length || 0).fill(null);
let savedResultHTML = "";

/* =========================================================
   STEP 7: Render current question and options
========================================================= */
function showQuestion() {
  const q = questions[currentQuestionIndex];
  quizTitle.textContent = topic ? topic.toUpperCase() : "QUIZ";
  quizProgress.textContent = `Question ${currentQuestionIndex + 1} of ${
    questions.length
  }`;
  questionText.textContent = q.question;

  answersEl.innerHTML = "";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-success";
    btn.textContent = option;

    if (userAnswers[currentQuestionIndex] === option)
      btn.classList.add("active");

    btn.addEventListener("click", function () {
      userAnswers[currentQuestionIndex] = option;
      showQuestion();
    });

    answersEl.appendChild(btn);
  });

  previousBtn.disabled = currentQuestionIndex === 0;
  nextBtn.classList.toggle(
    "d-none",
    currentQuestionIndex === questions.length - 1
  );
  submitBtn.classList.toggle(
    "d-none",
    currentQuestionIndex !== questions.length - 1
  );
}

/* =========================================================
   STEP 8: Navigation buttons logic
========================================================= */
if (previousBtn) {
  previousBtn.addEventListener("click", function () {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestion();
    }
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", function () {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    }
  });
}

/* =========================================================
   STEP 9: Submit quiz and calculate score
========================================================= */
if (submitBtn) {
  submitBtn.addEventListener("click", function () {
    // Prevent submission if unanswered
    const unanswered = userAnswers.filter((a) => a === null).length;
    const modal = new bootstrap.Modal(
      document.getElementById("unansweredModal")
    );
    if (unanswered > 0) {
      modal.show();
      return;
    }

    score = 0;
    let correct = 0,
      incorrect = 0;

    questions.forEach((q, i) => {
      if (userAnswers[i] === q.answer) {
        correct++;
        score++;
      } else incorrect++;
    });

    // Save to localStorage
    saveScore(category, topic, score, questions.length, correct, incorrect);

    // Hide quiz & show result
    quizSection.classList.add("d-none");
    const resultSection = document.getElementById("quiz-result-section");
    resultSection.classList.remove("d-none");

    // Save original result UI (only once)
    if (!savedResultHTML) {
      savedResultHTML = resultSection.innerHTML;
    }

    // Update UI
    document.getElementById(
      "result-quiz-title"
    ).textContent = `Quiz: ${topic.toUpperCase()}`;
    document.getElementById(
      "result-score"
    ).textContent = `${score}/${questions.length}`;
    document.getElementById("result-progress").style.width = `${
      (correct / questions.length) * 100
    }%`;
    document.getElementById(
      "result-status"
    ).textContent = `You answered ${correct} questions correctly!`;

    let msg = "";
    if (correct === questions.length)
      msg = "🎉 Perfect score! You’re a legend!";
    else if (correct >= questions.length * 0.8)
      msg = "👏 Great job! You really know your stuff!";
    else if (correct >= questions.length * 0.5)
      msg = "🙂 Good effort! Keep improving!";
    else msg = "💪 Don’t worry, you’ll do better next time!";
    document.getElementById("result-message").textContent = msg;
  });
}

/* =========================================================
   STEP 10: Review Answers & Retake Quiz buttons
========================================================= */
const reviewBtn = document.getElementById("review-answers");
const retakeBtn = document.getElementById("retake-quiz");

// ---- Review Answers ----
if (reviewBtn) {
  reviewBtn.addEventListener("click", function () {
    const resultSection = document.getElementById("quiz-result-section");
    const reviewSection = document.getElementById("review-section");

    resultSection.classList.add("d-none");
    reviewSection.classList.remove("d-none");

    reviewSection.innerHTML = `
    <div class="container py-1">
      <h3 class="text-center text-success fw-bold mb-4">
        Your Answers Review
      </h3>

      ${questions
        .map(
          (q, i) => `
        <div class="card mb-3 shadow-sm border-0">
          <div class="card-body">
            <h5>${i + 1}. ${q.question}</h5>
            <p><strong>Your Answer:</strong>
              <span class="${
                userAnswers[i] === q.answer ? "text-success" : "text-danger"
              }">
                ${userAnswers[i] ?? "Not answered"}
              </span>
            </p>
            <p><strong>Correct Answer:</strong>
              <span class="text-success">${q.answer}</span>
            </p>
          </div>
        </div>
      `
        )
        .join("")}

      <div class="text-center mt-4">
        <button id="back-to-result"
          class="btn btn-outline-success px-4">
          Back to Result
        </button>
      </div>
    </div>
  `;

    document.getElementById("back-to-result").addEventListener("click", () => {
      reviewSection.classList.add("d-none");
      resultSection.classList.remove("d-none");
    });
  });
}

// ---- Retake Quiz ----
if (retakeBtn) {
  retakeBtn.addEventListener("click", function () {
    window.location.href = "quizCards.html"; // Redirect to quiz cards page
  });
}

/* =========================================================
   STEP 11: SAVE SCORE AFTER QUIZ SUBMISSION
========================================================= */
function saveScore(category, topic, score, total, correct, incorrect) {
  const email = localStorage.getItem("loggedInUser") || "guest";
  const allScores = JSON.parse(localStorage.getItem("quizScores")) || [];

  const percentage = Math.round((correct / total) * 100);
  allScores.push({
    email,
    category,
    topic,
    score,
    total,
    correct,
    incorrect,
    percentage,
    date: new Date().toLocaleString(),
  });
  localStorage.setItem("quizScores", JSON.stringify(allScores));
}

/* =========================================================
      STEP 13: SIGNUP & LOGIN FORM HANDLING
========================================================= */

// SIGNUP FORM
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    const users = JSON.parse(localStorage.getItem("quizUsers")) || [];

    if (users.some((u) => u.email === email)) {
      showToast("User already exists! Please log in.", "error");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("quizUsers", JSON.stringify(users));

    showToast("Signup successful! Please login");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  });
}

//  LOGIN FORM
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    const users = JSON.parse(localStorage.getItem("quizUsers")) || [];

    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (validUser) {
      localStorage.setItem("loggedInUser", email);
      showToast("Login successful");
      setTimeout(() => {
        window.location.href = "viewscore.html";
      }, 1200);
    } else {
      showToast("Invalid email or password", "error");
    }
  });
}

// ------------------- LOGOUT -------------------
function logoutUser() {
  localStorage.removeItem("loggedInUser");
  showToast("Logged out successfully");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}

function showToast(message, type = "success") {
  const toastEl = document.getElementById("appToast");
  const toastMsg = document.getElementById("toast-message");

  // Reset classes
  toastEl.classList.remove("text-bg-success", "text-bg-danger");

  // Set message + color
  toastMsg.textContent = message;
  toastEl.classList.add(
    type === "error" ? "text-bg-danger" : "text-bg-success"
  );

  const toast = new bootstrap.Toast(toastEl, {
    delay: 2000,
  });

  toast.show();
}

/* =========================================================
   STEP 14: FETCH & DISPLAY USER SCORES
========================================================= */
function loadUserScores() {
  const email = localStorage.getItem("loggedInUser");
  const allScores = JSON.parse(localStorage.getItem("quizScores")) || [];

  const userScores = allScores.filter((s) => s.email === email);
  const scoresList = document.getElementById("scores-list");

  if (userScores.length === 0) {
    scoresList.innerHTML = `
          <div class="alert alert-info text-center">
            No scores yet. Take a quiz to get started!
          </div>`;
    return;
  }

  scoresList.innerHTML = userScores
    .map(
      (s) => `
          <div class="card mb-3 shadow-sm px-3 w-100 d-block mx-auto bg-light">
            <div class="card-body d-flex justify-content-between align-items-center p-2">
              <div class="text-start pt-1">
                <h5 class="fw-semibold text-primary mb-1">${s.topic}</h5>
                <p class="text-muted small mb-md-0">${s.date}</p>
              </div>
      
              <span class="badge bg-success px-3 py-2 d-none d-sm-inline-block"
                >${s.category}</span
              >
      
              <div class="text-end">
                <span class="fs-6 fw-bold text-primary">${s.score}/${s.total}</span>
                <p class="text-muted small mb-md-0 ">Score</p>
              </div>
            </div>
          </div>
      `
    )
    .join("");
}

// ------------------- UPDATE AUTH LINKS -------------------
const authLinkDesktop = document.getElementById("auth-link-desktop");
const authLinkMobile = document.getElementById("auth-link-mobile");

function updateAuthLinks(text, href, onClick = null) {
  [authLinkDesktop, authLinkMobile].forEach((link) => {
    if (!link) return;
    link.textContent = text;
    link.href = href;
    link.onclick = onClick;
  });
}

// ------------------- PAGE LOAD -------------------
document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = localStorage.getItem("loggedInUser");

  const signupContainer = document.getElementById("signup-container");
  const headerSection = document.getElementById("header-section");
  const scoresContainer = document.getElementById("scores-container");

  if (loggedInUser) {
    // Show logout
    updateAuthLinks("Logout", "#", () => logoutUser());

    // Show scores
    signupContainer?.classList.add("d-none");
    headerSection?.classList.add("d-none");
    scoresContainer?.classList.remove("d-none");

    loadUserScores?.();
  } else {
    // Show login
    updateAuthLinks("Login", "login.html");

    signupContainer.classList.remove("d-none");
    headerSection.classList.remove("d-none");
    scoresContainer.classList.add("d-none");
  }
});

/* =========================================================
   STEP 15: Initialize quiz if questions exist
========================================================= */

// Initialize quiz
if (quizSection && questions.length > 0) showQuestion();

/* ---------------------------------------------------------------------
   END OF FILE
------------------------------------------------------------------------*/
