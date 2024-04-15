export type ProjectItem = {
  id: string;
  title?: string;
  description?: string;
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
  ressources: Array<{
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
  { id: "artist", name: "Artist" },
  { id: "architect", name: "Architect" },
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
              id: "1",
              image: {
                alt: "",
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/donald-judd-project-1-1.png",
              },
              aspectRatio: 1 / 1,
            },
            {
              id: "2",
              description:
                "His wall-mounted “stacks,” shelf-like structures, and freestanding multicolored works were made from commercial materials and fabricated in factories.",
              aspectRatio: 1 / 1,
            },
            {
              id: "3",
              image: {
                alt: "",
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/donald-judd-project-1-2.png",
              },
              aspectRatio: PI_RATIO,
            },
            {
              id: "4",
              description:
                "His wall-mounted “stacks,” shelf-like structures, and freestanding multicolored works were made from commercial materials and fabricated in factories.",
              aspectRatio: 1 / 1,
            },
            {
              id: "5",
              image: {
                alt: "",
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/donald-judd-project-1-3.png",
              },
              aspectRatio: PI_RATIO,
            },
            {
              id: "6",
              image: {
                alt: "",
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/donald-judd-project-1-4.png",
              },
              aspectRatio: PI_RATIO,
            },
            {
              id: "7",
              title: "Artist Lecture - Amie Siegel on Donald Judd",
              description: "2021",
              video: "iBmHyspWGSM",
              aspectRatio: 4 / 3,
            },
          ],
          row2: [
            {
              id: "8",
              image: {
                alt: "",
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/donald-judd-project-2-1.png",
              },
              aspectRatio: 16 / 9,
            },
            {
              id: "9",
              description:
                "This process complicated traditional ideas about sculpture and fine art, undermining notions of individual authorship, the importance of the artist’s “hand,” and distinctions between art, architecture, and design.",
              aspectRatio: 1 / 1,
            },
            {
              id: "10",
              image: {
                alt: "",
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/donald-judd-project-2-2.png",
              },
              aspectRatio: 2 / 3,
            },
            {
              id: "11",
              image: {
                alt: "",
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/donald-judd-project-2-3.png",
              },
              aspectRatio: 16 / 9,
            },
            {
              id: "12",
              title: "Judd | MoMA EXHIBITION",
              description: "2020",
              video: "https://todo.com/",
              aspectRatio: 4 / 3,
            },
            {
              id: "13",
              image: {
                alt: "",
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/donald-judd-project-2-4.png",
              },
              aspectRatio: PI_RATIO,
            },
            {
              id: "14",
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
              aspectRatio: 1 / 1,
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
    quote: "The negative is just as important as the positive",
    projects: [
      {
        id: "1",
        title: "",
        content: {
          row1: [
            {
              id: "1",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-1-1.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              id: "2",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-1-2.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              id: "3",
              title: "Ellsworth Kelly on Abstraction",
              description: "2019",
              video: "https://todo.com/",
              aspectRatio: 4 / 3,
            },
            {
              id: "4",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-1-3.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              id: "5",
              description:
                "Kelly applied his minimalist ethos with a keen eye for balance and proportion, often employing monochromatic schemes and simple shapes that harmonize with their surroundings, reflecting a deep understanding of the spatial and contextual relationship between art and its environment.",
              aspectRatio: 1 / 1,
            },
            {
              id: "6",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-1-4.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              id: "7",
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
              aspectRatio: 1 / 1,
            },
          ],
          row2: [
            {
              id: "8",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-2-1.png",
                alt: "",
              },
              aspectRatio: 1 / 1,
            },
            {
              id: "9",
              description:
                "Kelly's art is a masterful exploration of color and form, stripping away the superfluous to focus on the essence of visual experience, resulting in bold, abstract works that challenge the viewer's perception and evoke a sense of pure emotion and simplicity.",
              aspectRatio: 1 / 1,
            },
            {
              id: "10",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-2-2.png",
                alt: "",
              },
              aspectRatio: 1 / 1,
            },
            {
              id: "11",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-2-3.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              id: "12",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-2-4.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              id: "13",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/ellsworth-kelly-project-2-5.png",
                alt: "",
              },
              aspectRatio: PI_RATIO,
            },
            {
              id: "14",
              description:
                "Kelly's manipulation of space is characterized by his ability to transform environments through the interplay of light, color, and form, creating dynamic visual experiences that engage the viewer in a dialogue with the physical space, making his works not just objects of contemplation but integral components of the architectural landscape.",
              aspectRatio: 1 / 1,
            },
            {
              id: "15",
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
      image: "https://picsum.photos/id/13/640/362",
      description: "todo",
      born: "todo",
    },
    ressources: [{ label: "", subLabel: "", link: "" }],
    quote: "todo",
    projects: [
      {
        id: "1988",
        title: "Expo'98 Portuguese National Pavilion",
        content: {
          row1: [
            {
              id: "1",
              title: "todo",
              description: "todo",
              image: {
                url: "https://picsum.photos/id/14/640/362",
                alt: "",
              },
              aspectRatio: 1,
            },
          ],
          row2: [
            {
              id: "2",
              title: "todo",
              description: "todo",
              image: {
                url: "https://picsum.photos/id/15/640/362",
                alt: "",
              },
              aspectRatio: 1,
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
              id: "1",
              title: "todo",
              description: "todo",
              image: {
                url: "https://picsum.photos/id/14/640/362",
                alt: "",
              },
              aspectRatio: 1,
            },
          ],
          row2: [
            {
              id: "2",
              title: "todo",
              description: "todo",
              image: {
                url: "https://picsum.photos/id/15/640/362",
                alt: "",
              },
              aspectRatio: 1,
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
              id: "1",
              title: "todo",
              description: "todo",
              image: {
                url: "https://picsum.photos/id/14/640/362",
                alt: "",
              },
              aspectRatio: 1,
            },
          ],
          row2: [
            {
              id: "2",
              title: "todo",
              description: "todo",
              image: {
                url: "https://picsum.photos/id/15/640/362",
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
    id: "ludwig-mies-van-der-rohe",
    disciplineId: "architect",
    name: "Ludwig Mies van der Rohe",
    bio: {
      image: "https://picsum.photos/id/16/640/362",
      description: "todo",
      born: "todo",
    },
    ressources: [{ label: "", subLabel: "", link: "" }],
    quote: "todo",
    projects: [
      {
        id: "1929",
        title: "Barcelona Pavillon",
        content: {
          row1: [
            {
              id: "1",
              title: "todo",
              description: "todo",
              image: {
                url: "https://picsum.photos/id/17/640/362",
                alt: "",
              },
              aspectRatio: 1,
            },
          ],
          row2: [
            {
              id: "2",
              title: "todo",
              description: "todo",
              image: {
                url: "https://picsum.photos/id/18/640/362",
                alt: "",
              },
              aspectRatio: 1,
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
              id: "1",
              title: "todo",
              description: "todo",
              image: {
                url: "https://picsum.photos/id/17/640/362",
                alt: "",
              },
              aspectRatio: 1,
            },
          ],
          row2: [
            {
              id: "2",
              title: "todo",
              description: "todo",
              image: {
                url: "https://picsum.photos/id/18/640/362",
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
              id: "1",
              title: "todo",
              description: "todo",
              image: {
                url: "https://picsum.photos/id/17/640/362",
                alt: "",
              },
              aspectRatio: 1,
            },
          ],
          row2: [
            {
              id: "2",
              title: "todo",
              description: "todo",
              image: {
                url: "https://picsum.photos/id/18/640/362",
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
    id: "dieter-rams",
    disciplineId: "designer",
    name: "Dieter Rams",
    bio: {
      image: "https://picsum.photos/id/19/640/362",
      description: "todo",
      born: "todo",
    },
    ressources: [{ label: "", subLabel: "", link: "" }],
    quote: "todo",
    projects: [
      {
        id: "1960",
        title: "Braun",
        content: {
          row1: [
            {
              id: "1",
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
              id: "2",
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
      {
        id: "10",
        title: "Principles",
        content: {
          row1: [
            {
              id: "1",
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
              id: "2",
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
              id: "1",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-1-1.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
            {
              id: "2",
              description:
                "Wegner, also known as the 'Master of the Chair', designed more than 500 chairs during his career — many of which are considered masterpieces.",
              aspectRatio: 1 / 1,
            },
            {
              id: "3",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-1-2.png",
                alt: "",
              },
              aspectRatio: 1 / 1,
            },
            {
              id: "4",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-1-3.png",
                alt: "",
              },
              aspectRatio: 1 / 1,
            },
            {
              id: "5",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-1-4.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              id: "6",
              title: "Functional Beauty",
              description:
                "His designs were deeply rooted in the belief that beauty arises from utility, embodying a seamless blend of form and function.",
              aspectRatio: 1 / 1,
            },
            {
              id: "7",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-1-5.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
          ],
          row2: [
            {
              id: "8",
              title: "Craft Over Mass Production",
              description:
                "Wegner prioritized traditional craftsmanship techniques, ensuring each piece of furniture was not only aesthetically pleasing but also exceptionally well-made.",
              aspectRatio: 1 / 1,
            },
            {
              id: "9",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-2-1.png",
                alt: "",
              },
              aspectRatio: 1 / 1,
            },
            {
              id: "10",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-2-2.png",
                alt: "",
              },
              aspectRatio: 1 / 1,
            },
            {
              id: "11",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-2-3.png",
                alt: "",
              },
              aspectRatio: 1 / 1,
            },
            {
              id: "12",
              title: "Ergonomic Focus",
              description:
                "Wegner's furniture is celebrated for its comfort and ergonomics, designed to support the human body naturally and elegantly.",
              aspectRatio: 1 / 1,
            },
            {
              id: "13",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-2-4.png",
                alt: "",
              },
              aspectRatio: 4 / 3,
            },
            {
              id: "14",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-2-5.png",
                alt: "",
              },
              aspectRatio: 1 / 1,
            },
            {
              id: "15",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-2-6  .png",
                alt: "",
              },
              aspectRatio: 1 / 1,
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
        "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/charlotte-perriand-bio.png",
      description: "todo",
      born: "todo",
    },
    ressources: [{ label: "", subLabel: "", link: "" }],
    quote: "todo",
    projects: [
      {
        id: "1927",
        title: "Modernist Foundations",
        content: {
          row1: [
            {
              id: "1",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-1-1.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
          ],
          row2: [
            {
              id: "2",
              title: "todo",
              description: "todo",
              aspectRatio: 1 / 1,
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
              id: "1",
              image: {
                url: "https://res.cloudinary.com/minimalindex/image/upload/v1712395037/minimal-index/hans-wegner-project-1-1.png",
                alt: "",
              },
              aspectRatio: 16 / 9,
            },
          ],
          row2: [
            {
              id: "2",
              title: "todo",
              description: "todo",
              aspectRatio: 1 / 1,
            },
          ],
        },
      },
    ],
  },
];
