import BaseTheme from './BaseTheme';
import PlateTheme from './PlateTheme';
import DoNotLetMeDesignTheme from './DoNotLetMeDesignTheme';

// Stick to JS while theme-ui is being rewritten to TypeScript
// https://github.com/system-ui/theme-ui/issues/668
export const themes = [
  {
    name: 'Base',
    theme: BaseTheme,
    default: true,
    color: BaseTheme.colors.primary,
    emoji: '🟦',
  },
  {
    name: 'Plate',
    theme: PlateTheme,
    default: false,
    color: PlateTheme.colors.primary,
    emoji: '🐝',
  },
  {
    name: 'Do -not- let me design',
    theme: DoNotLetMeDesignTheme,
    default: false,
    color: DoNotLetMeDesignTheme.colors.primary,
    emoji: '☠️',
  },
];
