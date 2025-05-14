# Animation Plan for Affillia Security Website

This document outlines the animations planned for each section of the Affillia Security website to enhance user experience, engagement, and visual appeal while maintaining the professional and secure aesthetic of the brand.

## Table of Contents
1. [Animation Libraries](#animation-libraries)
2. [Hero Section](#hero-section)
3. [About Us Section](#about-us-section)
4. [Services Section](#services-section)
5. [Why Choose Us Section](#why-choose-us-section)
6. [CTA Section](#cta-section)
7. [Navigation & Footer](#navigation--footer)
8. [Global Animation Settings](#global-animation-settings)

## Animation Libraries

### Primary Library: Framer Motion
We'll use Framer Motion as our primary animation library due to its React-specific design, extensive features, and intuitive API.

**Installation:**
```bash
npm install framer-motion
```

**Documentation:** [Framer Motion Documentation](https://www.framer.com/motion/)

**Key Features:**
- Declarative animations
- Gesture support
- Layout animations
- Variants for orchestrating complex animations
- AnimatePresence for exit animations
- Scroll animations

### Secondary Library: React Spring (Optional)
For physics-based animations and specific effects, we may utilize React Spring as a complementary library.

**Installation:**
```bash
npm install @react-spring/web
```

**Documentation:** [React Spring Documentation](https://react-spring.dev/)

**Key Features:**
- Physics-based spring animations
- Smooth transitions
- Imperative API when needed

## Hero Section

### Logo and Shield Animation
- **Effect:** Subtle floating motion for the logo shield with gentle rotation
- **Implementation:** Framer Motion's animate prop with custom variants
- **Timing:** Continuous subtle movement
- **Code Example:**
```jsx
<motion.div
  initial={{ rotate: 0 }}
  animate={{ 
    rotate: [0, 2, 0, -2, 0], 
    y: [0, -5, 0, -5, 0] 
  }}
  transition={{ 
    duration: 5, 
    ease: "easeInOut", 
    repeat: Infinity 
  }}
>
  {/* Logo content */}
</motion.div>
```

### Hero Text Fade-In
- **Effect:** Staggered fade-in and slide-up for hero headline and paragraph
- **Implementation:** Framer Motion staggered animations
- **Timing:** On page load
- **Code Example:**
```jsx
const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <motion.h1 variants={heroVariants}>Your Security <span>Is Our Priority</span></motion.h1>
  <motion.p variants={heroVariants}>Personal protection services...</motion.p>
</motion.div>
```

### CTA Buttons Animation
- **Effect:** Subtle pulse and hover effects for CTA buttons
- **Implementation:** Framer Motion whileHover with custom keyframes
- **Timing:** On hover
- **Code Example:**
```jsx
<motion.a
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)" 
  }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
  Request Consultation
</motion.a>
```

## About Us Section

### Section Reveal on Scroll
- **Effect:** Fade-in and slide-up when section enters viewport
- **Implementation:** Framer Motion with useInView hook
- **Timing:** On scroll into view
- **Code Example:**
```jsx
const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.2
});

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  {/* About Us content */}
</motion.div>
```

### Image Animation
- **Effect:** Subtle scale and shadow effect
- **Implementation:** Framer Motion with custom animation
- **Timing:** On scroll into view
- **Code Example:**
```jsx
<motion.div
  initial={{ scale: 0.95, opacity: 0.8 }}
  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0.8 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <Image src="/affseclogodarktrans.png" alt="Affillia Security Team" />
</motion.div>
```

## Services Section

### Card Stagger Animation
- **Effect:** Staggered entrance for service cards
- **Implementation:** Framer Motion variants with staggerChildren
- **Timing:** When section scrolls into view
- **Code Example:**
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>
  {/* Service cards */}
  <motion.div variants={itemVariants} className="service-card">
    {/* Service 1 content */}
  </motion.div>
  <motion.div variants={itemVariants} className="service-card">
    {/* Service 2 content */}
  </motion.div>
  <motion.div variants={itemVariants} className="service-card">
    {/* Service 3 content */}
  </motion.div>
</motion.div>
```

### Card Hover Effect
- **Effect:** Scale and elevation change on hover
- **Implementation:** Framer Motion whileHover
- **Timing:** On hover
- **Code Example:**
```jsx
<motion.div
  className="service-card"
  whileHover={{ 
    scale: 1.03, 
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    y: -5
  }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  {/* Service card content */}
</motion.div>
```

### Icon Animation
- **Effect:** Subtle rotation or bounce for service icons
- **Implementation:** Framer Motion with custom keyframes
- **Timing:** On hover of parent card
- **Code Example:**
```jsx
const CardContainer = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Pass isHovered state to children */}
      {children(isHovered)}
    </motion.div>
  );
};

<CardContainer>
  {(isHovered) => (
    <>
      <motion.div
        animate={isHovered ? { y: [0, -5, 0], scale: 1.1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <svg className="service-icon">{/* Icon SVG */}</svg>
      </motion.div>
      <h3>Service Title</h3>
    </>
  )}
</CardContainer>
```

## Why Choose Us Section

### Feature Block Animation
- **Effect:** Staggered fade-in with scale for each feature block
- **Implementation:** Framer Motion with viewport detection
- **Timing:** On scroll into view
- **Code Example:**
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
>
  {featureBlocks.map((feature, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="feature-block"
    >
      {/* Feature content */}
    </motion.div>
  ))}
</motion.div>
```

### Icon Circle Animation
- **Effect:** Pulsing glow and subtle rotation
- **Implementation:** Framer Motion keyframes and CSS
- **Timing:** Continuous after reveal
- **Code Example:**
```jsx
<motion.div
  className="icon-circle"
  initial={{ opacity: 0.8 }}
  whileInView={{ 
    opacity: 1,
    boxShadow: ["0 0 0 rgba(176, 141, 87, 0.4)", "0 0 20px rgba(176, 141, 87, 0.2)", "0 0 0 rgba(176, 141, 87, 0.4)"]
  }}
  transition={{ 
    repeat: Infinity, 
    duration: 2,
    ease: "easeInOut" 
  }}
  viewport={{ once: true }}
>
  <motion.svg
    animate={{ rotate: [0, 5, 0, -5, 0] }}
    transition={{ 
      repeat: Infinity, 
      duration: 6,
      ease: "easeInOut" 
    }}
  >
    {/* Icon SVG */}
  </motion.svg>
</motion.div>
```

## CTA Section

### Background Animation
- **Effect:** Subtle gradient movement or glow effect
- **Implementation:** CSS animations enhanced with Framer Motion
- **Timing:** Continuous
- **Code Example:**
```jsx
<motion.div
  className="cta-gradient-bg"
  animate={{ 
    background: [
      "linear-gradient(60deg, rgba(26,32,44,0.9) 0%, rgba(176,141,87,0.7) 50%, rgba(26,32,44,0.9) 100%)",
      "linear-gradient(120deg, rgba(26,32,44,0.9) 0%, rgba(176,141,87,0.7) 50%, rgba(26,32,44,0.9) 100%)",
      "linear-gradient(180deg, rgba(26,32,44,0.9) 0%, rgba(176,141,87,0.7) 50%, rgba(26,32,44,0.9) 100%)",
      "linear-gradient(240deg, rgba(26,32,44,0.9) 0%, rgba(176,141,87,0.7) 50%, rgba(26,32,44,0.9) 100%)",
      "linear-gradient(300deg, rgba(26,32,44,0.9) 0%, rgba(176,141,87,0.7) 50%, rgba(26,32,44,0.9) 100%)",
      "linear-gradient(360deg, rgba(26,32,44,0.9) 0%, rgba(176,141,87,0.7) 50%, rgba(26,32,44,0.9) 100%)"
    ] 
  }}
  transition={{ 
    duration: 20, 
    ease: "linear", 
    repeat: Infinity 
  }}
>
  {/* CTA Content */}
</motion.div>
```

### Button Animation
- **Effect:** Enhanced pulse animation for the CTA button
- **Implementation:** Framer Motion with spring physics
- **Timing:** Continuous subtle animation + hover effect
- **Code Example:**
```jsx
<motion.a
  className="cta-button"
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0 0 30px rgba(176, 141, 87, 0.5)" 
  }}
  whileTap={{ scale: 0.98 }}
  animate={{ 
    boxShadow: [
      "0 0 0 rgba(176, 141, 87, 0.4)",
      "0 0 15px rgba(176, 141, 87, 0.3)",
      "0 0 0 rgba(176, 141, 87, 0.4)"
    ]
  }}
  transition={{ 
    hover: { type: "spring", stiffness: 400, damping: 10 },
    boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" }
  }}
>
  Schedule a Consultation <span className="ml-2">→</span>
</motion.a>
```

## Navigation & Footer

### Navbar Link Hover Effect
- **Effect:** Enhanced underline animation for navbar links
- **Implementation:** Framer Motion for smoother animation control
- **Timing:** On hover
- **Code Example:**
```jsx
const UnderlineLink = ({ children, ...props }) => {
  return (
    <motion.a {...props}>
      {children}
      <motion.div
        className="underline"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          bottom: -4,
          left: 0,
          right: 0,
          height: 2,
          background: "#B08D57",
          originX: 0
        }}
      />
    </motion.a>
  );
};

// Usage
<UnderlineLink href="#services">Services</UnderlineLink>
```

### Scroll-to-Section Animation
- **Effect:** Smooth scrolling with indication
- **Implementation:** Framer Motion scroll animations
- **Timing:** On click of navigation links
- **Code Example:**
```jsx
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Adjust for header height
      behavior: "smooth"
    });
  }
};

// Usage in navbar
<a 
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("services");
  }}
  className="nav-link"
>
  Services
</a>
```

## Global Animation Settings

### Reduced Motion Preferences
- **Effect:** Respect user preferences for reduced motion
- **Implementation:** Framer Motion's useReducedMotion hook
- **Timing:** Applied globally
- **Code Example:**
```jsx
import { useReducedMotion } from "framer-motion";

function MyComponent() {
  const shouldReduceMotion = useReducedMotion();
  
  const animationSettings = shouldReduceMotion 
    ? {
        // Simplified animations for reduced motion preference
        transition: { duration: 0 },
        animate: { opacity: 1 }
      }
    : {
        // Full animations
        transition: { type: "spring", stiffness: 300, damping: 15 },
        animate: { opacity: 1, y: 0 }
      };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      {...animationSettings}
    >
      Content
    </motion.div>
  );
}
```

### Performance Considerations
- Use `willChange` CSS property strategically
- Leverage hardware acceleration for complex animations
- Avoid animating layout properties when possible (prefer opacity and transform)
- Use the `layoutId` prop for shared element transitions

### Animation Timing Guidelines
- Entrance animations: 300-600ms
- Hover effects: 150-300ms
- Exit animations: 200-400ms
- Loop animations: 2-10s depending on effect
- Stagger delays: 50-150ms between items

---

This animation plan provides a comprehensive framework for implementing engaging but professional animations throughout the Affillia Security website. All animations should enhance the luxury security brand image while maintaining a sophisticated user experience. 