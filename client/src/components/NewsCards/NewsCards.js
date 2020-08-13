import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";

import NewsCard from "../NewsCard/NewsCard";
import useStyles from "./styles";

const infoCards = [
  {
    color: "#f0ad4e",
    title: "Latest News",
    text: "(Give me/Tell me/What're/Show me) the Latest News. ",
  },
  {
    color: "#f0ad4e",
    title: "News By Categories",
    info:
      "[Business, Entertainment, General, Health,Science, Sports, Technology... ]",
    text: "(Show me/What're) the Recent News on [.Category]",
  },

  {
    color: "#f0ad4e",
    title: "News By Terms",
    info: "[Bitcoin, PlayStation 5, Smartphones, Donald Trump... ]",
    text: "What's up with [..Term]",
  },
  {
    color: "#f0ad4e",
    title: "News By Sources",
    info: "[CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News... ]",
    text: "Latest News from [..Sources]",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5" component="h5">
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant="h6" component="h6">
                    <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6" component="h6">
                  Try Saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
