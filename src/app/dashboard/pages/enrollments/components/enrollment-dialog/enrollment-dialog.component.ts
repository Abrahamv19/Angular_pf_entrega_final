import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentActions } from '../../store/enrollment.actions';
import { selectCourseOptions, selectIsLoadingDialogOptions, selectStudentOptions } from '../../store/enrollment.selectors';
import { Observable, take } from 'rxjs';
import { Course } from '../../../courses/models';
import { User } from '../../../users/models';
import { FormControl, FormGroup } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-enrollment-dialog',
  templateUrl: './enrollment-dialog.component.html',
  styleUrls: ['./enrollment-dialog.component.scss'],
})
export class EnrollmentDialogComponent {
  userIdControl = new FormControl<number | null>(null);
  courseIdControl = new FormControl<number | null>(null);

  enrollmentForm = new FormGroup({
    courseId: this.courseIdControl,
    userId: this.userIdControl,
  });

  courseOptions$: Observable<Course[]>;
  studentOptions$: Observable<User[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store,
    private action$: Actions,
    private matDialogRef: MatDialogRef<EnrollmentDialogComponent>
  ) {
    this.store.dispatch(EnrollmentActions.loadEnrollmentDialogOptions());
    this.isLoading$ = this.store.select(selectIsLoadingDialogOptions);
    this.courseOptions$ = this.store.select(selectCourseOptions);
    this.studentOptions$ = this.store.select(selectStudentOptions);

    this.action$
      // take(1) es un limitador para escuchar la accion solo una vez la emision: loadEnrollments y no tener que hacer el unsubscribe y todo lo demas
      .pipe(ofType(EnrollmentActions.loadEnrollments), take(1))
      .subscribe({
        next: () => this.matDialogRef.close(),
      });
  }

  onSubmit(): void {
    this.store.dispatch(
      EnrollmentActions.createEnrollment({
        // Es recomendable usar el .getRawValue() en lugar del .value para filtrar los valore de tipo undefined y dejar solo el tipo de valor(ejm number) con el null
        payload: this.enrollmentForm.getRawValue(),
      })
    );
  }
}


