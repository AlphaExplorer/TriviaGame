//--------------------VARIABLE DECLARATION--------------------
var intervalId;
var question_timer = 16;
var answer_timer = 6; 
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var question_counter = 0;
var question_and_answers =
[
  {
  question: "Mickey Mouse made his debut in what animated short film??", 
  answer_1:"Canine Caddy",
  answer_2:"How to Fish",
  answer_3:"Steamboat Willie",
  answer_4:"Magician Mickey",
  correct_answer:"Steamboat Willie",
  image: "assets/images/answer_1.gif"
  },
  {
  question: "What was originally a potential name for Mickey?", 
  answer_1:"Michael",
  answer_2:"Mortimer",
  answer_3:"Goofie",
  answer_4:"Oswald",
  correct_answer:"Mortimer",
  image: "assets/images/answer_2.gif"
  },
  {
  question: "Who was the first person to voice Mickey Mouse?", 
  answer_1:"Walt Disney",
  answer_2:"Ub Iwerks",
  answer_3:"Lillian Disney",
  answer_4:"Roy Disney",
  correct_answer:"Walt Disney",
  image: "assets/images/answer_3.gif"
  },
  {
  question: "Mickey's first words were:", 
  answer_1:"Hot Dog!",
  answer_2:"Oh, boy!",
  answer_3:"Aw, wow!",
  answer_4:"Gee whiz!",
  correct_answer:"Hot Dog!",
  image: "assets/images/answer_4.gif"
  },
  {
  question: "What was the first piece of Mickey Mouse merchandise?", 
  answer_1:"An ears hat",
  answer_2:"A wrist watch",
  answer_3:"A tablet of paper",
  answer_4:"A cup and a saucer set",
  correct_answer:"A tablet of paper",
  image: "assets/images/answer_5.gif"
  },
  {
  question: "What is the name of Mickey's beloved dog?", 
  answer_1:"Saturn",
  answer_2:"Asteroid",
  answer_3:"Cosmo",
  answer_4:"Pluto",
  correct_answer:"Pluto",
  image: "assets/images/answer_6.gif"
  },
  {
  question: "What is Mickey Mouse's official anniversay date?", 
  answer_1:"November 21, 1928",
  answer_2:"October 13, 1928",
  answer_3:"November 18, 1928",
  answer_4:"October 7, 1928",
  correct_answer:"November 18, 1928",
  image: "assets/images/answer_7.gif"
  },
];
//--------------------GAME FUNCTIONS & LOGIC-------------------
function game_start()//Initiates game
{
  $(".message").append('<p> Once you click Go!, you will have 15 seconds to answer each question of the game. Ready?</p>');
  $(".message").append('<button> Go! </button>');
  $("button").on("click", function()
  {
    q_and_a_generator()
  })
};
function empty_board()//Empties the game board(removes Divs)
{
  $(".message").empty();
  $(".answers").empty();
  $(".timer").empty();
}
function timer_reset()//Resets the timer back to global variable initial values
{
  question_timer = 16;
  answer_timer = 6;
}
function end_of_game_logic()//Handles what happens after the last question
{
  empty_board();
  $(".message").append('<p class = "question">Congrats, you reached the end of the game</p>' );
  $(".message").append('<p> Resutls: </p>');
  $(".message").append('<p> Correct: '+correct+'</p>');
  $(".message").append('<p> Incorrect: '+incorrect+'</p>');
  $(".message").append('<p> Unanswered: '+unanswered+'</p>');
  $(".message").append('<p> Click the button below to reset the game </p>');
  $(".message").append('<button> Click! </button>');
  $("button").on("click", function()
  {
    correct = 0; // counter to keep track of the correct answers
    incorrect = 0; // counter to keep track of the incorrect answers
    unanswered = 0;
    question_counter = 0
    empty_board();
    game_start();
  })
};
function q_and_a_generator()//loads the question and answers
{
  empty_board()
  // $(".timer").html("<p>Time remaining: 15 seconds</p>");
  $(".message").append('<p class = "question">'+question_and_answers[question_counter].question+'</p>' );
  $(".answers").append('<li class = "answer" value = "'+question_and_answers[question_counter].answer_1+'">'+question_and_answers[question_counter].answer_1+'</li>');
  $(".answers").append('<li class = "answer" value = "'+question_and_answers[question_counter].answer_2+'">'+question_and_answers[question_counter].answer_2+'</li>');
  $(".answers").append('<li class = "answer" value = "'+question_and_answers[question_counter].answer_3+'">'+question_and_answers[question_counter].answer_3+'</li>');
  $(".answers").append('<li class = "answer" value = "'+question_and_answers[question_counter].answer_4+'">'+question_and_answers[question_counter].answer_4+'</li>');
  timer(question_decrement)
}
function correct_answer_logic()//handles the logic of a correct answer 
{
    stop_timer();
    question_counter++;
    correct ++;
    console.log(question_counter);
    console.log("correct");
    empty_board();
    $(".message").append('<p> Good Job Pal!</p>');
    $(".message").append('<p> The correct answer was: '+question_and_answers[question_counter-1].correct_answer+'</p>');
    $(".message").append('<img src='+question_and_answers[question_counter-1].image+' width="25%">');
    if(question_counter===question_and_answers.length)
    {
      setTimeout(end_of_game_logic, 4000)
    } else 
    {
    timer_reset();
    timer(answer_decrement);
    setTimeout(q_and_a_generator, 6000);
    }
}

function incorrect_answer_logic()//handles the logic of an incorrect answer 
{
    stop_timer();
    question_counter++;
    incorrect ++;
    console.log(question_counter);
    console.log("incorrect");
    empty_board();
    $(".message").append('<p> Ooops,!</p>');
    $(".message").append('<p> The correct answer was: '+question_and_answers[question_counter-1].correct_answer+'</p>');
    $(".message").append('<img src='+question_and_answers[question_counter-1].image+' width="25%">');
    if(question_counter===question_and_answers.length)
    {
      setTimeout(end_of_game_logic, 4000)
    } else 
    {
    timer_reset();
    timer(answer_decrement);
    setTimeout(q_and_a_generator, 6000);
    }
}

function out_of_time_logic()//handles the logic when user runs our of time answering   
{
    stop_timer();
    question_counter++; 
    unanswered++;
    console.log(question_counter);
    console.log("unanswered");
    empty_board();
    $(".message").append('<p> Sorry, you ran out of time!</p>');
    $(".message").append('<p> The correct answer was: '+question_and_answers[question_counter-1].correct_answer+'</p>');
    $(".message").append('<img src='+question_and_answers[question_counter-1].image+' width="25%">');
    if(question_counter===question_and_answers.length)
    {
      setTimeout(end_of_game_logic, 4000)
    } else 
    {
    timer_reset();
    timer(answer_decrement);
    setTimeout(q_and_a_generator, 6000);
    }
}

function timer(decrement) //handles the rate of time decrememnt
{
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function question_decrement()//handles the logic of the question timer
{
  question_timer--;
  $(".timer").html("<p>Time remaining:<br>" + question_timer + "<br>seconds</p>");
  if (question_timer <= 0)
  {
    out_of_time_logic();
  }
}

function answer_decrement()//handles the logic of the answer timer 
{
  answer_timer--;
  $(".timer").html("<p>Next question in:</p><p>" + answer_timer + "</p><p>seconds</p>");
} 

function stop_timer() //stops the timer
{
  clearInterval(intervalId);
}


$(".answers").on("click", function(event)//handles the user clicks
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

game_start() //Game initiation


