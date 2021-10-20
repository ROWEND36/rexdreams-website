import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import useBreakpoint from "../../Helpers/useBreakpoint";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useHistory, Link } from "react-router-dom";
const useStyles = makeStyles(function (theme) {
  return {
    footerContainer: {
      width: "auto",
      display: "flex",
      justifyContent: "space-around",
      padding: theme.spacing(4),
    },
    footerItem: {
      listStyle: "none",
      lineHeight: 32,
      padding: theme.spacing(),
      "& a": {
        color: "inherit",
        textDecoration: "none",
      },
    },
    footerColumn: {
      flexGrow: 1,
      padding: theme.spacing(0, 4),
    },
  };
});
const routes = [
  {
    title: "Company",
    links: [
      {
        title: "About Us",
        href: "/About",
      },
      {
        title: "Jobs",
        href: "/Jobs",
      },
      {
        title: "Feed",
        href: "/Feed",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        title: "Contact us",
        href: "/Contact",
      },
      {
        title: "Cookies",
        href: "/Cookies",
      },
      {
        title: "Privacy & terms",
        href: "/Terms",
      },
      {
        title: "Sitemap",
        href: "/Sitemap",
      },
    ],
  },
];
const CollapsibleList = ({
  data: { title: header, links: children },
  open = false,
  onSelect,
}) => {
  const classes = useStyles();
  return (
    <div class={classes.footerColumn}>
      <div className={classes.footerHeader}>
        <Typography variant="h6">{header}</Typography>
      </div>
      <ul style={{ padding: 0 }}>
        {children.map((e) => (
          <li className={classes.footerItem}>
            <Link to={e.href}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  const isMobile = useBreakpoint();
  const isReallyBigScreen = useBreakpoint("lg");
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      {isReallyBigScreen ? <Typography variant="h3">Rexdreams</Typography> : ""}
      {routes.map((data, i) => (
        <CollapsibleList
          key={`${i}`}
          open={true}
          onSelect={undefined}
          data={data}
        />
      ))}
    </div>
  );
}
