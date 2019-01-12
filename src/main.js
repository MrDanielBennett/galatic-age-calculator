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
    const lifeExpectancy = $('#lifeExpectancy-input').val();
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
    $('#result').text("Earth: " + result + " years old, " + " Your Current life expectancy on this planet is: " + (lifeExpectancy - result) + " years.");
    $('#result2').text("Mercury: " + result2 + " years old, " + " Your Current life expectancy on this planet is: " + (lifeExpectancy - result2) + " years.");
    $('#result3').text("Venus: " + result3 + " years old, " + " Your Current life expectancy on this planet is: " + (lifeExpectancy - result3) + " years.");
    $('#result4').text("Mars: " + result4 + " years old, " + " Your Current life expectancy on this planet is: " + (lifeExpectancy - result4) + " years.");
    $('#result5').text("Jupiter: " + result5 + " years old, " + " Your Current life expectancy on this planet is: " + (lifeExpectancy - result5) + " years.");

    function lifecheck(){
      if (lifeExpectancy - result < 0) {
        $('#liferesult').text("hey looks like you've beat the odds, good job. You've lived longer than the average person here by " + (result - lifeExpectancy) + " year(s)");
      }
      if (lifeExpectancy - result2 < 0){
        $('#liferesult2').text("hey looks like you've beat the odds, good job. You've lived longer than the average person here by " + (result2 - lifeExpectancy) + " year(s)");
      }
      if (lifeExpectancy - result3 < 0){
        $('#liferesult3').text("hey looks like you've beat the odds, good job. You've lived longer than the average person here by " + (result3 - lifeExpectancy) + " year(s)");
      }
      if (lifeExpectancy - result4 < 0){
        $('#liferesult4').text("hey looks like you've beat the odds, good job. You've lived longer than the average person here by " + (result4 - lifeExpectancy) + " year(s)");
      }
      if (lifeExpectancy - result5 < 0){
        $('#liferesult5').text("hey looks like you've beat the odds, good job. You've lived longer than the average person here by " + (result5 - lifeExpectancy) + " year(s)");
      }
    }

  });
});
