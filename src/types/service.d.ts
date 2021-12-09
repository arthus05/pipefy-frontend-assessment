declare module 'pipefy-service' {

  // Pipe
  interface Pipe {
    id: number
    name: string
    cards_count: number
    color: string
    public: boolean
  }

  interface Organization {
    id: number
    name: string
    pipes: Pipe[]
  }

  interface OrganizationRes {
    organization: Organization
  }

  interface OrganizationVars {
    id?: number
  }

  // Card
  interface Label {
    name: string
    color: string
  }
  
  interface Subtitle {
    name: string
    value: string
  }

  interface Node {
    title: string
    due_date: Date
    pipe: {name: string}
    labels: Label[]
    subtitles: Subtitle[]
  }
  
  interface Edge {
    node: Node
  }

  interface CardRes {
    cards: {
      edges: Edge[]
      pageInfo: {
        endCursor: string
        hasNextPage: boolean
      }
    }
  }

  interface CardVars {
    pipe_id: string
    first: number
    after: string | null
  }

}