# 🚀 Dev Stack Builder

Dev Stack Builder is a modern, interactive web application built to help developers easily explore, compare, and assemble their ideal software technology stack for upcoming projects.

---

## 📝 Project Description
Choosing the right technology stack can be confusing. Dev Stack Builder simplifies this process by presenting various popular technologies categorized into Frontend, Backend, Database, Languages, Styling, DevOps, and Tools. Users can evaluate technologies based on ratings and difficulty levels, add them to their personal stack sidebar, and manage their selection in real-time with visual toast alerts.

---

## 🛠️ Technologies Used
- **Frontend Framework:** React.js (v18+) with TypeScript
- **Build Tool:** Vite
- **Styling & UI:** Tailwind CSS & DaisyUI
- **Alert Notifications:** React-Toastify
- **Data Source:** Custom JSON Data (`technologies.json`)

---

## ✨ Key Features
1. **Interactive Stack Selection:** Add technologies seamlessly to your stack. Selected cards automatically disable the action button and display a `✓ Added to Stack` state to prevent duplicate entries.
2. **Real-time Alert Notifications:** Powered by `react-toastify` to provide instant feedback for adding items, attempting duplicate additions, removing individual items, and clearing the entire stack.
3. **Shared Gradient Brand Theme:** Styled using a unified brand gradient (`orange → pink → violet`) applied across brand titles, hero highlights, and primary actions.
4. **Full Responsiveness & Loading State:** Designed for mobile, tablet, and desktop viewports, featuring an interactive loading spinner during initial data fetch.

---

## ❓ React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML-like markup directly inside our JavaScript code. 


---

### 2. What is the difference between props and state?

- **Props (Properties):** Read-only data passed from a parent component down to a child component. A child component cannot modify the props it receives.
- **State:** Data created and managed locally within a component. Unlike props, state is mutable (can be changed over time) using setter functions (e.g., `setState`), and whenever state changes, React automatically re-renders the component to update the UI.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook is used to declare and manage reactive state inside functional components.

In this project, I used `useState` in the `TechContainer` component to keep track of three key things:
1. `technologies`: Stores the list of technologies fetched from the JSON file.
2. `selectedTechs`: Stores the list of technologies currently added to the user's stack.
3. `isLoading`: Tracks whether data is still being loaded to show or hide the loading spinner.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook handles side effects in React components, such as fetching data from an external API, subscribing to events, or interacting directly with the browser DOM.

In this project, I used `useEffect` to fetch the `technologies.json` file when the component first mounts onto the screen. This ensures the data is loaded automatically without causing infinite re-render loops.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React uses the unique `key` prop to keep track of individual items in a list. 


---

### 6. What is conditional rendering? Show one place you used it.
**Answer:**
Conditional rendering means showing or hiding specific UI components or markup based on certain conditions or state values.

One place I used conditional rendering in this project is in the `SelectedStack` component to show an empty state message when no items are selected, and render the item list when `selectedTechs.length > 0`:

```tsx
{selectedTechs.length === 0 ? (
  <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center my-4">
    <p className="text-gray-400 text-sm">Your stack is empty.</p>
  </div>
) : (
  <div className="space-y-3 mb-6 max-h-[380px] overflow-y-auto pr-1">
    {/* Render selected technology items */}
  </div>
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent to Child: Data is passed down directly using props. For example, <TechCard tech={singleTech} />.

Child to Parent: The parent passes a callback function down to the child as a prop. When an event occurs in the child (like clicking an "Add to Stack" button), the child invokes that function and passes data back as arguments to the parent. For example, triggering onSelect(tech) inside the child calls the parent's handleSelectTech function.
