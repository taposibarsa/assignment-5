
let allIssues = []; 

const loadIssues = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(res => res.json())
        .then(data => {
            allIssues = data.data;
            updateCounts(allIssues);
            displayIssues(allIssues); 
        });
}

//  updates the number badges on buttons
const updateCounts = (issues) => {
    const openCount = issues.filter(i => i.status === "open").length;
    const closedCount = issues.filter(i => i.status === "closed").length;

    document.getElementById("count-all").textContent = issues.length;

}




const filterIssues = (status) => {
    // Switch active button styling
    const buttons = {
        all: document.getElementById("btn-all"),
        open: document.getElementById("btn-open"),
        closed: document.getElementById("btn-closed"),
    };

    // Reset all to inactive, then activate clicked one
    Object.values(buttons).forEach(btn => {
        btn.classList.remove("btn-primary");
    });
    buttons[status].classList.add("btn-primary");

    // Filter and display
    const filtered =
        status === "all" ? allIssues :
            allIssues.filter(i => i.status === status);
    document.getElementById("count-all").textContent = filtered.length;

    displayIssues(filtered);
};

// ----------------------------------------------


// const loadIssues =() => {
//     fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
//     .then(res => res.json())
//     .then(data => displayIssues(data.data));
// }
const labelStyles = {
    "bug": "bg-[#FEECEC] text-red-500",
    "help wanted": "bg-[#FFF6D1] text-yellow-600",
    "enhancement": "bg-[#E6F7FF] text-blue-600",
    "documentation": "bg-[#F3E8FF] text-purple-600",
    "question": "bg-[#E8FFF3] text-green-600",
    "good first issue": "bg-[#FFE8F0] text-pink-600",
    "performance": "bg-[#FFF1E6] text-orange-600",
    "security": "bg-[#FFE4E6] text-rose-600"
};
const displayIssues = (issues) => {
    console.log(issues)

    //  1.get the container and empty container

    const issueContainer = document.getElementById("issue-container");
    issueContainer.innerHTML = ""

    // get into every lessons

    for (let issue of issues) {

        const statusIcon =
            issue.status === "open"
                ? `<img class="w-5 h-5" src="./assets/Open-Status.png" alt="">`
                : `<img class="w-5 h-5" src="./assets/Closed-Status.png" alt="">`;

        const statusBorder =
            issue.status === "open"
                ? "border-[#00A96E]"
                : "border-[#8B5CF6]";


        const labelsHTML = issue.labels
            .map(label => {
                const style = labelStyles[label] || "bg-gray-100 text-gray-600";

                return `
<span class="badge border-none text-xs flex items-center leading-none ${style}">
${label}
</span>
`;
            })
            .join("");


        const issueDiv = document.createElement("div");
        issueDiv.addEventListener("click", () => openModal(issue));
        issueDiv.innerHTML = `
    <div class="shadow-md border border-[#b7b7b850] h-full rounded-lg ">
                <!-- first part -->
              <div class="border-t-4 ${statusBorder} rounded-lg p-6 space-y-2">
                   <div class="flex justify-between items-center">${statusIcon}
                   <div class="badge badge-outline border-none ${issue.priority === "high"
                ? "badge-error bg-[#FEECEC]"
                : issue.priority === "medium"
                    ? "badge-warning bg-[#FFF6D1]"
                    : "badge-ghost"
            }">${issue.priority}</div>
                </div>
                <!-- 2nd part -->
                 <div>
                    <h2 class="text-sm font-semibold">${issue.title}</h2>
                    <p class="text-[#64748b] text-[12px]"> ${issue.description}</p>
                 </div>
                    <div class="flex flex-wrap items-center gap-2">
                     ${labelsHTML}
                    </div>
                 <div class="divider w-full"></div>
                 <div>
                  <p class="text-[#64748b] text-[12px]" >${issue.author}</p>
                  <p class="text-[#64748b] text-[12px]" >${issue.updatedAt}</p>
                 </div>             
              </div>
    </div>
    `

        issueContainer.appendChild(issueDiv)
    }
}
loadIssues()

// open modal js
const openModal = (issue) => {
    document.getElementById("modal-title").textContent = issue.title;
    document.getElementById("modal-author").textContent = issue.author;
    document.getElementById("modal-date").textContent = new Date(issue.updatedAt).toLocaleDateString("en-GB");
    document.getElementById("modal-description").textContent = issue.description;
    document.getElementById("modal-assignee").textContent = issue.author;

    // Status badge
    const statusBadge = document.getElementById("modal-status-badge");
    statusBadge.textContent = issue.status === "open" ? "Opened" : "Closed";
    statusBadge.className = `badge text-white text-xs px-3 py-1 ${issue.status === "open" ? "bg-[#00A96E]" : "bg-[#8B5CF6]"}`;

    // Priority badge
    const priorityBadge = document.getElementById("modal-priority");
    priorityBadge.textContent = issue.priority.toUpperCase();
    priorityBadge.className = `badge text-white text-xs px-3 py-1 ${issue.priority === "high" ? "bg-red-500" :
        issue.priority === "medium" ? "bg-yellow-500" : "bg-gray-400"
        }`;

    // Labels
    const labelsContainer = document.getElementById("modal-labels");
    labelsContainer.innerHTML = issue.labels.map(label => {
        const style = labelStyles[label] || "bg-gray-100 text-gray-600";
        return `<span class="badge border-none text-xs ${style}">${label}</span>`;
    }).join("");

    document.getElementById("issue-modal").showModal();
};


// making rearch bar
const searchIssues = () => {
    const searchText = document.getElementById("input-search").value.trim();
    
    if (!searchText) {
        displayIssues(allIssues);
        document.getElementById("count-all").textContent = allIssues.length;
        return;
    }

    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`)
        .then(res => res.json())
        .then(data => {
            const results = data.data;
            displayIssues(results);
            document.getElementById("count-all").textContent = results.length;
        });
};

// Search button click
document.getElementById("btn-search").addEventListener("click", searchIssues);

// Enter key support
document.getElementById("input-search").addEventListener("keydown", (e) => {
    if (e.key === "Enter") searchIssues();
});
