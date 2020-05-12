import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ZoomIn from '@material-ui/icons/ZoomIn'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { useSelector }from 'react-redux';
import { Spinner } from 'components';
import Lightbox from 'fslightbox-react'

const ImageList  = ({ setPage }) => {
    const { images, isFetched, isLoading } = useSelector(state => state.fetchImage);
    const [toggler, setToggler] = useState(false);
    const [slide, setSlide] = useState(1);


    const handleImage = number => {
        setSlide(number);
        setToggler(!toggler);
    };


    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
        },
        title: {
            color: theme.palette.primary.light,
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
        icon: {
            color: 'white',
        },
    }));

    const classes = useStyles();

    return (
        <div>
            <Container>
                <Box paddingY={5}>
                    <Box display={'flex'} justifyContent={'center'}>
                        {
                            !images.length && !isFetched && <Spinner/>
                        }
                    </Box>
                    {
                        isFetched && !images.length && <Typography variant={'h5'}>No images found</Typography>
                    }
                    {
                        images.length ?
                            <GridList
                                spacing={1}
                                className={'image-group'}
                                cellHeight={250}
                            >
                                <Lightbox
                                    toggler={toggler}
                                    sources={[...images.map(item => item.largeImageURL)]}
                                    slide={slide}
                                    type={'image'}
                                />
                                {
                                    images.map((image,index) => <GridListTile
                                            key={index}
                                            cols={0.4}
                                        >
                                        <img src={image.webformatURL} alt={image.user} />
                                        <GridListTileBar
                                            className={classes.titleBar}
                                            title={<small>{image.tags}</small>}
                                            subtitle={<span><small>by</small> <Typography display={'inline'}>{image.user}</Typography></span>}
                                            actionIcon={
                                                <IconButton
                                                    aria-label={`Zoom`}
                                                    className={classes.icon}
                                                    onClick={() => handleImage(index + 1)}
                                                >
                                                    <ZoomIn />
                                                </IconButton>
                                            }
                                        />
                                        </GridListTile>
                                    )
                                }
                            </GridList>
                            : null
                    }
                    {
                        images.length ?
                            <Box
                                paddingY={3}
                                display={'flex'}
                                justifyContent={'center'}
                            >
                                <Button
                                    variant="contained"
                                    color={'primary'}
                                    onClick={setPage}
                                >{isLoading ? 'Loading...' : 'More images'}</Button>
                            </Box>
                            : null
                    }
                </Box>
            </Container>
        </div>
    );
};

export default ImageList;