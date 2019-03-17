import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service.js'
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  showSchedule:any;
  filterValue:string = "Filter shows";
  filterByNetwork:string;
  constructor(
    private configService: ConfigService,
    private router: Router
    ) { }

  ngOnInit() {
    this.showConfig();
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data) => {
        console.log(data)
        this.showSchedule = data;
      });
  }
  filterShowListBy(filterName: string){
    console.log(filterName)
    this.filterByNetwork = filterName;
  }

}
