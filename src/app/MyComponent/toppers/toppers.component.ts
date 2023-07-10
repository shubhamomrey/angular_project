import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users';


@Component({
  selector: 'app-toppers',
  templateUrl: './toppers.component.html',
  styleUrls: ['./toppers.component.css'] 
})
export class ToppersComponent {

addwinner() {
  alert("User added to winner")
}
  
}

  