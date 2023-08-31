import { atom } from "jotai";

const applicantQuestions = require(`@/src/constants/applicant/26`)
  .APPLICANT as ApplicantNode[];

export const applicantQuestionsAtom = atom(applicantQuestions);

type ApplicantBoardState = {
  title: string;
  apply: string[];
  score: string;
  registerDate: string;
};

export const ApplicantListState = atom(<ApplicantBoardState[]>[]);

export const ApplicantPopupBooleanState = atom(false);
