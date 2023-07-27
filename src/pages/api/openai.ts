import { env } from '@/env.mjs'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

export const runtime = 'edge'

const config = new Configuration({
    apiKey: env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

export default async function openaiHandler(req: Request) {
    const { messages } = await req.json()

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages,
        max_tokens: 200,
    })
    const stream = OpenAIStream(response)

    return new StreamingTextResponse(stream)
}