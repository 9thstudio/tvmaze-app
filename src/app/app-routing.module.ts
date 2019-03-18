import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShowComponent} from './show/show.component';
import {SearchResultsComponent} from './search-results/search-results.component';

const routes : Routes = [
  {
    path: '',
    redirectTo: 'schedule',
    pathMatch: 'full'

  }, {
    path: 'schedule',
    component: ShowComponent
  }, {
    path: 'search/:q',
    component: SearchResultsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}