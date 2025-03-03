import { Site, Test } from "../types"

export class ApiServise {
  private fetchQuery(src: string) {
    return fetch(src).then(res => res.json())
  }

  public getTests (): Promise<Test[]> {
    return this.fetchQuery('http://localhost:3100/tests')
  }

  public getSites (id: number): Promise<Site> {
    return this.fetchQuery(`http://localhost:3100/sites/${id}`)
  }

  public getTest (id: string): Promise<Test> {
    return this.fetchQuery(`http://localhost:3100/tests/${id}`)
  }
}