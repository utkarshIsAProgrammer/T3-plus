# 💸 BillSplit‑Pro

A simple, interactive web app that helps you split bills fairly among friends, with built‑in handling for rounding issues, edge cases, and extra features like copy, share, and export.

## This is the **Foundations Release (v1.0)** — built entirely with **vanilla JavaScript, HTML, and CSS** as part of my full‑stack learning roadmap (Block‑0).

## 🚀 Features

-   ✅ Enter bill amount and number of diners
-   ✅ Handles rounding differences (last person pays the adjustment)
-   ✅ Input validation with clear error messages
-   ✅ Dynamic result display (no page reloads)
-   ✅ Copy result to clipboard
-   ✅ Share result via Web Share API (mobile‑friendly)
-   ✅ Export result as a `.txt` file
-   ✅ Clean, responsive UI

---

## 🧩 Tech Stack

-   **JavaScript (ES6+)** → core logic, DOM manipulation, validation
-   **HTML5** → semantic structure, forms, labels
-   **CSS3** → styling and layout
-   **Browser APIs** → LocalStorage (planned), Clipboard API, Web Share API, File export

---

## 📸 Demo

[📷 Product Image](./assets/images/product-screenshot.png)
[🔗 Live Link](https://panchajanyacodes.github.io/BillSplit-Pro-v1.0-Foundation-Release/)

---

---

## 🧪 Example Scenarios

-   Bill = `100`, Diners = `3` → Each pays ₹33, last person pays ₹34
-   Bill = `99.99`, Diners = `3` → Each pays ₹33.33
-   Bill = `100`, Diners = `1` → Single diner pays ₹100

---

## 📜 License

This project is open‑sourced under the MIT License.

---

## 🙌 Acknowledgements

Built as part of my **Full‑Stack Product Engineer Roadmap (Block‑0)**.

---
