/**
 *
 *  This is used to trigger the exit animations
 *
 */

function RemoveScrollAnimateClass(element) {
  if (element.classList.contains("scroll-animate")) {
    element.classList.remove("scroll-animate");
  }
}

export default function TriggerExitAnimations() {
  // Disabling interactivity
  document.body.style.overflowY = "hidden";
  document.body.style.pointerEvents = "none";

  // page
  setTimeout(() => {
    document.querySelector(".page").classList.toggle("hide-page");
  }, 1100);

  // animate-fade-in
  if (document.querySelector(".animate-fade-in")) {
    const ANIMATE_FADE_INS = document.querySelectorAll(".animate-fade-in");

    setTimeout(() => {
      ANIMATE_FADE_INS.forEach((anim) => {
        RemoveScrollAnimateClass(anim);

        anim.style.opacity = 0;
        anim.style.visibility = "hidden";
      });
    }, 900);
  }
  // animate-fade-in-sub
  if (document.querySelector(".animate-fade-in-sub")) {
    const ANIMATE_FADE_IN_SUBS = document.querySelectorAll(
      ".animate-fade-in-sub"
    );

    setTimeout(() => {
      ANIMATE_FADE_IN_SUBS.forEach((anim) => {
        RemoveScrollAnimateClass(anim);

        anim.style.opacity = 0;
        anim.style.visibility = "hidden";
      });
    }, 500);
  }

  // animate-fade-left
  if (document.querySelector(".animate-fade-left")) {
    const ANIMATE_FADE_LEFTS = document.querySelectorAll(".animate-fade-left");

    setTimeout(() => {
      ANIMATE_FADE_LEFTS.forEach((anim) => {
        RemoveScrollAnimateClass(anim);

        anim.style.transform = "translateX(100%)";
        anim.style.opacity = 0;
        anim.style.visibility = "hidden";
      });
    }, 900);
  }
  // animate-fade-left-sub
  if (document.querySelector(".animate-fade-left-sub")) {
    const ANIMATE_FADE_LEFT_SUBS = document.querySelectorAll(
      ".animate-fade-left-sub"
    );

    setTimeout(() => {
      ANIMATE_FADE_LEFT_SUBS.forEach((anim) => {
        RemoveScrollAnimateClass(anim);

        anim.style.transform = "translateX(100%)";
        anim.style.opacity = 0;
        anim.style.visibility = "hidden";
      });
    }, 500);
  }

  // animate-fade-right
  if (document.querySelector(".animate-fade-right")) {
    const ANIMATE_FADE_RIGHTS = document.querySelectorAll(
      ".animate-fade-right"
    );

    setTimeout(() => {
      ANIMATE_FADE_RIGHTS.forEach((anim) => {
        RemoveScrollAnimateClass(anim);

        anim.style.transform = "translateX(-100%)";
        anim.style.opacity = 0;
        anim.style.visibility = "hidden";
      });
    }, 900);
  }
  // animate-fade-right-sub
  if (document.querySelector(".animate-fade-right-sub")) {
    const ANIMATE_FADE_RIGHT_SUBS = document.querySelectorAll(
      ".animate-fade-right-sub"
    );

    setTimeout(() => {
      ANIMATE_FADE_RIGHT_SUBS.forEach((anim) => {
        RemoveScrollAnimateClass(anim);

        anim.style.transform = "translateX(-100%)";
        anim.style.opacity = 0;
        anim.style.visibility = "hidden";
      });
    }, 500);
  }

  // animate-fade-up
  if (document.querySelector(".animate-fade-up")) {
    const ANIMATE_FADE_UPS = document.querySelectorAll(".animate-fade-up");

    setTimeout(() => {
      ANIMATE_FADE_UPS.forEach((anim) => {
        RemoveScrollAnimateClass(anim);

        anim.style.transform = "translateY(-50px)";
        anim.style.opacity = 0;
        anim.style.visibility = "hidden";
      });
    }, 900);
  }
  // animate-fade-up-sub
  if (document.querySelector(".animate-fade-up-sub")) {
    const ANIMATE_FADE_UP_SUBS = document.querySelectorAll(
      ".animate-fade-up-sub"
    );

    setTimeout(() => {
      ANIMATE_FADE_UP_SUBS.forEach((anim) => {
        RemoveScrollAnimateClass(anim);

        anim.style.transform = "translateY(-50px)";
        anim.style.opacity = 0;
        anim.style.visibility = "hidden";
      });
    }, 500);
  }

  // animate-fade-down
  if (document.querySelector(".animate-fade-down")) {
    const ANIMATE_FADE_DOWNS = document.querySelectorAll(".animate-fade-down");

    setTimeout(() => {
      ANIMATE_FADE_DOWNS.forEach((anim) => {
        RemoveScrollAnimateClass(anim);

        anim.style.transform = "translateY(50px)";
        anim.style.opacity = 0;
        anim.style.visibility = "hidden";
      });
    }, 900);
  }
  // animate-fade-down-sub
  if (document.querySelector(".animate-fade-down-sub")) {
    const ANIMATE_FADE_DOWN_SUBS = document.querySelectorAll(
      ".animate-fade-down-sub"
    );

    setTimeout(() => {
      ANIMATE_FADE_DOWN_SUBS.forEach((anim) => {
        RemoveScrollAnimateClass(anim);

        anim.style.transform = "translateY(50px)";
        anim.style.opacity = 0;
        anim.style.visibility = "hidden";
      });
    }, 500);
  }
}
