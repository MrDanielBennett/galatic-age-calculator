export class Space_age {
  constructor(birthday){
    this.birthday = new Date(birthday);
    this.today = new Date();
    this.age = this.age;
    this.mercuryAge = this.mercuryAge;
    this.venusAge = this.venusAge;
  }
  getAge(){
    this.age = this.today.getFullYear() - this.birthday.getFullYear();
    let m = this.today.getMonth() - this.birthday.getMonth();
    if (m < 0 || (m === 0 && this.today.getDate() < this.birthday.getDate())){
      this.age --;
    }
    return this.age;
  }
  getMercuryAge() {
    let realMercuryAge = parseInt(this.age)/.24;
    this.mercuryAge = Math.floor(realMercuryAge)
  }
  getVenusAge() {
    let realVenusAge = parseInt(this.age)/.62;
    this.venusAge = Math.floor(realVenusAge)
  }
  // getMarsAge() {
  //   let realMercuryAge = parseInt(this.age)/.24;
  //   this.mercuryAge = Math.floor(realMercuryAge)
  // }
  // getJupiterAge() {
  //   let realMercuryAge = parseInt(this.age)/.24;
  //   this.mercuryAge = Math.floor(realMercuryAge)
}
