import { rest } from 'msw'

export const handlers = [
    rest.post('/api/generate-signature', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ signature: '...'}))
    })
  ]