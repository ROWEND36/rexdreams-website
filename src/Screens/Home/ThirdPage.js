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
    header: "Bring your entrepreneurship idea to the spotlight",
    preview:
      "Take your business ideas one step further by showcasing it the over 4.5 billion users in the world. The internet makes the world a global village, and with the innovative solutions Rexdreams offers, you are one step away from gaining its full attention.",
  },
  {
    header: "Rexdreams turns dreams into software",
    preview:
      "At Rexdreams, we understand how important it is to have a dream. That is why we take them very seriously. Regardless of whether you are building your personal website or the next Facebook, you can be assured that Rexdreams will do all it takes to turn that dream into a reality.",
  },
  {
    header: "Search engine optimization (SEO)",
    preview:
      "68% of online experiences begin with a search engine. And yet, less than 1% of Google searchers click on results from the second page. Consequently, Rexdreams puts in effort guided by years of experience into making sure that your product appear at the very top of the first page of online search results and remain there.",
  },
  {
    header: "Pay as you grow",
    preview:
      "You should not have to put a hole in your wallet to maintain your software. That is why Rexdreams' technology stack favors adaptive price models that can be maintained with very little or no cost. With such friendly and predictable pricing, our customers can make informed financial decisions and maximize revenue.",
  },
  {
    header: "Deploy with confidence",
    preview:
      "Server failures, data breach, application crash, delayed reponse, software errors, et cetera; we know your nightmares. With Rexdreams, you can rest assured you will not experience of that. Every software and hardware component we employ is tested thoroughly for performance, security and accuracy before deployment to trusted servers. We do all the worrying so you never have to.",
  },
  {
    header: "Payment Integration",
    preview:
      "If you have ever tried to start an online business, you will realise that receiving revenue online can be a bit of a hassle for new users. For some regions, there are so many different payment platforms with their numerous pros and cons while for other regions, there is little or no support. Rexdreams handles all these issues for you while ensuring both your and your customers get the best payment experience.",
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
        {link ? <Link href={link}>...Read more</Link> : ""}
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
