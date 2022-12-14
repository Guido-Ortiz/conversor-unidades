export const result = (number, from, to) => {
    let aux

    if (from === 'kms') {
        aux = (number * 0.621371).toFixed(2)
    }
    if (from === 'miles') {
        aux = (number * 1.60934).toFixed(2)
    }
    if (from === 'mts') {
        aux = (number * 3.28084).toFixed(2)
    }
    if (from === 'feets') {
        aux = (number * 0.3048).toFixed(2)
    }
    if (from === 'cms') {
        aux = (number * 0.393701).toFixed(2)
    }
    if (from === 'inches') {
        aux = (number * 2.54).toFixed(2)
    }
    return aux
}