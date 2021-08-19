import { RiSendPlaneFill, RiAdminFill, RiTableFill } from "react-icons/ri";
import { SiOpenstreetmap } from "react-icons/si";
import { MdFormatListBulleted } from "react-icons/md"

export const firstPage = "MapPage";

export const rolesADMIN = [
  {
    id: "Administration",
    children: [
      { id: "Register" },
      { id: "Management" },
    ],
  },
  {
    id: "MapPage",
  },
];

export const navItemsADMIN = [
  {
    to: "../../../Administration",
    id: "Administration",
    name: "Administração",
    Icon: RiAdminFill,
    children: [
      {
        to: "/Register",
        id: "Register",
        name: "Cadastro",
        Icon: MdFormatListBulleted,
      },
      {
        to: "/Management",
        id: "Management",
        name: "Gerenciamento",
        Icon: RiTableFill
      },
    ],
  },
  {
    to: "../../../MapPage",
    id: "MapPage",
    name: "Mapa",
    Icon: SiOpenstreetmap,
    children: [
    ],
  },
];

export const rolesSECRETARY = [
  {
    id: "Administration",
    children: [
      { id: "Management" },
    ],
  },
  {
    id: "MapPage",
  },
];

export const navItemsSECRETARY = [
  {
    to: "../../../Administration",
    id: "Administration",
    name: "Administração",
    Icon: RiAdminFill,
    children: [
      {
        to: "/Management",
        id: "Management",
        name: "Gerenciamento",
        Icon: RiTableFill
      },
    ],
  },
  {
    to: "../../../MapPage",
    id: "MapPage",
    name: "Mapa",
    Icon: SiOpenstreetmap,
    children: [
    ],
  },
];

export const rolesDIRECTOR = [
  {
    id: "Administration",
    children: [
      { id: "Register" },
      { id: "Forwarding" },
    ],
  },
  {
    id: "MapPage",
  },
];

export const navItemsDIRECTOR = [
  {
    to: "../../../Administration",
    id: "Administration",
    name: "Administração",
    Icon: RiAdminFill,
    children: [
      {
        to: "/Register",
        id: "Register",
        name: "Cadastro",
        Icon: MdFormatListBulleted,
      },
      {
        to: "/Forwarding",
        id: "Forwarding",
        name: "Encaminhamento",
        Icon: RiSendPlaneFill,
      },
    ],
  },
  {
    to: "../../../MapPage",
    id: "MapPage",
    name: "Mapa",
    Icon: SiOpenstreetmap,
    children: [
    ],
  },
];

export const rolesUSER = [
  {
    id: "MapPage",
    children: [{ id: "Filtros" }],
  },
];

export const navItemsUSER = [
  {
    to: "../MapPage",
    id: "MapPage",
    name: "Mapa",
    Icon: SiOpenstreetmap,
    children: [
    ],
  },
];


