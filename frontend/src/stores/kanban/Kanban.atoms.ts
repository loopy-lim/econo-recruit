import { atom } from "jotai";

export type KanbanColumnData = {
  id: number;
  title: string;
  card: (KanbanCardData | null)[];
};

export type KanbanCardData = {
  id: number;
  cardType: string;
  major: string;
  title: string;
  apply: string[];
  comment: number;
  heart: number;
  isHearted: boolean;
  applicantId: string;
};

export const KanbanDataArrayState = atom({} as KanbanColumnData[]);
