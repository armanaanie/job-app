let interviewList = [];
let rejectedList = [];
let currentStatus = "all"
let total = document.getElementById("totalCount");

let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const allFilterBtn = document.getElementById('All-available-btn');
const interviewFilterBtn = document.getElementById('Interview-available-btn');
const rejectFilterBtn = document.getElementById('Rejected-available-btn');
const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const FilterSec= document.getElementById("Filter-sec")
const filteredSection = document.getElementById('filtered-Section');
const NotavailableSection = document.getElementById("NotAvailable-section")
const update = document.getElementById('update');
const count = document.getElementById("count");
const rejectcount= document.getElementById('rejectcount')

function calculateCount() {
    total.innerText = allCardSection.children.length;
    update.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
count.innerText=`${interviewCount.innerText} of`
rejectcount.innerText=`${rejectedCount.innerText} of`
} calculateCount()

function toggleStyle(id) {
    allFilterBtn.classList.add('bg-white', 'text-black');
    interviewFilterBtn.classList.add('bg-white', 'text-black');
    rejectFilterBtn.classList.add('bg-white', 'text-black');
    allFilterBtn.classList.remove('bg-blue-400', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-400', 'text-white');
    rejectFilterBtn.classList.remove('bg-blue-400', 'text-white');
    const selected = document.getElementById(id);
    currentStatus = id;
    selected.classList.remove('bg-white', 'text-black');
    selected.classList.add('bg-blue-400', 'text-white')
    if (id == "Interview-available-btn") {
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
         FilterSec.classList.add("hidden")
        renderInterview()
        rejectcount.classList.add("hidden");
        count.classList.remove("hidden")
    } else if (id == "All-available-btn") {
        allCardSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
         FilterSec.classList.add("hidden")
          rejectcount.classList.add("hidden");
        count.classList.add("hidden")
    }
    else if (id == "Rejected-available-btn") {
        allCardSection.classList.add('hidden');
        filteredSection.classList.add('hidden');
         FilterSec.classList.remove("hidden");
          rejectcount.classList.remove("hidden");
        count.classList.add("hidden")
        renderReject()
    }
}

mainContainer.addEventListener("click", function (event) {

    if (event.target.classList.contains("interviewBtn")) {
        console.log("interview click")

        const parentNode = event.target.closest('.card');
        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const location = parentNode.querySelector('.location').innerText;
        const type = parentNode.querySelector('.type').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const status = parentNode.querySelector('.status').innerText;
        parentNode.querySelector('.status').innerText = "Interview"
        const discription = parentNode.querySelector('.discription').innerText;
        const cardInfo = {
            companyName, position, location, type, salary, status: "Interview", discription
        }

        const jobExist = interviewList.find(item => item.companyName == cardInfo.companyName)
        if (!jobExist) {
            interviewList.push(cardInfo);



        }
        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName)
        if (currentStatus == "Rejected-available-btn") {

            renderReject()
        }
        calculateCount()
    }
    else if (event.target.classList.contains("rejectBtn")) {
        console.log("reject click")

        const parentNode = event.target.closest('.card');
        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const location = parentNode.querySelector('.location').innerText;
        const type = parentNode.querySelector('.type').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const status = parentNode.querySelector('.status').innerText;
        parentNode.querySelector('.status').innerText = "Rejected"
        const discription = parentNode.querySelector('.discription').innerText;
        const cardInfo = {
            companyName, position, location, type, salary, status: "Rejected", discription
        }

        const jobExist = rejectedList.find(item => item.companyName == cardInfo.companyName)
        if (!jobExist) {
            rejectedList.push(cardInfo);
            

        }
        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)
        if (currentStatus == "Interview-available-btn") {
            renderInterview()
        }
        calculateCount()
    }

})



function renderInterview() {
   
    filteredSection.innerHTML = "";
    for (let interview of interviewList) {
        
         
            let divs= document.createElement('div');
            divs.className = "card p-3 flex justify-between my-4 bg-white";
            divs.innerHTML = `<div class="leftSide">
        <div class="flex flex-col gap-2">
                        <p id="" class="companyName font-bold">${interview.companyName}</p>
                        <p class="position">${interview.position}</p>
                        <div class="flex gap-2">
                            <p class="location">${interview.location}</p>
                            <p class="type">${interview.type}</p>
                            <p class="salary">${interview.salary}</p>
                        </div>
                        <p class="status bg-blue-100 text-blue-500 font-bold w-[100px] p-1">${interview.status}</p>
                    </div>
                    <p class="discription">${interview.discription}
                    </p>
                    <div class="flex gap-2"> <button
                            class="interviewBtn bg-white text-green-500 border border-green-500 p-3">Interview</button><button
                            class="rejectBtn bg-white text-red-500 border border-red-500 p-3">Rejected</button></div>
                </div>
                 <div  class="rightSide"><button class="Deletebtn">Delete</button></div>
        `
        filteredSection.appendChild(divs);
        
           
        }
    }

function renderReject() {
    FilterSec.innerHTML = "";
    for (let reject of rejectedList) {
        let div = document.createElement('div');
        div.className = "card p-3 flex justify-between my-4 bg-white";
        div.innerHTML = `<div class="leftSide">
        <div class="flex flex-col gap-2">
                        <p id="" class="companyName font-bold">${reject.companyName}</p>
                        <p class="position">${reject.position}</p>
                        <div class="flex gap-2">
                            <p class="location">${reject.location}</p>
                            <p class="type">${reject.type}</p>
                            <p class="salary">${reject.salary}</p>
                        </div>
                        <p class="status bg-blue-100 text-blue-500 font-bold w-[100px] p-1">${reject.status}</p>
                    </div>
                    <p class="discription">${reject.discription}
                    </p>
                    <div class="flex gap-2"> <button
                            class="interviewBtn bg-white text-green-500 border border-green-500 p-3">Interview</button><button
                            class="rejectBtn bg-white text-red-500 border border-red-500 p-3">Rejected</button></div>
                </div>
                 <div  class="rightSide"><button class="Deletebtn">Delete</button></div>
        `
        FilterSec.appendChild(div);
         
       
       
    }
}
function NotAvailableforInterview(){
     
    if(interviewList.length===0){
         window.location.href="no-notification.html"} 
    
    else{
        renderInterview()
    }
   
    }
    function NotAvailableforReject(){
     if(rejectedList.length===0){
       window.location.href="no-notification.html"} 
       else{
        renderReject()
       }
    }

document.addEventListener('click', function(event){
    if(event.target.classList.contains('Deletebtn')){
        event.target.closest('.card').remove();
    }
})