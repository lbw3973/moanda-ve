import { useEffect, useRef, useState } from "react";
import * as S from "./style";
const homeElements = ["/Icon/main512.png", "/Icon/newProduct.png", "/Icon/gift.png", "/Logo/instagram.png"];

export const FullPageScroll = ({ children }: { children: React.ReactNode }) => {
  const outerDivRef = useRef<HTMLDivElement>(null);
  const currentPage = useRef<number>(0);
  const canScroll = useRef<boolean>(true);
  const oldTouchY = useRef<number>(0);
  const verticalBarRef = useRef<HTMLDivElement>(null);
  const [_currentPage, _setCurrentPage] = useState(0);

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
      if (outerDivRef.current.childElementCount - 1 > currentPage.current) {
        currentPage.current++;
        if (currentPage.current !== homeElements.length) {
          _setCurrentPage(currentPage.current);
        }
      }
    }
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
      if (currentPage.current > 0) {
        currentPage.current--;
        _setCurrentPage(currentPage.current);
      }
    }
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
    const verticalBar = verticalBarRef.current;
    if (!outer || !verticalBar) return;

    outer.addEventListener("wheel", wheelHandler);
    outer.addEventListener("scroll", scrollHandler);
    outer.addEventListener("touchmove", scrollHandler);
    outer.addEventListener("touchstart", onTouchDown);
    outer.addEventListener("touchend", onTouchUp);
    verticalBar.addEventListener("wheel", wheelHandler);
    verticalBar.addEventListener("scroll", scrollHandler);
    verticalBar.addEventListener("touchmove", scrollHandler);
    verticalBar.addEventListener("touchstart", onTouchDown);
    verticalBar.addEventListener("touchend", onTouchUp);

    return () => {
      outer.removeEventListener("wheel", wheelHandler);
      outer.removeEventListener("scroll", scrollHandler);
      outer.removeEventListener("touchmove", scrollHandler);
      outer.removeEventListener("touchstart", onTouchDown);
      outer.removeEventListener("touchend", onTouchUp);
      verticalBar.removeEventListener("wheel", wheelHandler);
      verticalBar.removeEventListener("scroll", scrollHandler);
      verticalBar.removeEventListener("touchmove", scrollHandler);
      verticalBar.removeEventListener("touchstart", onTouchDown);
      verticalBar.removeEventListener("touchend", onTouchUp);
    };
  }, []);

  const handleClick = (index: number) => {
    const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight;
    if (outerDivRef.current && pageHeight) {
      outerDivRef.current.scrollTo({
        top: pageHeight * index,
        left: 0,
        behavior: "smooth",
      });

      if (outerDivRef.current.childElementCount - 1 > currentPage.current) {
        currentPage.current = index;
        if (currentPage.current !== homeElements.length) {
          _setCurrentPage(currentPage.current);
        }
      }
    }
  };

  return (
    <>
      <S.FPSContainer ref={outerDivRef}>{children}</S.FPSContainer>
      <S.ProgressBarContainer ref={verticalBarRef}>
        <S.Wrapper>
          {homeElements.map((el, index) => (
            <S.Elements key={index} $isCurrent={index === _currentPage} onClick={() => handleClick(index)}>
              <img src={el} />
            </S.Elements>
          ))}
          <S.VerticalBar>
            <S.FillVerticalBar $curFilled={_currentPage} $totalEls={homeElements.length}></S.FillVerticalBar>
          </S.VerticalBar>
        </S.Wrapper>
      </S.ProgressBarContainer>
    </>
  );
};
