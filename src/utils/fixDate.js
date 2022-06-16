export const fixDate = (dateString) => {
    const date = new Date(dateString);
    const dateArray = date.toString().split(" ");
    
    return `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
}

