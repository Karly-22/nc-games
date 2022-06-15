export const fixDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    return `${day}-${month}-${year}`
}
