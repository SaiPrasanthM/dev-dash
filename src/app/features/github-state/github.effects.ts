import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, Observable } from 'rxjs';
import { GithubService } from '../github.service';
import { loadGithubUser, loadGithubUserFailure, loadGithubUserSuccess } from './github.actions';
import { Action } from '@ngrx/store';

@Injectable()
export class GithubEffects {
    loadUser$: Observable<Action>;
  constructor(
    private actions$: Actions,
    private githubService: GithubService
  ) {
        this.loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadGithubUser),
      mergeMap(() =>
        this.githubService.getUser().pipe(
          map(user => loadGithubUserSuccess({ user: user })),
          catchError(error => of(loadGithubUserFailure({ error: error })))
        )
      )
    )
  );
  }
}