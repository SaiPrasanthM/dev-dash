import { createAction, props } from "@ngrx/store";

export const loadGithubUser = createAction(
    '[GitHub Stats] Load User'
);

export const loadGithubUserSuccess = createAction(
    '[GitHub API] Load User Success',
    props<{ user: any }>()
);

export const loadGithubUserFailure = createAction(
    '[GitHub API] Load User Failure',
    props<{ error: any}>()
);