import { Router } from 'express'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { prisma } from '../lib/prisma.js'
import { signToken, requireAuth } from '../middlewares/auth.js'

const router = Router()

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().optional(),
})

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

router.post('/register', async (req, res) => {
  try {
    const data = registerSchema.parse(req.body)
    const exists = await prisma.authUser.findUnique({ where: { email: data.email } })
    if (exists) { res.status(409).json({ error: 'Email ja cadastrado' }); return }
    const hashed = await bcrypt.hash(data.password, 10)
    const user = await prisma.authUser.create({ data: { ...data, password: hashed } })
    const token = signToken(user.id, user.role)
    res.status(201).json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } })
  } catch (err) {
    if (err instanceof z.ZodError) { res.status(400).json({ error: 'Dados invalidos', details: err.errors }); return }
    res.status(500).json({ error: 'Erro interno' })
  }
})

router.post('/login', async (req, res) => {
  try {
    const data = loginSchema.parse(req.body)
    const user = await prisma.authUser.findUnique({ where: { email: data.email } })
    if (!user || !user.active) { res.status(401).json({ error: 'Credenciais invalidas' }); return }
    const valid = await bcrypt.compare(data.password, user.password)
    if (!valid) { res.status(401).json({ error: 'Credenciais invalidas' }); return }
    const token = signToken(user.id, user.role)
    res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } })
  } catch (err) {
    if (err instanceof z.ZodError) { res.status(400).json({ error: 'Dados invalidos', details: err.errors }); return }
    res.status(500).json({ error: 'Erro interno' })
  }
})

router.get('/me', requireAuth, async (req, res) => {
  const user = await prisma.authUser.findUnique({
    where: { id: req.user!.userId },
    select: { id: true, name: true, email: true, role: true, phone: true, createdAt: true },
  })
  if (!user) { res.status(404).json({ error: 'Usuario nao encontrado' }); return }
  res.json(user)
})

export default router
