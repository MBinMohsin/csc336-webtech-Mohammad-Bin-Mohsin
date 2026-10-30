# Midterm Exam Submission

**Name:** [Insert Your Name Here]
**Roll Number:** [Insert Your Full Roll Number, e.g., FA24-BCS-055]

## Personal Exam Parameters
* **N (Last two digits):** 55
* **Breakpoint (BP):** 655px (600 + 55)
* **Accent Hue (H):** 25 degrees -> `hsl(25, 70%, 45%)` ((55 * 7) mod 360)
* **Categories (K):** 4 ((55 mod 3) + 3)
* **Sticky Offset:** 85px ((55 mod 40) + 70)
* **Premium Threshold:** Rs. 5500 (55 * 100)

## Files Changed & Summary of Work

### Task 1: CSS-only Category Filter
**Files changed:** `index.html`, `css/style.css`
*What and Why:* Added 5 radio buttons and styled labels above the product grid. Assigned `data-category` to each product card and used the CSS `:checked` pseudo-class with the general sibling combinator (`~`) to hide non-matching cards using `display: none !important`. This allows Bootstrap's flexbox grid to automatically reflow without leaving empty gaps, all without JavaScript.

### Task 2: Product Page Layout with a Sticky Details Box
**Files changed:** `product.html`, `css/style.css`
*What and Why:* Reworked the product page layout using CSS Grid (`grid-template-areas`). Kept it as a stacked single column for mobile (below 655px). From 655px and wider, it switches to a two-column layout where the details panel is assigned `position: sticky` with a `top` value of 85px (and a custom box shadow) so it floats smoothly alongside the scrolling description.

### Task 3: JavaScript Live Search and Price Sort
**Files changed:** `index.html`, `script.js`, `css/style.css`
*What and Why:* Created `script.js` to dynamically add "Premium" badges to products costing > 5500 on load. Implemented a combined live text search that works in tandem with the Task 1 CSS filters, and a toggleable price sort that reads DOM text, converts it to integers using RegEx, and directly reorders the HTML elements using `appendChild` without destroying the page structure.

## AI Tools Used
* Gemini 3.1 Pro (for layout strategy, CSS grid calculations, and pure JS DOM manipulation code).