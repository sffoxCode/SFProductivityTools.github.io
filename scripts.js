function filterTools() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const tools = Array.from(document.querySelectorAll(".tool"));
    let matchFound = false;

    tools.forEach(tool => {
        // const title = tool.getAttribute("data-title").toLowerCase();
        // const description = tool.getAttribute("data-description").toLowerCase();

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

function filterByTag(tag) {
    const tools = document.querySelectorAll('.tool');
    const buttons = document.querySelectorAll('.filter-buttons button');

    // Reset button styles
    buttons.forEach(button => button.classList.remove('active'));
    if (tag !== 'all') {
        buttons.forEach(button => {
            if (button.textContent === tag) {
                button.classList.add('active');
            }
        });
    } else {
        buttons[0].classList.add('active'); // Keep "All" active
    }

    // Show/Hide tools based on tag
    tools.forEach(tool => {
        const tags = Array.from(tool.getElementsByClassName('tool-tag')).map(tagElem => tagElem.textContent);
        if (tag === 'all' || tags.includes(tag)) {
            tool.style.display = 'block';
        } else {
            tool.style.display = 'none';
        }
    });
}

// Call filterByTag('all') on page load to show all tools initially
document.addEventListener('DOMContentLoaded', () => filterByTag('all'));
