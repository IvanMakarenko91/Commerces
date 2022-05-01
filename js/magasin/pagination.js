const pagination = Array.from(document.querySelectorAll(".pagination-color")); 


pagination.forEach(paginations => {
  paginations.addEventListener("click", paginationAnimation)
})

let index = 1;

function paginationAnimation(e){
    const el = e.target;
    pagination[index].classList.remove("pagination-active");
    index = pagination.indexOf(el);
    pagination[index].classList.add("pagination-active")
    
}

