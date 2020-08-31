import { Component, OnInit } from '@angular/core';
import { CLASSES_IMG, SPECS_IMG } from '@app/shared/constants/classes-img-paths.constants';

@Component({
  selector: 'rv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public mdpsIcon = CLASSES_IMG.DEATH_KNIGHT;
  public specs = SPECS_IMG;
  public specsArray = [];

  ngOnInit() {
    // Object.keys(this.specs).forEach(key => {
    //   this.specsArray.push(this.specs[key]);
    // });
  }
}
