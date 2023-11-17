import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateEnrollmentPayload, Enrollment } from '../models';
import { Course } from '../../courses/models';
import { User } from '../../users/models';

export const EnrollmentActions = createActionGroup({
  source: 'Enrollment',
  events: {
    'Load Enrollment By Id': props<{ id: number }>(),
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{ data: Enrollment[] }>(),
    'Load Enrollments Failure': props<{ error: unknown }>(),
    'Load Enrollment Dialog Options': emptyProps(),
    'Load Enrollment Dialog Options Success': props<{
      courses: Course[];
      students: User[];
    }>(),
    'Load Enrollment Dialog Options Failure': props<{ error: unknown }>(),
    'Create Enrollment': props<{ payload: CreateEnrollmentPayload }>(),
    // El succes lo manejo con una recaga de la data

    // Manejo el error para identificar que el error corresponde a la creacion
    'Create Enrollment Failure': props<{ error: unknown }>(),
  },
});


