import jwt from "jsonwebtoken"

interface Payload {
  [key: string]: any; // Replace with more specific types if needed
}

const generateToken = (payload: Payload): string => {
  const secretKey = 'yourSecretKey'; // Replace with your own secret key
  const options: jwt.SignOptions = {
    expiresIn: '1h', 
  };

  const token = jwt.sign(payload, secretKey, options);
  return token;
};

export { generateToken };