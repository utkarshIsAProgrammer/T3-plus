# ✅ Validations & Edge Cases for BillSplit‑Pro

## 1. **Bill Amount Input**

-   **Empty input** → Show error: “Please enter a bill amount.”
-   **Non‑numeric input** → Reject strings like `"abc"`, `"12a"`.
-   **Negative numbers** → Disallow `-500`.
-   **Zero bill** → Decide: either reject or return all shares as `0`.
-   **Very large numbers** → Ensure no overflow or formatting issues (e.g., `999999999`).
-   **Decimal precision** → Handle `99.99` properly when splitting.

---

## 2. **Number of People Input**

-   **Empty input** → Show error.
-   **Non‑numeric input** → Reject `"five"`.
-   **Zero people** → Prevent division by zero.
-   **Negative people** → Invalid.
-   **One person** → Should just return the full bill amount.
-   **Very large number of people** → Ensure UI doesn’t break (e.g., splitting among 1000 people).

---

## 3. **Calculation Logic**

-   **Rounding issues**
    -   Example: ₹100 ÷ 3 = 33.33 → total = 99.99, not 100.
    -   Solution: Adjust last person’s share to make total match bill.
-   **Uneven splits (future feature)** → If weights/percentages don’t add up to 100%, show error.
-   **Floating‑point quirks** → JS can produce `0.30000000000000004`. Use `toFixed(2)`.

---

## 4. **Form Submission**

-   **Multiple submits without clearing** → Should overwrite results, not append endlessly.
-   **Accidental refresh** → Use LocalStorage to restore last values.
-   **Blank fields** → Prevent form submission until all required fields are valid.

---

## 5. **UI/UX Validations**

-   **Error messages** → Clear, specific, and disappear once corrected.
-   **Accessibility** → Inputs must have labels, errors should be screen‑reader friendly.
-   **Mobile input types** → Use `type="number"` for numeric fields.

---

## 6. **Persistence (LocalStorage)**

-   **Corrupted data** → If LocalStorage has invalid JSON, reset gracefully.
-   **Empty storage** → Don’t crash, just start fresh.

---

# 🧪 Testing Checklist

When you test BillSplit‑Pro, try these scenarios:

-   Bill = `100`, People = `3` → Expect `[34, 33, 33]`
-   Bill = `0`, People = `3` → Expect `[0, 0, 0]`
-   Bill = `99.99`, People = `3` → Expect `[33.33, 33.33, 33.33]`
-   Bill = `100`, People = `0` → Show error, no crash
-   Bill = `-50`, People = `2` → Show error
-   Bill = `100`, People = `1` → Expect `[100]`

---
