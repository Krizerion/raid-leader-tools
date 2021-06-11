import { CLASSES_IMG, SPECS_IMG } from '@app/shared/constants/classes-img-paths.constants';
import { Classes, CLASSES_NAMES, Specs, SPECS_NAMES } from '@app/shared/constants/classes-specs-roles.constants';
import { SelectableIcon } from '@app/shared/models/planner.models';

export const CLASS_DATA: SelectableIcon[] = [
  {
    url: CLASSES_IMG.DEATH_KNIGHT,
    selected: false,
    id: Classes.DEATH_KNIGHT,
    tooltipText: CLASSES_NAMES.DEATH_KNIGHT
  },
  {
    url: CLASSES_IMG.DEMON_HUNTER,
    selected: false,
    id: Classes.DEMON_HUNTER,
    tooltipText: CLASSES_NAMES.DEMON_HUNTER
  },
  {
    url: CLASSES_IMG.DRUID,
    selected: false,
    id: Classes.DRUID,
    tooltipText: CLASSES_NAMES.DRUID
  },
  {
    url: CLASSES_IMG.HUNTER,
    selected: false,
    id: Classes.HUNTER,
    tooltipText: CLASSES_NAMES.HUNTER
  },
  {
    url: CLASSES_IMG.MAGE,
    selected: false,
    id: Classes.MAGE,
    tooltipText: CLASSES_NAMES.MAGE
  },
  {
    url: CLASSES_IMG.MONK,
    selected: false,
    id: Classes.MONK,
    tooltipText: CLASSES_NAMES.MONK
  },
  {
    url: CLASSES_IMG.PALADIN,
    selected: false,
    id: Classes.PALADIN,
    tooltipText: CLASSES_NAMES.PALADIN
  },
  {
    url: CLASSES_IMG.PRIEST,
    selected: false,
    id: Classes.PRIEST,
    tooltipText: CLASSES_NAMES.PRIEST
  },
  {
    url: CLASSES_IMG.ROGUE,
    selected: false,
    id: Classes.ROGUE,
    tooltipText: CLASSES_NAMES.ROGUE
  },
  {
    url: CLASSES_IMG.SHAMAN,
    selected: false,
    id: Classes.SHAMAN,
    tooltipText: CLASSES_NAMES.SHAMAN
  },
  {
    url: CLASSES_IMG.WARLOCK,
    selected: false,
    id: Classes.WARLOCK,
    tooltipText: CLASSES_NAMES.WARLOCK
  },
  {
    url: CLASSES_IMG.WARRIOR,
    selected: false,
    id: Classes.WARRIOR,
    tooltipText: CLASSES_NAMES.WARRIOR
  }
];

