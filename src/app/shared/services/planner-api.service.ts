import { Injectable } from '@angular/core';
import { SPECS_IMG, CLASSES_IMG, ROLES_IMG } from '@app/shared/constants/classes-img-paths.constants';
import { CLASSES_NAMES } from '@app/shared/constants/classes-names.constants';

@Injectable({
  providedIn: 'root'
})
export class PlannerApiService {
  constructor() {}

  getPlayers() {
    return [
      {
        name: 'Racor',
        class: CLASSES_IMG.WARLOCK,
        spec: SPECS_IMG.WLOCK_AFF,
        role: ROLES_IMG.RDPS,
        className: CLASSES_NAMES.WARLOCK
      },
      {
        name: 'Verkow',
        class: CLASSES_IMG.PALADIN,
        spec: SPECS_IMG.PALA_PROT,
        role: ROLES_IMG.TANK,
        className: CLASSES_NAMES.PALADIN
      },
      {
        name: 'Lyandria',
        class: CLASSES_IMG.SHAMAN,
        spec: SPECS_IMG.SHAM_RESTO,
        role: ROLES_IMG.HEALER,
        className: CLASSES_NAMES.SHAMAN
      }
    ];
  }
}
