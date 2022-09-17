import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'practice2';
  password ='';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  onChangeLength(value :string){
      const parsedValue = parseInt(value);
      if(!isNaN(parsedValue)){        
        this.length = parsedValue;
      }
  }
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
}
onChangeUseNumbers(){
  this.includeNumbers = !this.includeNumbers;
}
onChangeUseSymbols(){
  this.includeSymbols = !this.includeSymbols;
}
  onButtonClick() {
    // console.log("Button Was Clicked !")
    // console.log(this.includeLetters)
    // console.log(`generate the password using the following 
    //           Include letters : ${this.includeLetters},
    //           Include Numbers : ${this.includeNumbers},
    //           Include Symbols : ${this.includeSymbols}`)
    // this.password ='My Password!!!'
    const numbers ='1234567890';
    const letters = 'abcdefghijklmnopqrstwxyz';
    const symbols ='!@#$%^&*()';
    let validChars ='';
    if( this.includeLetters){
      validChars += letters;
    }
    if( this.includeNumbers){
      validChars += numbers;
    }
    if( this.includeSymbols){
      validChars += symbols;
    }
    let generatedPassword ='';
    for( let i =0 ;i < this.length ; i++){
      const index =Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
  // getPassword(){
  //   return this.password;
  // }
}