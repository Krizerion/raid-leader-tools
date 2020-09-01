import { CLASSES_IMG, SPECS_IMG } from '@app/shared/constants/classes-img-paths.constants';
import { CLASSES_NAMES, SPECS_NAMES } from '@app/shared/constants/classes-names.constants';
import { SelectableIcon } from '@app/shared/models/planner.models';

export const CLASS_DATA: SelectableIcon[] = [
  { url: CLASSES_IMG.DEATH_KNIGHT, selected: false, id: 'DEATH_KNIGHT', tooltipText: CLASSES_NAMES.DEATH_KNIGHT },
  { url: CLASSES_IMG.DEMON_HUNTER, selected: false, id: 'DEMON_HUNTER', tooltipText: CLASSES_NAMES.DEMON_HUNTER },
  { url: CLASSES_IMG.DRUID, selected: false, id: 'DRUID', tooltipText: CLASSES_NAMES.DRUID },
  { url: CLASSES_IMG.HUNTER, selected: false, id: 'HUNTER', tooltipText: CLASSES_NAMES.HUNTER },
  { url: CLASSES_IMG.MAGE, selected: false, id: 'MAGE', tooltipText: CLASSES_NAMES.MAGE },
  { url: CLASSES_IMG.MONK, selected: false, id: 'MONK', tooltipText: CLASSES_NAMES.MONK },
  { url: CLASSES_IMG.PALADIN, selected: false, id: 'PALADIN', tooltipText: CLASSES_NAMES.PALADIN },
  { url: CLASSES_IMG.PRIEST, selected: false, id: 'PRIEST', tooltipText: CLASSES_NAMES.PRIEST },
  { url: CLASSES_IMG.ROGUE, selected: false, id: 'ROGUE', tooltipText: CLASSES_NAMES.ROGUE },
  { url: CLASSES_IMG.SHAMAN, selected: false, id: 'SHAMAN', tooltipText: CLASSES_NAMES.SHAMAN },
  { url: CLASSES_IMG.WARLOCK, selected: false, id: 'WARLOCK', tooltipText: CLASSES_NAMES.WARLOCK },
  { url: CLASSES_IMG.WARRIOR, selected: false, id: 'WARRIOR', tooltipText: CLASSES_NAMES.WARRIOR }
];

