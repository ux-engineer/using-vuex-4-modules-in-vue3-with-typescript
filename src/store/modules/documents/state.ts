import { UserDocuments } from '@/@types';

export type State = {
  data: UserDocuments | null;
}

export const state: State = {
  data: null,
};
