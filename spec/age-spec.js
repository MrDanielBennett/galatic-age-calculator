// import { getAge } from ./../src/space-age.js

describe ('Space_age', function() {

  it('should show the age of the user on Mercury', function(){
    let user = new Space_age("1999/03/24");
    expect(user.getMercuryAge()).toEqual(79);
  });

  it('should show the age of the user on Venus', function(){
    let user = new Space_age("1999/03/24");
    expect(user.getVenusAge()).toEqual(30);
  });

  it('should show the age of the user on Mars', function(){
    let user = new Space_age("1999/03/24");
    expect(user.getMarsAge()).toEqual(10);
  });

  it('should show the age of the user on Jupiter', function(){
  let user = new Space_age("1999/03/24");
  expect(user.getJupiterAge()).toEqual(79);
  });
});
