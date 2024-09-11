'use client';
import Link from 'next/link';
import { Icon } from '../../Icon/Icon';
import { Logo } from '../../Logo/Logo';
import { bridgeUrl, docsUrl } from 'apps/web/src/constants';
import { CookieManagerButton } from 'apps/web/src/components/CookieManagerButton';
import bigBaselogo from './assets/bigBaseLogo.svg';
import Image, { StaticImageData } from 'next/image';
import Container from 'apps/web/src/components/base-org/Container';
export function Footer() {
  return (
    <footer className="z-10 mx-auto mt-auto flex w-full flex-col justify-center bg-black pb-8 pt-20">
      <Container>
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="flex flex-col font-display text-sm text-white">
            <div className="bg-blue-300 flex w-32 flex-row items-start justify-start">
              <Logo color="white" />
            </div>
            <div className="flex flex-col space-y-4 pt-20">
              <p className="font-mono text-xl uppercase text-white">
                Keep up with the latest from Base
              </p>
              <div className="flex flex-col">
                <p className="text-white">
                  <a href="https://base.mirror.xyz/subscribe" className="underline">
                    Subscribe to our Mirror blog
                  </a>
                  : Mint the posts as unique NFTs
                </p>
                <p className="text-white">commemorating the evolution of Base.</p>
              </div>
              <div className="flex flex-col">
                <p className="text-white">
                  <Link href="/getstarted" className="underline">
                    Builder Resource Kit
                  </Link>
                  : Get help to build and grow your project on Base.
                </p>
              </div>
            </div>
            <p className="pt-20 underline">
              <a href="https://docs.base.org/terms-of-service">Terms of Service</a>
              <br />
              <a href="https://docs.base.org/privacy-policy">Privacy Policy</a>
              <br />
              <Link href="/cookie-policy">Cookie Policy</Link>
              <br />
              <CookieManagerButton />
            </p>
          </div>
          <div className="flex h-full flex-col gap-5 pt-24 lg:flex-row lg:gap-10 lg:pt-0">
            <div className="flex h-full flex-col gap-4 lg:flex-row lg:gap-10">
              <Link href="/about">
                <span className="font-mono text-xl text-white">About</span>
              </Link>
              <a
                href={docsUrl}
                className="font-mono text-xl text-white"
                target="_blank"
                rel="noreferrer noopener"
              >
                Docs
              </a>
              <a
                href={bridgeUrl}
                className="font-mono text-xl text-white"
                target="_blank"
                rel="noreferrer noopener"
              >
                Bridge
              </a>
              <a href="https://base.mirror.xyz" className="font-mono text-xl text-white">
                Blog
              </a>
              <Link href="/jobs">
                <span className="font-mono text-xl text-white">Jobs</span>
              </Link>
            </div>
            <div className="flex flex-row gap-4 pt-1 lg:h-full lg:gap-8">
              <a
                href="https://discord.com/invite/buildonbase"
                target="_blank"
                rel="noreferrer noopener"
                title="Join us on Discord"
                aria-label="Join us on Discord"
              >
                <Icon name="discord" width="24" height="20" />
              </a>
              <a
                href="https://twitter.com/base"
                target="_blank"
                rel="noreferrer noopener"
                title="Join us on Twitter"
                aria-label="Join us on Twitter"
              >
                <Icon name="twitter" width="24" height="20" />
              </a>
              <a
                href="https://github.com/base-org"
                target="_blank"
                rel="noreferrer noopener"
                title="Join us on Github"
                aria-label="Join us on Github"
              >
                <Icon name="github" width="24" height="24" />
              </a>
            </div>
          </div>
        </div>
        <Image src={bigBaselogo as StaticImageData} alt="Based" className="mt-20" />
      </Container>
    </footer>
  );
}
