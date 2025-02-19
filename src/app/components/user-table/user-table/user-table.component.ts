import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription, tap } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user-model';
import { CommonModule } from '@angular/common';
import { FormatPhoneNumberDirective } from '../../../directives/format-phone-number.directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-table',
  imports: [CommonModule, FormatPhoneNumberDirective],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent implements OnInit, OnDestroy {
  users: User[] = [];
  private userSubscription!: Subscription;

  constructor(private userService: UserService) { }
/*
  ngOnInit(): void {
    this.userSubscription = this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error fetching users', err);
      }
    });
  }
    */

  ngOnInit(): void {
    this.userSubscription = this.userService.getUsers()
      .pipe(
        tap((rawUsers: User[]) => {
          console.log('Raw user list', rawUsers);
        }),
        map((rawUsers: User[]) => 
          rawUsers.filter(user => !user.phone.startsWith('('))
        ),

        tap((filteredUsers: User[]) => {
          console.log('Filtered user list', filteredUsers);
        })
      )
      .subscribe({
        next: (filteredUsers: User[]) => {
          this.users = filteredUsers;
        },
        error: (err) => {
          console.error('Error fetching users', err);
        }
      });
  }
  
  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

}
