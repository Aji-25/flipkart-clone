let isearch = document.getElementById("input-search");
let fsearch = document.getElementById("form-search");
let recentSearchEl = document.querySelector(".recent-search");

let recentArray = ["mobile", "phone"];

fsearch.addEventListener(submit, (e) => {
    e.preventDefault()
    recentArray.unshift(isearch.value)
    renderRecent()
})

function renderRecent(){
    let recent_Search_html = ''
    recentArray.forEach(el => {
        recent_Search_html += `
    <div class="recent-list">
        <i class="fa-solid fa-clock-rotate-left"></i>
        <p>${el}</p>
    </div>`
    })
    recentSearchEl.innerHTML = recent_Search_html;
}
renderRecent()
