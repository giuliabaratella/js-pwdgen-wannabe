// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

const numeroFisso = 21;

let nome = prompt ("Qual è il tuo nome?");

let cognome = prompt ("Qual è il tuo cognome?");

let colorePreferito = prompt ("Qual è il tuo colore preferito?");

let password = nome + cognome + colorePreferito + numeroFisso;
console.log (password);

document.getElementById("pw-result").innerHTML = password;