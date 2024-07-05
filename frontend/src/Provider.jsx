import { useState, createContext } from "react"

export const GlobalContext = createContext();

export const useLocalStorage = (keyName, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const value = window.localStorage.getItem(keyName);
        if (value) {
          return JSON.parse(value);
        } else {
          window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
          return defaultValue;
        }
      } catch (err) {
        return defaultValue;
      }
    });
    const setValue = (newValue) => {
      try {
        window.localStorage.setItem(keyName, JSON.stringify(newValue));
      } catch (err) {
        console.log(err);
      }
      setStoredValue(newValue);
    };
    return [storedValue, setValue];
  };

const Provider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const [data, setData] = useState({
      first_name: "",
      last_name: "",
      email: ""
    });

  return (
    <GlobalContext.Provider value={{ user, setUser, data, setData }}>
      { children }
    </GlobalContext.Provider>
  )
}

export default Provider
