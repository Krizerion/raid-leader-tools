import { Component } from '@angular/core';
import { CLASSES_IMG, SPECS_IMG } from '@app/shared/constants/classes-img-paths.constants';

@Component({
  selector: 'rlt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public mdpsIcon = CLASSES_IMG.DEATH_KNIGHT;
  public specs = SPECS_IMG;
  public specsArray = [];

  constructor() {}
}
