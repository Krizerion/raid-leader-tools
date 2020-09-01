import { HEALERS, RDPS, TANKS } from '@app/shared/constants/specs-by-roles.constants';

// TODO: Delete
export function getBackgroundColorByClassName(className: string): string {
  return `${className.split(' ').join('_').toLowerCase()}_bg`;
}

export function getRoleBySpecName(specName: string): string {
  if (TANKS.includes(specName)) {
    return 'TANK';
  } else if (HEALERS.includes(specName)) {
    return 'HEALER';
  } else if (RDPS.includes(specName)) {
    return 'RDPS';
  } else {
    return 'MDPS';
  }
}
