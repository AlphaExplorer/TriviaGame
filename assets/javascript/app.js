// Create variables
var clock_unning = false;
var intervalId;
var time = 30;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var question_counter = 0;
var question_and_answers = 
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

//write to the page the question
function q_and_a_generator()
{
  $(".message").empty();
  $(".answers").empty();
  $(".message").append('<p class = "question">'+question_and_answers[question_counter].question+'</p>' );
  $(".answers").append('<li class = "answer" value = "'+question_and_answers[question_counter].answer_1+'">'+question_and_answers[question_counter].answer_1+'</li>');
  $(".answers").append('<li class = "answer" value = "'+question_and_answers[question_counter].answer_2+'">'+question_and_answers[question_counter].answer_2+'</li>');
  $(".answers").append('<li class = "answer" value = "'+question_and_answers[question_counter].answer_3+'">'+question_and_answers[question_counter].answer_3+'</li>');
  $(".answers").append('<li class = "answer" value = "'+question_and_answers[question_counter].answer_4+'">'+question_and_answers[question_counter].answer_4+'</li>');
}
q_and_a_generator()

//logic for correct answers
function correct_answer_logic()
{
  $(".message").empty();
  $(".answers").empty();
  $(".message").append('<p> Good Job Pal!</p>');
  $(".answers").append('<p> The correct answer was: '+question_and_answers[question_counter].correct_answer+'</p>');
  $(".answers").append('<img src='+question_and_answers[question_counter].image+' width="200rem">');
  question_counter++;
  correct ++;
  console.log("correct");
  //insert reset timer
  // q_and_a_generator();
}

function incorrect_answer_logic()
{
  $(".message").empty();
  $(".answers").empty();
  $(".message").append('<p> Ooops, wrong answer!</p>');
  $(".answers").append('<p> The correct answer was: '+question_and_answers[question_counter].correct_answer+'</p>');
  $(".answers").append('<img src='+question_and_answers[question_counter].image+' width="200rem">');
  question_counter++;
  correct ++;
  console.log("correct");
  //insert reset timer
  // q_and_a_generator();
}



//event handler
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
})