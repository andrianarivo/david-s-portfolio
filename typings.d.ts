interface SanityBody {
  _createdAt: string,
  _id: string,
  _rev: string,
  _updatedAt: string,
}

interface Image {
  _type: 'image',
  asset: {
    _ref: string,
    _type: 'reference',
  }
}

export type PageInfo = SanityBody & {
  _type: 'pageInfo',
  address: string,
  backgroundInformation: string,
  email: string,
  role: string,
  heroImage: Image,
  name: string,
  phoneNumber: string,
  profilePic: Image,
}

export type Technology = SanityBody & {
  _tye: 'skill',
  image: Image,
  progress: number,
  title: string,
}

export type Skill = SanityBody & {
  _type: 'skill',
  image: Image,
  progress: number,
  title: string,
}

export type Experience = SanityBody & {
  _type: 'experience',
  company: string,
  companyImage: Image,
  dateStarted: date,
  dateEnded: date,
  isCurrentlyWorkingHere: boolean,
  jobTitle: string,
  points: string[],
  technologies: Technology[],
}

export type Project = SanityBody & {
  _type: 'project',
  title: string,
  image: Image,
  linkToBuild: string,
  summary: string,
  technologies: Technology[],
}

export type Social = SanityBody & {
  _type: 'social',
  title: string,
  url: string,
}
