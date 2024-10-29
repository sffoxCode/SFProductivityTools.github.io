function filterTools() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const tools = Array.from(document.querySelectorAll(".tool"));
    let matchFound = false;

    tools.forEach(tool => {
        const title = tool.querySelector(".tool-title").innerText.toLowerCase();
        const description = tool.querySelector(".tool-description").innerText.toLowerCase();


        if (title.includes(searchInput) || description.includes(searchInput)) {
            tool.style.display = "block";
            matchFound = true;
        } else {
            tool.style.display = "none";
        }
    });

    document.getElementById("noMatch").style.display = matchFound ? "none" : "block";
}
