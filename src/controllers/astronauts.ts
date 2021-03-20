import { Request, Response, NextFunction } from 'express'
import Astronaut from '../models/astronaut'

const NAMESPACE = 'Astronaut Controller'

async function getAstronautById(req: Request, res: any, next: NextFunction) {
    try {
        var astronaut = await Astronaut.findById(req.params.id)
        if (astronaut == null) {
            return res.status(404).json({ message: 'Cannot find the item!' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.astronaut = astronaut
}

const getAllAstronauts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const astronauts = await Astronaut.find()
        res.json(astronauts)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getOneAstronaut = async (req: Request, res: any, next: NextFunction) => {
    await getAstronautById(req, res, next)
    res.json(res.astronaut)
}

const createAtronaut = async (req: Request, res: Response, next: NextFunction) => {
    const astronaut = new Astronaut({
        name: req.body.name,
        experience: req.body.experience,
        active: req.body.active
    })

    try {
        const newAstronaut = await astronaut.save()
        res.status(201).json(newAstronaut)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateOneAstronaut = async (req: Request, res: any, next: NextFunction) => {
    await getAstronautById(req, res, next)

    if (req.body.name != null) {
        res.astronaut.name = req.body.name
    }
    if (req.body.experience != null) {
        res.astronaut.experience = req.body.experience
    }
    if (req.body.active != null) {
        res.astronaut.active = req.body.active
    }

    try {
        const updatedAstronaut = await res.astronaut.save()
        res.json(updatedAstronaut)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const deleteOneAstronaut = async (req: Request, res: any, next: NextFunction) => {
    await getAstronautById(req, res, next)
    try {
        await res.astronaut.remove()
        res.json({ message: 'Deleted astronaut from the database!' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default { getAllAstronauts, getOneAstronaut, createAtronaut, updateOneAstronaut, deleteOneAstronaut }
