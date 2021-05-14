import type { DayPeriod } from '../type/index.type';

export function getPalette(period: DayPeriod) {
  return {
    morning: '#282e54',
    afternoon: '#000000',
    night: '#ffdd91',
  }[period];
}
