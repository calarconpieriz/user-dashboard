interface Session {
  device: string;
  deviceOS: string;
  deviceId: string;
  appVersion: string;
}

interface Bank {
  accountNumber: string;
  name: string;
}

interface Withdrawal {
  type: string;
  amount: number;
  status: string;
  createdAt: Date;
  paidAt: Date;
}

interface Advance {
  amount: number;
  day: number;
  withdrawals: Withdrawal[];
}

export class UserAccount {
  private userId: string;
  private documentNumber: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private phoneNumber: string;
  private companyName: string;
  private session?: Session;
  private salary: number;
  private bank?: Bank;
  private withdrawals?: Withdrawal[];
  private advances?: Advance[];
  constructor() {
    this.userId = '';
    this.documentNumber = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phoneNumber = '';
    this.companyName = '';
    this.salary = 0;
  }

  public getUserId(): string {
    return this.userId;
  }

  public getDocumentNumber(): string {
    return this.documentNumber;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getEmail(): string {
    return this.email;
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public setDocumentNumber(documentNumber: string): void {
    this.documentNumber = documentNumber;
  }
}

export interface FetchUserAccountSuccessResponse {
  userAccount: UserAccount;
}
