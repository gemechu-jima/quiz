import jwt from "jsonwebtoken";
export const authenticate = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  let token;
  try {
    token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Authentication is failed" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error("Error occurred when verifying token:", err.message);
        return res.status(401).json({ message: "Invalid token" });
      }
      console.log("Successfully verified token");
      req.userEmail = { email: decoded?.email };
      next();
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Authentication is failed", err });
  }
};
