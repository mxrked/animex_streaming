/**
 *
 *  This is used to trigger the exit animations
 *
 */

export default function TriggerExitAnimations() {
  // Hiding elements
  if (document.querySelector(".fm-motion")) {
    document.querySelectorAll(".fm-motion").forEach((m) => {
      m.style.opacity = 0;
    });
  }

  // Hide Page
  setTimeout(() => {
    document.querySelector(".page").style.opacity = 0;
  }, 400);
}
