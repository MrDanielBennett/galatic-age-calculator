import {Space_age} from ./../src/space-age.js

describe ('Space_age', function() {

  it('should show the age of the user on Mercury', function(){
    let age = getAge(1999/03/24);
    expect(age.mercuryAge()).toEqual(75);
  });

  it('should show the age of the user on Venus', function(){
    let age = getAge(1999/03/24);
    expect(age.venusAge()).toEqual(29);
  });

  it('should show the age of the user on Mars', function(){
    let age = getAge(1999/03/24);
    expect(age.marsAge()).toEqual(9);
  });

  it('should show the age of the user on Jupiter', function(){
    let age = getAge(1999/03/24);
    expect(age.jupiterAge()).toEqual(1);
  });
});
