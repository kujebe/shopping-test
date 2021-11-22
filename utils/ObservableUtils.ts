import { Observable, of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export const mapError = () => <T>(source: Observable<T>) =>
  source
    .pipe(
      catchError((err) => {
        if (err && err.response) {
          return throwError({ status: err.response.status, data: err.response.data });
        } else {
          return throwError(err);
        }
      })
  );

export const mapErrorUndefined = () => <T>(source: Observable<T>) =>
  source
    .pipe(
      catchError(() => of(undefined))
  );
