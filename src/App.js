import React, {useEffect, useState} from 'react';
import { Header, Form, List, Categories } from 'components'
import {useThrottle} from "use-lodash-debounce-throttle";
import Actions from 'redux/actions';
import {useDispatch} from "react-redux";

const App = () => {

    const [page, setPage] = useState(1);
    const [word, setWord] = useState('');
    const [amount, setAmount] = useState(100);
    const [category, setCategory] = useState('nature');
    const dispatch = useDispatch();

    const debouncedChange = useThrottle(() => {
        dispatch(Actions.fetchImage.request({
            q: word,
            limit: amount,
            page,
            extra: {
                category
            }
        }))
    }, 1000, { maxWait: 2000 });


    useEffect(() => {
        debouncedChange();
    }, [word, amount, category, debouncedChange]);


    const handlePage = pageNumber => {
        // dispatch(Actions.addImage.request({
        //     q: word,
        //     limit: amount,
        //     page: pageNumber,
        //     extra: {
        //         category
        //     }
        // }))
    };

    return (
        <div>
            <Header />
            <Form {...{
                amount,
                word,
                setWord: value => setWord(value),
                setAmount: value => setAmount(value),
            }} />
            <Categories {...{
                category,
                setCategory: value => setCategory(value)
            }} />
            <List setPage={handlePage} />
        </div>
    );
};

export default App;