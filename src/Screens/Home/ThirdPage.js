import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  "";
});

const articles = [
  {
    header: "Bring your entrepreneurship idea to life",
    preview:
      "Dolore ad aliquip commodo adipisicing magna amet. Cupidatat incididunt esse irure ut enim aliquip. Ut exercitation commodo laborum elit laborum enim enim occaecat fugiat magna. Consequat sit ullamco est consectetur et irure consequat laborum.",
  },
  {
    header: "RexDreams turns dreams into software",
    preview:
      "Et quis ipsum voluptate ut consequat veniam. Culpa ea commodo adipisicing ipsum sit pariatur ullamco deserunt ad nisi Lorem cupidatat. Commodo occaecat veniam ex pariatur consectetur aliquip duis sunt fugiat. Nostrud consequat commodo id Lorem eiusmod nisi qui eiusmod velit do duis irure nostrud. Ad enim magna est laborum consequat do consequat consequat ipsum nulla excepteur ut ex officia. Pariatur incididunt labore deserunt consectetur aliqua irure nostrud dolore. Aute est deserunt ut sit pariatur non labore.",
  },
];

const Article = ({ header, preview, link }) => {
  return (
    <Slide left>
      <Fade>
        <Box>
          <Typography variant="h5">{header}</Typography>
          <Typography paragraph>
            {preview}
            <Link href={link}> ...</Link>
          </Typography>
        </Box>
      </Fade>
    </Slide>
  );
};

export default function ThirdPage({ className }) {
  return (
    <Box className={className} p={2}>
      {articles.map((e) => (
        <Article {...e} />
      ))}
    </Box>
  );
}
