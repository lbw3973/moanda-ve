import { SwiperModule } from "swiper/types";

interface ISwiperProps {
  children?: React.ReactNode;
  modules: SwiperModule[];
  imageList: string[];
  isBlack?: boolean[];
  width: string;
  height: string;
  spaceBetween: number;
  slideperView: number;
  loop: boolean;
  pagination: boolean;
  useNavigation: boolean;
  useTouchSlide: boolean;
}

export type { ISwiperProps };
