import {
  Group,
  Home,
  LunchDining,
  Search,
  Settings,
  StackedLineChart,
  Upload,
} from "@mui/icons-material";
import smallLogo from "./logo.png";
import MainLogo from "./MainLogo.png";

export const logo = {
  smallLogo,
  MainLogo,
};

export const listHome = [
  {
    id: 1,
    text: "المؤشرات الحيوية",
    path: "/vital-signs",
  },
];

export const SideBarIcons = [
  {
    id: 1,
    name: "Search",
    icon: <Search />,
  },
  {
    id: 2,
    name: "home",
    icon: <Home />,
  },
  {
    id: 3,
    name: "burger",
    icon: <LunchDining />,
  },
  {
    id: 4,
    name: "charts",
    icon: <StackedLineChart />,
  },
  {
    id: 5,
    name: "upload",
    icon: <Upload />,
  },
  {
    id: 6,
    name: "personal",
    icon: <Group />,
  },
  {
    id: 7,
    name: "setting",
    icon: <Settings />,
  },
];
