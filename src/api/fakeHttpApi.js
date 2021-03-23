import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'

const MAX_LATENCY_IN_MILLIS = 2000

const data = {
  "userId": "userId",
  "documentNumber": "19789321-7",
  "firstName": "Cristian",
  "lastName": "Alarcón",
  "email": "cristian.email@emailservice.com",
  "phoneNumber": "123 456 789",
  "companyName": "Cristian Company",
  "session": {
    "device": "device",
    "deviceOS": "OS",
    "deviceId": "deviceId",
    "appVersion": "appVersion"
  },
  "salary": 10000,
  "bank": {
    "accountNumber": "** ** ** ** ** 44",
    "name": "Bank of America Saving Account",
    "balance": "2.000.000"
  },
  "withdrawals": [
    {
      "type": "NORMAL",
      "amount": 123,
      "status": "Confirmed",
      "createdAt": "2021-03-23",
      "paidAt": "2021-03-23"
    },
    {
      "type": "NORMAL",
      "amount": 234,
      "status": "Pending",
      "createdAt": "2021-03-23",
      "paidAt": "2021-03-23"
    },
    {
      "type": "NORMAL",
      "amount": 40,
      "status": "Reversed",
      "createdAt": "2021-03-23",
      "paidAt": "2021-03-23"
    },
    {
      "type": "NORMAL",
      "amount": 100,
      "status": "Confirmed",
      "createdAt": "2021-01-11",
      "paidAt": "2021-03-23"
    }
  ],
  "advance": {
    "amount": 500,
    "day": 4,
    "withdrawals": [
      {
        "type": "ADVANCE",
        "amount": 3,
        "tobePaidAt": "2021-03-23",
        "paidAt": "2021-03-23",
        "status": "status"
      },
      {
        "type": "ADVANCE",
        "amount": 20,
        "tobePaidAt": "2021-03-23",
        "paidAt": "2021-03-23",
        "status": "status"
      },
      {
        "type": "ADVANCE",
        "amount": 80,
        "tobePaidAt": "2021-03-23",
        "paidAt": "2021-03-23",
        "status": "status"
      }
    ]
  }
}


const fakeResponse = ({ status, data }) => {
  const latency = Math.round(Math.random() * MAX_LATENCY_IN_MILLIS)
  return new Promise((resolve, reject) =>
    setTimeout(
      () => resolve([status, data]),
      latency
    ))
}

const setup = () => {
  const httpMock = new AxiosMockAdapter(axios)

  httpMock
    .onGet('/')
    .reply(() => fakeResponse({ status: 200, data: data }))

}

export { setup }

