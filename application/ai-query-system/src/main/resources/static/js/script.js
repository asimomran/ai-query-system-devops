const chat = document.getElementById("chat");
const input = document.getElementById("message");

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        askAI();
    }
});

async function askAI() {

    const message = input.value.trim();

    if (message === "") return;

    chat.innerHTML += `
        <div class="user-message">
            ${message}
        </div>
    `;

    input.value = "";

    chat.scrollTop = chat.scrollHeight;

    const loadingId = "loading-" + Date.now();

    chat.innerHTML += `
        <div class="ai-message" id="${loadingId}">
            <span class="typing">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>
    `;

    chat.scrollTop = chat.scrollHeight;

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

        const data = await response.json();

        document.getElementById(loadingId).innerHTML = data.response;

    } catch (e) {

        document.getElementById(loadingId).innerHTML =
            "<span style='color:#ef4444'>❌ Unable to connect to AI.</span>";

        console.error(e);

    }

    chat.scrollTop = chat.scrollHeight;
}