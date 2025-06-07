# Overview

For this activity, I have combined both Part A (JavaScript fundamentals) and Part B (React/NextJS components) into a single website. Instead of creating separate websites for each part, I fused everything into one place to show how the basic JavaScript concepts lead into building React components.

Inside the source code you’ll find comments clarifying which sections belong to Part A and which belong to Part B. 

---

# Component Breakdown

1. App Component (Main Container) 
This is the root component that structures the entire application. It manages the current user’s name (defaulting to “Student”) and renders both the welcome message and the student information section.

2. WelcomeCard Component
A presentational component that displays a welcome message. It features a clean design with a black background and pink border. Currently, it mainly renders a static title.

3. Counter Component
A small, reusable counter with plus and minus buttons. It lets you increase or decrease numbers, like for the age input. It can’t go below zero and gives visual feedback when you press the buttons. 

4. StudentInfo Component (Core Feature)
This component handles the student information form and displays submitted data. It manages input fields for the student’s name, age, course, and up to three hobbies.

    - Maintains internal state for form data, submitted data, and validation errors.
    - Validates input on submission:
    - Name and course fields are required and cannot be empty.
    - At least one hobby must be provided.
    - Age cannot be less than zero.
    - Displays error messages to guide the user in correcting invalid inputs.
    - Upon successful submission, presents the entered information in a clear, organized format.
    - Includes a reset option to clear all inputs and start fresh.  
    - The component’s layout is divided into two sections: the input form and the data display area.
---
