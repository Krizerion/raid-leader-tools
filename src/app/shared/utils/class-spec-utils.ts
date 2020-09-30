import { Roles } from '@app/shared/constants/classes-specs-roles.constants';
import { HEALERS, RDPS, TANKS } from '@app/shared/constants/specs-by-roles.constants';

// TODO: Delete
export function getBackgroundColorByClassName(className: string): string {
  return `${className.split(' ').join('_').toLowerCase()}_bg`;
}

export function getRoleBySpecId(specId: string): string {
  if (specId === '') {
    return '';
  } else if (TANKS.includes(specId)) {
    return Roles.TANK;
  } else if (HEALERS.includes(specId)) {
    return Roles.HEALER;
  } else if (RDPS.includes(specId)) {
    return Roles.RDPS;
  } else {
    return Roles.MDPS;
  }
}
