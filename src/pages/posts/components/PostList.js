import Grid from "@material-ui/core/Grid";
import React from "react";
import { PostCard } from "./PostCard";

export const PostList = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <PostCard />
      </Grid>
    </Grid>
  );
};
