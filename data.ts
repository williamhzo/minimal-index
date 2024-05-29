export type ProjectItem = {
  title?: string;
  description?: string | Array<string>;
  image?: {
    url: string;
    alt: string;
  };
  video?: string;
  aspectRatio: number;
  links?: Array<{
    label: string;
    subLabel: string;
    url: string;
  }>;
};

export type Project = {
  id: string;
  title: string;
  content: {
    row1: Array<ProjectItem>;
    row2: Array<ProjectItem>;
  };
};

export type Personality = {
  id: string;
  disciplineId: DisciplineId;
  name: string;
  bio: {
    image: string;
    description: string;
    born: string;
  };
  ressources?: Array<{
    label: string;
    subLabel: string;
    link: string;
  }>;
  quote: string;
  projects: Array<Project>;
};

type DisciplineId = "artist" | "architect" | "designer";

type Discipline = {
  id: DisciplineId;
  name: string;
};

const PI_RATIO = 291 / 181;

export const disciplines: Discipline[] = [
  { id: "architect", name: "Architect" },
  { id: "artist", name: "Artist" },
  { id: "designer", name: "Designer" },
];

export const personalities: Array<Personality> = [
  {
    id: "donald-judd",
    disciplineId: "artist",
    name: "Donald Judd",
    bio: {
      image:
        "https://res.cloudinary.com/minimalindex/image/upload/v1712395009/minimal-index/donald-judd-bio.png",
      description:
        "Pivotal Minimalist artist, revolutionized art with his stark, geometric sculptures that redefine space and form.",
      born: "American, 1928—1994",
    },
    ressources: [{ label: "", subLabel: "", link: "" }],
    quote: "Design has to work. \nArt does not.",
    projects: [
      {
        id: "1",
        title: "",
        content: {
          row1: [
            {
              image: {
                alt: "",
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/donald-judd-project-1-1.png",
              },
              aspectRatio: 1,
            },
            {
              description:
                "His wall-mounted “stacks,” shelf-like structures, and freestanding multicolored works were made from commercial materials and fabricated in factories.",
              aspectRatio: 1,
            },
            {
              image: {
                alt: "",
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/donald-judd-project-1-2.png",
              },
              aspectRatio: PI_RATIO,
            },
            {
              description:
                "His wall-mounted “stacks,” shelf-like structures, and freestanding multicolored works were made from commercial materials and fabricated in factories.",
              aspectRatio: 1,
            },
            {
              image: {
                alt: "",
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/donald-judd-project-1-3.png",
              },
              aspectRatio: PI_RATIO,
            },
            {
              image: {
                alt: "",
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/donald-judd-project-1-4.png",
              },
              aspectRatio: PI_RATIO,
            },
            {
              title: "Artist Lecture - Amie Siegel on Donald Judd",
              description: "2021",
              video: "iBmHyspWGSM",
              aspectRatio: 4 / 3,
            },
          ],
          row2: [
            {
              image: {
                alt: "",
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/donald-judd-project-2-1.png",
              },
              aspectRatio: 16 / 9,
            },
            {
              description:
                "This process complicated traditional ideas about sculpture and fine art, undermining notions of individual authorship, the importance of the artist’s “hand,” and distinctions between art, architecture, and design.",
              aspectRatio: 1,
            },
            {
              image: {
                alt: "",
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/donald-judd-project-2-2.png",
              },
              aspectRatio: 2 / 3,
            },
            {
              image: {
                alt: "",
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/donald-judd-project-2-3.png",
              },
              aspectRatio: 16 / 9,
            },
            {
              title: "Judd | MoMA EXHIBITION",
              description: "2020",
              video: "https://todo.com/",
              aspectRatio: 4 / 3,
            },
            {
              image: {
                alt: "",
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/donald-judd-project-2-4.png",
              },
              aspectRatio: PI_RATIO,
            },
            {
              links: [
                {
                  label: "Judd Foundation",
                  subLabel: "Official website",
                  url: "https://juddfoundation.org/",
                },
                {
                  label: "Donald Judd on how to be an Artist",
                  subLabel: "2019",
                  url: "https://todo.com/",
                },
                {
                  label: "Interview Minimalism to the max",
                  subLabel: "2017",
                  url: "https://todo.com/",
                },
              ],
              aspectRatio: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: "ellsworth-kelly",
    disciplineId: "artist",
    name: "Ellsworth Kelly",
    bio: {
      image:
        "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-bio.png",
      description:
        "A key figure in Minimalism, celebrated for his bold, monochromatic canvases that distill visual experience into pure color and shape.",
      born: "American, 1923—2015",
    },
    ressources: [{ label: "", subLabel: "", link: "" }],
    quote: "The negative is just \nas important as the positive",
    projects: [
      {
        id: "1",
        title: "",
        content: {
          row1: [
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-1-1.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-1-2.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              title: "Ellsworth Kelly on Abstraction",
              description: "2019",
              video: "https://todo.com/",
              aspectRatio: 4 / 3,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-1-3.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              description:
                "Kelly applied his minimalist ethos with a keen eye for balance and proportion, often employing monochromatic schemes and simple shapes that harmonize with their surroundings, reflecting a deep understanding of the spatial and contextual relationship between art and its environment.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-1-4.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              links: [
                {
                  label: "Lorem Ipsum",
                  subLabel: "TBC",
                  url: "https://todo.com/",
                },
                {
                  label: "Lorem Ipsum",
                  subLabel: "TBC",
                  url: "https://todo.com/",
                },
                {
                  label: "Lorem Ipsum",
                  subLabel: "TBC",
                  url: "https://todo.com/",
                },
              ],
              aspectRatio: 1,
            },
          ],
          row2: [
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-2-1.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              description:
                "Kelly's art is a masterful exploration of color and form, stripping away the superfluous to focus on the essence of visual experience, resulting in bold, abstract works that challenge the viewer's perception and evoke a sense of pure emotion and simplicity.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-2-2.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-2-3.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-2-4.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-2-5.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              description:
                "Kelly's manipulation of space is characterized by his ability to transform environments through the interplay of light, color, and form, creating dynamic visual experiences that engage the viewer in a dialogue with the physical space, making his works not just objects of contemplation but integral components of the architectural landscape.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-2-6.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
          ],
        },
      },
    ],
  },
  {
    id: "alvaro-siza-vieira",
    name: "Álvaro Siza Vieira",
    disciplineId: "architect",
    bio: {
      image:
        "https://res.cloudinary.com/minimalindex/image/upload/v1714586573/alvaro-siza-vieira-bio.png",
      description:
        "Celebrated for his poetic modernism, masterfully blends minimalist aesthetics with organic forms in his architectural works.",
      born: "Portuguese, born 1933",
    },
    quote: "Architects don't\ninvent anything;\nthey transform reality",
    projects: [
      {
        id: "1988",
        title: "Expo'98 Portuguese National Pavilion",
        content: {
          row1: [
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716757707/alvaro-siza-vieira-1-1.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              title: "Theme & inspiration",
              description:
                "Built for the 1998 Lisbon World Exposition, the theme was “The Oceans: A Heritage for the Future.” Siza drew inspiration from Portugal's maritime history and the dynamic nature of the ocean.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716757707/alvaro-siza-vieira-1-2.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              title: "Integration with expo theme",
              description: [
                "The pavilion's design, with its fluid forms and open spaces, symbolized openness and exploration, resonating with the Expo's oceanic theme.",
                "The building was designed to interact with the adjacent water, creating a sense of continuity with the Tagus River.",
              ],
              aspectRatio: 1,
            },
          ],
          row2: [
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716757707/alvaro-siza-vieira-2-1.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              title: "Structural innovation",
              description: [
                "One of the pavilion's most striking features is the concrete canopy, a thin, curved slab resembling a sheet of paper floating over the space.",
                "This design represented a technological challenge and a significant achievement in concrete construction.",
              ],
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716757707/alvaro-siza-vieira-2-2.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
          ],
        },
      },
      {
        id: "1999",
        title: "Serralves Museum of Contemporary Art",
        content: {
          row1: [
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716757707/alvaro-siza-vieira-3-1.png",
                alt: "",
              },
              aspectRatio: 2 / 3,
            },
            {
              title: "Location & context",
              description:
                "Situated in Porto, Portugal, this museum is integrated within the historic Serralves Estate. The existing gardens and the villa on the estate influenced Siza's design.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716757707/alvaro-siza-vieira-3-2.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              title: "Architectural language",
              description: [
                "The building is characterized by its clean lines, uncluttered aesthetic, and thoughtful use of natural light, which is a hallmark of Siza's minimalist approach.",
                "The spatial progression through the museum is carefully choreographed to create a serene and contemplative environment.",
              ],
              aspectRatio: 1,
            },
          ],
          row2: [
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716757707/alvaro-siza-vieira-4-1.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              title: "Design approach",
              description: [
                "Siza aimed to create a harmonious dialogue between the new museum and its surroundings. He utilized minimalist forms, with the white stucco exterior blending seamlessly with the landscape.",
                "The design respects the existing topography, using it to dictate the flow and organization of the museum spaces.",
              ],
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716757707/alvaro-siza-vieira-4-2.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
          ],
        },
      },
      {
        id: "2010",
        title: "Amore Pacific Research & Design Center",
        content: {
          row1: [
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716757707/alvaro-siza-vieira-5-1.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              title: "Cultural context",
              description:
                "Located in Yongin, South Korea, this project demanded a sensitive approach to merge both the local cultural context and the company's identity.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716757707/alvaro-siza-vieira-5-2.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              title: "Adaptation to environment",
              description: [
                "The building's layout and form were influenced by the need to maximize natural light and facilitate efficient circulation.",
                "Siza's use of courtyards and open spaces within the design fosters collaboration and a connection to the natural environment, in line with traditional Korean architectural principles.",
              ],
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716757707/alvaro-siza-vieira-5-3.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
          ],
          row2: [
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716757707/alvaro-siza-vieira-6-1.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716757707/alvaro-siza-vieira-6-2.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              title: "Adaptation to environment",
              description: [
                "The building's layout and form were influenced by the need to maximize natural light and facilitate efficient circulation.",
                "Siza's use of courtyards and open spaces within the design fosters collaboration and a connection to the natural environment, in line with traditional Korean architectural principles.",
              ],
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716757707/alvaro-siza-vieira-6-3.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716757707/alvaro-siza-vieira-6-4.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
          ],
        },
      },
    ],
  },
  {
    id: "ludwig-mies-van-der-rohe",
    disciplineId: "architect",
    name: "Ludwig Mies van der Rohe",
    bio: {
      image:
        "https://res.cloudinary.com/minimalindex/image/upload/v1714586573/ludwig-mies-van-der-rohe-bio.png",
      description:
        "Considered by historians to be one of the most important architect of the 20th century and one whose work left a legacy in architectural theory.",
      born: "American, born Germany. 1886-1969",
    },
    quote: "You have to build up \nthe world you want \nto live in",
    projects: [
      {
        id: "1929",
        title: "Barcelona Pavillon",
        content: {
          row1: [
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-1-1.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-1-2.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-1-3.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              description:
                "I don't want to be interesting.\nI want to be good.",
              aspectRatio: 19 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-1-4.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-1-5.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-1-6.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-1-7.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
          ],
          row2: [
            {
              title: "Location & context",
              description:
                "Located in the heart of Barcelona, Spain, the Barcelona Pavilion serves as a cornerstone of modern architecture, symbolizing a blend of cultural heritage and avant-garde design, originally conceived to represent Germany at the 1929 International Exposition.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-2-1.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-2-2.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              title: "Design approach",
              description:
                "Mies van der Rohe's approach in the Barcelona Pavilion redefines architectural space through fluidity and openness, utilizing planes rather than volumes and integrating the indoors with the outdoors to craft an experiential journey that transcends traditional boundaries.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-2-3.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-2-4.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              title: "Architectural language",
              description:
                "The architectural language of the Barcelona Pavilion is marked by its sleek, minimalist aesthetic, featuring pioneering use of materials such as marble, travertine, and onyx, combined with precise geometric forms and the innovative incorporation of reflective water surfaces, encapsulating the essence of modernism with timeless elegance.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-2-5.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-2-6.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
          ],
        },
      },
      {
        id: "1951",
        title: "Farnsworth House",
        content: {
          row1: [
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-3-1.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              title: "Design approach",
              description:
                "Emphasizing transparency and simplicity. Creating an uncluttered living space that speaks volumes about the potential of modern architecture to cater to functional living through elegant simplicity.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-3-2.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-3-3.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-3-4.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-3-5.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-3-6.png",
                alt: "",
              },
              aspectRatio: 2 / 3,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-3-7.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
          ],
          row2: [
            {
              title: "Location & context",
              description:
                "Nestled in a serene, natural landscape along the Fox River in Plano, Illinois, the Farnsworth House emerges as a harmonious intersection of architecture and nature, offering a tranquil retreat that blurs the lines between indoor and outdoor spaces.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-4-1.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-4-2.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              title: "Architectural language",
              description:
                "The Farnsworth House stands as an iconic testament to the International Style of architecture, with its clear structural framework, use of industrial materials like steel and glass, and the seamless flow of spaces, articulating a language of openness, fluidity, and visual lightness.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-4-3.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-4-4.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-4-5.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-4-6.png",
                alt: "",
              },
              aspectRatio: 1,
            },
          ],
        },
      },
      {
        id: "1968",
        title: "Neue Nationalgalerie",
        content: {
          row1: [
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-5-1.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-5-2.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-5-3.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              description:
                "It is logical for architecture to change as the way we live also changes.",
              aspectRatio: 19 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-5-4.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-5-5.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-5-6.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-5-7.png",
                alt: "",
              },
              aspectRatio: 2 / 3,
            },
          ],
          row2: [
            {
              title: "Location & context",
              description:
                "The Neue Nationalgalerie in Berlin stands as a testament to minimalism amidst the city's cultural heart, reflecting Mies van der Rohe's mastery in blending urbanity with spatial simplicity.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-6-1.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              title: "Design approach",
              description:
                "With its emphasis on open space and transparency, the gallery's design encapsulates the minimalist principle of reduction, focusing on the interplay of light and shadow, form and material.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-6-2.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-6-3.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-6-4.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-6-5.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716844841/ludwig-mies-van-der-rohe-6-6.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              title: "Architectural language",
              description:
                "The gallery's iconic, steel-framed, glass-enclosed upper pavilion, supported by sleek, cruciform columns, showcases Mies's minimalist aesthetic, merging structural innovation with visual clarity.",
              aspectRatio: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: "dieter-rams",
    disciplineId: "designer",
    name: "Dieter Rams",
    bio: {
      image:
        "https://res.cloudinary.com/minimalindex/image/upload/v1714586573/dieter-rams-bio.png",
      description:
        "Iconic figure that profoundly shaped minimalist product design with his functional, aesthetic innovations.",
      born: "German, born 1932",
    },
    quote: "Less, but better",
    projects: [
      {
        id: "1960",
        title: "Braun",
        content: {
          row1: [
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861228/dieter-rams-project-1-1.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              description:
                "At Braun, under Dieter Rams' leadership, the design team created over 500 products, ranging from shavers to audio equipment.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861228/dieter-rams-project-1-2.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861228/dieter-rams-project-1-3.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              description:
                "This approach created a visual and operational harmony among diverse products, making Braun's offerings distinctively recognizable and intuitively usable.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861228/dieter-rams-project-1-4.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861228/dieter-rams-project-1-5.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861228/dieter-rams-project-1-6.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861228/dieter-rams-project-1-7.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861228/dieter-rams-project-1-8.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              title: "Rams Documentary",
              description: "2018, 74 minutes",
              video: "todo",
              aspectRatio: 4 / 3,
            },
          ],
          row2: [
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861228/dieter-rams-project-2-1.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861228/dieter-rams-project-2-2.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861228/dieter-rams-project-2-3.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              description:
                "Rams instilled a design philosophy that emphasized a cohesive aesthetic across all product lines, ensuring that each item bore the hallmark of Braun's minimalist and functional design.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861228/dieter-rams-project-2-4.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861228/dieter-rams-project-2-5.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              description:
                "The consistency in design not only reinforced the brand's identity but also elevated the user experience, making Braun synonymous with high-quality, well-designed consumer electronics.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861228/dieter-rams-project-2-6.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861228/dieter-rams-project-2-7.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
          ],
        },
      },
      {
        id: "10",
        title: "Principles",
        content: {
          row1: [
            {
              title: "todo",
              description: "todo",
              image: {
                url: "https://picsum.photos/id/20/640/362",
                alt: "",
              },
              aspectRatio: 1,
            },
          ],
          row2: [
            {
              title: "todo",
              description: "todo",
              image: {
                url: "https://picsum.photos/id/21/640/362",
                alt: "",
              },
              aspectRatio: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: "hans-j-wegner",
    disciplineId: "designer",
    name: "Hans J. Wegner",
    bio: {
      image:
        "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-bio.png",
      description:
        "Pioneer of Danish minimalist style and wood furniture - simply one of Scandinavia's most admired designers.",
      born: "Danish, 1914—2007",
    },
    ressources: [{ label: "", subLabel: "", link: "" }],
    quote:
      "A chair is to have no backside. It should be beautiful from all sides and angles.",
    projects: [
      {
        id: "1",
        title: "",
        content: {
          row1: [
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-1-1.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              description:
                "Wegner, also known as the 'Master of the Chair', designed more than 500 chairs during his career — many of which are considered masterpieces.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-1-2.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-1-3.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-1-4.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              title: "Functional Beauty",
              description:
                "His designs were deeply rooted in the belief that beauty arises from utility, embodying a seamless blend of form and function.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-1-5.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
          ],
          row2: [
            {
              title: "Craft Over Mass Production",
              description:
                "Wegner prioritized traditional craftsmanship techniques, ensuring each piece of furniture was not only aesthetically pleasing but also exceptionally well-made.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-2-1.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-2-2.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-2-3.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              title: "Ergonomic Focus",
              description:
                "Wegner's furniture is celebrated for its comfort and ergonomics, designed to support the human body naturally and elegantly.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-2-4.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-2-5.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-2-6  .png",
                alt: "",
              },
              aspectRatio: 1,
            },
          ],
        },
      },
    ],
  },
  {
    id: "charlotte-perriand",
    disciplineId: "designer",
    name: "Charlotte Perriand",
    bio: {
      image:
        "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/charlotte-perriand-bio.png",
      description:
        "Her work redefined living spaces with the integration of the human experience, simplicity and practical elegance.",
      born: "French, 1903-1999",
    },
    ressources: [{ label: "", subLabel: "", link: "" }],
    quote: "The important thing \nis not the object but \nthe man",
    projects: [
      {
        id: "1927",
        title: "Modernist Foundations",
        content: {
          row1: [
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-1-1.png",
                alt: "",
              },
              aspectRatio: 1,
            },

            {
              title: "Innovative Fusion",
              description:
                "Charlotte Perriand masterfully combined the industrial strength of steel with the natural warmth of leather, creating furniture that was not only structurally innovative but also invitingly tactile, setting a new standard for modern design aesthetics.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-1-2.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              title: "Design Philosophy",
              description:
                "Charlotte Perriand embraced a design philosophy that prioritized functionality, simplicity, and the honest expression of materials, aiming to improve everyday life through design.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-1-3.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              title: "Enduring Influence",
              description:
                "Her work profoundly influenced the evolution of modern architecture and design, bridging cultural divides and pioneering the integration of the human experience with the environment.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-1-4.png",
                alt: "",
              },
              aspectRatio: 1,
            },
          ],
          row2: [
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-2-1.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-2-2.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-2-3.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-2-4.png",
                alt: "",
              },
              aspectRatio: 16 / 9.28, // alignment 🤷‍♂️
            },
          ],
        },
      },
      {
        id: "1937",
        title: "Natural Modularism",
        content: {
          row1: [
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-3-1.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-3-2.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              title: "Human-Centric Design",
              description:
                "Charlotte Perriand's approach to the relationship between humans and their homes centered on creating spaces that not only catered to the practical aspects of daily life but also fostered emotional well-being, aiming for environments that were as nurturing as they were functional.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-3-3.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-3-4.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-3-5.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-3-6.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
          ],
          row2: [
            {
              title: "Functional Harmony",
              description:
                "Perriand's approach to design combined the use of natural materials with modular concepts to create spaces and objects that were both aesthetically pleasing and highly practical.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-4-1.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-4-2.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-4-3.png",
                alt: "",
              },
              aspectRatio: 1,
            },
            {
              title: "Architectural Approach",
              description:
                "Her architectural vision seamlessly blended the built environment with the natural world, emphasizing light, space, and form to create structures that were both functional and in profound dialogue with their surroundings, reflecting a deep respect for the interplay between nature and human habitation.",
              aspectRatio: 1,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-4-4.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1716861161/charlotte-perriand-4-5.png",
                alt: "",
              },
              aspectRatio: 1,
            },
          ],
        },
      },
    ],
  },
];

type Creators = "micka" | "william";

type Creator = {
  bio: string;
  portfolio: string;
  pfp: string;
};

export const creators: Record<Creators, Creator> = {
  micka: {
    bio: "Award-winning Product Designer & lifelong learner I create elegant and simple solutions that delight people.",
    portfolio: "https://micka.design/",
    pfp: "https://res.cloudinary.com/minimalindex/image/upload/v1716744727/about-micka.png",
  },
  william: {
    bio: "Passionate Product Engineer & never-ending learner. I build intuitive, performant & accessible software.",
    portfolio: "https://williamhzo.me/",
    pfp: "https://res.cloudinary.com/minimalindex/image/upload/v1716744727/about-will.png",
  },
};
