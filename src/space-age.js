export class SpaceAge {
  constructor(birthday, gender){
    this.birthday = new Date(birthday);
    this.today = new Date();
    this.age = this.age;
    this.mercuryAge = this.mercuryAge;
    this.venusAge = this.venusAge;
    this.marsAge = this.marsAge;
    this.jupiterAge = this.jupiterAge;
    this.lifeExpectancy = this.lifeExpectancy;
    this.yearsLeft = this.yearsLeft;
    this.gender = gender;
  }
  getAge(){
    this.age = this.today.getFullYear() - this.birthday.getFullYear();
    let m = this.today.getMonth() - this.birthday.getMonth();
    if (m < 0 || (m === 0 && this.today.getDate() < this.birthday.getDate())){
      this.age --;
    }
    return this.age;
  }

  getLifeExpectancy(){
    if (this.gender === "male"){
      this.lifeExpectancy = 78;
    } else if (this.gender === "female"){
      this.lifeExpectancy = 81;
    } else {
      this.lifeExpectancy = 72;
    }
    return this.lifeExpectancy;
  }

  getMercuryAge() {
    let realMercuryAge = parseInt(this.age)/.24;
    this.mercuryAge = Math.floor(realMercuryAge);
    this.yearsLeft = (this.lifeExpectancy - this.mercuryAge);
  }
  getVenusAge() {
    let realVenusAge = parseInt(this.age)/.62;
    this.venusAge = Math.floor(realVenusAge);
    this.yearsLeft = (this.lifeExpectancy - this.venusAge);
  }
  getMarsAge() {
    let realMarsAge = parseInt(this.age)/1.88;
    this.marsAge = Math.floor(realMarsAge);
    this.yearsLeft = (this.lifeExpectancy - this.marsAge);
  }
  getJupiterAge() {
    let realJupiterAge = parseInt(this.age)/11.86;
    this.jupiterAge = Math.floor(realJupiterAge);
    this.yearsLeft = (this.lifeExpectancy - this.jupiterAge);
  }
}
