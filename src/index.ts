import { Context, Schema } from 'koishi'
import {defineVariation} from './wordle_core/core'

import wordlist from './data/wordlist.json'

export const name = 'jrniuzi'
export const usage = 'a niuzi game dev by mckidsteve'

export interface Config {
    GuessWordLength: number
}

function getRandomWord() {
    return wordlist[Math.floor(Math.random() * wordlist.length)];
}

export default defineVariation<Config>({
    name: 'koishi-plugin-jrniuzi',
    command: 'jrwordle',
    Config: Schema.intersect([
        Schema.intersect([
            Schema.object({
                GuessWordLength: Schema.number().default(5).description('自定义猜测长度'),
            }),
        ]),
    ]),
    guessCount: 5,
    validWords: wordlist.map((word: string) => word.split('')),
    async getCurrentWord({ session }, { config }) {
        // const GuessWordLength = config.GuessWordLength
        await session.send('请输入一个5个字母的单词')
        const WordInfo = getRandomWord().split('')
        return WordInfo
    }
})

