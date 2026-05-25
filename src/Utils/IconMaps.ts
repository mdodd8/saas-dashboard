export const iconMap = {
    'activity': 'ti-activity',
    'user': 'ti-user',
    'check': 'ti-check',
    'clock': 'ti-clock',
    'home': 'ti-home',
    'settings': 'ti-settings'
} as const;

export type IconName = keyof typeof iconMap;