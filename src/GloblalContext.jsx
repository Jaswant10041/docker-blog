import { createContext, useState } from "react";

export const GlobalState = createContext();
export const AppProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "The Rise of AI: How It’s Changing Everything",
      description: "Artificial Intelligence (AI) has rapidly evolved, transforming industries and redefining the future of work...",
      reported_at: "2025-04-01T14:30:00Z",
    },
    {
      id: 2,
      title: "Top 5 JavaScript Frameworks in 2025",
      description: "JavaScript continues to dominate web development, and the frameworks landscape is more vibrant than ever...",
      reported_at: "2025-03-20T09:15:00Z",
    },
    {
      id: 3,
      title: "10 Tips for Mastering Remote Work",
      description: "Remote work is here to stay. Mastering it requires more than just a laptop and Wi-Fi...",
      reported_at: "2025-03-15T10:00:00Z",
    },
  ]);

  return (
    <GlobalState.Provider value={{ data, setData }}>
      {children}
    </GlobalState.Provider>
  );
};
