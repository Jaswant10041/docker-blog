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
    {
      id: 4,
      title: "Blockchain Beyond Cryptocurrency: New Frontiers",
      description: "Blockchain technology is finding applications beyond just digital currencies, revolutionizing industries from healthcare to logistics...",
      reported_at: "2025-03-10T12:45:00Z",
    },
    {
      id: 5,
      title: "Climate Tech Innovations to Watch in 2025",
      description: "From carbon capture to clean energy storage, climate tech startups are leading the fight against global warming...",
      reported_at: "2025-03-05T11:30:00Z",
    },
    {
      id: 6,
      title: "The Future of Space Travel: Private Companies Leading the Charge",
      description: "With new advancements and private sector investments, space travel is becoming more accessible and ambitious...",
      reported_at: "2025-02-28T16:00:00Z",
    },
    {
      id: 7,
      title: "Quantum Computing: Are We Close to a Breakthrough?",
      description: "Quantum computing could redefine what’s possible in science and technology — but how close are we really to practical quantum machines?",
      reported_at: "2025-02-20T13:00:00Z",
    },
    {
      id: 8,
      title: "Mental Health Apps: Boon or Bane?",
      description: "As mental health awareness grows, mobile apps have surged — but are they truly helpful or just a digital placebo?",
      reported_at: "2025-02-15T08:30:00Z",
    },
    {
      id: 9,
      title: "Self-Driving Cars: The Road to 100% Autonomy",
      description: "The dream of fully autonomous vehicles is inching closer to reality, but major challenges remain...",
      reported_at: "2025-02-10T07:00:00Z",
    },
    {
      id: 10,
      title: "EdTech Evolution: How Online Learning is Reinventing Education",
      description: "From AI tutors to virtual classrooms, education technology is reshaping how we learn across all ages...",
      reported_at: "2025-02-05T15:15:00Z",
    },
    {
      id: 11,
      title: "The Creator Economy: Why Everyone’s Becoming a Content Producer",
      description: "Social media, monetization tools, and platforms are enabling individuals to build careers around personal brands...",
      reported_at: "2025-02-01T14:00:00Z",
    },
    {
      id: 12,
      title: "The Ethics of AI Art: Redefining Creativity",
      description: "With AI generating paintings, music, and stories, artists and technologists debate the very meaning of creativity...",
      reported_at: "2025-01-28T17:45:00Z",
    },
    {
      id: 13,
      title: "Wearable Tech in 2025: Beyond Fitness Trackers",
      description: "The next generation of wearable technology is moving toward medical-grade diagnostics and even mental health monitoring...",
      reported_at: "2025-01-25T10:30:00Z",
    }
    
  ]);

  return (
    <GlobalState.Provider value={{ data, setData }}>
      {children}
    </GlobalState.Provider>
  );
};
