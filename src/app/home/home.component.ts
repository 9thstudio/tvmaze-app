import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service.js'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  showSchedule:any;
  constructor(
    private configService: ConfigService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  showTvSchedule(){
    console.log('showSchedule')
    this.router.navigate(['home/schedule'])
  }

}
