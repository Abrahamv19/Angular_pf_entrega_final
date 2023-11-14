import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styles: [
  ]
})
export class UsersTableComponent {

  @Input()
  dataSource: User[] = [];

  @Output()
  deleteUser = new EventEmitter<number>();

  @Output()
  editUser = new EventEmitter<User>();

  // displayedColumns = ['id', 'fullname', 'email', 'course', 'classYear', 'actions'];
  displayedColumns = ['id', 'fullname', 'email', 'actions'];

  userRole$: Observable<'ADMIN' | 'EMPLOYEE' | undefined>;

  constructor(private router: Router, private store: Store) {
    this.userRole$ = this.store
    .select(selectAuthUser)
    .pipe(map((u) => u?.role))
  }

  gotoDetail(userid: number): void {

    // /dashboard/courses/detail/1
    // this.router.navigate(['dashboard', 'users', 'detail', userid], {
    //   queryParams: {
    //     search: 'Hola mundo',
    //   },
    // })
    this.router.navigate(['dashboard', 'users', 'detail', userid])
  }

}
