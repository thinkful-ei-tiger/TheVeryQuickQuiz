/**
 * Example store structure
 */


// Store Array ============================================================

const store = {
  // 5 or more questions are required
  questions: [
    {
      id: cuid(),
      question: 'What structures a webpage?',
      answers: [
        'javascript',
        'index',
        'css',
        'html'
      ],
      correctAnswer: 'html',
      
    },
    {
      id: cuid(),
      question: 'What answer is a programming language',
      answers: [
        'react',
        'angular',
        'firebase',
        'python'
      ],
      correctAnswer: 'python',
      
    },
    {
      id: cuid(),
      question: 'How can you change the style of a webpage',
      answers: [
        'javascript',
        'python',
        'json',
        'css'
      ],
      correctAnswer: 'css',
      
    },
    {
      id: cuid(),
      question: 'it is good practice to indent becuase....',
      answers: [
        'your teacher said so',
        'if not indented correctly code will throw error',
        'it makes you webpage flexible ',
        'its easier to read enabling you to find errors easier and for other programmers to read your code'
      ],
      correctAnswer: 'its easier to read enabling you to find errors easier and for other programmers to read your code',
      
    },
    {
      id: cuid(),
      question: 'What is the meaning of life?',
      answers: [
        'to make cupcakes',
        'to program',
        `to get rich`,
        'to live'
      ],
      correctAnswer: 'to live',
      
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  time: 0,
  score: 0,
  wrong: 0,
  correct: 'images/correct.jpg',
  incorrect: 'images/incorrect.jpg'
};

// Store Array ============================================================




// Quiz Start ============================================================

function render() {
   
  if(store.quizStarted === false) {
    $('main').html(`<h1>Welcome to the QUICK QUIZ </h1> <p> you have 30 seconds to complete this quiz and your time has already started (: </P><button id='stupid' class='begin'>Start Quiz</button>`);
    $('#stupid').on('click', function () {
      stupidFunction();


    });
  }
  

}
function stupidFunction() {
 $(`main`).html(`<h1> What the heck are you doing start the darn test already your being timed</h1><button id='start' class='begin'>Start Quiz</button>`)
 $('#start').on('click', function () {
   loadQuestion(store);
});

}



// Quiz Start ============================================================




// Question Function =====================================================

function loadQuestion(store) {
  
  if (store.questionNumber === store.questions.length) {
    return results();
  }
  
  let askQuestion = store.questions[store.questionNumber];
  
  let template = `
  <div class='questions boxed'>
  <h3> : ${store.questionNumber + 1} / ${store.questions.length} </h3>
  <h2 id='question'>${askQuestion.question}</h2>
  <form class='boxed'>
  <label>
    <input type='radio' name='answer' value='${askQuestion.answers[0]}' required/>
    ${askQuestion.answers[0]}
    </label><br>
    <input type='radio' name='answer' value='${askQuestion.answers[1]}'>
    ${askQuestion.answers[1]}
    </label><br>
    <input type='radio' name='answer' value='${askQuestion.answers[2]}'>
    ${askQuestion.answers[2]}
    </label><br>
    <input type='radio' name='answer' value='${askQuestion.answers[3]}'>
    ${askQuestion.answers[3]}
    </label><br>
  </form>
  <div>
  <button id='submit'>Submit</button>
  </div>
  `;
  
  $('main').html(template);
  $('#submit').on('click', () => {
    guess(store);
  })
}

// Question Function =====================================================




// User Guesses ==========================================================

function guess(store){
  console.log('Guess running')
  let correctAnswer = store.questions[store.questionNumber].correctAnswer;
  let guesses = $(`input[type='radio']:checked`).val();
  let templateHTML = '';
  

  if(guesses === undefined) {
    alert('Do not submit without an answer now your have to restart');
    location.reload(templateHTML)
  } else if (guesses === correctAnswer && !undefined) {
    store.score++;
    templateHTML =
    `<div class='questions boxed' style=''>
          <h1 id='question' class='smaller'>CORRECT!</h2>
          <button id='next'>Next Question</button>
          <h5>So far: ${store.score} / ${store.questions.length}</h5>
      </div>`;

  } else {
    store.wrong++;
    templateHTML = 
      `<div class='questions boxed' style=''>
          <h1 id='question'>Come on now this stuff is easy ... dont be an idiot</h2>
          <h3>The correct answer is <br> ${correctAnswer}<h3>
          <button id='next'>Next Question</button>
          <h5>So far: ${store.score} / ${store.questions.length}</h5>
      </div>`;
  }
  

  $('main').html(templateHTML);
  $('#next').on('click', function () {
      store.questionNumber++;
      loadQuestion(store);
  });
  console.log(correctAnswer)
}

// User Guesses ==========================================================



// Quiz Results ==========================================================

function results() {
  let templateHTML = 
  `<div class='questions boxed'>
  <h3> Psyche! No more questions! </h3> 

  <h1 id='question'>And the Results Are...</h2>

  <h3> Dude, you scored <br> ${store.score} / ${store.questions.length}! </h3>
  <button id='again'> Again? </button>
    </div>`;
    
  $('main').html(templateHTML);
  $('#again').on('click', function() {
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    store.time = 0;
    loadQuestion(store);
  });
};

// Quiz Results ==========================================================
let sec = 30;
let time = setInterval(myTimer, 1000);


function myTimer() {
  



    
    $('timer').html = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
        location.reload()
    }
  }


  
 

  
    
    

   
  







// adding random animations to play around with jQ libraries


$(function() {
  $('h1').hover(function(e) { 
    $(this).addClass('animate__animated animate__shakeX');
  }, 
  function(e) {    
    $(this).removeClass('animate__animated animate__shakeX');
    });
});

$(render);