const textarea = document.getElementById("message");
const responseBox = document.getElementById("response");
const button = document.getElementById("askButton");

textarea.addEventListener("keydown", function (event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();
        askAI();

    }

});

async function askAI() {

    const message = textarea.value.trim();

    if (message === "") {

        alert("Please enter a question.");
        return;

    }

    button.disabled = true;
    button.innerText = "Thinking...";

    responseBox.innerHTML = '<span class="loading">Generating response...</span>';

    try {

        const response = await fetch("/api/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })

        });

        if (!response.ok) {

            throw new Error("HTTP " + response.status);

        }

        const data = await response.json();

        // Supports either {response:"..."} or {answer:"..."}
        const aiResponse = data.response || data.answer || "No response received.";

        responseBox.innerHTML = formatResponse(aiResponse);

    } catch (error) {

        console.error(error);

        responseBox.innerHTML =
            '<span class="error">Unable to connect to the AI service.</span>';

    }

    button.disabled = false;
    button.innerText = "Ask AI";

}

function formatResponse(text) {

    if (!text) return "";

    let formatted = text;

    // Escape HTML
    formatted = formatted
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    // Bold (**text**)
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // Inline code (`code`)
    formatted = formatted.replace(/`([^`]+)`/g, "<code>$1</code>");

    // New lines
    formatted = formatted.replace(/\n/g, "<br>");

    return formatted;

}