export const SPEC_DATA: { [key: string]: SelectableIcon[] } = {
  DEATH_KNIGHT: [
    {
      url: SPECS_IMG.DK_BLOOD,
      selected: false,
      id: Specs.DK_BLOOD,
      tooltipText: SPECS_NAMES.DK_BLOOD
    },
    {
      url: SPECS_IMG.DK_FROST,
      selected: false,
      id: Specs.DK_FROST,
      tooltipText: SPECS_NAMES.DK_FROST
    },
    {
      url: SPECS_IMG.DK_UNHOLY,
      selected: false,
      id: Specs.DK_UNHOLY,
      tooltipText: SPECS_NAMES.DK_UNHOLY
    }
  ],
  DEMON_HUNTER: [
    {
      url: SPECS_IMG.DH_HAVOC,
      selected: false,
      id: Specs.DH_HAVOC,
      tooltipText: SPECS_NAMES.DH_HAVOC
    },
    {
      url: SPECS_IMG.DH_VENG,
      selected: false,
      id: Specs.DH_VENG,
      tooltipText: SPECS_NAMES.DH_VENG
    }
  ],
  DRUID: [
    {
      url: SPECS_IMG.DRU_BALANCE,
      selected: false,
      id: Specs.DRU_BALANCE,
      tooltipText: SPECS_NAMES.DRU_BALANCE
    },
    {
      url: SPECS_IMG.DRU_FERAL,
      selected: false,
      id: Specs.DRU_FERAL,
      tooltipText: SPECS_NAMES.DRU_FERAL
    },
    {
      url: SPECS_IMG.DRU_GUARDIAN,
      selected: false,
      id: Specs.DRU_GUARDIAN,
      tooltipText: SPECS_NAMES.DRU_GUARDIAN
    },
    {
      url: SPECS_IMG.DRU_RESTO,
      selected: false,
      id: Specs.DRU_RESTO,
      tooltipText: SPECS_NAMES.DRU_RESTO
    }
  ],
  HUNTER: [
    {
      url: SPECS_IMG.HUNT_BM,
      selected: false,
      id: Specs.HUNT_BM,
      tooltipText: SPECS_NAMES.HUNT_BM
    },
    {
      url: SPECS_IMG.HUNT_MM,
      selected: false,
      id: Specs.HUNT_MM,
      tooltipText: SPECS_NAMES.HUNT_MM
    },
    {
      url: SPECS_IMG.HUNT_SURV,
      selected: false,
      id: Specs.HUNT_SURV,
      tooltipText: SPECS_NAMES.HUNT_SURV
    }
  ],
  MAGE: [
    {
      url: SPECS_IMG.MAGE_ARCANE,
      selected: false,
      id: Specs.MAGE_ARCANE,
      tooltipText: SPECS_NAMES.MAGE_ARCANE
    },
    {
      url: SPECS_IMG.MAGE_FIRE,
      selected: false,
      id: Specs.MAGE_FIRE,
      tooltipText: SPECS_NAMES.MAGE_FIRE
    },
    {
      url: SPECS_IMG.MAGE_FROST,
      selected: false,
      id: Specs.MAGE_FROST,
      tooltipText: SPECS_NAMES.MAGE_FROST
    }
  ],
  MONK: [
    {
      url: SPECS_IMG.MONK_BREW,
      selected: false,
      id: Specs.MONK_BREW,
      tooltipText: SPECS_NAMES.MONK_BREW
    },
    {
      url: SPECS_IMG.MONK_MIST,
      selected: false,
      id: Specs.MONK_MIST,
      tooltipText: SPECS_NAMES.MONK_MIST
    },
    {
      url: SPECS_IMG.MONK_WIND,
      selected: false,
      id: Specs.MONK_WIND,
      tooltipText: SPECS_NAMES.MONK_WIND
    }
  ],
  PALADIN: [
    {
      url: SPECS_IMG.PALA_HOLY,
      selected: false,
      id: Specs.PALA_HOLY,
      tooltipText: SPECS_NAMES.PALA_HOLY
    },
    {
      url: SPECS_IMG.PALA_PROT,
      selected: false,
      id: Specs.PALA_PROT,
      tooltipText: SPECS_NAMES.PALA_PROT
    },
    {
      url: SPECS_IMG.PALA_RET,
      selected: false,
      id: Specs.PALA_RET,
      tooltipText: SPECS_NAMES.PALA_RET
    }
  ],
  PRIEST: [
    {
      url: SPECS_IMG.PRIEST_DISC,
      selected: false,
      id: Specs.PRIEST_DISC,
      tooltipText: SPECS_NAMES.PRIEST_DISC
    },
    {
      url: SPECS_IMG.PRIEST_HOLY,
      selected: false,
      id: Specs.PRIEST_HOLY,
      tooltipText: SPECS_NAMES.PRIEST_HOLY
    },
    {
      url: SPECS_IMG.PRIEST_SHADOW,
      selected: false,
      id: Specs.PRIEST_SHADOW,
      tooltipText: SPECS_NAMES.PRIEST_SHADOW
    }
  ],
  ROGUE: [
    {
      url: SPECS_IMG.ROGUE_ASSA,
      selected: false,
      id: Specs.ROGUE_ASSA,
      tooltipText: SPECS_NAMES.ROGUE_ASSA
    },
    {
      url: SPECS_IMG.ROGUE_OUTLAW,
      selected: false,
      id: Specs.ROGUE_OUTLAW,
      tooltipText: SPECS_NAMES.ROGUE_OUTLAW
    },
    {
      url: SPECS_IMG.ROGUE_SUB,
      selected: false,
      id: Specs.ROGUE_SUB,
      tooltipText: SPECS_NAMES.ROGUE_SUB
    }
  ],
  SHAMAN: [
    {
      url: SPECS_IMG.SHAM_ELE,
      selected: false,
      id: Specs.SHAM_ELE,
      tooltipText: SPECS_NAMES.SHAM_ELE
    },
    {
      url: SPECS_IMG.SHAM_ENH,
      selected: false,
      id: Specs.SHAM_ENH,
      tooltipText: SPECS_NAMES.SHAM_ENH
    },
    {
      url: SPECS_IMG.SHAM_RESTO,
      selected: false,
      id: Specs.SHAM_RESTO,
      tooltipText: SPECS_NAMES.SHAM_RESTO
    }
  ],
  WARLOCK: [
    {
      url: SPECS_IMG.WLOCK_AFF,
      selected: false,
      id: Specs.WLOCK_AFF,
      tooltipText: SPECS_NAMES.WLOCK_AFF
    },
    {
      url: SPECS_IMG.WLOCK_DEMO,
      selected: false,
      id: Specs.WLOCK_DEMO,
      tooltipText: SPECS_NAMES.WLOCK_DEMO
    },
    {
      url: SPECS_IMG.WLOCK_DESTRO,
      selected: false,
      id: Specs.WLOCK_DESTRO,
      tooltipText: SPECS_NAMES.WLOCK_DESTRO
    }
  ],
  WARRIOR: [
    {
      url: SPECS_IMG.WARR_ARMS,
      selected: false,
      id: Specs.WARR_ARMS,
      tooltipText: SPECS_NAMES.WARR_ARMS
    },
    {
      url: SPECS_IMG.WARR_FURY,
      selected: false,
      id: Specs.WARR_FURY,
      tooltipText: SPECS_NAMES.WARR_FURY
    },
    {
      url: SPECS_IMG.WARR_PROT,
      selected: false,
      id: Specs.WARR_PROT,
      tooltipText: SPECS_NAMES.WARR_PROT
    }
  ]
};
