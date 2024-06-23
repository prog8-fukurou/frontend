// context/WebSocketContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

type WebSocketContextType = {
  socket: WebSocket | null;
  messages: string[];
  connectWebSocket: (url: string) => void;
  sendMessage: (message: string) => void;
};

const WebSocketContext = createContext<WebSocketContextType | undefined>(
  undefined
);

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [socket]);

  const connectWebSocket = useCallback(
    (url: string) => {
      if (!socket) {
        const ws = new WebSocket(url);

        ws.onopen = () => {
          console.log("WebSocket connected");
        };

        ws.onmessage = (event) => {
          console.log("WebSocket message received:", event.data);
          setMessages((prevMessages) => [...prevMessages, event.data]);
        };

        ws.onclose = () => {
          console.log("WebSocket disconnected");
          setSocket(null);
        };

        setSocket(ws);
      }
    },
    [socket]
  );

  const sendMessage = useCallback(
    (message: string) => {
      if (socket) {
        socket.send(message);
      } else {
        console.error("WebSocket is not connected");
      }
    },
    [socket]
  );

  const contextValue: WebSocketContextType = {
    socket,
    messages,
    connectWebSocket,
    sendMessage,
  };

  return (
    <WebSocketContext.Provider value={contextValue}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  }
  return context;
};
