export type SimGuide = {
  slug: string;
  name: string;
  video: string;
  steps: string[];
  note?: string;
  /** Ảnh sim ghép (thumbnail cho card, ảnh chi tiết cho guide) */
  image?: string;
};
