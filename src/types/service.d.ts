declare module 'pipefy-service' {

  interface Pipe {
    name: string
    cardsCount: number
    color: string
    public: boolean
  }

  interface Organization {
    id: number
    name: string
    pipes: Pipe[]
  }

  interface OrganizationData {
    organization: Organization
  }

  interface OrganizationVars {
    id: number
  }
}