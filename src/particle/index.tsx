import { AuthCoreContextProvider } from '@particle-network/auth-core-modal';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';
import { type ReactNode } from 'react';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.REACT_APP_WALLETCONNECT_PROJECT_ID;

// 2. Set chains
const mainnet = {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com',
};

const goerli = {
    chainId: 5,
    name: 'Ethereum Goerli',
    currency: 'ETH',
    explorerUrl: 'https://goerli.etherscan.io',
    rpcUrl: 'https://ethereum-goerli.publicnode.com',
};

// 3. Create modal
const metadata = {
    name: 'My Website',
    description: 'My Website description',
    url: 'https://mywebsite.com', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/'],
};

const web3Modal = createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [mainnet, goerli],
    projectId,
    enableAnalytics: true,
});

const ParticleProvider = ({ children }: { children: ReactNode }) => {
    return (
        <AuthCoreContextProvider
            options={{
                projectId: process.env.REACT_APP_PROJECT_ID,
                clientKey: process.env.REACT_APP_CLIENT_KEY,
                appId: process.env.REACT_APP_APP_ID,
                web3Modal,
            }}
        >
            {children}
        </AuthCoreContextProvider>
    );
};

export default ParticleProvider;