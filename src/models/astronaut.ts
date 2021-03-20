import mongoose, { Schema } from 'mongoose'
import IAstronaut from '../interfaces/astronaut'

const AstronautSchema: Schema = new Schema({
    name: { type: String, required: true },
    experience: { type: Number, required: true },
    active: { type: Boolean, required: true },
    recordDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export default mongoose.model<IAstronaut>('Astronaut', AstronautSchema)
