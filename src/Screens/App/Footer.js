import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import useBreakpoint from "../../Components/useBreakpoint";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";
const classes = makeStyles(function (theme) {
  return {
    listRoot: {},
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
const CollapseOrList = ({ header, children, open = false, onSelect }) => {
  const isMobile = useBreakpoint();
  if (isMobile) {
    return (
      <Accordion expanded={open} onChange={onSelect}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {header}
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    );
  } else
    return (
      <div class={classes.listRoot}>
        {header}
        {children}
      </div>
    );
};
export default function Footer() {
  return routes.map(({ title, links }, i) => (
    <CollapseOrList
      key={`${i}`}
      open={true}
      onSelect={undefined}
      header={<Typography variant="h6" />}
    >
      {links.map((e) => (
        <NavLink href={e.href}>{e.title}</NavLink>
      ))}
    </CollapseOrList>
  ));
}
