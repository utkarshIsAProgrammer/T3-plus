# 🧩 BillSplit‑Pro Breakdown

## 1. **Input Form (Bill + People)**

-   **Learn:**
    -   HTML basics: `<form>`, `<input>`, `<button>`
    -   DOM selection (`document.querySelector`)
    -   Event listeners (`form.addEventListener("submit", ...)`)
-   **Time to implement:** 1–2 days
-   **Direct product task:** Create a form where user enters bill amount + number of people.

---

## 2. **Core Calculation Logic**

-   **Learn:**
    -   JS functions, parameters, return values
    -   Math operations, rounding (`Math.round`, `toFixed`)
    -   Edge case handling (e.g., 100 ÷ 3 = 33.33 → adjust last person’s share)
    -   Writing unit tests with Jest/Vitest
-   **Time to implement:** 3–4 days
-   **Direct product task:** Write a `splitBill(amount, people)` function and test it with different inputs.

---

## 3. **Result Display**

-   **Learn:**
    -   DOM manipulation (`innerText`, `appendChild`)
    -   Template literals for dynamic HTML
    -   Error handling (`try/catch`) for invalid inputs
-   **Time to implement:** 2 days
-   **Direct product task:** Show each person’s share in a list or table after form submission.

---

## 4. **Edge Cases & Validation**

-   **Learn:**
    -   Form validation (`input.value`, `isNaN`, empty strings)
    -   Conditional rendering (show error messages only when needed)
-   **Time to implement:** 2–3 days
-   **Direct product task:** Prevent submission if inputs are invalid, show friendly error messages.

---

## 5. **Persistence (Save Last Bill)**

-   **Learn:**
    -   LocalStorage (`localStorage.setItem`, `getItem`)
    -   JSON stringify/parse
-   **Time to implement:** 2 days
-   **Direct product task:** Save last entered bill + people count, auto‑load on refresh.

---

## 6. **UI Polish**

-   **Learn:**
    -   CSS basics (flexbox, spacing, colors)
    -   Accessibility basics (labels, focus states)
-   **Time to implement:** 2–3 days
-   **Direct product task:** Make the app clean, readable, and usable on mobile.

---

## 7. **Stretch Features (Optional)**

-   **Ideas:**
    -   Uneven splits (percentages/weights)
    -   Export results as JSON
    -   IndexedDB for storing multiple past bills
-   **Time to implement:** 1 week (pick 1–2 features)

---

# ⏳ Suggested Timeline (Block‑0, ~3–4 weeks)

| Week | Focus Area                  | Deliverable                          |
| ---- | --------------------------- | ------------------------------------ |
| 1    | Input Form + Core Logic     | Working split function in console    |
| 2    | Result Display + Validation | Full working app with UI             |
| 3    | Persistence + Polish        | App remembers last bill, looks clean |
| 4    | Stretch Features            | Optional advanced features           |

---
