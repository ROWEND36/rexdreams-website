import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";

const reviews = [
  {
    text: "Duis aute quis velit proident cillum esse commodo non qui ut adipisicing ipsum. Sint occaecat aliquip cupidatat occaecat magna sint eu consequat. Id id voluptate ea aute ex. Anim velit quis consectetur elit quis eiusmod sit cillum.",
    authorName: "Rowend Duke",
    authorDescription: "Developer",
  },
  {
    text: "Duis aute quis velit proident cillum esse commodo non qui ut adipisicing ipsum. Sint occaecat aliquip cupidatat occaecat magna sint eu consequat. Id id voluptate ea aute ex. Anim velit quis consectetur elit quis eiusmod sit cillum.",
    authorName: "Rowend Duke",
    authorDescription: "Developer",
  },
];
const useStyles = makeStyles((theme) => {
  return {
    reviewCard: {
      width: "400px",
      maxWidth: "70vw",
      margin: theme.spacing(2),
    },
    grid: {
      display: "flex",
      margin: theme.spacing(4),
      justifyContent: "flex-end",
      flexWrap: "wrap",
      [theme.breakpoints.down("xs")]: {
        alignItems: "center",
      },
    },
  };
});
const ReviewCard = function ({ text, authorName, authorDescription }) {
  const classes = useStyles();
  return (
    <Card className={classes.reviewCard}>
      <CardContent>
        <Typography gutterBelow paragraph>{`"${text}"`}</Typography>
        <Typography align="right" variant="subtitle2">
          {authorName}
        </Typography>
        <Typography align="right" variant="subtitle2">
          {authorDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default function FourthPage() {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Box p={4} bgcolor={theme.palette.background.contrast}>
      <Typography variant="h5">What do our customers say?</Typography>
      <div className={classes.grid}>
        {reviews.map((e, i) => (
          <ReviewCard {...e} key={`${i}`} />
        ))}
      </div>
    </Box>
  );
}
