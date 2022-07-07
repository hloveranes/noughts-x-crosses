// return a series or specific html:node element
const GetStorage = () => {
    const storageItem = localStorage.getItem("gameDetails");
    if (storageItem) {
      if (JSON.parse(storageItem)) {
        return JSON.parse(storageItem)
      }
    } 
}

const SetStorageData = (data) => {
  if (data) {
    localStorage.setItem(`gameDetails`, JSON.stringify(data));
  }
};

export default { GetStorage, SetStorageData }