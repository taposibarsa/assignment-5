

const loadIssues =() => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(res => res.json())
    .then(data => displayIssues(data.data));
}
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

    for(let issue of issues){

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
    issueDiv.innerHTML = `
    <div class="shadow-md border border-[#b7b7b850] h-full rounded-lg ">
                <!-- first part -->
              <div class="border-t-4 ${statusBorder} rounded-lg p-6 space-y-2">
                   <div class="flex justify-between items-center">${statusIcon}
                   <div class="badge badge-outline border-none ${
              issue.priority === "high"
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