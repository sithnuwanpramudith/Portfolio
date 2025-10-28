import { useState } from "react";
import Header from "../Header";

export default function HeaderExample() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="min-h-screen">
      <Header isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      <div className="pt-20 p-8">
        <p>Header component with navigation and theme toggle functionality.</p>
      </div>
    </div>
  );
}