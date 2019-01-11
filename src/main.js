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
    $('#result').text("Earth: " + result + " years old, " + " Your Current life expecteny on this planet is: " + (lifeExpectency - result) + " years.");
    $('#result2').text("Mercury: " + result2 + " years old, " + " Your Current life expecteny on this planet is: " + (lifeExpectency - result2) + " years.");
    $('#result3').text("Venus: " + result3 + " years old, " + " Your Current life expecteny on this planet is: " + (lifeExpectency - result3) + " years.");
    $('#result4').text("Mars: " + result4 + " years old, " + " Your Current life expecteny on this planet is: " + (lifeExpectency - result4) + " years.");
    $('#result5').text("Jupiter: " + result5 + " years old, " + " Your Current life expecteny on this planet is: " + (lifeExpectency - result5) + " years.");
  });
});
