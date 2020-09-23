import React from 'react';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import SwipeableViews from 'react-swipeable-views';
import SearchIcon from '@material-ui/icons/Search';
import RestoreIcon from '@material-ui/icons/Restore';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Searchbar from './Searchbar'
import Favoritestable from './FavoritesTable'
import Recenttable from './RecentTable'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#87B2E4",
    width: 500,
    boxShadow: '0 17px 50px 0 rgba(0,0,0,.19), 0 12px 15px 0 rgba(0,0,0,.10);',
    zIndex: '3',
  },
  title: {
    flexGrow: 1,
    color: "white",
    margin: theme.spacing(3),
  },
  tab: {
    flexGrow: 1,
    backgroundColor: "white",
  }
}));

export default function TableBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div>
      <Typography variant="h1" className={classes.title}>
        Lyrics
      </Typography>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label={<SearchIcon />} {...a11yProps(0)} />
            <Tab label={<FavoriteIcon />} {...a11yProps(1)} />
            <Tab label={<RestoreIcon />} {...a11yProps(2)} />

          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'ltr' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction} className={classes.tab} >
            <Searchbar />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction} className={classes.tab} >
            <Favoritestable />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction} className={classes.tab} >
            <Recenttable />
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>

  );
}
