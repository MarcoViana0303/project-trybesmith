// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secretJWT';

// const jwtConfig = {
//   expiresIn: '15m',
//   algorithm: 'HS256',
// };
export default class JWTconfig {
  static generateToken(body: any) {
    return jwt.sign(body, JWT_SECRET);
  }
}
