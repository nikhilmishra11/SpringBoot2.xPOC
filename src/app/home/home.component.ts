import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/user.shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    currentUser: User;
    users: User[] = [];
 
    
    constructor(private service:SharedService, private router:Router){
       this.service = service;
      }
    
    ngOnInit() {
        this.users = new Array<User>();
        //console.log(this.service.getData());
        this.currentUser = this.service.getData();
        this.users.push(this.service.getData());
    }
 
    /*deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers(); });
    }
 
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
    */
}
