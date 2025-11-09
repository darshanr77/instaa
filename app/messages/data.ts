export type ChatMessage = {
  sender: "me" | "them";
  text: string;
  time: string;
};

export type ChatContact = {
  id: number;
  name: string;
  img: string;
  messages: ChatMessage[];
};

export const allChats: ChatContact[] = [
  {
    id: 1,
    name: "Darshan Gowda",
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=100&q=80",
    messages: [
      { sender: "them", text: "Hey Darshan! How are you?", time: "09:20 AM" },
      { sender: "me", text: "I'm great! Working on my Next.js project.", time: "09:22 AM" },
      { sender: "them", text: "Nice! Can't wait to see it!", time: "09:24 AM" },
    ],
  },
  {
    id: 2,
    name: "Rohit Kumar",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80",
    messages: [
      { sender: "me", text: "Hey bro, are you joining the call?", time: "10:01 AM" },
      { sender: "them", text: "Yeah, give me 5 mins.", time: "10:02 AM" },
    ],
  },
];
