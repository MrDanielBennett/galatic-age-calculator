import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Space_age} from './space-age';

$(document).ready(function() {
  $('#button').click(function(event) {
    event.preventDefault();
    let birthday = $('#birthday-input').val();
    let user = new Space_age(birthday);
    const lifeExpectency = $('#lifeExpectency-input').val();
    user.getAge();
    user.getMercuryAge();
    user.getVenusAge();
    user.getMarsAge();
    user.getJupiterAge();
    let result = user.age;
    let result2 = user.mercuryAge;
    let result3 = user.venusAge;
    let result4 = user.marsAge;
    let result5 = user.jupiterAge;
    lifecheck();
    $('#result').text("Earth: " + result + " years old, " + " Your Current life expecteny on this planet is: " + (lifeExpectency - result) + " years.");
    $('#result2').text("Mercury: " + result2 + " years old, " + " Your Current life expecteny on this planet is: " + (lifeExpectency - result2) + " years.");
    $('#result3').text("Venus: " + result3 + " years old, " + " Your Current life expecteny on this planet is: " + (lifeExpectency - result3) + " years.");
    $('#result4').text("Mars: " + result4 + " years old, " + " Your Current life expecteny on this planet is: " + (lifeExpectency - result4) + " years.");
    $('#result5').text("Jupiter: " + result5 + " years old, " + " Your Current life expecteny on this planet is: " + (lifeExpectency - result5) + " years.");

    function lifecheck(){
      if (lifeExpectency - result < 0) {
        $('#liferesult').text("hey looks like you've beat the odds, good job. You've lived longer than the average person here by " + (result - lifeExpectency) + " year(s)");
      }
      if (lifeExpectency - result2 < 0){
        $('#liferesult2').text("hey looks like you've beat the odds, good job. You've lived longer than the average person here by " + (result2 - lifeExpectency) + " year(s)");
      }
      if (lifeExpectency - result3 < 0){
        $('#liferesult3').text("hey looks like you've beat the odds, good job. You've lived longer than the average person here by " + (result3 - lifeExpectency) + " year(s)");
      }
      if (lifeExpectency - result4 < 0){
        $('#liferesult4').text("hey looks like you've beat the odds, good job. You've lived longer than the average person here by " + (result4 - lifeExpectency) + " year(s)");
      }
      if (lifeExpectency - result5 < 0){
        $('#liferesult5').text("hey looks like you've beat the odds, good job. You've lived longer than the average person here by " + (result5 - lifeExpectency) + " year(s)");
      }
    }

  });
});
