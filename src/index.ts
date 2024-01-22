import { Context, Schema } from 'koishi'
import {defineVariation} from './wordle_core/core'

import wordlist from './data/wordlist.json'

export const name = 'jrniuzi'
export const usage = 'a niuzi game dev by mckidsteve'

export interface Config {}
export const Config: Schema<Config> = Schema.object({})

function getRandomWord() {
    return wordlist[Math.floor(Math.random() * wordlist.length)];
}

export default defineVariation<Config>({
    name: 'koishi-plugin-jrniuzi',
    command: 'jrwordle',
    Config: Schema.intersect([
        Schema.intersect([
        Schema.object({
            fallbackToRandom: Schema.boolean().default(true),
        }),
        Schema.union([
            Schema.object({
            fallbackToRandom: Schema.const(true),
            timeout: Schema.number().default(5000),
            }),
            Schema.object({
            fallbackToRandom: Schema.const(false),
            }),
        ]),
        ]),
    ]),
    validWords: wordlist.map((word: string) => word.split('')),
    //   init(command, ctx) {
    //     command.option('random', '-r')
    //     },
    async getCurrentWord({ session }, { ctx, config }) {
        await session.send('请输入一个5个字母的单词')
        return getRandomWord().split('')
    }
})


// export function apply(ctx: Context) {
//    ctx.on('message' , (session) => {
//         if (session.content === 'hello wordle'){
//             session.send(getRandomWord().split(''))
//         }
//     })
// }
