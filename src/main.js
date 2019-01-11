import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Space_age} from './space-age'

$(document).ready(function() {
  $('#button').click(function(event) {
    event.preventDefault();
    let birthday = $('#birthday-input').val();
    let user = new Space_age(birthday);
    user.getAge();
    user.getMercuryAge();
    user.getVenusAge();
    let result = user.age;
    let result2 = user.mercuryAge;
    let result3 = user.venusAge
    $('#result').text("Earth: " + result);
    $('#result2').text("Mercury: " + result2);
    $('#result3').text("Venus: " + result3);
  });
});
