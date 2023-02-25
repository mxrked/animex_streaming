/**
 *
 *  This is used to trigger the scroll animations
 *
 */

export default function TriggerScrollAnimations() {
  if (document.querySelector(".animate-scroll")) {
    const ANIMATE_SCROLLS = document.querySelectorAll(".animate-scroll");

    for (let i = 0; i < ANIMATE_SCROLLS.length; i++) {
      const W_INNER_HEIGHT = window.innerHeight;
      const REVEAL_TOP = ANIMATE_SCROLLS[i].getBoundingClientRect().top; // Gets the top of each element
      const REVEAL_POINT = 150;

      if (REVEAL_TOP < W_INNER_HEIGHT - REVEAL_POINT) {
        // Checking for a particular scroll class
        if (
          ANIMATE_SCROLLS[i].classList.contains("scroll-fade-yA") ||
          ANIMATE_SCROLLS[i].classList.contains("scroll-fade-yB")
        ) {
          ANIMATE_SCROLLS[i].style.opacity = 1;
          ANIMATE_SCROLLS[i].style.visibility = "visible";
          ANIMATE_SCROLLS[i].style.transform = "translateY(0)";
        }
      }
    }
  }
}
