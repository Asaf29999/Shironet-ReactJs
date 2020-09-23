import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useStore } from 'react-redux'


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Favoritestab() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const store = useStore()

    const favorList = store.getState().favorites
    console.log(favorList);
    // const favorList =["asdas","as","asasdasd","asda"];

    function handleClick() {
        //send to the artist page again
    }

    return (
        <div className={classes.root}>
            {favorList.map(function (listValue) {
                if (listValue.length < 4) {
                    return <Button variant="outlined" onClick={handleClick}>{listValue}</Button>;
                }
                else if (listValue.length > 3 && listValue.length < 7) {
                    return <Button color="primary" variant="outlined" onClick={handleClick}>{listValue}</Button>;
                }
                else {
                    return <Button color="secondary" variant="outlined" onClick={handleClick}>{listValue}</Button>;
                }
            })}
            <Button variant="outlined">Default</Button>
            <Button variant="outlined" color="primary">
                Primary
      </Button>
            <Button variant="outlined" color="secondary">
                Secondary
      </Button>
            <Button variant="outlined" disabled>
                Disabled
      </Button>
            <Button variant="outlined" color="primary" href="#outlined-buttons">
                Link
      </Button>
            <Button variant="outlined">Default</Button>
            <Button variant="outlined" color="primary">
                Primary
      </Button>
            <Button variant="outlined" color="secondary">
                Secondary
      </Button>
            <Button variant="outlined" disabled>
                Disabled
      </Button>
            <Button variant="outlined" color="primary" href="#outlined-buttons">
                Link
      </Button>
            <Button variant="outlined" color="secondary">
                Secondary
      </Button> <Button variant="outlined" color="secondary">
                Secondary
      </Button> <Button variant="outlined" color="secondary">
                Secondary
      </Button> <Button variant="outlined" color="secondary">
                Secondary
      </Button> <Button variant="outlined" color="secondary">
                Secondary
      </Button> <Button variant="outlined" color="secondary">
                Secondary
      </Button> <Button variant="outlined" color="secondary">
                Secondary
      </Button> <Button variant="outlined" color="secondary">
                Secondary
      </Button> <Button variant="outlined" color="secondary">
                Secondary
      </Button>
        </div>
    );
}
