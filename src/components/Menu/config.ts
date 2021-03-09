import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.infoswap.finance/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.infoswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/#/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/#/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/infodefi-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/infodefi-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/infodefi/',
      },
      {
        label: 'Docs',
        href: 'https://infodefi.gitbook.io/info-finance/',
      },
      {
        label: 'Blog',
        href: 'https://infofinance.medium.com/',
      },
    ],
  },
  //{
  //  label: 'Partnerships/IFO',
  //  icon: 'InfoIcon',
  //  href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  //},
  //{
  //  label: 'Audit by Hacken',
  //  icon: 'AuditIcon',
  //  href: 'https://www.infodefi.com/files/hackenAudit.pdf',
 // },
 // {
  //  label: 'Audit by CertiK',
  //  icon: 'AuditIcon',
  //  href: 'https://certik.org/projects/info-finance',
  //},
]

export default config
