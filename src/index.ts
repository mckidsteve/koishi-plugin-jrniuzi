import { Context, Schema } from 'koishi'

export const name = 'jrniuzi'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
   ctx.on('message' , (session) => {
        if (session.content === 'hello'){
            session.send('hello world')
        }
    })
}
