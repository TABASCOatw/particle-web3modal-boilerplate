<div align="center">
  <a href="https://particle.network/">
    <img src="https://i.imgur.com/xmdzXU4.png" />
  </a>
  <h3>
    Particle Web3Modal Boilerplate
  </h3>
</div>

⚡️ Boilerplate for implementing Particle Auth Core (`@particle-network/auth-core-modal`) within an instance of Web3Modal using `@web3modal/ethers/react`. Materialized as a "Particle Wallet" option within the Web3Modal interface, a general social login modal is opened allowing users to login and connect using Google, Twitter, email, phone, etc.

Built using **Web3Modal**, **Typescript**, and **Particle Auth Core**.

## 🔑 Particle Auth Core
Particle Auth Core, a component of Particle Network's Wallet-as-a-Service, enables seamless onboarding to an application-embedded MPC-TSS/AA wallet facilitated by social login, such as Google, GitHub, email, phone number, etc. - as an alternative to Particle Auth, the Auth Core SDK comes with more control over the modal itself, application-embedded popups rather than redirects, and so on.

👉 Try the demo: https://next-web3modal-starter.vercel.app/

👉 Learn more about Particle Network: https://particle.network

![Particle Auth Example](https://i.imgur.com/UBdl0n9.png)

##

<p align="center">
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/TABASCOatw/particle-web3modal-boilerplate&env=REACT_APP_PROJECT_ID&env=REACT_APP_CLIENT_KEY&env=REACT_APP_APP_ID&env=REACT_APP_WALLETCONNECT_PROJECT_ID&envDescription=Head%20over%20to%20the%20Particle%20dashboard%20to%20retrieve%20the%20above%20keys.&envLink=https%3A%2F%2Fdashboard.particle.network">
    <img src="https://vercel.com/button" alt="Deploy with Vercel"/>
  </a>
</p>

## 🛠️ Quickstart

### Clone this repository
```
git clone https://github.com/TABASCOatw/particle-web3modal-boilerplate.git
```

### Install dependencies
```
yarn install
```
OR
```
npm install
```

### Set environment variables
This project requires a number of keys from Particle Network and WalletConnect to be defined in `.env`. The following should be defined:
- `REACT_APP_APP_ID`, the ID of the corresponding application in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
- `REACT_APP_PROJECT_ID`, the ID of the corresponding project in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
-  `REACT_APP_CLIENT_KEY`, the client key of the corresponding project in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
-  `REACT_APP_WALLETCONNECT_PROJECT_ID`, the project ID of the corresponding project in your [WalletConnect dashboard](https://cloud.walletconnect.com/app)

### Start the project
```
npm run dev
```
OR
```
yarn dev
```
