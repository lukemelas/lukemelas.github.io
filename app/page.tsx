import Image from 'next/image';
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import Link from "next/link";
import { customHeadingFont } from './fonts';

const paperData = [
  {
    "title": "IM-3D: Iterative Multiview Diffusion and Reconstruction for High-Quality 3D Generation",
    "authors": ["L Melas-Kyriazi", "I Laina", "C Rupprecht", "N Neverova", "A Vedaldi", "O Gafni", "F Kokkinos"],
    "publication": "ICML 2024",
    "paper": "https://arxiv.org/abs/2402.08682",
    "website": "https://lukemelas.github.io/IM-3D/",
    "tags": ["CV"]
  },
  {
    "title": "Fixed Point Diffusion Models",
    "authors": ["X Bai*", "L Melas-Kyriazi*"],
    "publication": "CVPR 2024",
    "paper": "https://arxiv.org/abs/2401.08741",
    "website": "https://lukemelas.github.io/fixed-point-diffusion-models/",
    "tags": ["ML", "CV"]
  },
  {
    "title": "GES: Generalized Exponential Splatting for Efficient Radiance Field Rendering",
    "authors": ["A Hamdi", "L Melas-Kyriazi", "G Qian", "J Mai", "R Liu", "C Vondrick", "B Ghanem", "A Vedaldi"],
    "publication": "CVPR 2024",
    "paper": "https://arxiv.org/abs/2402.10128",
    "website": "https://abdullahamdi.com/ges/",
    "tags": ["CV"]
  },
  {
    "title": "A Benchmark for Learning to Translate a New Language from One Grammar Book",
    "authors": ["G Tanzer", "M Suzgun", "E Visser", "D Jurafsky", "L Melas-Kyriazi"],
    "publication": "ICLR 2024",
    "paper": "https://arxiv.org/abs/2309.16575",
    "website": "https://lukemelas.github.io/mtob/",
    "award": "Spotlight",
    "tags": ["NLP"]
  },
  {
    "title": "RealFusion: 360-Degree Reconstruction of Any Object from a Single Image",
    "authors": ["L Melas-Kyriazi", "C Rupprecht", "I Laina", "A Vedaldi"],
    "publication": "CVPR 2023",
    "paper": "https://arxiv.org/abs/2302.10663",
    "website": "https://lukemelas.github.io/realfusion/",
    "tags": ["CV"]
  },
  {
    "title": "PC^2: Projection-Conditioned Point Cloud Diffusion for Single-Image 3D Reconstruction",
    "authors": ["L Melas-Kyriazi", "C Rupprecht", "A Vedaldi"],
    "publication": "CVPR 2023",
    "paper": "https://arxiv.org/abs/2302.10668",
    "website": "https://lukemelas.github.io/projection-conditioned-point-cloud-diffusion/",
    "award": "Highlight",
    "tags": ["CV"]
  },
  {
    "title": "The Harvard USPTO Patent Dataset: A Large-Scale, Well-Structured, and Multi-Purpose Corpus of Patent Applications",
    "authors": ["M Suzgun", "L Melas-Kyriazi", "S Sarkar", "SD Kominers", "S Shieber"],
    "publication": "NeurIPS 2023 - Datasets and Benchmarks",
    "paper": "https://arxiv.org/abs/2207.04043",
    "website": "https://patentdataset.org/",
    "award": "Spotlight",
    "tags": ["NLP"]
  },
  {
    "title": "Understanding Self-Supervised Features for Learning Unsupervised Instance Segmentation",
    "authors": ["P Engstler*", "L Melas-Kyriazi*", "C Rupprecht", "I Laina"],
    "publication": "NeurIPS 2023 - Workshop on Self-Supervised Learning",
    "paper": "https://arxiv.org/pdf/2311.14665",
    "tags": ["CV"]
  },
  {
    "title": "Augmenting Medical Image Classifiers with Synthetic Data from Latent Diffusion Models",
    "authors": ["LW Sagers*", "JA Diao*", "L Melas-Kyriazi*", "M Groh", "P Rajpurkar", "AS Adamson", "V Rotemberg", "R Daneshjou", "AK Manrai"],
    "publication": "In Submission",
    "paper": "https://arxiv.org/abs/2308.12453",
    "tags": ["CV", "Medical ML"]
  },
  {
    "title": "Follow the Wisdom of the Crowd: Effective Text Generation via Minimum Bayes Risk Decoding",
    "authors": ["M Suzgun", "L Melas-Kyriazi", "D Jurafsky"],
    "publication": "ACL Findings 2023",
    "paper": "https://arxiv.org/abs/2211.07634",
    "website": "https://github.com/suzgunmirac/crowd-sampling",
    "tags": ["NLP"]
  },
  {
    "title": "Intrinsic Gradient Compression for Scalable and Efficient Federated Learning",
    "authors": ["L Melas-Kyriazi*", "F Wang*"],
    "publication": "ACL 2023 - Workshop on Federated Learning for NLP",
    "paper": "https://arxiv.org/abs/2112.02656",
    "tags": ["ML"]
  },
  {
    "title": "Prompt-and-Rerank: A Method for Zero-Shot and Few-Shot Arbitrary Textual Style Transfer with Small Language Models",
    "publication": "EMNLP 2022",
    "authors": ["M Suzgun", "L Melas-Kyriazi", "D Jurafsky"],
    "paper": "https://arxiv.org/abs/2205.11503",
    "website": "https://github.com/suzgunmirac/prompt-and-rerank",
    "award": "Oral",
    "tags": ["NLP"]
  },
  {
    "title": "Deep Spectral Methods: A Surprisingly Strong Baseline for Unsupervised Semantic Segmentation and Localization",
    "publication": "CVPR 2022",
    "authors": ["L Melas-Kyriazi", "C Rupprecht", "I Laina", "A Vedaldi"],
    "paper": "https://arxiv.org/abs/2205.07839",
    "website": "https://github.com/lukemelas/deep-spectral-segmentation",
    "award": "Oral",
    "tags": ["CV"]
  },
  {
    "title": "Finding an Unsupervised Image Segmenter in Each of Your Deep Generative Models",
    "publication": "ICLR 2022",
    "authors": ["L Melas-Kyriazi", "C Rupprecht", "I Laina", "A Vedaldi"],
    "paper": "https://arxiv.org/abs/2105.08127",
    "website": "https://github.com/lukemelas/unsupervised-image-segmentation",
    "tags": ["CV"]
  },
  {
    "title": "Do You Even Need Attention? A Stack of Feed-Forward Layers Does Surprisingly Well on ImageNet",
    "authors": ["L Melas-Kyriazi"],
    "publication": "arXiv",
    "paper": "https://arxiv.org/abs/2105.02723",
    "website": "https://github.com/lukemelas/do-you-even-need-attention",
    "tags": ["ML for Medicine"]
  },
  {
    "title": "PixMatch: Unsupervised Domain Adaptation via Pixelwise Consistency Training",
    "authors": ["L Melas-Kyriazi", "AK Manrai"],
    "publication": "CVPR 2021",
    "paper": "https://arxiv.org/abs/2105.08128",
    "website": "https://github.com/lukemelas/pixmatch",
    "tags": ["CV"]
  },
  {
    "title": "Show, Edit and Tell: A Framework for Editing Image Captions",
    "authors": ["F Sammani*", "L Melas-Kyriazi*"],
    "publication": "CVPR 2020",
    "paper": "https://arxiv.org/abs/2003.03107",
    "website": "https://github.com/fawazsammani/show-edit-tell",
    "tags": ["CV"]
  },
  {
    "title": "Prediction of Chronological and Biological Age from Laboratory Data",
    "authors": ["L Sagers", "L Melas-Kyriazi", "CJ Patel", "AK Manrai"],
    "publication": "Journal on Aging, 2020",
    "paper": "https://pubmed.ncbi.nlm.nih.gov/32391803/",
    "tags": ["ML for Medicine"]
  },
  {
    "title": "Generation-Distillation for Efficient Natural Language Understanding in Low-Data Settings",
    "authors": ["L Melas-Kyriazi", "G Han", "C Liang"],
    "publication": "EMNLP 2019 - Workshop on Deep Learning for Low-Resource NLP",
    "paper": "https://arxiv.org/abs/2002.00733",
    "tags": ["NLP"]
  },
  {
    "title": "Encoder-Agnostic Adaptation for Conditional Language Generation",
    "authors": ["ZM Ziegler", "L Melas-Kyriazi", "S Gehrmann", "AM Rush"],
    "publication": "arXiv",
    "paper": "https://arxiv.org/abs/1908.06938",
    "tags": ["ML", "NLP"]
  },
  {
    "title": "Training for Diversity in Image Paragraph Captioning",
    "authors": ["L Melas-Kyriazi", "G Han", "AM Rush"],
    "publication": "EMNLP 2018",
    "paper": "https://aclanthology.org/D18-1084/",
    "website": "https://github.com/lukemelas/image-paragraph-captioning",
    "tags": ["CV", "NLP"]
  }
]


