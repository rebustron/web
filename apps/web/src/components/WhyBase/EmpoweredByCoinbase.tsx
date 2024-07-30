"use client"

import React, { useCallback } from 'react';
import Link from 'next/link';

import { Button } from '../Button/Button';
import logEvent, {
  ActionType,
  AnalyticsEventImportance,
  ComponentType,
} from 'libs/base-ui/utils/logEvent';

export default function EmpoweredByCoinbase() {
  const handleClick = useCallback(() => {
    logEvent(
      'empowered_by_coinbase',
      {
        action: ActionType.click,
        componentType: ComponentType.button,
        context: 'why_base',
      },
      AnalyticsEventImportance.high,
    );
  }, []);
  return (
    <div className="flex flex-row gap-32 bg-black px-20 pb-10 pt-10">
      <div className="flex flex-col justify-center gap-16 max-w-[550px]">
        <h2 className="flex font-display text-5xl">
          <span>5.</span>
          <span className="ml-4">Empowered by Coinbase</span>
        </h2>
        <div>
          <span>
            {`Base is incubated within Coinbase and plans to progressively decentralize in the years
            ahead. Leverage Coinbase's developer tools to make building easy and to reach Coinbase
            users.`}
          </span>
          <Link href="/" target="_blank" rel="noreferrer noopener" onClick={handleClick}> {/*TODO: NEED A HREF */}
            <Button className="mt-4 uppercase">Call to Action</Button>
          </Link>
        </div>
      </div>
      <div className="h-[265px] w-[520px] bg-[url('../public/images/why-base-empowered-by-cb.png')] bg-no-repeat"/>
    </div>
  );
}