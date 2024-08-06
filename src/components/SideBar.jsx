import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import List from "@mui/material/List";
import { Avatar, styled, Typography, useTheme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { HomeOutlined, PeopleOutlined } from "@mui/icons-material";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from '@mui/material/colors';

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(
  // @ts-ignore
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })
);

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Array1 = [
  { text: "Dashboard", icon: <HomeOutlined />, path: "/" },
  { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
  {
    text: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices",
  },
];
const Array2 = [
  { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
  { text: "Calender", icon: <CalendarTodayOutlinedIcon />, path: "/calender" },
  { text: "FAQ Page", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },
];
const Array3 = [
  { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
  { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
  { text: "Line Chart ", icon: <TimelineOutlinedIcon />, path: "/line" },
  { text: "Geography Chart ", icon: <MapOutlinedIcon />, path: "/geography" },
];

const SideBar = ({ open, handleDrawerClose }) => {


  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation()





  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <Avatar
        sx={{
          mx: "auto",
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          my: 1,
          border: "2px solid gray",
          transition: "0.25s",
        }}
        alt="Remy Sharp"
        src="data:image/jpeg;base64,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"
      ></Avatar>
      <Typography
        align="center"
        sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}
      >
        sara
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? 15 : 0,
          transition: "0.25s",
          color: theme.palette.info.main,
        }}
      >
        admin
      </Typography>

      <Divider />
      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:location.pathname===  item.path ? theme.palette.mode==="dark"? grey[800]:grey[300] :null
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
