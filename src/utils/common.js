export const setDataTable = (name, value)=> {
  return localStorage.setItem(name, JSON.stringify(value));
}

export const getDataTable = (name)=> {
  return localStorage.getItem(name);
}