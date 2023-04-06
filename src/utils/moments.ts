export const getNameWeek = (week: string) => {
    const parsedName = week.toLowerCase()
    switch (parsedName) {
        case "mon": return "seg";
        case "tue": return "ter";
        case "wed": return "qua";
        case "thu": return "qui";
        case "fri": return "sex";
        case "sat": return "sáb";
        default: return "dom";
    }
}

export const getNameMonth = (month: string) => {
    const parsedName = month.toLowerCase()
    switch (parsedName) {
        case "jan": return "jan";
        case "feb": return "fev";
        case "mar": return "mar";
        case "apr": return "abr";
        case "may": return "mai";
        case "jun": return "jun";
        case "jul": return "jul";
        case "aug": return "ago";
        case "sep": return "set";
        case "oct": return "out";
        case "nov": return "nov";
        default: return "dex";
    }
}