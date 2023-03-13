export interface ExpHeader {
  company: string
  job: string
  time: string
  url: string
}

export interface ExpContent {
  title?: string
  data?: string[]
}

export interface ExpItem {
  header: ExpHeader
  data: ExpContent[]
}