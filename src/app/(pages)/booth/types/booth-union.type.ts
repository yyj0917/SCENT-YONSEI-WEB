import { Booth } from '@/app/_common/interfaces/booth.interface';

export const days = ['28', '29', '30'] as const;
export type Day = (typeof days)[number];

export const sections = ['baekyang', 'hangeul', 'global'] as const;
export type Section = (typeof sections)[number];

export const categories = ['all', 'booth', 'foodtruck'] as const;
export type Category = (typeof categories)[number];

export const searches = [''] as const;
export type SearchType = (typeof searches)[number];

export type BoothListKey = `${Day}-${Section}-${Category}`; // 조합 키

export type BoothListRecord = Record<BoothListKey, Booth>; // Record 형태
