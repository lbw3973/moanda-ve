import { SwiperModule } from "swiper/types";

interface ISwiperProps {
  children?: React.ReactNode;
  modules: SwiperModule[];
  imageList: string[];
  isBlack?: boolean[];
  width: string;
  height: string;
  spaceBetween: number;
  pagination: boolean;
  useNavigation: boolean;
}

export type { ISwiperProps };
