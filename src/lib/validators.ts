import { z } from 'zod'

export const PlayerSchema = z.object({
  fullName: z.string().min(2),
  jerseyNo: z.number().min(1),
  position: z.string().min(2),
  jerseySize: z.enum(['S', 'M', 'L', 'XL', 'XXL']),
  contact: z.string().min(5)
})

export const TeamSchema = z.object({
  companyName: z.string().min(2),
  managerName: z.string().min(2),
  managerEmail: z.string().email(),
  managerPhone: z.string().min(5),
  captainName: z.string().min(2),
  captainPhone: z.string().min(5),
  logoUrl: z.string().url(),
  brandGuideUrl: z.string().url().optional(),
  players: z.array(PlayerSchema).length(10)
})