export default function Page() {
  return (
    <section>

      {/* Image */}
      <div className="flex justify-center mt-8">
        <div className="relative w-64 h-64 overflow-hidden rounded-full border-4 border-gray-500 mb-8">
          <Image
            src="/images/portrait-square-2.jpg"
            alt="Luke Melas-Kyriazi"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Name */}
      {/* <h1 className={customFont.variable + " mb-8 text-4xl font-semibold tracking-tighter text-center"}> */}
      <h1 className={customHeadingFont.variable + " mb-8 text-4xl text-center"}>
        Luke Melas-Kyriazi
      </h1>

      {/* Icon links */}
      <div className="flex justify-center space-x-4">
        <a
          href="https://scholar.google.com/citations?user=btHxkDIAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Scholar"
        >
          <FaGoogleScholar />
        </a>
        <a
          href="https://github.com/lukemelas/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a href="mailto:lukemk-AT-robots.ox.ac.uk" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>

      {/* Bio */}
      <hr className="my-8 border-t border-gray-300" />
      <p className="mt-8 text-lg">
        I'm a Rhodes Scholar and PhD student at Oxford University. My research
        spans machine learning, computer vision, and natural language
        processing. I am lucky to be advised by{' '}
        <Link href="https://www.robots.ox.ac.uk/~vedaldi/" className="hover:underline">
          Professor Andrea Vedaldi
        </Link>
        {' '}in the{' '}
        <Link href="https://www.robots.ox.ac.uk/~vedaldi/" className="hover:underline">
          Visual Geometry Group (VGG)
        </Link>
        .{' '}
        {/* Previously I've worked or interned at Meta Research, Forethought AI, and Jane Street. */}
        I'm always interested in meeting new people and hearing about potential collaborations. 
        If you'd like to get in touch with me, please email me at lukemk [at] robots [dot] ox [dot] ac [dot] uk.
      </p>
      
      {/* Blog posts */}
      {/* <div className="my-8"><BlogPosts /></div> */}

      {/* News */}
      <hr className="my-8 border-t border-gray-300" />
      <h3 className={"mb-4 text-2xl font-extralight text-center"} id='papers'>~ News ~</h3>
      <ul>
        <li>• One computer vision paper (<Link href="https://lukemelas.github.io/IM-3D/">↗</Link>) accepted to ICML 2024</li>
        <li>• Two computer vision papers (<Link href="https://lukemelas.github.io/fixed-point-diffusion-models/">↗</Link>,<Link href="https://abdullahamdi.com/ges/">↗</Link>) accepted to CVPR 2024 </li>
        <li>• One NLP paper (<Link href="https://lukemelas.github.io/mtob/">↗</Link>) accepted to ICLR 2024 <span className='text-red-400'>(as a Spotlight!)</span></li>
        <li>• Two computer vision papers (<Link href="https://lukemelas.github.io/realfusion/">↗</Link>,<Link href="https://lukemelas.github.io/projection-conditioned-point-cloud-diffusion/">↗</Link>) accepted to CVPR 2023 <span className='text-red-400'>(one as a Spotlight!)</span></li>
        <li>• Started working as a Visiting Researcher at Meta Research (formerly Facebook AI Research) part-time while completing my PhD</li>
        <li>• One dataset paper accepted at NeurIPS 2023, and one CV paper at a NeurIPS Workshop</li>
        <li>• One NLP paper accepted at ACL Findings 2023, and one ML paper at an ACL Workshop</li>
        <li>• One computer vision paper accepted at CVPR 2022 <span className='text-red-400'>(as an Oral!)</span></li>
        <li>• One NLP paper accepted at EMNLP 2022 <span className='text-red-400'>(as an Oral!)</span></li>
        <li>• One computer vision paper accepted at ICLR 2022</li>
        <li>• One computer vision paper accepted at CVPR 2021</li>
        <li>• One medical ML paper accepted in the Journal of Aging (featured on the cover!)</li>
        <li>• Started PhD at Oxford under Professor Andrea Vedaldi</li>
        <li>• Submitted Bachelor's Thesis and graduated from Harvard!</li>
        <li>• One computer vision paper accepted at CVPR 2020</li>
        <li>• My first paper accepted at EMNLP 2019 (an extended project for CS 287)</li>
      </ul>

      {/* Papers */}
      <hr className="my-8 border-t border-gray-300" />
      <h3 className={"mb-4 text-2xl font-extralight text-center"} id='papers'>~ Publications ~</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {paperData.map((paper, index) => (
          <div key={index} className="border border-gray-100 dark:border-gray-800 dark:bg-slate-950 rounded-lg p-4 pb-3 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-medium">{paper.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-200">{
              paper.authors.map((author, index) => (
                <><span className="text-slate-800 dark:text-slate-200">{author.includes("Melas-Kyriazi")? <span className='font-semibold'>{author}</span> : author}{index != paper.authors.length - 1? ", " : ""}</span></>
              ))
            }</p>
            <p className="text-gray-600 dark:text-gray-200 mt-1">{paper.publication}{
              paper.award && (<>
                <span className="text-red-700 dark:text-red-300"> ({paper.award})</span>
              </>)
            }</p>
            <div className="mt-2 flex justify-between text-sm">
              <div>
              <a href={paper.paper} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">
                Paper
              </a>
                {paper.website && (
                  <>
                    <span className='text-gray-400'> | </span>
                    <a href={paper.website} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">
                      Project Page
                    </a>
                  </>
                )}
              </div>
              <div>
                {paper.tags && paper.tags.map((tag, index) => (
                  <span className='p-2 pt-1 pb-1 m-2 bg-sky-50 dark:bg-blue-900 text-gray-400 rounded'>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <h3 className={"mb-4 text-2xl font-extralight text-center"} id='papers'>~ Dissertations ~</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4"> */}

      {/* <h3 className={"mb-4 text-2xl font-extralight text-center"} id='papers'>~ Software Projects ~</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4"> */}

      {/* <h3 className={"mb-4 text-2xl font-extralight text-center"} id='papers'>~ About Me? ~</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4"> */}
      {/* Running, hiking, and traveling to new places. */}


    </section>
  );
}
