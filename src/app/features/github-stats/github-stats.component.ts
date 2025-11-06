import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service'; 
import { CommonModule } from '@angular/common'; 
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadGithubUser } from '../github-state/github.actions';
import { GithubState } from '../github-state/github.reducer';

@Component({
  selector: 'app-github-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github-stats.component.html',
  styleUrl: './github-stats.component.scss'
})
export class GithubStatsComponent implements OnInit {
user$: Observable<any>;
status$: Observable<string>;
error$: Observable<any>;

constructor(private store: Store<{ github: GithubState }>) {
  this.status$ = this.store.select(state => state.github.status);
    this.user$ = this.store.select(state => state.github.user);
    this.error$ = this.store.select(state => state.github.error);
}
ngOnInit(): void {
    this.store.dispatch(loadGithubUser());
  }
}