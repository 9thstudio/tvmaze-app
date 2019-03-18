import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  getSchedules = "https://api.tvmaze.com/schedule?country=US"
  searchShowsUrl = "https://api.tvmaze.com/search/shows?q="


  constructor(private http: HttpClient) { }
  getConfig() {
    return this.http.get(this.getSchedules);
  }
  searchShows(param:string){
    return this.http.get(this.searchShowsUrl+param);
  }
}
