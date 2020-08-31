import { Component } from '@angular/core';
import { SPECS_IMG, CLASSES_IMG, ROLES_IMG } from '@app/shared/constants/classes-img-paths.constants';
import { CLASSES_NAMES } from '@app/shared/constants/classes-names.constsnts';

@Component({
  selector: 'rv-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent {
  public SPECS = SPECS_IMG;
  public CLASSES = CLASSES_IMG;
  public ROLES = ROLES_IMG;
  public CLASS_NAMES = CLASSES_NAMES;
  public players = [
    {
      name: 'Racor',
      class: this.CLASSES.WARLOCK,
      spec: this.SPECS.WLOCK_DESTRO,
      role: this.ROLES.RDPS,
      className: this.CLASS_NAMES.WARLOCK
    },
    {
      name: 'Verkow',
      class: this.CLASSES.PALADIN,
      spec: this.SPECS.PALA_RET,
      role: this.ROLES.MDPS,
      className: this.CLASS_NAMES.PALADIN
    },
    {
      name: 'Silentdeathh',
      class: this.CLASSES.ROGUE,
      spec: this.SPECS.ROGUE_ASSA,
      role: this.ROLES.MDPS,
      className: this.CLASS_NAMES.ROGUE
    },
    {
      name: 'Lyandria',
      class: this.CLASSES.SHAMAN,
      spec: this.SPECS.SHAM_RESTO,
      role: this.ROLES.HEALER,
      className: this.CLASS_NAMES.SHAMAN
    }
  ];
}
