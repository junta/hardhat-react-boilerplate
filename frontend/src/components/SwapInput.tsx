import React, { useContext, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";

interface Props {}

const SwapInput: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-2 gap-1 rounded-lg bg-gray-700 p-3 border-2 border-gray-500 hover:border-gray-300 my-2">
      <div className="h-12">
        {/*
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
    */}
        <p className="float-left text-lg">ETH</p>
      </div>
      <div className="h-12">
        <input
          type="text"
          className="rounded text-white text-right bg-gray-700 border-0 text-xl focus:ring-0"
          placeholder="0.0"
        />
      </div>
      <div className="col-span-2 h-6">
        <p className="float-left text-base text-gray-400">balance:00</p>
      </div>
    </div>
  );
};

export default SwapInput;
