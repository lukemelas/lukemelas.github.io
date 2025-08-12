import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

export function GET(request: Request) {
  // let url = new URL(request.url)
  // let title = url.searchParams.get('title') || 'Luke Melas-Kyriazi'
  let title = 'Luke Melas-Kyriazi'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
