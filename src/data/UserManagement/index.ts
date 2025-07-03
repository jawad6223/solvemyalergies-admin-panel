import { IconType } from "react-icons";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export interface UserManagementItem {
    image: string;
    name: string;
    email: string;
    date: string;
    status: string;
    activity: string;
    icon: IconType;
}

export const UserManagementData: UserManagementItem[] = [
    {
        image: "/images/User/person.svg",
        name: "Marilyn Herwitz",
        email: "email@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Marcus Bergson",
        email: "email1@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Marilyn Herwitz",
        email: "email2@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Marcus Bergson",
        email: "email3@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Marilyn Herwitz",
        email: "email4@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Marcus Bergson",
        email: "email5@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Marilyn Herwitz",
        email: "email6@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Marcus Bergson",
        email: "email7@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Marilyn Herwitz",
        email: "email8@email.com",
        date: "Mar 10, 2024",
        status: "Blocked",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Jakob",
        email: "email9@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Marilyn Herwitz",
        email: "email@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Marcus Bergson",
        email: "email1@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Marilyn Herwitz",
        email: "email2@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Marcus Bergson",
        email: "email3@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Marilyn Herwitz",
        email: "email4@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Marcus Bergson",
        email: "email5@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Marilyn Herwitz",
        email: "email6@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Marcus Bergson",
        email: "email7@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Marilyn Herwitz",
        email: "email8@email.com",
        date: "Mar 10, 2024",
        status: "Blocked",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    },
    {
        image: "/images/User/person.svg",
        name: "Jakob",
        email: "email9@email.com",
        date: "Mar 10, 2024",
        status: "Active",
        activity: "2 Days Ago",
        icon: HiOutlineDotsHorizontal,
    }
];

export interface UserManagementDetailItem {
    array: {
        label: string;
        data: string;
    }[];
}

export const UserManagementDetailData: UserManagementDetailItem[] = [
    {
        array: [
            { label: "Full Name:", data: "Marilyn Herwitz" },
            { label: "Joined On:", data: "Mar 10, 2024" },
            { label: "Email ID:", data: "email@email.com" },
            { label: "session Days Completed:", data: "Day 9" },
            { label: "Phone Number:", data: "+33 123 45 67 89 0" },
        ]
    },
];