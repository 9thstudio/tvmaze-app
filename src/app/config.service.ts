import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  getShows = "http://api.tvmaze.com/schedule?country=US"


  constructor(private http: HttpClient) { }
  getConfig() {
    return this.http.get(this.getShows);
  }
}
