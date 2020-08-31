import { RDPS, TANKS, HEALERS } from '@app/shared/constants/specs-by-roles.constants';
import { ROLES_IMG } from '@app/shared/constants/classes-img-paths.constants';

// TODO: Delete
export function getBackgroundColorByClassName(className: string): string {
  return `${className.split(' ').join('_').toLowerCase()}_bg`;
}
