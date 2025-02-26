import { featureProductNav } from "./products.js";

let isearch = document.getElementById("input-search");
let fsearch = document.getElementById("form-search");
let recentSearchEl = document.querySelector(".recent-search");

let recentArray = ["mobile", "phone"];

fsearch.addEventListener(submit, (e) => {
    e.preventDefault()
    recentArray.unshift(isearch.value)
    renderRecent()
})

function renderRecent() {
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


let featureProductsListEl = document.querySelector(".featureProductsList")
let featureProductsListHTML = ''


featureProductNav.forEach(el => {
    featureProductsListHTML += `
        <div class="featureProductItem">
            <a href="${el.link}">
                <div class="featureProductImage">
                    <img src="${el.img}" />
                </div>
                <p class="featureProductName">
                    ${el.name}

                  ${el.subNavigation ? `<i class="fa-solid fa-angle-down featureProduct_icon_more"></i>` : ""}   
                </p>
            </a>
        </div>
    `
})

featureProductsListEl.innerHTML = featureProductsListHTML;
console.log(featureProductsListHTML)