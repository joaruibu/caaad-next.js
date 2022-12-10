export const createTitle = (tags, filters, titleBD) => {
    let Title = ``
    for (let i = 0; i < 2; i++) {
        const baseTitle =
            `Descarga el bloque de ${titleBD ? titleBD : ''} ${tags[i].label} en ${filters[0].label}`;
        Title = baseTitle
    }
    return Title
}
export const createDesCription = (tags, categoria) => {

    let newDescription = []
    for (let i = 0; i < tags.length; i++) {
        const description = [
            `Descarga el bloque de ${categoria.slug} ${tags[i]} para tus proyectos,`,
            `usa el bloque de ${tags[i]} para tu proyecto de arquitectura`,
            `usa tu bloque de ${tags[i]} gratuito`,
            `Frase para tag-4 ${tags[i]}`,
            `Frase para tag-5 ${tags[i]}`,
        ];
        newDescription.push(description[i])
    }
    return newDescription
}

export const orderCategories = (categories) => {
    return categories.sort((a, b) => {
        if (a.label.toLowerCase() < b.label.toLowerCase()) {
            return -1;
        }
        if (a.label.toLowerCase() > b.label.toLowerCase()) {
            return 1;
        }
        return 0;
    });

}
export const createSimilarTitles = (title) => {

    let titleCombinations = [];
    let titleSplit = title.split(' ');

    title.split(' ').map(() => {
        let removeLastWord = titleSplit.pop()
        titleCombinations.push(titleSplit.join(' '))

    });

    // Elimino el último elemento ya que es un string vacio 
    let removeLastElement = titleCombinations.pop()

    return console.log(4343434, titleCombinations)
}

export const urlTitle = (title) => {
    return title.trim().split(' ').join('-').toLowerCase()
}


