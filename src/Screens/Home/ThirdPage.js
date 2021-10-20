import { Box, Typography, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useBreakpoint from "../../Helpers/useBreakpoint";

const useStyles = makeStyles((theme) => {
  return {
    indented: {
      textIndent: theme.spacing(4),
    },
  };
});

const articles = [
  {
    header: "Bring your entrepreneurship idea to life",
    preview:
      "Dolore ad aliquip commodo adipisicing magna amet. Cupidatat incididunt esse irure ut enim aliquip. Ut exercitation commodo laborum elit laborum enim enim occaecat fugiat magna. Consequat sit ullamco est consectetur et irure consequat laborum.",
  },
  {
    header: "Rexdreams turns dreams into software",
    preview:
      "Et quis ipsum voluptate ut consequat veniam. Culpa ea commodo adipisicing ipsum sit pariatur ullamco deserunt ad nisi Lorem cupidatat. Commodo occaecat veniam ex pariatur consectetur aliquip duis sunt fugiat. Nostrud consequat commodo id Lorem eiusmod nisi qui eiusmod velit do duis irure nostrud. Ad enim magna est laborum consequat do consequat consequat ipsum nulla excepteur ut ex officia. Pariatur incididunt labore deserunt consectetur aliqua irure nostrud dolore. Aute est deserunt ut sit pariatur non labore.",
  },
  {
    header: "Search engine optimization (SEO)",
    preview:
      "Enim quis sunt anim nulla amet sint. Proident do qui amet amet commodo veniam et ipsum proident do. Amet ex ipsum occaecat aliqua laborum ullamco sunt Lorem. Consequat proident veniam dolore fugiat duis qui occaecat amet labore quis anim. Pariatur pariatur minim laboris do sint cupidatat fugiat ipsum occaecat proident do enim eu.",
  },
  {
    header: "Pay as you grow",
    preview:
      "Enim quis sunt anim nulla amet sint. Proident do qui amet amet commodo veniam et ipsum proident do. Amet ex ipsum occaecat aliqua laborum ullamco sunt Lorem. Consequat proident veniam dolore fugiat duis qui occaecat amet labore quis anim. Pariatur pariatur minim laboris do sint cupidatat fugiat ipsum occaecat proident do enim eu.",
  },
  {
    header: "Deploy with confidence",
    preview:
      "Enim quis sunt anim nulla amet sint. Proident do qui amet amet commodo veniam et ipsum proident do. Amet ex ipsum occaecat aliqua laborum ullamco sunt Lorem. Consequat proident veniam dolore fugiat duis qui occaecat amet labore quis anim. Pariatur pariatur minim laboris do sint cupidatat fugiat ipsum occaecat proident do enim eu.",
  },
  {
    header: "Payment Integration",
    preview:
      "Pariatur irure consectetur sit nisi minim consectetur non non dolore irure. Esse anim ullamco excepteur mollit velit aute consequat adipisicing exercitation. Non ut occaecat ipsum occaecat sunt do do exercitation velit. Ex officia eiusmod irure fugiat officia esse duis aliquip fugiat sint labore elit est dolore.",
  },
];

const Article = ({ header, preview, link, left }) => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useBreakpoint();
  return (
    <Box
      display="block"
      data-aos={left ? "fade-right" : "fade-left"}
      data-aos-duration={600}
      style={{
        float: left ? "left" : "right",
      }}
      m={2}
      mb={8}
      width="auto"
      maxWidth={"720px"}
    >
      <Typography
        style={{
          marginBottom: theme.spacing(2) + "px",
          fontWeight: "bold",
        }}
        variant={isMobile ? "h4" : "h3"}
      >
        {header}
      </Typography>
      <Typography paragraph className={classes.indented}>
        {"    " + preview}
        <Link href={link}>...Read more</Link>
      </Typography>
    </Box>
  );
};

export default function ThirdPage({ className }) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <Box className={className} p={4}>
      {articles.map((e, i) => (
        <Article key={`${i}${i}`} {...e} left={i % 2 === 0} />
      ))}
    </Box>
  );
}
