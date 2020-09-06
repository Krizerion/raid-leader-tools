import { Component } from '@angular/core';
import { CLASS_DATA } from '@app/raid-planner/constants/add-player.constants';
import { CLASSES_NAMES } from '@app/shared/constants/classes-specs-roles.constants';
import { SelectableIcon } from '@app/shared/models/planner.models';
import { getBackgroundColorByClassName } from '@app/shared/utils/class-spec-utils';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'rv-class-composition',
  templateUrl: './class-composition.component.html',
  styleUrls: ['./class-composition.component.scss']
})
export class ClassCompositionComponent {
  public classData: SelectableIcon[] = cloneDeep(CLASS_DATA);
  constructor() {}

  getBackgroundColor(className: string): string {
    return getBackgroundColorByClassName(className);
  }

  getClassNameById(id: string): string {
    return CLASSES_NAMES[id];
  }
}
