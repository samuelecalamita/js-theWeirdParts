var Samu = {                       // shorthand syntax for declares property and set values
    firstname: 'Samuele', 
    lastname: 'Calamita',
    address: {
        street: 'Triftstrasse 37',
        city: 'Berlin',
        state: 'Germany'
    }};

function greet(person) {
    console.log('Hello ' + person.firstname);
}

greet(Samu);

greet({
    firstname: 'Angeli',
    lastname: 'Schimmack'
});

console.log(Samu);