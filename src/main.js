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
    $('#result').text("Earth: " + result);
    $('#result2').text("Mercury: " + result2);
    $('#result3').text("Venus: " + result3);
    $('#result4').text("Mars: " + result4);
    $('#result5').text("Jupiter: " + result5);
  });
});
