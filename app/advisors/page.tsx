import type { Metadata } from 'next'
import { customHeadingFont } from '../fonts'

type Advisor = {
  name: string
  institution: string | null
  year: number | null
}

const advisor = {
  name: 'Andrea Vedaldi',
  institution: 'University of California, Los Angeles',
  year: 2008,
}

const academicTree: Record<string, Advisor[]> = {
  'Andrea Vedaldi': [
    { name: 'Stefano Soatto', institution: 'California Institute of Technology', year: 1996 },
  ],
  'Stefano Soatto': [
    { name: 'Pietro Perona', institution: 'University of California, Berkeley', year: 1990 },
    { name: 'Roger W. Brockett', institution: 'Case Western Reserve University', year: 1964 },
    { name: 'Giorgio Picci', institution: 'University of Padua', year: 1967 },
    { name: 'John C. Doyle', institution: 'University of California, Berkeley', year: 1984 },
  ],
  'Pietro Perona': [
    { name: 'Jitendra Malik', institution: 'Stanford University', year: 1985 },
  ],
  'Jitendra Malik': [
    { name: 'Thomas Binford', institution: 'University of Wisconsin-Madison', year: 1965 },
  ],
  'Thomas Binford': [
    { name: 'Myron L. Good', institution: 'Duke University', year: 1951 },
  ],
  'Myron L. Good': [
    { name: 'Henry W. Newson', institution: 'University of Chicago', year: 1934 },
  ],
  'Henry W. Newson': [
    { name: 'William Draper Harkins', institution: 'Stanford University', year: 1907 },
  ],
  'William Draper Harkins': [
    { name: 'Robert E. Swain', institution: 'Yale University', year: 1904 },
  ],
  'Robert E. Swain': [
    { name: 'Lafayette Mendel', institution: 'Yale University', year: 1893 },
  ],
  'Lafayette Mendel': [
    { name: 'Russell Henry Chittenden', institution: 'Yale University', year: 1880 },
  ],
  'Russell Henry Chittenden': [
    { name: 'Wilhelm Kühne', institution: 'University of Göttingen', year: 1856 },
  ],
  'Wilhelm Kühne': [
    { name: 'Rudolph Wagner', institution: 'University of Würzburg', year: 1826 },
    { name: 'Friedrich Wöhler', institution: 'University of Heidelberg', year: 1823 },
  ],
  'Rudolph Wagner': [
    { name: 'Johann Lukas Schönlein', institution: 'University of Würzburg', year: 1816 },
    { name: 'Georges Cuvier', institution: 'Carolinian Academy, Stuttgart', year: 1788 },
  ],
  'Johann Lukas Schönlein': [
    { name: 'Ignaz Döllinger', institution: 'University of Bamberg', year: 1794 },
    { name: 'Friedrich Tiedemann', institution: 'University of Marburg', year: 1804 },
  ],
  'Ignaz Döllinger': [
    { name: 'Antonio Scarpa', institution: 'University of Padua', year: 1770 },
  ],
  'Antonio Scarpa': [
    { name: 'Giovanni Battista Morgagni', institution: 'University of Bologna', year: 1701 },
    { name: 'Leopoldo Caldani', institution: 'University of Bologna', year: 1750 },
  ],
  'Giovanni Battista Morgagni': [
    { name: 'Antonio Maria Valsalva', institution: 'University of Bologna', year: 1687 },
  ],
  'Antonio Maria Valsalva': [
    { name: 'Marcello Malpighi', institution: 'University of Bologna', year: 1653 },
  ],
  'Marcello Malpighi': [
    { name: 'Giovanni Alfonso Borelli', institution: 'Sapienza University of Rome', year: null },
  ],
  'Giovanni Alfonso Borelli': [
    { name: 'Benedetto Castelli', institution: 'University of Padua', year: null },
  ],
  'Benedetto Castelli': [
    { name: 'Galileo Galilei', institution: 'University of Pisa', year: 1585 },
  ],
  'Galileo Galilei': [],
  'Roger W. Brockett': [
    { name: 'Mihajlo D. Mesarovic', institution: 'Serbian Academy of Sciences and Arts', year: 1955 },
  ],
  'Mihajlo D. Mesarovic': [],
  'Giorgio Picci': [],
  'John C. Doyle': [
    { name: 'Donald Sarason', institution: 'University of Michigan', year: 1963 },
  ],
  'Donald Sarason': [
    { name: 'Paul Halmos', institution: 'University of Illinois at Urbana-Champaign', year: 1938 },
  ],
  'Paul Halmos': [
    { name: 'Joseph L. Doob', institution: 'Harvard University', year: 1932 },
  ],
  'Joseph L. Doob': [
    { name: 'Joseph L. Walsh', institution: 'Harvard University', year: 1920 },
  ],
  'Joseph L. Walsh': [
    { name: 'Maxime Bôcher', institution: 'University of Göttingen', year: 1891 },
    { name: 'George David Birkhoff', institution: 'University of Chicago', year: 1907 },
  ],
  'Maxime Bôcher': [
    { name: 'Felix Klein', institution: 'University of Bonn', year: 1868 },
  ],
  'Felix Klein': [
    { name: 'Julius Plücker', institution: 'University of Marburg', year: 1823 },
    { name: 'Rudolph Lipschitz', institution: 'University of Berlin', year: 1853 },
  ],
  'Julius Plücker': [
    { name: 'Christian Ludwig Gerling', institution: 'University of Göttingen', year: 1812 },
  ],
  'Christian Ludwig Gerling': [
    { name: 'Carl Friedrich Gauss', institution: 'University of Helmstedt', year: 1799 },
  ],
  'Carl Friedrich Gauss': [
    { name: 'Johann Friedrich Pfaff', institution: 'University of Göttingen', year: 1786 },
  ],
  'Johann Friedrich Pfaff': [
    { name: 'Abraham Gotthelf Kästner', institution: 'University of Leipzig', year: 1739 },
    { name: 'Johann Elert Bode', institution: null, year: null },
  ],
  'Abraham Gotthelf Kästner': [
    { name: 'Christian August Hausen', institution: 'University of Wittenberg', year: 1712 },
  ],
  'Christian August Hausen': [
    { name: 'Johann Christoph Wichmannshausen', institution: 'University of Leipzig', year: 1685 },
    { name: 'Johann Andreas Planer', institution: 'University of Wittenberg', year: 1686 },
  ],
  'Johann Christoph Wichmannshausen': [
    { name: 'Otto Mencke', institution: 'University of Leipzig', year: 1666 },
  ],
  'Otto Mencke': [
    { name: 'Jakob Thomasius', institution: 'University of Leipzig', year: 1643 },
  ],
  'Jakob Thomasius': [
    { name: 'Friedrich Leibniz', institution: 'University of Leipzig', year: 1622 },
  ],
  'Friedrich Leibniz': [],
  'Ruggero Frezza': [],
  'Friedrich Wöhler': [],
  'Georges Cuvier': [],
  'Friedrich Tiedemann': [],
  'Leopoldo Caldani': [],
  'George David Birkhoff': [],
  'Rudolph Lipschitz': [],
  'Johann Elert Bode': [],
  'Johann Andreas Planer': [],
}

