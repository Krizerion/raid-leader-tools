import { Component } from '@angular/core';
import { SPECS, CLASSES, ROLES } from '@app/shared/constants/class-spec-role-paths.constants';
import { getRoleImageBySpec } from '@app/shared/utils/class-spec-utils';

@Component({
  selector: 'rv-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent {
  public SPECS = SPECS;
  public CLASSES = CLASSES;
  public ROLES = ROLES;
  public players = [
    { name: 'Racor', class: CLASSES.WARLOCK, spec: SPECS.WLOCK_DESTRO, role: getRoleImageBySpec('WLOCK_DESTRO') },
    { name: 'Verkow', class: CLASSES.PALADIN, spec: SPECS.PALA_RET, role: getRoleImageBySpec('PALA_RET') },
    { name: 'Rockish', class: CLASSES.DEATH_KNIGHT, spec: SPECS.DK_BLOOD, role: getRoleImageBySpec('DK_BLOOD') },
    { name: 'Silent', class: CLASSES.ROGUE, spec: SPECS.ROGUE_OUTLAW, role: getRoleImageBySpec('ROGUE_OUTLAW') }
  ];
}
