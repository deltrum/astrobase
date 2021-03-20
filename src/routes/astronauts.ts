import express from 'express'
import controller from '../controllers/astronauts'

const router = express.Router()

router.get('/astros', controller.getAllAstronauts)

router.get('/astros/:id', controller.getOneAstronaut)

router.post('/astros', controller.createAtronaut)

router.patch('/astros/:id', controller.updateOneAstronaut)

router.delete('/astros/:id', controller.deleteOneAstronaut)

export = router
