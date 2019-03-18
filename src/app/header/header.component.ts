import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchParam: string;
  constructor( 
    private router: Router
    ) { }

  ngOnInit() {
  }

  searchShows(urlParam:string) {
    this.router.navigate(['search/'+urlParam]);
  }
  showSchedule() {
    this.router.navigate(['schedule']);
  }

}
