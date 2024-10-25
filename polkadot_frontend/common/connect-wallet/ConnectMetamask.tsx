"use client";
import { useStore } from "@/store/useStore";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { moonbaseAlpha, sepolia } from "viem/chains";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { metaMask } from "wagmi/connectors";

function ConnectMetamask({ network }: { network: string}) {
  const { disconnect } = useDisconnect();
  const { connect } = useConnect();
  const { address } = useAccount();
  const { setNetwork } = useStore();

  const connectWallet = async () => {
    if (network == "Ethereum") {
      connect({chainId: sepolia.id, connector: metaMask()});
      setNetwork("Ethereum")
    } else {
      connect({chainId: moonbaseAlpha.id, connector: metaMask()});
      setNetwork("Moonbeam")
    }
  };

  return (
    <div>
      {address ? (
        <Menu>
          <MenuButton className="text-white border-2 rounded-xl border-violet-600 p-2 font-semibold bg-[#512DA8]">{`${address.substring(
            0,
            6
          )}...${address.substring(28, 32)}`}</MenuButton>
          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 origin-top-right mt-5 rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-80"
          >
            <MenuItem>
              <button
                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                onClick={() => disconnect()}
              >
                Disconnect
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      ) : (
        <button
          onClick={connectWallet}
          className="p-2 border-2 bg-[#512DA8] rounded-xl text-white"
        >
          Select Wallet
        </button>
      )}
    </div>
  );
}

export default ConnectMetamask;
