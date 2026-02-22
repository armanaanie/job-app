
const allFilterBtn = document.getElementById('All-available-btn');
const interviewFilterBtn = document.getElementById('Interview-available-btn');
const rejectFilterBtn = document.getElementById('Rejected-available-btn');
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
    selected.classList.add('bg-blue-400', 'text-white')}



function available(){
    window.location.href="index.html"
}