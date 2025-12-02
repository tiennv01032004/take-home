// MyContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface MyContextType {
  value: string;
  setValue: (val: string) => void;
}

const SkillOverview = createContext<MyContextType | undefined>(undefined);

export function SkillOverviewProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState("default");
  return (
    <SkillOverview.Provider value={{ value, setValue }}>
      {children}
    </SkillOverview.Provider>
  );
}

export function useSkillOverview() {
  const context = useContext(SkillOverview);
  if (!context) throw new Error("useSkillOverview must be inside MyProvider");
  return context;
}
