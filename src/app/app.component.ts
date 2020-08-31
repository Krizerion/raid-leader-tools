import { Component, OnInit } from '@angular/core';
import { CLASSES, SPECS } from '@app/shared/constants/class-spec-role-paths.constants';

@Component({
  selector: 'rv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public mdpsIcon = CLASSES.DEATH_KNIGHT;
  public specs = SPECS;
  public specsArray = [];

  ngOnInit() {
    Object.keys(this.specs).forEach(key => {
      this.specsArray.push(this.specs[key]);
    });
  }
}
