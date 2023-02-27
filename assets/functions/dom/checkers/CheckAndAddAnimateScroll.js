/**
 *
 *  This is used to switch between a scroll or a standard fade animation
 *  based on the device the user is on
 *
 */

export default function CheckAndAddAnimateScroll(
  // win,
  element,
  scrollFadeAnim,
  standardFadeAnim
) {
  // Old Code
  /*
  
    // Desktop or larger
  if (win.innerWidth >= 1024) {
    document.getElementById(element).classList.add(standardFadeAnim); // Indicates element will be a standard animation

    // Removing the scroll classes
    if (document.getElementById(element).classList.contains("animate-scroll")) {
      document.getElementById(element).classList.remove("animate-scroll");
    }
    if (document.getElementById(element).classList.contains(scrollFadeAnim)) {
      document.getElementById(element).classList.remove(scrollFadeAnim);
    }
  }

  // Mobile or smaller
  if (win.innerWidth < 1024) {
    document.getElementById(element).classList.add("animate-scroll"); // Indicates element will be a scroll animation
    document.getElementById(element).classList.add(scrollFadeAnim);

    // Removing the standard animation class
    if (document.getElementById(element).classList.contains(standardFadeAnim)) {
      document.getElementById(element).classList.remove(standardFadeAnim);
    }
  }
  
  */

  document.getElementById(element).classList.add("animate-scroll"); // Indicates element will be a scroll animation
  document.getElementById(element).classList.add(scrollFadeAnim);

  // Removing the standard animation class
  if (document.getElementById(element).classList.contains(standardFadeAnim)) {
    document.getElementById(element).classList.remove(standardFadeAnim);
  }
}
