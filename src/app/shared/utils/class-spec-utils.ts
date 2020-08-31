import { RDPS, TANKS, HEALERS } from '@app/shared/constants/specs-by-roles.constants';
import { ROLES } from '@app/shared/constants/class-spec-role-paths.constants';

export function getRoleImageBySpec(spec: string): string {
  if (TANKS.includes(spec)) {
    return ROLES.TANK;
  } else if (HEALERS.includes(spec)) {
    return ROLES.HEALER;
  } else if (RDPS.includes(spec)) {
    return ROLES.RDPS;
  } else {
    return ROLES.MDPS;
  }
}
