import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password';
  password ='';
  length:number=0;
  includeLetters:boolean= false;
  includeNumbers:boolean= false;
  includeSymbols:boolean= false;


  modifyLength(event:any){
    const inputvalue= (event.target as HTMLInputElement).value;
    const parsedvalue =parseInt(inputvalue);
    if(!isNaN(parsedvalue)){
      debugger;
      this.length=parsedvalue;
    }
   console.log(inputvalue);
}


 modifyLetters(){
  this.includeLetters=!this.includeLetters;
  }
  modifyNumbers(){
    this.includeNumbers=!this.includeNumbers;
  }
  modifySymbols(){
    this.includeSymbols=!this.includeSymbols;
  }

  buttonClick(){
   const numbers = '1234567890';
   const letters = 'abcçdefgğhijklmnoöprsştuüvyz';
   const symbols = '^£$&?*|-@%!()#';

   let validchars='';
   if(this.includeLetters){
    validchars+=letters;
   }
   if(this.includeNumbers){
    validchars+=numbers;
   }
   if(this.includeSymbols){
    validchars+=symbols;
   }

   let generatedPassword='';
   for(let i=0; i<this.length; i++ ){
    const index=Math.floor(Math.random()*validchars.length);
    generatedPassword+=validchars[index];
   }
   this.password =generatedPassword;
}

  

 
}
