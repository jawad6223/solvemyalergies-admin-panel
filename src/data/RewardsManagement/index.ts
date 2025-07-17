import { IconType } from "react-icons";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export interface RewardsManagementItem {
    user: string;
    name: string;
    earned: string;
    redeem: string;
    shared: string;
    balance: string;
    action: string;
    date: string;
}

export const RewardsManagementData: RewardsManagementItem[] = [
    {
        user: "U-101",
        name: "Marilyn Herwitz",
        earned: "40",
        redeem: "20($4.00)",
        shared: "-",
        balance: "20 stars",
        action: "View",
        date: "Today"
    },
    {
        user: "U-102",
        name: "John Dow",
        earned: "40",
        redeem: "20 ($4.00)",
        shared: "10 ($2.00)",
        balance: "70 stars",
        action: "View",
        date: "This Week"
    },
    {
        user: "U-103",
        name: "Marilyn Herwitz",
        earned: "40",
        redeem: "20($4.00)",
        shared: "-",
        balance: "20 stars",
        action: "View",
        date: "This Month"
    },
    {
        user: "U-104",
        name: "John Dow",
        earned: "40",
        redeem: "20 ($4.00)",
        shared: "10 ($2.00)",
        balance: "70 stars",
        action: "View",
        date: "Today"
    },
    {
        user: "U-105",
        name: "Marilyn Herwitz",
        earned: "40",
        redeem: "20($4.00)",
        shared: "-",
        balance: "20 stars",
        action: "View",
        date: "This Week"
    },
    {
        user: "U-106",
        name: "John Dow",
        earned: "40",
        redeem: "20 ($4.00)",
        shared: "10 ($2.00)",
        balance: "70 stars",
        action: "View",
        date: "This Month"
    },
    {
        user: "U-107",
        name: "Marilyn Herwitz",
        earned: "40",
        redeem: "20($4.00)",
        shared: "-",
        balance: "20 stars",
        action: "View",
        date: "Today"
    },
    {
        user: "U-108",
        name: "John Dow",
        earned: "40",
        redeem: "20 ($4.00)",
        shared: "10 ($2.00)",
        balance: "70 stars",
        action: "View",
        date: "This Week"
    },
    {
        user: "U-109",
        name: "Marilyn Herwitz",
        earned: "40",
        redeem: "20($4.00)",
        shared: "-",
        balance: "20 stars",
        action: "View",
        date: "This Month"
    },
    {
        user: "U-110",
        name: "John Dow",
        earned: "40",
        redeem: "20 ($4.00)",
        shared: "10 ($2.00)",
        balance: "70 stars",
        action: "View",
        date: "Today"
    },
    {
        user: "U-111",
        name: "Marilyn Herwitz",
        earned: "40",
        redeem: "20($4.00)",
        shared: "-",
        balance: "20 stars",
        action: "View",
        date: "This Week"
    },
    {
        user: "U-112",
        name: "John Dow",
        earned: "40",
        redeem: "20 ($4.00)",
        shared: "10 ($2.00)",
        balance: "70 stars",
        action: "View",
        date: "This Month"
    },
    {
        user: "U-113",
        name: "Marilyn Herwitz",
        earned: "40",
        redeem: "20($4.00)",
        shared: "-",
        balance: "20 stars",
        action: "View",
        date: "Today"
    },
    {
        user: "U-114",
        name: "John Dow",
        earned: "40",
        redeem: "20 ($4.00)",
        shared: "10 ($2.00)",
        balance: "70 stars",
        action: "View",
        date: "This Week"
    },
    {
        user: "U-115",
        name: "Marilyn Herwitz",
        earned: "40",
        redeem: "20($4.00)",
        shared: "-",
        balance: "20 stars",
        action: "View",
        date: "This Month"
    },
    {
        user: "U-116",
        name: "John Dow",
        earned: "40",
        redeem: "20 ($4.00)",
        shared: "10 ($2.00)",
        balance: "70 stars",
        action: "View",
        date: "Today"
    },
    {
        user: "U-117",
        name: "Marilyn Herwitz",
        earned: "40",
        redeem: "20($4.00)",
        shared: "-",
        balance: "20 stars",
        action: "View",
        date: "This Week"
    },
    {
        user: "U-118",
        name: "John Dow",
        earned: "40",
        redeem: "20 ($4.00)",
        shared: "10 ($2.00)",
        balance: "70 stars",
        action: "View",
        date: "This Month"
    },
    {
        user: "U-119",
        name: "Marilyn Herwitz",
        earned: "40",
        redeem: "20($4.00)",
        shared: "-",
        balance: "20 stars",
        action: "View",
        date: "Today"
    },
    {
        user: "U-120",
        name: "John Dow",
        earned: "40",
        redeem: "20 ($4.00)",
        shared: "10 ($2.00)",
        balance: "70 stars",
        action: "View",
        date: "This Week"
    }
];

export type ModalField =
    | {
        type: "input";
        label: string;
        placeholder: string;
        unit?: string;
    }
    | {
        type: "toggle";
        label: string;
        value: boolean;
        stateKey: "expireEnabled" | "fraudPreventionEnabled";
    };

export const modalFields: ModalField[] = [
    {
        type: "input",
        label: "Modify Reward Value",
        placeholder: "$0.20",
        unit: "per star",
    },
    {
        type: "input",
        label: "Minimum Redemption",
        placeholder: "50 stars",
    },
    {
        type: "toggle",
        label: "Set 6 month expire date",
        value: false,
        stateKey: "expireEnabled",
    },
    {
        type: "toggle",
        label: "Fraud Prevention",
        value: false,
        stateKey: "fraudPreventionEnabled",
    },
];