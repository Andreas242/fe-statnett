import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-table',
  imports: [],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //subscribe to the user service
  }
  
  ngOnDestroy(): void {
    //unsubscribe from the user service
  }
}
