const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    // Check for the Authorization header and extract the token
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
    

    // If no token is found
    if (!token) {
        return res
            .status(401)
            .json({ message: "No token, authorization denied" });
    
    }
    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the decoded user to the request object
        req.user = decoded;
        console.log("The decoded user is:", req.user);

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Handle invalid token
        res.status(400).json({ message: "Token is not valid" });
    } 
    } else {
        return res
            .status(401)
            .json({ message: "No token, authorization denied" });
    
    }
    
};


module.exports = verifyToken;