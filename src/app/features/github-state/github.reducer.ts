import { createReducer, on} from '@ngrx/store';
import { loadGithubUser, loadGithubUserSuccess, loadGithubUserFailure } from './github.actions';

export interface GithubState {
    user: any | null;
    status: 'pending' | 'loading' | 'success' | 'error';
    error: any | null;
}

export const initialState: GithubState = {
    user: null,
    status: 'pending',
    error: null,
};

export const githubReducer = createReducer(
    initialState,

    on(loadGithubUser, (state) => ({
        ...state,
        status: 'loading' as const,
    })),

    on(loadGithubUserSuccess, (state, { user }) => ({
        ...state,
        status: 'success' as const,
        user: user,
        error: null,
    })),

on(loadGithubUserFailure, (state, { error }) => ({
    ...state,
    status: 'error' as const,
    error: error,
    user: null,
  }))    
);