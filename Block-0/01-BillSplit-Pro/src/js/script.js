// Constants
const billAmount = document.querySelector("#bill_input");
const diners = document.querySelector("#diners");
const splitBtn = document.querySelector("#split_btn");
const mainContent = document.querySelector("#main");
const copyBtn = document.querySelector("#copy_btn");
const shareBtn = document.querySelector("#share_btn");
const exportBtn = document.querySelector("#export_btn");

// Variables
let splitContainer;
let splitResult = 0;
let result = 0;
let billValue;
let dinersValue;
let totalPaidByOthers = 0;
let lastPersonPays = 0;
let errorMessage;

// Function that splits the bill
function splitBill(amount, people) {
	// Use Math.round to handle floating-point precision before formatting
	result = (Math.round((amount / people) * 100) / 100).toFixed(2);
	return result;
}

// Function to save data to localStorage
function saveToLocalStorage() {
	const data = {
		billValue: billValue,
		dinersValue: dinersValue,
		splitResult: splitResult,
		resultText: splitContainer.textContent,
		timestamp: new Date().toISOString(),
	};
	localStorage.setItem("billSplitData", JSON.stringify(data));
}

// Function to load data from localStorage
function loadFromLocalStorage() {
	const savedData = localStorage.getItem("billSplitData");

	if (savedData) {
		const data = JSON.parse(savedData);

		// Restore input values
		billAmount.value = data.billValue;
		diners.value = data.dinersValue;

		// Recreate the result container
		splitContainer = document.createElement("p");
		splitContainer.className = "split_container";
		splitContainer.textContent = data.resultText;
		document.getElementById("billing_form").appendChild(splitContainer);

		// Enable action buttons
		copyBtn.disabled = false;
		shareBtn.disabled = false;
		exportBtn.disabled = false;

		// Update variables
		billValue = data.billValue;
		dinersValue = data.dinersValue;
		splitResult = data.splitResult;
	}
}

// Call this when the page loads
window.addEventListener("DOMContentLoaded", () => {
	loadFromLocalStorage();
});

// Button click event listener (SINGLE LISTENER WITH localStorage INTEGRATED)
splitBtn.addEventListener("click", () => {
	if (splitContainer) {
		splitContainer.remove();
	}

	if (errorMessage) {
		errorMessage.remove();
	}

	// Try and Catch for invalid inputs
	try {
		// Bill and Diner values
		billValue = Number(billAmount.value);
		dinersValue = Number(diners.value);

		if (billAmount.value === "" || isNaN(billValue) || billValue <= 0) {
			errorMessage = document.createElement("p");
			errorMessage.className = "error_msg";
			errorMessage.textContent = "Please enter a valid amount!";
			document.getElementById("bill_label").appendChild(errorMessage);
			throw new Error("Please enter a valid amount.");
		}

		if (diners.value === "" || isNaN(dinersValue) || dinersValue <= 0) {
			errorMessage = document.createElement("p");
			errorMessage.className = "error_msg";
			errorMessage.textContent = "Please enter a valid number of diners!";
			document.getElementById("diners_label").appendChild(errorMessage);
			throw new Error("Please enter a valid number of diners.");
		}
	} catch (err) {
		console.error(err);
		return;
	}

	// Container that displays the result on screen
	splitContainer = document.createElement("p");
	splitContainer.className = "split_container";

	// Calling the function that splits the bill
	splitResult = splitBill(billValue, dinersValue);

	// Total amount paid by others and the amount to be paid by the last one
	totalPaidByOthers = (splitResult * (dinersValue - 1)).toFixed(2);
	lastPersonPays = (billValue - totalPaidByOthers).toFixed(2);

	// Edge case (if the total split amount is not equal to the bill amount)
	if (billValue !== splitResult * dinersValue) {
		splitContainer.textContent = `Each person should pay ₹${splitResult}, but the last person has to pay ₹${lastPersonPays}`;
	} else {
		splitContainer.textContent = `Each person should pay: ₹${splitResult}`;
	}

	// Adding result container element to the form (below the split button)
	document.getElementById("billing_form").appendChild(splitContainer);

	// Enable action buttons after calculation
	copyBtn.disabled = false;
	shareBtn.disabled = false;
	exportBtn.disabled = false;

	// Save to localStorage
	saveToLocalStorage();
});

// Function that copies the result
function copyText(text) {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			alert("Result copied to clipboard!");
		})
		.catch((err) => {
			console.error("Failed to copy text:", err);
			alert("Failed to copy text");
		});
}

// Copy result feature event listener
copyBtn.addEventListener("click", () => {
	if (splitContainer) {
		copyText(splitContainer.textContent);
	} else {
		alert("Please calculate the bill split first!");
	}
});

// Function that shares the result
function shareResult(text) {
	if (navigator.share) {
		navigator
			.share({
				title: "Bill Split Result",
				text: text,
			})
			.then(() => console.log("Successfully shared"))
			.catch((error) => console.error("Error sharing:", error));
	} else {
		alert("Share not supported on this browser. Copy the result manually.");
	}
}

// Share result feature event listener
shareBtn.addEventListener("click", () => {
	if (splitContainer) {
		shareResult(splitContainer.textContent);
	} else {
		alert("Please calculate the bill split first!");
	}
});

// Export result feature (saves as text file)
exportBtn.addEventListener("click", () => {
	if (splitContainer) {
		const blob = new Blob([splitContainer.textContent], {
			type: "text/plain",
		});
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "bill-split-result.txt";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	} else {
		alert("Please calculate the bill split first!");
	}
});
