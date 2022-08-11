class localStorageDataService {
  
  get = (key, defaultValue = []) => {
    const data = localStorage.getItem(key);
     return (data && data !== '') ? JSON.parse(data) : defaultValue;
  }  

  set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  delete = (key) => {
    localStorage.removeItem(key);
  }
}

const  localStorageDatabase  =  new  localStorageDataService();
export default localStorageDatabase;