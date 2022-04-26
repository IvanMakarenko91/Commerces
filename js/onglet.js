const onglets = Array.from(document.querySelectorAll(".onglets")); // La méthode Array.from() permet de créer une nouvelle instance d'Array (une copie superficielle) à partir d'un objet itérable ou semblable à un tableau.
const contenu = Array.from(document.querySelectorAll(".contenu"));


onglets.forEach(onglet => {
  onglet.addEventListener("click", tabsAnimation)
})

let index = 0;

function tabsAnimation(e){

    const el = e.target;
    
    onglets[index].classList.remove("activer");
    contenu[index].classList.remove("activer-contenu");
    
    index = onglets.indexOf(el);
    
    onglets[index].classList.add("activer")
    contenu[index].classList.add("activer-contenu");
    
}