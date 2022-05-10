// Déclaration du formulaire
(function() { 
  'use strict'
  let form = document.getElementById('lessonForm'); 
  form.addEventListener('submit', function(event) {
      
      Array.from(form.elements).forEach((input) => { 
          if (input.type !== "submit") { 
              if (!validateFields(input)) { 
                  
                  event.preventDefault();
                  event.stopPropagation();
                  
                  input.classList.remove("is-valid"); 
                  input.classList.add("is-invalid");
                  input.nextElementSibling.style.display = 'block';
              } 
              else {
                  input.nextElementSibling.style.display = 'none';
                  input.classList.remove("is-invalid"); 
                  input.classList.add("is-valid"); 
              }
          }
      });
  }, false)
})()






// Création des fonctions de verefications

// Validation d'un champ REQUIRED
function validateRequired(input) {
  return !(input.value == null || input.value == "");
}

// Validation des caractères : LATIN & LETTRES
function validateText(input) {
  return input.value.match("^[A-Za-z]+$");
}

// Validation du nombre de caractéres : MIN & MAX
function validateLenght(input, minLength, maxLength) {
    return !(input.value.length < minLength || input.value.length > maxLength);
}

// Validation d'un e-mail
function validateEmail(input) {
  let EMAIL = input.value;
  let POSAT = EMAIL.indexOf("@");
  let POSDOT = EMAIL.lastIndexOf(".");
  return !(POSAT < 1 || (POSDOT - POSAT < 2));
}

// Validation du Numéro de téléphone
function validatePhoneNumber(input) {
  return input.value.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/); // +33 valide (internationale)
}






// Validation des champs de formulaires

function validateFields(input) {
  let fieldName = input.name;
  // Validaton de l'input PRENOM
  if (fieldName == "firstName") {
      if (!validateRequired(input)) {
          return false;
      }
      if (!validateLenght(input, 2, 20)) {
          return false;
      }
      if (!validateText(input)) {
          return false;
      }
      return (true);
  }

  // Validaton de l'input NOM
  if (fieldName == "lastName") {
    if (!validateRequired(input)) {
        return false;
    }
    if (!validateLenght(input, 2, 20)) {
        return false;
    }
    if (!validateText(input)) {
        return false;
    }
    return (true);
  }

  // Validaton de l'input EMAIL
  if (fieldName == "email") {
    if (!validateRequired(input)) {
        return false;
    }
    if (!validateEmail(input)) {
        return false;
    }
    return (true);
  }

  // Validaton de l'input NUMERO DE TELEPHONE
  if (fieldName == "phoneNumber") {
      if (!validateRequired(input)) {
          return false;
      }
      if (!validatePhoneNumber(input)) {
          return false;
      }
      return (true);
  }

  // Validaton de l'input VILLE
  if (fieldName == "sujet") {
    if (!validateRequired(input)) {
        return false;
    }
    return (true);
  }

  // Validation de l'input COMMENTAIRE
  if (fieldName == "comment") {
    if (!validateRequired(input)) {
        return false;
    }
    if (!validateLenght(input, 15, 1500)) {
        return false;
    }
    return (true);
  }
}

const button = document.getElementById('btn');
 
button.addEventListener('click', function(){
   button.style.backgroundColor = "red";
});