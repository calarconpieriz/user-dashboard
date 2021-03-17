export class UserAccount {
  private name: string;
  private url: string;
  constructor() {
    this.name = '';
    this.url = '';
  }

  public getName(): string {
    return this.name;
  }

  public getUrl(): string {
    return this.url;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setUrl(url: string): void {
    this.url = url;
  }
}

export interface FetchUserAccountSuccessResponse {
  userAccount: any;
}
