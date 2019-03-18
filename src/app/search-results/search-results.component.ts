import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  showSearchList:any;
  queryParam:string;
  showNoResult: boolean = false;
  
  constructor(
    private configService: ConfigService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.queryParam = params.get('q');
      this.searchShows(this.queryParam)
    });
    
  }
  searchShows(param:string) {
    this.configService.searchShows(param)
      .subscribe((data) => {
        this.showSearchList = data;
        this.showNoResult = this.showSearchList.length < 1 ? false : true;
      });
  }

}
