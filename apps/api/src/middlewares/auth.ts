import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { Role } from '@prisma/client'

interface JwtPayload {
  userId: string
  role: Role
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload
    }
  }
}

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret'

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization
  if (!header?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Token nao fornecido' })
    return
  }
  try {
    const token = header.split(' ')[1]
    req.user = jwt.verify(token, JWT_SECRET) as JwtPayload
    next()
  } catch {
    res.status(401).json({ error: 'Token invalido ou expirado' })
  }
}

export function requireRole(...roles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) { res.status(401).json({ error: 'Nao autenticado' }); return }
    if (!roles.includes(req.user.role)) { res.status(403).json({ error: 'Sem permissao' }); return }
    next()
  }
}

export function signToken(userId: string, role: Role): string {
  return jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: '7d' })
}
