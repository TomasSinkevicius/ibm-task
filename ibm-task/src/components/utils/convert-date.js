export const convertToUnix = date => Math.floor(new Date(date).getTime() / 1000)
export const convertToHumanDateFormat = date => new Date(date * 1000).toLocaleString()
