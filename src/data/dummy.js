
import termino from "../../public/termino.jpg";
import coinbase from "../../public/coinbase.png";


import * as logos from '../../public/logos'

import moment from "moment";

export const notifications = [
  {
    id: "cca46713-d4ba-40cb-8255-0c14dd08245d",
    title: "Notification name",
    logos: [logos.aptos.src, logos.telegram.src],
    description: "Aptos – Track NFT floor price",
    active: true,
    history: [
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
    ],
  },
  {
    id: "ec8643e4-9610-4c63-900f-0b4b679002ab",
    title: "Disk_15APT",
    logos: [logos.aptos.src, logos.discord.src],
    description: "Aptos account balance - below 15 APT",
    active: true,
    history: [
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
    ],
  },
  {
    id: "123ff874-4abd-44ca-9e99-b4224adf4c11",
    title: "Notification name",
    logos: [logos.aptos.src, logos.slack.src],
    description: "New account transaction",
    active: false,
    history: [
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
      {
        date: moment().format("DD.MM.YYYY hh:mma"),
        triggerContext: "Amet convallis id",
        actionOutcome: "Pulvinar enim rutrum",
        triggerErr: "Habitasse praesent lorem",
      },
    ],
  },
  {
    id: "30cc8461-77dc-4644-829c-7d8d8193c543",
    title: "No history notification",
    logos: [logos.aptos.src, logos.telegram.src],
    description: "Notifications without history example",
    active: true,
    history: [],
  },
];

export const triggers = [
  {
    title: "Account",
    desc: "Track Account Liquidity",
    img: logos.account.src,
  },
  {
    title: "Aptos",
    desc: "Track APT price",
    img: logos.aptos.src,
  },
  {
    title: "Wallet",
    desc: "Track new transaction",
    img: logos.wallet.src,
  },
  {
    title: "Topaz",
    desc: "Track NFT floor price",
    img: logos.topaz.src,
  },
];

export const actions = [
  {
    title: "Discord",
    desc: "Post a message",
    img: logos.discord.src,
  },
  {
    title: "Slack",
    desc: "Post a message",
    img: logos.slack.src,
  },
  {
    title: "Email",
    desc: "Send an email",
    img: logos.email.src,
  },
  {
    title: "Telegram",
    desc: "Send a message",
    img: logos.telegram.src,
  },
  {
    title: "Twitter",
    desc: "Post a tweet",
    img: logos.twitterNoBg.src,
  },
  {
    title: "Webhook",
    desc: "Send a POST request",
    img: logos.webhook.src,
  },
];

export const wallets = [
  {
    extLink: "Termino Wallet",
    name: "Termino",
    img: termino.src,
  },
  {
    extLink: "Coinbase",
    name: "Coinbase",
    img: coinbase.src,
  },
];