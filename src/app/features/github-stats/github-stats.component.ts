import { Component, Injectable } from '@angular/core';
import { GithubService } from '../github.service'; 
import { CommonModule } from '@angular/common'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-github-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github-stats.component.html',
  styleUrl: './github-stats.component.scss'
})
@Injectable({ 
  providedIn: 'root'
})
export class GithubStatsComponent {
user$: Observable<any>;

constructor(private githubService: GithubService) {
  this.user$ = this.githubService.getUser();
}
}