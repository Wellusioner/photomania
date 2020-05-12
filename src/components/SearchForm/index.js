import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'flex-end',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        flex: '1 1 100%'
    },
    select: {
        minWidth: '70px'
    }
}));



export default function SearchForm({ amount, word, setAmount, setWord }) {


    const classes = useStyles();
    return (
        <Container>
            <Box marginTop={5}>
                <form
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                >
                    <FormControl>
                        <InputLabel id="amount">Amount</InputLabel>
                        <Select
                            className={classes.select}
                            labelId={'amount'}
                            value={amount}
                            onChange={e => {
                                setAmount(e.target.value);
                            }}
                            label={'Amount'}
                        >
                            {
                                [10,20,30,40,50,60,70,80,90,100].map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                    <FormControl className={classes.input}>
                        <InputLabel htmlFor="search-input">Search images</InputLabel>
                        <Input
                            id="search-input"
                            label="Search photos"
                            value={word}
                            onChange={e => {
                                setWord(e.target.value);
                            }}
                            endAdornment={ word ?
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setWord('')}
                                    >
                                        {<ClearIcon />}
                                    </IconButton>
                                </InputAdornment> : null
                            }
                        />
                    </FormControl>
                </form>
            </Box>
        </Container>
    );
};