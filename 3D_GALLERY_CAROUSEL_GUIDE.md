# 3D Gallery Carousel Implementation Guide

This guide explains how to create a 3D stacked card gallery carousel using React, TypeScript, Framer Motion, and Tailwind CSS.

## Overview

The 3D gallery carousel displays multiple image categories in a visually appealing stacked card layout. Each category shows multiple images stacked on top of each other with slight rotations and offsets, creating a depth effect. The carousel features three stacks: a main center stack and two smaller side stacks.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Data Structure](#data-structure)
4. [Component Architecture](#component-architecture)
5. [Key Features](#key-features)
6. [Implementation Details](#implementation-details)
7. [Animation System](#animation-system)
8. [Styling](#styling)
9. [Navigation & Interaction](#navigation--interaction)

## Prerequisites

- React 18+
- TypeScript
- Framer Motion 11+
- Tailwind CSS 4+
- Lucide React (for icons)

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Gallery.tsx          # Main gallery component
│   │   ├── GalleryDetail.tsx    # Detail page component
│   │   └── figma/
│   │       └── ImageWithFallback.tsx
│   └── data/
│       └── gallery.ts           # Gallery data with images
```

## Data Structure

### Gallery Data File (`gallery.ts`)

Each gallery item contains:

```typescript
{
  id: string;                    // Unique identifier
  category: string;               // Category name
  image: string;                 // Cover image (first image)
  images: string[];              // Array of all images in category
  description: string;            // Short description
  detailedContent?: {            // Optional detailed content
    overview?: string;
    benefits?: string[];
    procedure?: string;
    recovery?: string;
  };
}
```

### Image Organization

Images are organized by folder structure:
- Each folder = One category
- All images from a folder are imported and added to the `images` array
- First image becomes the `image` (cover image)

**Example:**
```typescript
// Import images from folder
import rhinoplasty1 from '../../assets/Rhinoplasty/Rhinoplasty.jpg';
import rhinoplasty2 from '../../assets/Rhinoplasty/image2.JPG';
// ... more imports

{
  id: 'rhinoplasty',
  category: 'Rhinoplasty',
  image: rhinoplasty1,  // Cover image
  images: [rhinoplasty1, rhinoplasty2, ...], // All images
  // ...
}
```

## Component Architecture

### Main Gallery Component (`Gallery.tsx`)

The component consists of:

1. **State Management**
   - `currentIndex`: Tracks which category is currently centered
   - `isPaused`: Controls auto-play pause state
   - `isInView`: Tracks if component is visible

2. **StackedCardStack Component**
   - Displays multiple images as stacked cards
   - Handles positioning (left, center, right)
   - Manages card animations and interactions

3. **Auto-play System**
   - Automatically advances to next category every 5 seconds
   - Pauses on hover or user interaction

## Key Features

### 1. Stacked Card Layout

Each category displays multiple images stacked on top of each other:

- **Center Stack**: Shows 5 images (main focus)
- **Left Stack**: Shows 3 images (smaller, offset left)
- **Right Stack**: Shows 4 images (smaller, offset right)

### 2. 3D Card Effects

Cards are positioned with:
- **Rotation**: Each card has a slight rotation (`±4 degrees`)
- **Offset**: Cards are offset horizontally and vertically
- **Opacity**: Cards behind fade out progressively
- **Z-index**: Proper layering for depth

### 3. Auto-rotation

The carousel automatically cycles through categories:
- 5-second intervals
- Pauses on hover
- Resumes after user interaction

## Implementation Details

### StackedCardStack Component

```typescript
function StackedCardStack({ item, stackPosition, onClick, isInView }) {
  // Determine how many images to show
  const maxImages = stackPosition === 'center' ? 5 : 
                    stackPosition === 'left' ? 3 : 4;
  const imagesToShow = item.images?.slice(0, maxImages) || [item.image];
  
  // Calculate positioning
  const scale = stackPosition === 'center' ? 1 : 0.7;
  const translateX = stackPosition === 'left' ? -180 : 
                     stackPosition === 'right' ? 180 : 0;
  const opacity = stackPosition === 'center' ? 1 : 0.6;
  
  // Render stacked cards
  return (
    <motion.div>
      {imagesToShow.map((img, index) => {
        // Calculate card positioning
        const offsetX = (index - (imagesToShow.length - 1) / 9) * 20;
        const offsetY = index * 5;
        const rotation = (index - (imagesToShow.length - 1) / 3) * 4;
        const cardOpacity = 1 - (index * 0.05);
        
        return (
          <motion.div
            style={{
              x: offsetX,
              y: offsetY,
              rotate: rotation,
              opacity: cardOpacity,
              zIndex: imagesToShow.length - index,
            }}
          >
            {/* Card content */}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
```

### Card Positioning Math

**Horizontal Offset:**
```typescript
const offsetX = (index - (imagesToShow.length - 1) / 9) * 20;
```
- Centers cards around the middle
- Spreads them horizontally

**Vertical Stacking:**
```typescript
const offsetY = index * 5;
```
- Each card is offset 5px down from the previous
- Creates the stacked effect

**Rotation:**
```typescript
const rotation = (index - (imagesToShow.length - 1) / 3) * 4;
```
- Cards rotate ±4 degrees from center
- Creates a fanned-out appearance

**Opacity:**
```typescript
const cardOpacity = 1 - (index * 0.05);
```
- Each card behind fades by 5%
- Creates depth perception

## Animation System

### Framer Motion Variants

The component uses animation variants for organized animations:

```typescript
const containerVariants = {
  hidden: { opacity: 0, y: 50, x: translateX, scale: 0.8 },
  visible: {
    opacity: isInView ? opacity : 0,
    y: isInView ? 0 : 50,
    x: translateX,
    scale,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay: stackPosition === 'center' ? 0.4 : 0.5,
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, rotate: -5 },
  visible: (index: number) => ({
    opacity: 1 - (index * 0.05),
    y: 0,
    rotate: (index - (imagesToShow.length - 1) / 3) * 4,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
      delay: index * 0.08,
    },
  }),
};
```

### Animation Features

1. **Staggered Animations**: Cards animate in sequence
2. **Spring Physics**: Natural, bouncy motion
3. **Hover Effects**: Cards respond to user interaction
4. **Smooth Transitions**: When categories change

## Styling

### Container Styling

```typescript
<div
  className="relative h-[600px] md:h-[650px] flex items-center justify-center overflow-visible"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
```

### Card Styling

```typescript
<motion.div
  className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border-2 border-[#d4af37]/30"
  style={{
    x: offsetX,
    y: offsetY,
    zIndex,
    transformOrigin: 'center center',
  }}
>
```

### Color Scheme

- **Background**: `#0a1628` (Dark blue)
- **Card Background**: `#1a2942` (Lighter blue)
- **Accent**: `#d4af37` (Gold)
- **Text**: White with gray variations

## Navigation & Interaction

### Click Handlers

1. **Center Stack Click**: Navigates to detail page
   ```typescript
   const handleCenterClick = () => {
     const item = galleryItems[currentIndex];
     window.location.hash = `gallery-${item.id}`;
   };
   ```

2. **Side Stack Click**: Moves that category to center
   ```typescript
   const handleStackClick = (index: number) => {
     setIsPaused(true);
     setCurrentIndex(index);
     setTimeout(() => setIsPaused(false), 4000);
   };
   ```

### Navigation Indicators

- Dots at the bottom show current position
- Click any dot to jump to that category
- Active dot is highlighted in gold

## Auto-play System

```typescript
useEffect(() => {
  if (!isInView || isPaused) return;

  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  }, 5000); // Auto-advance every 5 seconds

  return () => clearInterval(interval);
}, [isInView, isPaused]);
```

**Features:**
- Only plays when component is in view
- Pauses when user hovers or interacts
- Automatically resumes after interaction timeout

## Image Handling

### ImageWithFallback Component

Uses a custom component that:
- Handles image loading errors
- Shows fallback on error
- Maintains aspect ratio

### Object Fit

- **Gallery Cards**: `object-contain` - Images fit without cropping
- **Detail Page**: `object-contain` - Full images visible

## Best Practices

1. **Performance**
   - Use `AnimatePresence` for smooth transitions
   - Lazy load images when possible
   - Optimize image sizes

2. **Accessibility**
   - Add `aria-label` to buttons
   - Keyboard navigation support
   - Screen reader friendly

3. **Responsive Design**
   - Adjust stack sizes for mobile
   - Reduce number of visible cards on small screens
   - Touch-friendly interactions

4. **Animation Performance**
   - Use `transform` and `opacity` for animations (GPU accelerated)
   - Avoid animating `width` or `height`
   - Use `will-change` sparingly

## Customization Options

### Adjust Stack Sizes

```typescript
const maxImages = stackPosition === 'center' ? 5 :  // Change these numbers
                  stackPosition === 'left' ? 3 : 
                  stackPosition === 'right' ? 4;
```

### Change Auto-play Speed

```typescript
const interval = setInterval(() => {
  setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
}, 5000); // Change this value (in milliseconds)
```

### Adjust Card Spacing

```typescript
const offsetX = (index - (imagesToShow.length - 1) / 9) * 20; // Change 20
const offsetY = index * 5; // Change 5
const rotation = (index - (imagesToShow.length - 1) / 3) * 4; // Change 4
```

### Modify Stack Positions

```typescript
const translateX = stackPosition === 'left' ? -180 :  // Change -180
                   stackPosition === 'right' ? 180 : 0; // Change 180
```

## Troubleshooting

### Images Not Showing
- Check image import paths
- Verify file extensions match (case-sensitive)
- Ensure images exist in the assets folder

### Animation Not Smooth
- Reduce number of cards if performance is poor
- Check browser console for errors
- Verify Framer Motion version compatibility

### Cards Overlapping Incorrectly
- Adjust `zIndex` calculations
- Check `offsetX` and `offsetY` values
- Verify `transformOrigin` is set correctly

## Future Enhancements

1. **Touch Gestures**: Swipe support for mobile
2. **Keyboard Navigation**: Arrow keys to navigate
3. **Image Lazy Loading**: Load images as needed
4. **Transition Effects**: Add more animation options
5. **Fullscreen Mode**: Expand gallery to fullscreen

## Conclusion

This 3D gallery carousel provides an engaging way to showcase multiple image categories. The stacked card design creates visual depth, while the auto-play and smooth animations keep users engaged. The implementation is flexible and can be customized to fit different design needs.
