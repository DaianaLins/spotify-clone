
export const hoursComp = () => {

    if (new Date().getHours() > 5 && new Date().getHours() < 13) {

        return "Bom dia"
    } else if (new Date().getHours() >= 13 && new Date().getHours() < 18) {
        return "Boa tarde"
    }

    return "Boa noite"

}