interface IResInstagramList {
  data: IResInstagram[];
  paging: {
    cursor: {
      before: string;
      after: string;
    };
    next: string;
  };
}

interface IResInstagram {
  caption: string;
  id: string;
  media_type: TMediaType;
  media_url: string;
  thumbnail_url?: string;
  timestamp: Date;
  children?: {
    id: string;
    media_type: string;
    media_url: string;
    data: {
      id: string;
      media_type: string;
      media_url: string;
      permalink: string;
    }[];
  };
}

type TMediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

export type { IResInstagramList, IResInstagram, TMediaType };
