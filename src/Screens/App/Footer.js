import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Collapse,
  Grow,
  Typography,
} from "@material-ui/core";
import useBreakpoint from "../../Helpers/useBreakpoint";
import { ChevronRight, ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useHistory, Link } from "react-router-dom";
import { useState } from "react";
const useStyles = makeStyles(function (theme) {
  return {
    footerContainer: {
      width: "auto",
      display: "flex",
      justifyContent: "space-around",
      padding: theme.spacing(2, 2, 8),
      flexWrap: "wrap",
      [theme.breakpoints.down("sm")]: {
        "&>.MuiTypography-root": {
          width: "100%",
        },
      },
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
    footerItem: {
      listStyle: "none",
      padding: "4px 0",
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
  showIcons,
}) => {
  const [mounted, setMounted] = useState(false);

  const classes = useStyles();
  return (
    <div class={classes.footerColumn}>
      <Typography
        variant="h6"
        onClick={onSelect}
        className={classes.footerHeader}
      >
        {header}
        {showIcons ? (
          <div style={{ float: "right" }}>
            <span
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                height: "24px",
              }}
            >
              {open ? <ExpandMoreIcon /> : <ChevronRight />}
            </span>
          </div>
        ) : (
          ""
        )}
      </Typography>
      <Collapse in={open}>
        <ul style={{ padding: 0, margin: 0 }}>
          {children.map((e) => (
            <li className={classes.footerItem}>
              <Link to={e.href}>
                <Typography>{e.title}</Typography>
              </Link>
            </li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
};

export default function Footer() {
  const isReallyBigScreen = useBreakpoint("lg");
  const classes = useStyles();
  const isMobile = useBreakpoint();
  const [selected, setSelected] = useState(-1);
  const handleSelect = function (key) {
    return function () {
      if (selected === key) setSelected(-1);
      else setSelected(key);
    };
  };
  return (
    <div className={classes.footerContainer}>
      {isReallyBigScreen ? (
        <Typography className="App-brandname" variant="h3">
          Rexdreams
        </Typography>
      ) : (
        ""
      )}
      {routes.map((data, i) => (
        <CollapsibleList
          key={`${i}`}
          showIcons={isMobile}
          open={isMobile ? selected === i : true}
          onSelect={isMobile ? handleSelect(i) : undefined}
          data={data}
        />
      ))}
    </div>
  );
}
