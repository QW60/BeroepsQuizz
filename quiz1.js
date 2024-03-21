// Define your questions
var questions = [
    {
        type: "closed",
        question: "Dikste docent van GLR (Closed)",
        options: ["Petra", "Gert", "Hilda", "Arthur"],
        name: "q1",
        answer: "Petra" // Add the correct answer here
    },
        {
        type: "closed",
        question: "Question 1 (Closed)",
        options: ["Petra", "Gert", "Hilda", "Arthur"],
        name: "q1",
        answer: "Petra" // Add the correct answer here
    },
        {
        type: "closed",
        question: "Question 1 (Closed)",
        options: ["Petra", "Gert", "Hilda", "Arthur"],
        name: "q1",
        answer: "Petra" // Add the correct answer here
    },
        {
        type: "closed",
        question: "Question 1 (Closed)",
        options: ["Petra", "Gert", "Hilda", "Arthur"],
        name: "q1",
        answer: "Petra" // Add the correct answer here
    },
        {
        type: "closed",
        question: "Question 1 (Closed)",
        options: ["Petra", "Gert", "Hilda", "Arthur"],
        name: "q1",
        answer: "Petra" // Add the correct answer here
    },
        {
        type: "closed",
        question: "Question 1 (Closed)",
        options: ["Petra", "Gert", "Hilda", "Arthur"],
        name: "q1",
        answer: "Petra" // Add the correct answer here
    },
        {
        type: "closed",
        question: "Question 1 (Closed)",
        options: ["Petra", "Gert", "Hilda", "Arthur"],
        name: "q1",
        answer: "Petra" // Add the correct answer here
    },
        {
        type: "closed",
        question: "Question 1 (Closed)",
        options: ["Petra", "Gert", "Hilda", "Arthur"],
        name: "q1",
        answer: "Petra" // Add the correct answer here
    },
    {
        type: "closed",
        question: "Question 1 (Closed)",
        options: ["Petra", "Gert", "Hilda", "Arthur"],
        name: "q1",
        answer: "Petra" // Add the correct answer here
    },
    {
        type: "closed",
        question: "Question 1 (Closed)",
        options: ["Petra", "Gert", "Hilda", "Arthur"],
        name: "q1",
        answer: "Petra" // Add the correct answer here
    },
    {
        type: "open",
        question: "Question 2 (Open)",
        name: "q2",
        answer: "Peter" // Add the expected answer here
    },
        {
        type: "open",
        question: "Question 2 (Open)",
        name: "q2",
        answer: "Peter" // Add the expected answer here
    },
    {
        type: "open",
        question: "Question 2 (Open)",
        name: "q2",
        answer: "Peter" // Add the expected answer here
    },
    {
        type: "open",
        question: "Question 2 (Open)",
        name: "q2",
        answer: "Peter" // Add the expected answer here
    },
    
    // Add more questions as needed
];

// Get the quiz container
var quizContainer = document.querySelector(".quizdivtje");

// Current question index
var currentQuestionIndex = 0;

// Function to show a question
function showQuestion(index) {
    // Clear the quiz container
    quizContainer.innerHTML = '';

    // Get the question
    var question = questions[index];

    var questionDiv = document.createElement("div");
    questionDiv.className = question.type === "closed" ? "quiz1" : "quiz2";

    var questionTitle = document.createElement("h2");
    questionTitle.textContent = question.question;
    questionDiv.appendChild(questionTitle);

    var form = document.createElement("form");

    if (question.type === "closed") {
        question.options.forEach(function(option) {
            var label = document.createElement("label");
            var radio = document.createElement("input");
            radio.type = "radio";
            radio.name = question.name;
            radio.value = option;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));
            form.appendChild(label);
            form.appendChild(document.createElement("br"));
        });
    } else {
        var textarea = document.createElement("textarea");
        textarea.name = question.name;
        textarea.rows = 4;
        textarea.cols = 50;
        form.appendChild(textarea);
    }

    questionDiv.appendChild(form);
    quizContainer.appendChild(questionDiv);

    // Add a check button for open questions
    if (question.type === "open") {
        var checkButton = document.createElement("button");
        checkButton.textContent = "Check";
        checkButton.addEventListener("click", function() {
            // Get the user's answer
            var userAnswer = form.querySelector(`textarea[name="${question.name}"]`).value;

            // Check the answer
            var resultText = document.createElement("p");
            if (userAnswer === question.answer) {
                resultText.textContent = "Correct!";
                resultText.style.color = "green";
            } else {
                resultText.textContent = "Incorrect. The correct answer was: " + question.answer;
                resultText.style.color = "red";
            }
            quizContainer.appendChild(resultText);
        });
        quizContainer.appendChild(checkButton);
    }

    // Add a next button
    if (index < questions.length - 1) {
        var nextButton = document.createElement("button");
        nextButton.textContent = "Next";
        nextButton.addEventListener("click", function() {
            // For closed questions, get the user's answer and check it
            if (question.type === "closed") {
                var userAnswer = form.querySelector(`input[name="${question.name}"]:checked`).value;
                var resultText = document.createElement("p");
                if (userAnswer === question.answer) {
                    resultText.textContent = "Correct!";
                    resultText.style.color = "green";
                } else {
                    resultText.textContent = "Incorrect. The correct answer was: " + question.answer;
                    resultText.style.color = "red";
                }
                quizContainer.appendChild(resultText);
            }

            // Show the next question after a delay
            setTimeout(function() {
                showQuestion(index + 1);
            }, 2000);
        });
        quizContainer.appendChild(nextButton);
    }
}

// Show the first question
showQuestion(currentQuestionIndex);