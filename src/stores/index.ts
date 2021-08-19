import { createContext } from "react";
import FilterStore from "./filterStore";
import { TestStore } from "./testStore";

export const storesContext = createContext({
  testStore: new TestStore(),
  filterStore: new FilterStore()
});
