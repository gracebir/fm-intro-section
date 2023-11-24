/** @format */
import todoIcon from "./images/icon-todo.svg";
import calendarIcon from "./images/icon-calendar.svg";
import remindersIcon from "./images/icon-reminders.svg";
import planningIcon from "./images/icon-planning.svg";
// Features;
// Company;
// Careers;
// About;

export const navitems = [
    {
        id: 1,
        title: "Features",
        isDrop: true,
        items: [
            {
                id: 11,
                name: "Todo List",
                hasIcon: true,
                icon: todoIcon,
            },
            {
                id: 12,
                name: "Calendar",
                hasIcon: true,
                icon: calendarIcon,
            },
            {
                id: 13,
                name: "Reminders",
                hasIcon: true,
                icon: remindersIcon,
            },
            {
                id: 14,
                name: "Planning",
                hasIcon: true,
                icon: planningIcon,
            },
        ],
    },
    {
        id: 2,
        title: "Company",
        isDrop: true,
        items: [
            {
                id: 21,
                name: "History",
                hasIcon: false,
            },
            {
                id: 23,
                name: "Our Team",
                hasIcon: false,
            },
            {
                id: 24,
                name: "Blog",
                hasIcon: false,
            },
        ],
    },
    {
        id: 3,
        title: "Careers",
        isDrop: false,
        items: [],
    },
    {
        id: 4,
        title: "About",
        isDrop: false,
        items: [],
    },
];
