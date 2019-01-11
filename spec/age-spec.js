import { Space_age } from './../src/space-age.js'

describe ('Space_age', function() {

  it('should show the age of the user on Mercury', function(){
    let user = new Space_age('1999/03/24');
    user.getAge();
    user.getMercuryAge();
    expect(user.mercuryAge).toEqual(79);
  });

  it('should show the age of the user on Venus', function(){
    let user = new Space_age("1999/03/24");
    user.getAge();
    user.getVenusAge();
    expect(user.venusAge).toEqual(30);
  });

  it('should show the age of the user on Mars', function(){
    let user = new Space_age("1999/03/24");
    user.getAge();
    user.getMarsAge();
    expect(user.marsAge).toEqual(10);
  });

  it('should show the age of the user on Jupiter', function(){
  let user = new Space_age("1999/03/24");
  user.getAge();
  user.getJupiterAge();
  expect(user.jupiterAge).toEqual(1);
  });
});
