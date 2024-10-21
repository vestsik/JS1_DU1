/*
Úkol 01

FIT e-mail

Pokud se přihlásíte jako student například na Fakultu Informačních Technologí ČVUT, bude vám informačním systémem automaticky přidělen e-mail, který se vytvoří z vašeho jména a příjmení. Z vašeho příjmení se vezme pět prvních znaků a z vašeho křestního jména první tři. Výsledek se převede na malá písmena a připojí se doména fit.cvut.cz. Pro jméno Jana Procházková tak vznikne adresa prochjan@fit.cvut.cz.

Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní jméno a pak příjmení, obojí bez diakritiky.
Pomocí metody trim zajistěte, že ve jméně ani příjmení nebudou na začátku ani na konci žádné bílé znaky.
Pomocí metody slice vyřízněte ze jména i příjmení příslušné části.
Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do stránky.
*/

let prijmeni = prompt("Uvedte sve prijmeni bez diakritiky:").toLowerCase()
let jmeno = prompt("Uvedte sve krestni jmeno bez diakritiky:").toLowerCase()

prijmeni = prijmeni.trim()
jmeno = jmeno.trim()

const uzivatelskeJmeno = prijmeni.slice(0,5) + jmeno.slice(0,3)

document.body.innerHTML = "<p>Vase e-mailova adresa je: " + uzivatelskeJmeno + "@fit.cvut.cz </p>"