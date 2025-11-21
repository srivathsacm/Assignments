import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Login request:", email, password);

  
  if (email === "test@gmail.com" && password === "123") {
    return res.json({
      
      token: "abc123xyz"
    });
  }

 return res.status(401).json({
    message: "Invalid email or password"
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
