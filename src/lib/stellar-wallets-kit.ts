import {
  StellarWalletsKit,
  FREIGHTER_ID,
  FreighterModule,
  AlbedoModule,
  LobstrModule,
  WalletNetwork,
} from "@creit.tech/stellar-wallets-kit";

// Placeholder for injected wallets
const INJECTED_WALLETS: string[] = ["freighter", "albedo", "lobstr"];

type WalletModule =
  | FreighterModule
  | AlbedoModule
  | LobstrModule

let kitInstance: StellarWalletsKit | null = null;

export const getKit = (): StellarWalletsKit => {
  if (typeof window === 'undefined') {
    return {} as StellarWalletsKit;
  }
  
  if (!kitInstance) {
    // Dynamic module loading based on INJECTED_WALLETS
    // or fallback to defaults if placeholder not replaced
    const modules: WalletModule[] = [];
    const walletList = Array.isArray(INJECTED_WALLETS) ? INJECTED_WALLETS : ['freighter', 'albedo', 'lobstr']; // Default fallback

    if (walletList.includes('freighter')) modules.push(new FreighterModule());
    if (walletList.includes('albedo')) modules.push(new AlbedoModule());
    if (walletList.includes('lobstr')) modules.push(new LobstrModule());

    kitInstance = new StellarWalletsKit({
      network:  WalletNetwork.TESTNET,
      selectedWalletId: FREIGHTER_ID,
      modules: modules.length > 0 ? modules : [new FreighterModule(), new AlbedoModule(), new LobstrModule()],
    });
  }
  
  return kitInstance;
};

// Export as function to ensure lazy evaluation
export const kit = () => getKit();

interface signTransactionProps {
  unsignedTransaction: string;
  address: string;
}

export const signTransaction = async ({
  unsignedTransaction,
  address,
}: signTransactionProps): Promise<string> => {
  const { signedTxXdr } = await getKit().signTransaction(unsignedTransaction, {
    address,
    // Network is handled by the kit instance init
  });

  return signedTxXdr;
};