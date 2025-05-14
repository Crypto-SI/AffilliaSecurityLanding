/**
 * @fileoverview Smooth scrolling utility functions
 * @description Provides utilities for smooth scrolling to page sections
 */

/**
 * Scrolls smoothly to the element with the given ID
 * 
 * @param {string} id - The ID of the element to scroll to (without the # prefix)
 * @param {number} offset - Optional offset from the top of the element (e.g., for fixed headers)
 * @param {Function} callback - Optional callback to run after scrolling is complete
 */
export function scrollToElement(id: string, offset: number = 0, callback?: () => void): void {
  // Handle the case where id might include the # character
  const targetId = id.startsWith('#') ? id.substring(1) : id;
  
  // Find the target element
  const element = document.getElementById(targetId);
  
  if (!element) {
    console.warn(`Element with id "${targetId}" not found.`);
    return;
  }
  
  // Calculate the element's position accounting for the offset
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - offset;
  
  // Scroll to the element
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
  
  // If a callback is provided, wait for scrolling to complete
  if (callback) {
    // Most scroll animations take less than 1 second
    setTimeout(callback, 1000);
  }
}

/**
 * Handles smooth scrolling for hash links
 * 
 * @param {React.MouseEvent<HTMLAnchorElement>} e - Click event
 * @param {string} targetId - Target element ID (can include # prefix)
 * @param {number} offset - Offset from the top in pixels
 * @param {boolean} updateHash - Whether to update the URL hash
 * @param {Function} callback - Optional callback after scrolling completes
 */
export function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string,
  offset: number = 70,
  updateHash: boolean = true,
  callback?: () => void
): void {
  // Prevent default link behavior
  e.preventDefault();
  
  // Extract the id without the # if it exists
  const id = targetId.startsWith('#') ? targetId.substring(1) : targetId;
  
  // Scroll to the element
  scrollToElement(id, offset, () => {
    // Update URL hash if requested
    if (updateHash) {
      history.pushState(null, '', `#${id}`);
    }
    
    // Call optional callback
    if (callback) {
      callback();
    }
  });
} 