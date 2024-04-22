import { Span } from 'next/dist/trace'
import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  // '/blog': {
  //   name: 'Blog',
  // },
  '/#papers': {
    name: 'Papers',
  },
  'https://github.com/lukemelas/': {
    name: 'GitHub',
  },
  'https://scholar.google.com/citations?user=btHxkDIAAAAJ': {
    name: 'Google Scholar',
  },
}

export function Navbar() {
  return (
    <aside className="mb-4"> {/* tracking-tight */}
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex justify-center items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-4">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center justify-center relative py-1 px-2 m-1 navitem"
                  >
                    {name}
                  </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
