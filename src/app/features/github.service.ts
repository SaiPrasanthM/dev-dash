import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
private readonly API_URL = 'https://api.github.com/users/google-gemini';
  constructor(private http: HttpClient) { }
  getUser() {
    return this.http.get(this.API_URL);
  }
}
