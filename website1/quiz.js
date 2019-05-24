(function() 
 {
  var allQuestions = [{
    question: "How do you say 'bag' in Korean?",
    options: ["경은", "겨울", "가방", "개"],
    answer: 2
  }, {
    question: "How do you say 'dog' in Korean?",
    options: ["고구마", "겨울", "게", "개"],
    answer: 3
  }, {
    question: "How do you say 'Thank you' in Korean?",
    options: ["금연입니다", "감사합니다", "안녕하세요","과자 주세요"],
    answer: 1
  },{
    question: "How do you say 'monster' in Korean?",
    options: ["괴물", "금연", "간판", "간장"],
    answer: 0
  }, {
    question: "What is '간장'?",
    options: ["Red bean", "Soy sauce", "Nervousness", "Health"],
    answer: 1
  },{
    question: "What is '금연'?",
    options: ["No smoking", "Then", "Smoking", "No drinking"],
    answer: 0
  },{
    question: "What is '골목'?",
    options: ["Alley", "Park", "Staircase", "Tree"],
    answer: 0
  },{
    question: "How do you say 'solitude' in Korean?",
    options: ["고동", "고민", "고구마", "고독"],
    answer: 3
  },{
    question: "What is the correct translation for 'telephone'?",
    options: ["물", "우산", "전화기", "자전거"],
    answer: 2
  },{
    question: "What is the Korean word for 'leg?",
    options: ["다리", "머리", "허리", "레그"],
    answer: 0
    }];
    
    
    
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();