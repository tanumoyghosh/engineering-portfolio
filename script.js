const container = document.getElementById("timeline-container");

timeline.forEach(month => {

    // Create one block for each month
    const monthDiv = document.createElement("div");
    monthDiv.className = "timeline-month";

    // Build all achievements for the month
    let achievements = "";

    month.items.forEach(item => {

        achievements += `
            <div class="achievement">

                <p>${item.title}</p>

                <span class="tag">${item.tag}</span>

                ${item.link ? `
                    <div class="resource-link">
                        <a href="${item.link}" target="_blank" rel="noopener noreferrer">
                            🔗 ${item.linkText || "View Resource"}
                        </a>
                    </div>
                ` : ""}

            </div>
        `;

    });

    // Complete month layout
    monthDiv.innerHTML = `

        <div class="timeline-date">

            ${month.month}

        </div>

        <div class="timeline-middle">

            <div class="timeline-dot"></div>

        </div>

        <div class="timeline-content">

            ${achievements}

        </div>

    `;

    container.appendChild(monthDiv);

});