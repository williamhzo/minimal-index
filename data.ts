export type Project = {
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
  projects: {
    row1: Array<Project>;
    row2: Array<Project>;
  };
};

type DisciplineId = "artist" | "architect" | "designer";

type Discipline = {
  id: DisciplineId;
  name: string;
};

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
      image: "https://picsum.photos/200",
      description:
        "Pivotal Minimalist artist, revolutionized art with his stark, geometric sculptures that redefine space and form.",
      born: "American, 1928—1994",
    },
    ressources: [{ label: "", subLabel: "", link: "" }],
    quote: "Design has to work. \nArt does not.",
    projects: {
      row1: [
        {
          id: "1",
          image: {
            alt: "",
            url: "https://picsum.photos/200",
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
            url: "https://picsum.photos/200",
          },
          aspectRatio: 3.14 / 1,
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
            url: "https://picsum.photos/200",
          },
          aspectRatio: 3.14 / 1,
        },
        {
          id: "6",
          image: {
            alt: "",
            url: "https://picsum.photos/200",
          },
          aspectRatio: 3.14 / 1,
        },
        {
          id: "7",
          title: "TODO: ADD YOUTUBE EMBED",
          description: "Artist Lecture - Amie Siegel on Donald Judd",
          video: "https://todo.com/",
          aspectRatio: 4 / 3,
        },
      ],
      row2: [
        {
          id: "8",
          image: {
            alt: "",
            url: "https://picsum.photos/200",
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
            url: "https://picsum.photos/200",
          },
          aspectRatio: 2 / 3,
        },
        {
          id: "11",
          image: {
            alt: "",
            url: "https://picsum.photos/200",
          },
          aspectRatio: 16 / 9,
        },
        {
          id: "12",
          title: "TODO: ADD YOUTUBE EMBED",
          description: "Judd | MoMA EXHIBITION 2020",
          video: "https://todo.com/",
          aspectRatio: 4 / 3,
        },
        {
          id: "13",
          image: {
            alt: "",
            url: "https://picsum.photos/200",
          },
          aspectRatio: 3.14 / 1,
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
  {
    id: "ellsworth-kelly",
    disciplineId: "artist",
    name: "Ellsworth Kelly",
    bio: {
      image: "https://picsum.photos/200",
      description: "todo",
      born: "todo",
    },
    ressources: [{ label: "", subLabel: "", link: "" }],
    quote: "todo",
    projects: {
      row1: [
        {
          id: "1",
          title: "todo",
          description: "todo",
          image: {
            url: "https://picsum.photos/200",
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
            url: "https://picsum.photos/200",
            alt: "",
          },
          aspectRatio: 1,
        },
      ],
    },
  },
  {
    id: "alvaro-siza-vieira",
    name: "Álvaro Siza Vieira",
    disciplineId: "architect",
    bio: {
      image: "https://picsum.photos/200",
      description: "todo",
      born: "todo",
    },
    ressources: [{ label: "", subLabel: "", link: "" }],
    quote: "todo",
    projects: {
      row1: [
        {
          id: "1",
          title: "todo",
          description: "todo",
          image: {
            url: "https://picsum.photos/200",
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
            url: "https://picsum.photos/200",
            alt: "",
          },
          aspectRatio: 1,
        },
      ],
    },
  },
  {
    id: "ludwig-mies-van-der-rohe",
    disciplineId: "architect",
    name: "Ludwig Mies van der Rohe",
    bio: {
      image: "https://picsum.photos/200",
      description: "todo",
      born: "todo",
    },
    ressources: [{ label: "", subLabel: "", link: "" }],
    quote: "todo",
    projects: {
      row1: [
        {
          id: "1",
          title: "todo",
          description: "todo",
          image: {
            url: "https://picsum.photos/200",
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
            url: "https://picsum.photos/200",
            alt: "",
          },
          aspectRatio: 1,
        },
      ],
    },
  },
  {
    id: "dieter-rams",
    disciplineId: "designer",
    name: "Dieter Rams",
    bio: {
      image: "https://picsum.photos/200",
      description: "todo",
      born: "todo",
    },
    ressources: [{ label: "", subLabel: "", link: "" }],
    quote: "todo",
    projects: {
      row1: [
        {
          id: "1",
          title: "todo",
          description: "todo",
          image: {
            url: "https://picsum.photos/200",
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
            url: "https://picsum.photos/200",
            alt: "",
          },
          aspectRatio: 1,
        },
      ],
    },
  },
  {
    id: "hans-j-wegner",
    disciplineId: "designer",
    name: "Hans J. Wegner",
    bio: {
      image: "https://picsum.photos/200",
      description: "todo",
      born: "todo",
    },
    ressources: [{ label: "", subLabel: "", link: "" }],
    quote: "todo",
    projects: {
      row1: [
        {
          id: "1",
          title: "todo",
          description: "todo",
          image: {
            url: "https://picsum.photos/200",
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
            url: "https://picsum.photos/200",
            alt: "",
          },
          aspectRatio: 1,
        },
      ],
    },
  },
];
