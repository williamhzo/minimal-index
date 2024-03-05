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
  },
];
