import React from 'react';


const useLocalStorage = (key, initialValue) => {
 const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
 })
 //So far we have a made the value part of the hook, but not the setter
 //let's get the setter function built and return that in the array as well.
  const setValue = (value) => {
   setStoredValue(value) // Save state value
   //Save to local storage
  window.localStorage.setItem(key, JSON.stringify(value));
  }

 return [storedValue, setValue]
}
 


export default useLocalStorage;