// Create variables
var intervalId; // variable to be use on time
var question_timer = 15; // the lenght of time to answer each question
var answer_timer = 6; // the lenght of time to review the answer and ready for the next question 
var correct = 0; // counter to keep track of the correct answers
var incorrect = 0; // counter to keep track of the incorrect answers
var unanswered = 0; // counter to keep track of the unanswered questions
var question_counter = 0;// counter to keep track of all the questions presented to the user.  this counter is also used and index to loop throught the questions
var question_and_answers = //object that contains q&As and related objects
[
  {
  question: "MICKEY MOUSE MADE HIS DEBUT IN WHAT ANIMATED SHORT FILM?", 
  answer_1:"Canine Caddy",
  answer_2:"How to Fish",
  answer_3:"Steamboat Willie",
  answer_4:"Magician Mickey",
  correct_answer:"Steamboat Willie",
  image: "assets/images/answer_1.gif"
  },
  {
  question: "WHAT WAS ORIGINALLY A POTENTIAL NAME FOR MICKEY?", 
  answer_1:"Michael",
  answer_2:"Mortimer",
  answer_3:"Goofie",
  answer_4:"Oswald",
  correct_answer:"Mortimer",
  image: "assets/images/answer_2.gif"
  },
  {
  question: "WHO WAS THE FIRST PERSON TO VOICE MICKEY MOUSE?", 
  answer_1:"Walt Disney",
  answer_2:"Ub Iwerks",
  answer_3:"Lillian Disney",
  answer_4:"Roy Disney",
  correct_answer:"Walt Disney",
  image: "assets/images/answer_3.gif"
  },
  {
  question: "MICKEY’S FIRST WORDS WERE:", 
  answer_1:"Hot Dog!",
  answer_2:"Oh, boy!",
  answer_3:"Aw, wow!",
  answer_4:"Gee whiz!",
  correct_answer:"Hot Dog!",
  image: "assets/images/answer_4.gif"
  },
  {
  question: "WHAT WAS THE FIRST PIECE OF MICKEY MOUSE MERCHANDISE?", 
  answer_1:"An ears hat",
  answer_2:"A wrist watch",
  answer_3:"A tablet of paper",
  answer_4:"A cup and a saucer set",
  correct_answer:"A tablet of paper",
  image: "assets/images/answer_5.gif"
  },
  {
  question: "WHAT IS THE NAME OF MICKEY’S BELOVED DOG?", 
  answer_1:"Saturn",
  answer_2:"Asteroid",
  answer_3:"Cosmo",
  answer_4:"Pluto",
  correct_answer:"Pluto",
  image: "assets/images/answer_6.gif"
  },
  {
  question: "WHAT IS MICKEY MOUSE’S OFFICIAL ANNIVERSARY DATE?", 
  answer_1:"November 21, 1928",
  answer_2:"October 13, 1928",
  answer_3:"November 18, 1928",
  answer_4:"October 7, 1928",
  correct_answer:"November 18, 1928",
  image: "assets/images/answer_7.gif"
  },
];

function game_start()
{
  $(".message").append('<p> Once you click Go!, you will have 15 seconds to answer each question of the game.</p>');
  $(".message").append('<button> Go! </button>');
  $("button").on("click", function()
  {
    q_and_a_generator()
  })
};
game_start()

function empty_board()
{
  $(".message").empty();
  $(".answers").empty();
  $(".timer").empty();
}
function timer_reset()
{
  question_timer = 15;
  answer_timer = 6;
};

function q_and_a_generator()//Q and A function generator.  This function populates the page with questions and answers
{
  empty_board()
  $(".timer").html("<p>Time remaining: 15 seconds</p>");
  $(".message").append('<p class = "question">'+question_and_answers[question_counter].question+'</p>' );
  $(".answers").append('<li class = "answer" value = "'+question_and_answers[question_counter].answer_1+'">'+question_and_answers[question_counter].answer_1+'</li>');
  $(".answers").append('<li class = "answer" value = "'+question_and_answers[question_counter].answer_2+'">'+question_and_answers[question_counter].answer_2+'</li>');
  $(".answers").append('<li class = "answer" value = "'+question_and_answers[question_counter].answer_3+'">'+question_and_answers[question_counter].answer_3+'</li>');
  $(".answers").append('<li class = "answer" value = "'+question_and_answers[question_counter].answer_4+'">'+question_and_answers[question_counter].answer_4+'</li>');
  timer(question_decrement)
}

function correct_answer_logic()//function that handles a correct answer.  This function executes the logic uppon the user clicking the correct answer. 
{
    stop_timer()
    question_counter++;
    correct ++;
    console.log(question_counter)
    empty_board()
    $(".message").append('<p> Good Job Pal!</p>');
    $(".message").append('<p> The correct answer was: '+question_and_answers[question_counter-1].correct_answer+'</p>');
    $(".message").append('<img src='+question_and_answers[question_counter-1].image+' width="200rem">');
    console.log("correct");
    timer_reset();
    timer(answer_decrement);
    setTimeout(q_and_a_generator, 6000);

}

function incorrect_answer_logic()//function that handles an incorrect answer.  This function executes the logic when the user clicks on the wrong answer or runs out of time 
{
    stop_timer()
    question_counter++;
    incorrect ++;
    console.log(question_counter)
    empty_board()
    $(".message").append('<p> Ooops,!</p>');
    $(".message").append('<p> The correct answer was: '+question_and_answers[question_counter-1].correct_answer+'</p>');
    $(".message").append('<img src='+question_and_answers[question_counter-1].image+' width="200rem">');
    console.log("incorrect");
    timer_reset();
    timer(answer_decrement);
    setTimeout(q_and_a_generator, 6000);
}

function out_of_time_logic()//function that handles an running out of time.   
{
    question_counter++;
    unanswered ++;
    console.log(question_counter)
    empty_board()
    $(".message").append('<p> Sorry, you ran out of time,!</p>');
    $(".message").append('<p> The correct answer was: '+question_and_answers[question_counter-1].correct_answer+'</p>');
    $(".message").append('<img src='+question_and_answers[question_counter-1].image+' width="200rem">');
    console.log("unanswered");
    timer_reset();
    timer(answer_decrement);
    setTimeout(q_and_a_generator, 6000);
}

function timer(decrement) // this function handles the timer for Q&A
{
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function question_decrement()// this function handles the timer's logic fot the user to answer the question 
{
  question_timer--;
  $(".timer").html("<p>Time remaining: " + question_timer + " seconds</p>");
  if (question_timer <= 0)
  {
    unanswered++;
    stop_timer()
    out_of_time_logic();
  }
}

function answer_decrement()// this function handles the timer logic to give the user enough time to review the correct answer 
{
  answer_timer--;
  $(".timer").html("<h2> You next question comes in: " + answer_timer + " seconds</h2>");
}

function stop_timer() {
  clearInterval(intervalId);
}

//The following click handler checks if the clicked answer matches the correct answer.  If the click is correct, it runs the correct_answer_logic function.  If not, it runs the incorrect_answer_logic 
$(".answers").on("click", function(event)
{
  var clicked_answer = event.target;
  var value_of_clicked_answer = clicked_answer.getAttribute('value');
  var correct_answer = question_and_answers[question_counter].correct_answer;
    if(value_of_clicked_answer === correct_answer)
    {
    correct_answer_logic()
    } else
    {
    incorrect_answer_logic()
    }
});




