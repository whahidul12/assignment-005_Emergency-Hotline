### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

-   **Ans:** getElementId is used to select a single elemnt. getElementsByCalssName is used when there are many class names and we need list of live html collection (change when DOM change) or select a specific class name. on the other hand querySlector is used when we need a specific element(if it is an ID than it select the ID but if it is a Class Name than it select the first one). and querySelectorAll is used to select all elemnts that match a specific ID or Class Name.

2. How do you **create and insert a new element into the DOM**?

-   **Ans:** use document.createElement("Tag Name"). this return an empty tag element, that we can use and append with other tags by the help of Tag.appendChild("created tag element").

3. What is **Event Bubbling** and how does it work?

-   **Ans:** event bubbling means, suppose i have a button inside a div tag, that div tag inside a main tag, main tag is inside a body tag. now when i click on that button first the button eventListener will trigger, after than div eventListener will trigger, than main eventListener will trigger, than body eventListener will trigger, lastly document. this behaiver is like a bubble inside a bubble. great for dynamic content.

4. What is **Event Delegation** in JavaScript? Why is it useful?

-   **Ans:** i think it is the opposite of event bubbling. insted of adding multiple eventListeners to the childs, it means adding a single eventListeners to the taget parent elemet and select what to do with child from there by the help of eventListener's funtion. it is very useful because less eventListeners means better performence.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

-   **Ans:** As far as i know preventDefault prevent browser default behaivior, like: form submission, link navigation etc. but does not affect event bubbling or propagation. and stopPropagation stop event from bubbling up to parent elements, thats it.

---

## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-005

### 📅 Deadline For 60 marks: 29th August, 2025 (11:59 pm ⏱️)

### 📅 No Deadline For 50 marks

### 📅 Deadline For 30 marks: Any time after 29th August.

---

## ✅ Main Requirements (50 Marks)

### 1. Navbar

-   **Website name & logo** on the left as Figma
-   **Heart icon, coin count (default-100), and Copy Count** on the right as Figma

---

### 2. Hero Section

-   **Background Gradient** in the Whole Section
-   **A Relevant Logo** at the top-center
-   **Section Title** in the center
-   **A Relevant Slogan** in the bottom Center

---

### 2. Main Section

This Section will have layout as figma

<table border=1 width="100%" cellpadding="50">
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
 </tr>
 <tr>
    <td colspan=9 >Card Section</td>
    <td colspan=3>History Section</td>
 </tr>
</table>

### Emergency Hotline Section

-   **Show Minimum 6 cards**. Each card will contain:
    -   Icon or Image
    -   Relevant Name
    -   Relevant Name in English
    -   Hotline number for calling
    -   Category Badge
    -   💗 icon at left
    -   **2 buttons** at the bottom: Copy and Call with icons as Figma

### History Section

-   **A white Background** in the whole section
-   **History Title with icon** at the top-left as Figma
-   **Clear History Button** at the top-right as Figma

---

### 3. Responsiveness (5 Marks)

-   Website should be fully **responsive for mobile devices** (implementation up to you)

---

## Functionalities

### 4. Heart Icons

-   Clicking on the 💗 **heart icon** of any card will increase the count in the Navbar

---

### 5. Call Buttons

-   On clicking a card's **Call Button**, following actions will happen:
    -   Show an **alert** with a message including the service name and number
    -   Each call will **cut 20 coins**. Reduce Coin after each click.
    -   If coins are less than 20, show a relevant alert and terminate the process.
    -   Add this service into the **Call History section** with:
        -   Service name
        -   Service number

---

### 5. Call History Section

-   Show all called services with name & number. This will empty initially. when call button clicked it will filled dynamically.
-   A **Clear History button** on the right
-   Clicking this button will remove all data from call history

---

## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

## 🧪 Challenges Part (10 Marks)

-   On clicking the **Copy button**, show an alert and **increase the copy count** (3 Marks)

-   Hotline number will be **copied on click** so it can be pasted anywhere (4 Marks)

💡Hint: You can ask for Help from `ChatGPT` Mamma . Just copy the below prompt , generate answer. use it with your own way.

```bash
I have a card with some text and a button inside it. I want that when a user clicks the button, some specific text from the card is copied to the clipboard using JavaScript. Please provide the code and explain it step by step.
```

-   After clicking on the **Call button**, the **exact time of the call** will be shown in the Call History section (3 Marks)

💡Hint: Search Google with that below question

```bash
How to get current local time in js
```

---

## ⚙️ Technology Stack

-   HTML
-   CSS ( Vanilla , Tailwind CSS , DaisyUI , Others - wheatever you like )
-   JavaScript ( Vanilla only. No Framework / Library Allowed )

---

## 📌 Rules

-   ✅ Minimum **5 meaningful commits** required
-   ❌ No Lorem Ipsum or dummy placeholder text. Use **relevant content only**

---

## 🔗 What to Submit

-   📂 **GitHub Repository**
-   🌐 **Live Link**

---

# Let's Code and Achieve your Dream 🎯
