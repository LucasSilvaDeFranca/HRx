import { Router } from 'express'
import authRoutes from './auth.js'

const router = Router()

router.use('/auth', authRoutes)

// Adicione novas rotas conforme criar:
// router.use('/colaboradores', colaboradoresRoutes)
// router.use('/desempenho', desempenhoRoutes)
// router.use('/hierarquia', hierarquiaRoutes)
// router.use('/centro-custos', centroCustosRoutes)
// router.use('/organograma', organogramaRoutes)
// router.use('/administracao', administracaoRoutes)
// router.use('/pesquisas', pesquisasRoutes)

export default router
