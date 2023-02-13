import moment from "moment";
export const dateFormat = (date) => {
    var today  = new Date(Date.parse(date));
    return  today.toLocaleDateString("en-US", { month: 'long' })+ " " +  today.toLocaleDateString("en-US", { day: 'numeric' })+ ", "+today.toLocaleDateString("en-US", { year: 'numeric' })
} 

export const dateFormatTime = (date) => {
    var getDate  = new Date(Date.parse(date));
    return moment.parseZone(getDate).format('D/MMMM/YYYY HH:mm')
} 

