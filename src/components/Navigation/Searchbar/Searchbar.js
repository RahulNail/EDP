import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

import InputBase from "@material-ui/core/InputBase";

import SearchIcon from "@material-ui/icons/Search";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Typography, Box } from "@material-ui/core";
import { EmojiPeople } from "@material-ui/icons";



const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "28ch",
      },
    },
  },
  searchResult: {
    position: "absolute",
    top: 40,
    left: 0,
    width: "100%",
    maxHeight: "40vh",
    overflowY: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    textDecoration: "none",
    textTransform: "none",
    color: "darkgray",
  },
}));

const Searchbar = (props) => {
  const classes = useStyles();
  const { courseList } = props;
  const { onfetchCourses } = props;
  const [keyWord, setKeyWord] = useState(null);
  const [show, setShow] = useState(false);
  const typingTimeoutRef = useRef(null);

  if (typingTimeoutRef.current) {
    clearTimeout(typingTimeoutRef.current);
  };

  useEffect(() => {
    typingTimeoutRef.current = setTimeout(() => {
      onfetchCourses("all", "GP08", keyWord);
      setShow(true);
    }, 500);
  }, [onfetchCourses, keyWord]);

  return (

    <Box display="flex"  >
      <Typography style={{ marginRight: "10px" }}>
        Logged in as <span style={{ fontWeight: "bold" }}>Student</span>
      </Typography>
      <EmojiPeople />
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    courseList: state.courses.courseList,
    loading: state.courses.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onfetchCourses: (courseType, group, keyWord) =>
      dispatch(actions.fetchCourses(courseType, group, keyWord)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
