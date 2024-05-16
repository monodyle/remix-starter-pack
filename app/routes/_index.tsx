import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix Starter Pack' },
    { name: 'description', content: 'U\'re welcome!' },
  ]
}

export default function Index() {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="grid gap-2">
        <h1 className="text-xl font-medium">Remix Starter Pack 🎒</h1>
        <ul className="list-disc pl-9">
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer noopener"
              className="text-blue-500 hover:underline"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer noopener"
              className="text-blue-500 hover:underline"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/docs"
              rel="noreferrer noopener"
              className="text-blue-500 hover:underline"
            >
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
