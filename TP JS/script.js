var marc = {
    nom: 'Marc',
    age: 15,
    moyenne: 15
}
/*
if (marc.age >= 18) {

    console.log("tu es majeur")

}else {
    console.log('tu es mineur')
}

*/

switch (marc.age) {
    case 18:
        console.log('tu as 18 ans ')
        break
    case 25:
        console.log('tu as 25 ans ')
        break
    default:
        console.log('t ki ?')


}