import { PropsWithChildren, useEffect, useRef } from "react";
import * as S from "./style";

type PFullPageScroll = {
  onPageChange?: (page: number) => void;
  onLoad?: (limit: number) => void;
} & PropsWithChildren;

export const FullPageScroll: React.FC<PFullPageScroll> = ({ children, onLoad = () => {}, onPageChange = () => {} }) => {
  const outerDivRef = useRef<HTMLDivElement>(null);
  const currentPage = useRef<number>(0);
  const canScroll = useRef<boolean>(true);
  const oldTouchY = useRef<number>(0);

  const scrollDown = () => {
    const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight;

    if (outerDivRef.current && pageHeight) {
      outerDivRef.current.scrollTo({
        top: pageHeight * (currentPage.current + 1),
        left: 0,
        behavior: "smooth",
      });
      canScroll.current = false;
      setTimeout(() => {
        canScroll.current = true;
      }, 500);
      if (outerDivRef.current.childElementCount - 1 > currentPage.current) currentPage.current++;
    }

    onPageChange(currentPage.current);
  };

  const scrollUp = () => {
    const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight;

    if (outerDivRef.current && pageHeight) {
      outerDivRef.current.scrollTo({
        top: pageHeight * (currentPage.current - 1),
        left: 0,
        behavior: "smooth",
      });
      canScroll.current = false;
      setTimeout(() => {
        canScroll.current = true;
      }, 500);
      if (currentPage.current > 0) currentPage.current--;
    }

    onPageChange(currentPage.current);
  };

  const wheelHandler = (e: WheelEvent) => {
    e.preventDefault();
    if (!canScroll.current) return;
    const { deltaY } = e;

    if (deltaY > 0 && outerDivRef.current && currentPage.current < outerDivRef.current.children.length - 1) {
      scrollDown();
    } else if (deltaY < 0 && outerDivRef.current) {
      scrollUp();
    }
  };

  const scrollHandler = (e: Event) => {
    e.preventDefault();
  };

  const onTouchDown = (e: TouchEvent) => {
    oldTouchY.current = e.changedTouches.item(0)?.clientY || 0;
  };

  const onTouchUp = (e: TouchEvent) => {
    const currentTouchY = e.changedTouches.item(0)?.clientY || 0;
    const isScrollDown: boolean = oldTouchY.current - currentTouchY > 0 ? true : false;

    if (isScrollDown) {
      scrollDown();
    } else {
      scrollUp();
    }
  };

  useEffect(() => {
    const outer = outerDivRef.current;
    if (!outer) return;
    onLoad(outerDivRef.current.childElementCount);

    outer.addEventListener("wheel", wheelHandler);
    outer.addEventListener("scroll", scrollHandler);
    outer.addEventListener("touchmove", scrollHandler);
    outer.addEventListener("touchstart", onTouchDown);
    outer.addEventListener("touchend", onTouchUp);

    return () => {
      outer.removeEventListener("wheel", wheelHandler);
      outer.removeEventListener("scroll", scrollHandler);
      outer.removeEventListener("touchmove", scrollHandler);
      outer.removeEventListener("touchstart", onTouchDown);
      outer.removeEventListener("touchend", onTouchUp);
    };
  }, []);

  return <S.FPSContainer ref={outerDivRef}>{children}</S.FPSContainer>;
};
