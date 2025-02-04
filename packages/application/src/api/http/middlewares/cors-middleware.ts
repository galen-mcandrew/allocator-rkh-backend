import cors, { CorsOptions } from 'cors'

const whitelist = [
  'http://localhost:3000',
  'https://filecoin-plus-frontend.vercel.app',
  'https://filecoin-plus-frontend-git-master-three-sigma.vercel.app',
]

const corsOptions: CorsOptions = {
  origin: function (origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

export const corsMiddleware = cors(corsOptions)
