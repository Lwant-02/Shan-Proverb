import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [saveProverbs, setSaveProverbs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Save the proverb to AsyncStorate whenever saveProverbs changes
  useEffect(() => {
    const timeOut = setTimeout(() => {
      const saveProverbToStorage = async () => {
        try {
          await AsyncStorage.setItem(
            "savedProverbs",
            JSON.stringify(saveProverbs)
          );
        } catch (error) {
          console.log("Can not save the data to storage!");
        }
      };
      saveProverbToStorage();
    }, 500);
    return () => clearTimeout(timeOut);
  }, [saveProverbs]);

  //Fetch saved proverb from asynstorage on app loaded
  useEffect(() => {
    const loadedSaveProverb = async () => {
      try {
        isLoading(true);
        const proverb = await AsyncStorage.getItem("savedProverbs");
        if (proverb) {
          setSaveProverbs(JSON.parse(proverb));
        }
      } catch (error) {
        console.log("Can not fetch the data from storage!");
        setSaveProverbs([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadedSaveProverb();
  }, []);

  //Function to add new proverb
  function addProverbs(key, proverb_key) {
    setSaveProverbs((pre) => [{ key, proverb_key }, ...pre]);
  }

  //Function to remove proverb
  function removeProverbs(key) {
    setSaveProverbs((pre) => pre.filter((item) => item.key !== key));
  }

  return (
    <GlobalContext.Provider
      value={{
        saveProverbs,
        addProverbs,
        removeProverbs,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "Context can not be used outside of the GlobalContextProvider!"
    );
  }
  return context;
}
