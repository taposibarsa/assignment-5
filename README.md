             <div class="shadow-md border border-[#b7b7b850] h-full rounded-lg ">
                <!-- first part -->
              <div class="border-t-2 border-[#00A96E] rounded-lg p-6 space-y-2">
                   <div class="flex justify-between items-center">
                   <img src="./assets/Open-Status.png" alt="">
                   <div class="badge badge-soft badge-error">HIGH</div>
                </div>
                <!-- 2nd part -->
                 <div>
                    <h2 class="text-sm font-semibold">Fix navigation menu on mobile devices</h2>
                    <p class="text-[#64748b] text-[12px]" >The navigation menu doesn't collapse     properly on mobile devices...</p>
                 </div>
                 <div class="flex gap-1 items-center">
                   <span class="badge text-[12px] text-[#EF4444] border-[#FECACA] bg-[#FEECEC] p-1"><i class="fa-solid fa-bug"></i>BUG</span>
                   <div class="badge badge-outline badge-warning bg-[#FFF8DB]">Help wanted</div>
                 </div>
                 <div class="divider w-full"></div>
                 <div>
                  <p class="text-[#64748b] text-[12px]" >#1 by john_doe</p>
                  <p class="text-[#64748b] text-[12px]" >1/15/2024</p>
                 </div>             
              </div>
            </div>


const labelsHTML = issue.labels
  .map(label => {
    if (label === "bug") {
      return `<span class="badge bg-[#FEECEC] text-red-500 border-none flex items-center">${label}</span>`;
    }
    if (label === "help wanted") {
      return `<span class="badge bg-[#FFF6D1] text-yellow-600 border-none flex items-center">${label}</span>`;
    }
    return `<span class="badge badge-outline flex items-center">${label}</span>`;
  })
  .join("");


              const labelsHTML = issue.labels
      .map(label => `<span class="badge badge-outline">${label}</span>`)
      .join("");