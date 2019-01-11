class Space_age {
  constructor(birthday){
    this.birthday = new Date(birthday);
    this.today = new Date();
    this.age = this.age;
  }
  getAge(){
    this.age = this.today.getFullYear() - this.birthday.getFullYear();
    let m = this.today.getMonth() - this.birthday.getMonth();
    if (m < 0 || (m === 0 && this.today.getDate() < this.birthday.getDate())){
      this.age --;
    }
    return this.age;
  }

}



  function getMercuryAge(age) {
    let earthAge = getAge()
    let mercuryAge = earthAge/.24

  }
