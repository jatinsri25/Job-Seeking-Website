import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
const cors = require('cors');

export const Context = createContext({
  isAuthorized: false,
});
app.use(cors({
    origin: 'https://job-seeking-website-hhul-backend.vercel.app',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));
app.post('/api/v1/user/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Add validation and user creation logic here
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        // Assume `User` is a model for your user collection/table
        const newUser = await User.create({ username, password });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const AppWrapper = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        isAuthorized,
        setIsAuthorized,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
