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
    debugger;
    let result = user.age;
    $('.result').text(result);
  });
});
