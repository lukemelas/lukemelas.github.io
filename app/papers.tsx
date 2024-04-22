import Link from 'next/link'

export const paperData = [
    {
        "title": "This is a title",
        "publication": "This is ",
        "paper": "https://arxiv.org/abs/2302.10663",
        "website": "https://lukemelas.github.io/realfusion/",
        // "category": "NLP",
    },
    {
        "title": "This is a title",
        "publication": "This is ",
        "paper": "https://arxiv.org/abs/2302.10663",
        // "category": "CV",
    }
]

export default function PapersPage() {

return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {paperData.map((paper, index) => (
      <div key={index} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3 className="text-lg font-semibold">{paper.title}</h3>
        <p className="text-sm text-gray-600">{paper.publication}</p>
        <div className="mt-2">
          <a href={paper.paper} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Read Paper
          </a>
          {paper.website && (
            <>
              <span> | </span>
              <a href={paper.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Project Website
              </a>
            </>
          )}
        </div>
      </div>
    ))}
  </div>
)
}
