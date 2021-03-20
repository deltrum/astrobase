import { Document } from 'mongoose'

export default interface IAstronaut extends Document {
    name: string
    experience: string
    active: boolean
    recordDate: Date
}
