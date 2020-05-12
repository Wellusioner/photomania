import React, { useState } from 'react';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'



const categories = [
    'backgrounds',
    // 'fashion',
    'nature',
    'science',
    'education',
    'feelings',
    'health',
    'people',
    'religion',
    'places',
    'animals',
    'industry',
    'computer',
    'food',
    'sports',
    'transportation',
    'travel',
    'buildings',
    'business',
    'music',
];

const Categories = ({ setCategory }) => {

    const [isActive, setActive] = useState('nature');


    const handleCategory = value => {
        setCategory(value);
        setActive(value);
    };

    return (
        <>
            <Container>
                <Box
                    component={'ul'}
                    display={'flex'}
                    justifyContent={'center'}
                    flexWrap={'wrap'}
                    paddingY={3}
                >
                    <Box
                        key={'all'}
                        component={'li'}
                        marginRight={1}
                        marginBottom={1}
                    >
                        <Button
                            variant={isActive === '' ? 'contained' : null}
                            onClick={() => handleCategory('')}
                            color={'primary'}
                        >All</Button>
                    </Box>
                    {
                        categories.map(item => {

                            return (
                                <Box
                                    key={item}
                                    component={'li'}
                                    marginRight={1}
                                    marginBottom={1}
                                >
                                    <Button
                                        variant={isActive === item ? 'contained' : null}
                                        color={'primary'}
                                        onClick={() => handleCategory(item)}
                                    >{item}</Button>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Container>
        </>
    );
};

export default Categories;