import Telegram from "../components/icons/logos/Telegram";
import Aptos from "../components/icons/logos/Aptos";
import Discord from "../components/icons/logos/Discord";
import Slack from "../components/icons/logos/Slack";
import Email from "../components/icons/logos/Email";
import Twitter from "../components/icons/logos/Twitter";
import Webhook from "../components/icons/logos/Webhook";
import Account from "../components/icons/logos/Account";
import Wallet from '../components/icons/logos/Account'
import Topaz from "../components/icons/logos/Topaz";

import moment from "moment";

export const notifications = [
  {
    id: "cca46713-d4ba-40cb-8255-0c14dd08245d",
    title: "Notification name",
    logos: [<Aptos />, <Telegram />],
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
    logos: [<Aptos />, <Discord />],
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
    logos: [<Aptos />, <Slack />],
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
    logos: [<Aptos />, <Telegram />],
    description: "Notifications without history example",
    active: true,
    history: [],
  },
];

export const triggers = [
  {
    title: "Account",
    desc: "Track Account Liquidity",
    img: <Account />,
  },
  {
    title: "Aptos",
    desc: "Track APT price",
    img: <Aptos />,
  },
  {
    title: "Wallet",
    desc: "Track new transaction",
    img: <Wallet />,
  },
  {
    title: "Topaz",
    desc: "Track NFT floor price",
    img: <Topaz />,
  },
];

export const actions = [
  {
    title: "Discord",
    desc: "Post a message",
    img: <Discord />,
  },
  {
    title: "Slack",
    desc: "Post a message",
    img: <Slack />,
  },
  {
    title: "Email",
    desc: "Send an email",
    img: <Email />,
  },
  {
    title: "Telegram",
    desc: "Send a message",
    img: <Telegram />,
  },
  {
    title: "Twitter",
    desc: "Post a tweet",
    img: <Twitter />,
  },
  {
    title: "Webhook",
    desc: "Send a POST request",
    img: <Webhook />,
  },
];