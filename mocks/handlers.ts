import { rest } from 'msw'

const RESPONSE = "..."

export const handlers = [
    rest.post('/api/generate-signature', (req, res, ctx) =>
        res(
            ctx.delay(2000),
            ctx.status(200),
            ctx.json({ signature: RESPONSE }))
    )
]