export const SPEC_DATA: { [key: string]: SelectableIcon[] } = {
  DEATH_KNIGHT: [
    { url: SPECS_IMG.DK_BLOOD, selected: false, id: 'DK_BLOOD', tooltipText: SPECS_NAMES.DK_BLOOD },
    { url: SPECS_IMG.DK_FROST, selected: false, id: 'DK_FROST', tooltipText: SPECS_NAMES.DK_FROST },
    { url: SPECS_IMG.DK_UNHOLY, selected: false, id: 'DK_UNHOLY', tooltipText: SPECS_NAMES.DK_UNHOLY }
  ],
  DEMON_HUNTER: [
    { url: SPECS_IMG.DH_HAVOC, selected: false, id: 'DH_HAVOC', tooltipText: SPECS_NAMES.DH_HAVOC },
    { url: SPECS_IMG.DH_VENG, selected: false, id: 'DH_VENG', tooltipText: SPECS_NAMES.DH_VENG }
  ],
  DRUID: [
    { url: SPECS_IMG.DRU_BALANCE, selected: false, id: 'DRU_BALANCE', tooltipText: SPECS_NAMES.DRU_BALANCE },
    { url: SPECS_IMG.DRU_FERAL, selected: false, id: 'DRU_FERAL', tooltipText: SPECS_NAMES.DRU_FERAL },
    { url: SPECS_IMG.DRU_GUARDIAN, selected: false, id: 'DRU_GUARDIAN', tooltipText: SPECS_NAMES.DRU_GUARDIAN },
    { url: SPECS_IMG.DRU_RESTO, selected: false, id: 'DRU_RESTO', tooltipText: SPECS_NAMES.DRU_RESTO }
  ],
  HUNTER: [
    { url: SPECS_IMG.HUNT_BM, selected: false, id: 'HUNT_BM', tooltipText: SPECS_NAMES.HUNT_BM },
    { url: SPECS_IMG.HUNT_MM, selected: false, id: 'HUNT_MM', tooltipText: SPECS_NAMES.HUNT_MM },
    { url: SPECS_IMG.HUNT_SURV, selected: false, id: 'HUNT_SURV', tooltipText: SPECS_NAMES.HUNT_SURV }
  ],
  MAGE: [
    { url: SPECS_IMG.MAGE_ARCANE, selected: false, id: 'MAGE_ARCANE', tooltipText: SPECS_NAMES.MAGE_ARCANE },
    { url: SPECS_IMG.MAGE_FIRE, selected: false, id: 'MAGE_FIRE', tooltipText: SPECS_NAMES.MAGE_FIRE },
    { url: SPECS_IMG.MAGE_FROST, selected: false, id: 'MAGE_FROST', tooltipText: SPECS_NAMES.MAGE_FROST }
  ],
  MONK: [
    { url: SPECS_IMG.MONK_BREW, selected: false, id: 'MONK_BREW', tooltipText: SPECS_NAMES.MONK_BREW },
    { url: SPECS_IMG.MONK_MIST, selected: false, id: 'MONK_MIST', tooltipText: SPECS_NAMES.MONK_MIST },
    { url: SPECS_IMG.MONK_WIND, selected: false, id: 'MONK_WIND', tooltipText: SPECS_NAMES.MONK_WIND }
  ],
  PALADIN: [
    { url: SPECS_IMG.PALA_HOLY, selected: false, id: 'PALA_HOLY', tooltipText: SPECS_NAMES.PALA_HOLY },
    { url: SPECS_IMG.PALA_PROT, selected: false, id: 'PALA_PROT', tooltipText: SPECS_NAMES.PALA_PROT },
    { url: SPECS_IMG.PALA_RET, selected: false, id: 'PALA_RET', tooltipText: SPECS_NAMES.PALA_RET }
  ],
  PRIEST: [
    { url: SPECS_IMG.PRIEST_DISC, selected: false, id: 'PRIEST_DISC', tooltipText: SPECS_NAMES.PRIEST_DISC },
    { url: SPECS_IMG.PRIEST_HOLY, selected: false, id: 'PRIEST_HOLY', tooltipText: SPECS_NAMES.PRIEST_HOLY },
    { url: SPECS_IMG.PRIEST_SHADOW, selected: false, id: 'PRIEST_SHADOW', tooltipText: SPECS_NAMES.PRIEST_SHADOW }
  ],
  ROGUE: [
    { url: SPECS_IMG.ROGUE_ASSA, selected: false, id: 'ROGUE_ASSA', tooltipText: SPECS_NAMES.ROGUE_ASSA },
    { url: SPECS_IMG.ROGUE_OUTLAW, selected: false, id: 'ROGUE_OUTLAW', tooltipText: SPECS_NAMES.ROGUE_OUTLAW },
    { url: SPECS_IMG.ROGUE_SUB, selected: false, id: 'ROGUE_SUB', tooltipText: SPECS_NAMES.ROGUE_SUB }
  ],
  SHAMAN: [
    { url: SPECS_IMG.SHAM_ELE, selected: false, id: 'SHAM_ELE', tooltipText: SPECS_NAMES.SHAM_ELE },
    { url: SPECS_IMG.SHAM_ENH, selected: false, id: 'SHAM_ENH', tooltipText: SPECS_NAMES.SHAM_ENH },
    { url: SPECS_IMG.SHAM_RESTO, selected: false, id: 'SHAM_RESTO', tooltipText: SPECS_NAMES.SHAM_RESTO }
  ],
  WARLOCK: [
    { url: SPECS_IMG.WLOCK_AFF, selected: false, id: 'WLOCK_AFF', tooltipText: SPECS_NAMES.WLOCK_AFF },
    { url: SPECS_IMG.WLOCK_DEMO, selected: false, id: 'WLOCK_DEMO', tooltipText: SPECS_NAMES.WLOCK_DEMO },
    { url: SPECS_IMG.WLOCK_DESTRO, selected: false, id: 'WLOCK_DESTRO', tooltipText: SPECS_NAMES.WLOCK_DESTRO }
  ],
  WARRIOR: [
    { url: SPECS_IMG.WARR_ARMS, selected: false, id: 'WARR_ARMS', tooltipText: SPECS_NAMES.WARR_ARMS },
    { url: SPECS_IMG.WARR_FURY, selected: false, id: 'WARR_FURY', tooltipText: SPECS_NAMES.WARR_FURY },
    { url: SPECS_IMG.WARR_PROT, selected: false, id: 'WARR_PROT', tooltipText: SPECS_NAMES.WARR_PROT }
  ]
};
