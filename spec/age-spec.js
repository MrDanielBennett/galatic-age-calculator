import { SpaceAge } from './../src/space-age.js'

describe ('Space_age', function() {

  it('should show the age of the user', function(){
    let user = new SpaceAge('1999/03/24', "male");
    user.getAge();
    expect(user.age).toEqual(19);
  });

  it('should show the age of the user on Mercury', function(){
    let user = new SpaceAge('1999/03/24', "male");
    user.getAge();
    user.getMercuryAge();
    expect(user.mercuryAge).toEqual(79);
  });

  it('should show the age of the user on Venus', function(){
    let user = new SpaceAge("1999/03/24", "male");
    user.getAge();
    user.getVenusAge();
    expect(user.venusAge).toEqual(30);
  });

  it('should show the age of the user on Mars', function(){
    let user = new SpaceAge("1999/03/24", "male");
    user.getAge();
    user.getMarsAge();
    expect(user.marsAge).toEqual(10);
  });

  it('should show the age of the user on Jupiter', function(){
  let user = new SpaceAge("1999/03/24", "male");
  user.getAge();
  user.getJupiterAge();
  expect(user.jupiterAge).toEqual(1);
  });
  it('should show the life expectancy of the current user who is a male', function(){
    let user = new SpaceAge('1999/03/24', "male");
    user.getAge();
    user.getLifeExpectancy();
    expect(user.lifeExpectancy).toEqual(78);
  });
  it('should show the life expectancy of the current user who is a female', function(){
    let user = new SpaceAge('1999/03/24', "female");
    user.getAge();
    user.getLifeExpectancy();
    expect(user.lifeExpectancy).toEqual(81);
  });
  it('should show the amount of years left on mercury', function(){
    let user = new SpaceAge('1999/03/24', "male");
    user.getAge();
    user.getLifeExpectancy()
    user.getMercuryAge();
    expect(user.yearsLeft).toEqual(-1);
  });
  it('should show the amount of years left on Venus', function(){
    let user = new SpaceAge('1999/03/24', "male");
    user.getAge();
    user.getLifeExpectancy()
    user.getVenusAge();
    expect(user.yearsLeft).toEqual(48);
  });
  it('should show the amount of years left on Mars', function(){
    let user = new SpaceAge('1999/03/24', "male");
    user.getAge();
    user.getLifeExpectancy()
    user.getMarsAge();
    expect(user.yearsLeft).toEqual(68);
  });
  it('should show the amount of years left on Jupiter', function(){
    let user = new SpaceAge('1999/03/24', "male");
    user.getAge();
    user.getLifeExpectancy()
    user.getJupiterAge();
    expect(user.yearsLeft).toEqual(77);
  });

});
