import { Component, OnInit } from '@angular/core';


import { from } from 'rxjs';
import { User } from '../user';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  userModule = new User('Balbir','kaurginni@1999','balk@123','balk@123');
  constructor() { 
   
    

  }

  ngOnInit(): void {
  }

}
