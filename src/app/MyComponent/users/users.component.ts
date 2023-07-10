import { Component } from '@angular/core';
import { Database, set, ref, update} from '@angular/fire/database'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  textBoxValue: string;
  numericValue1: number;
  numericValue2: number;

  constructor(public database: Database) {
    this.textBoxValue = '';
    this.numericValue1 = 0;
    this.numericValue2 = 0;


  }
  onSumbit() {
    // console.log( this.textBoxValue);
    // console.log(this.numericValue1);
    // console.log(this.numericValue2);
    set(ref(this.database, 'users/' + this.textBoxValue), {
      name: this.textBoxValue,
      age: this.numericValue1,
      score :this.numericValue2
    });

    alert("user created")
  }
     
}
