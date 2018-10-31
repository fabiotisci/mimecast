export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export type ActionType = 'NEXT' | 'PREVIOUS';