export const metadata: Metadata = {
  title: 'Academic Lineage',
  description: 'Academic lineage through my advisor Andrea Vedaldi and the ancestors behind my research training.',
}

function formatAdvisorDetails({ institution, year }: Advisor) {
  return [institution, year?.toString()].filter(Boolean).join(' · ')
}

function renderAncestorNode(person: Advisor, seen: Set<string>, key: string, isLast: boolean = false) {
  const repeated = seen.has(person.name)
  if (!repeated) {
    seen.add(person.name)
  }
  const ancestors = repeated ? [] : academicTree[person.name] ?? []
  const details = formatAdvisorDetails(person)

  return (
    <li key={key} className="relative pl-4 md:pl-4">
      {/* Vertical line from parent continuing past this node to next sibling */}
      {!isLast && (
        <span
          className="absolute left-0 top-0 -bottom-0.5 border-l-[1.5px] border-stone-300 dark:border-stone-600"
          aria-hidden="true"
        />
      )}
      {/* L-shaped connector from parent line to this node */}
      <span
        className="absolute left-0 top-0 h-[0.9rem] w-3 rounded-bl-md border-b-[1.5px] border-l-[1.5px] border-stone-300 dark:border-stone-600 md:w-3"
        aria-hidden="true"
      />
      <p className="text-sm leading-6 text-slate-800 dark:text-slate-200 md:text-base">
        <span className="font-medium text-slate-950 dark:text-white">
          {person.name}
        </span>
        {details ? (
          <span className="text-slate-500 dark:text-slate-400"> — {details}</span>
        ) : null}
      </p>
      {ancestors.length > 0 && (
        <ul className="mt-0.5 space-y-0.5">
          {ancestors.map((ancestor, index) =>
            renderAncestorNode(
              ancestor,
              seen,
              `${key}-${index}-${ancestor.name}-${ancestor.institution ?? 'unknown'}-${ancestor.year ?? 'na'}`,
              index === ancestors.length - 1
            )
          )}
        </ul>
      )}
    </li>
  )
}

export default function AdvisorsPage() {
  const rootAncestors = academicTree[advisor.name] ?? []
  const seenAncestors = new Set([advisor.name])

  return (
    <section className="pb-8">
      <div className="mt-8 text-center">
        <h1 className={`${customHeadingFont.variable} title text-2xl md:text-3xl`}>
          Academic Lineage
        </h1>
          {/* Academic Advisors /* }
        {/* <p className="mx-auto mt-4 max-w-2xl text-base text-slate-700 dark:text-slate-300 md:text-lg">
          A small academic family tree, following my DPhil advisor back through the lineages that
          shaped my research.
        </p> */}
      </div>

      <hr className="my-8 border-t border-gray-300" />

      {/* <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/60">
        <p className="text-xs uppercase tracking-[0.25em] text-sky-700 dark:text-sky-300">
          Advisor
        </p>
        <h2 className={`${customHeadingFont.variable} mt-2 text-3xl text-slate-950 dark:text-white`}>
          {advisor.name}
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{advisor.institution}</p>
      </div>

      <div className="mt-10">
        <div className="mb-5 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          <h2 className={`${customHeadingFont.variable} text-3xl text-slate-950 dark:text-white`}>
            Ancestors
          </h2>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
        </div> */}

      <div>
        <p className="text-sm leading-6 text-slate-800 dark:text-slate-200 md:text-base">
          <span className="font-medium text-slate-950 dark:text-white">
            {advisor.name}
          </span>
          <span className="text-slate-500 dark:text-slate-400"> — {advisor.institution} · {advisor.year}</span>
        </p>
        <ul className="space-y-0.5">
          {rootAncestors.map((person, index) =>
            renderAncestorNode(
              person,
              seenAncestors,
              `${advisor.name}-${index}-${person.name}-${person.institution ?? 'unknown'}-${person.year ?? 'na'}`,
              index === rootAncestors.length - 1
            )
          )}
        </ul>

      </div>
    </section>
  )
}
