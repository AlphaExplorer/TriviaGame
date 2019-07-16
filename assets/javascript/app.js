var question_and_answers = 
[
  {
  question: "MICKEY MOUSE MADE HIS DEBUT IN WHAT ANIMATED SHORT FILM?", 
  answer_1:"Canine Caddy",
  answer_2:"How to Fish",
  answer_3:"Steamboat Willie",
  answer_4:"Magician Mickey",
  correct_answer:"Steamboat Willie",
  image: "assets/images/answer_1.jpg"
  },
  {
  question: "WHAT WAS ORIGINALLY A POTENTIAL NAME FOR MICKEY?", 
  answer_1:"Michael",
  answer_2:"Mortimer",
  answer_3:"Goofie",
  answer_4:"Oswald",
  correct_answer:"Mortimer",
  image: "assets/images/answer_2.jpg"
  },
  {
  question: "WHO WAS THE FIRST PERSON TO VOICE MICKEY MOUSE?", 
  answer_1:"Walt Disney",
  answer_2:"Ub Iwerks",
  answer_3:"Lillian Disney",
  answer_4:"Roy Disney",
  correct_answer:"Walt Disney",
  image: "assets/images/answer_3.jpg"
  },
  {
  question: "MICKEY’S FIRST WORDS WERE:", 
  answer_1:"Hot Dog!",
  answer_2:"Oh, boy!",
  answer_3:"Aw, wow!",
  answer_4:"Gee whiz!",
  correct_answer:"Hot Dog!",
  image: "assets/images/answer_4.jpg"
  },
  {
  question: "WHAT WAS THE FIRST PIECE OF MICKEY MOUSE MERCHANDISE?", 
  answer_1:"An ears hat",
  answer_2:"A wrist watch",
  answer_3:"A tablet of paper",
  answer_4:"A cup and a saucer set",
  correct_answer:"A tablet of paper",
  image: "assets/images/answer_5.jpg"
  },
  {
  question: "WHAT IS THE NAME OF MICKEY’S BELOVED DOG?", 
  answer_1:"Saturn",
  answer_2:"Asteroid",
  answer_3:"Cosmo",
  answer_4:"Pluto",
  correct_answer:"Pluto",
  image: "assets/images/answer_6.jpg"
  },
  {
  question: "WHAT IS MICKEY MOUSE’S OFFICIAL ANNIVERSARY DATE?", 
  answer_1:"November 21, 1928",
  answer_2:"October 13, 1928",
  answer_3:"November 18, 1928",
  answer_4:"October 7, 1928",
  correct_answer:"November 18, 1928",
  image: "assets/images/answer_7.jpg"
  },
];

var correct_answers = 0;
var incorrect_answers = 0;
var answered_questions = 0;
var unanswered_questions = 0;


function question_generator(question_number)
{
  $("#message").append('<p class = "question">'+question_and_answers[question_number].question+'</p>' );
  $(".answers").append('<li class = "answer" value = "'+question_and_answers[question_number].answer_1+'">'+question_and_answers[question_number].answer_1+'</li>');
  $(".answers").append('<li class = "answer" value = "'+question_and_answers[question_number].answer_2+'">'+question_and_answers[question_number].answer_2+'</li>');
  $(".answers").append('<li class = "answer" value = "'+question_and_answers[question_number].answer_3+'">'+question_and_answers[question_number].answer_3+'</li>');
  $(".answers").append('<li class = "answer" value = "'+question_and_answers[question_number].answer_4+'">'+question_and_answers[question_number].answer_4+'</li>');
}



$(document).ready(function(){ 
  question_generator(correct_answers);
$('.answer').click(function(event)
{
  answer_selected = event.target;
  value_of_selected_answer = answer_selected.getAttribute('value');
  if(value_of_selected_answer===question_and_answers[answered_questions].correct_answer)
  {
    console.log("correct answer");
    correct_answers++
    answered_questions++
    console.log(correct_answers)
    console.log(answered_questions)
    $(".question").remove();
    $(".answer").remove();
    question_generator(answered_questions);
  } else
  {
    console.log("incorrect");
  }
});
});



