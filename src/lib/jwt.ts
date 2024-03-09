import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';

const DEFAULT_SIGN_OPTION: SignOptions = {
  expiresIn: '15m'
};

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOptions = DEFAULT_SIGN_OPTION
) {
  const secret_key = process.env.SECRET_KEY;
  const accessToken = jwt.sign(payload, secret_key!, options);
  const accessTokenExpiry = (jwt.decode(accessToken) as any).exp;
  return { accessToken, accessTokenExpiry };
}

export function verifyJwt(token: string) {
  try {
    const secret_key = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, secret_key!);
    return decoded as JwtPayload;
  } catch (error) {
    console.log(error);
    return null;
  }
}
