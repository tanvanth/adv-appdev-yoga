import React from 'react';
import Grid from '@mui/material/Grid';
import '../../assets/css/booking.css'; // Corrected CSS import
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const BookingDetails = {
    1: {
        title: 'Children Yoga',
        description: 'Yoga taught for children with utmost by our trainers.',
        images: '/src/assets/Images/child01.png'
    },
    2: {
        title: 'Yoga For Elders',
        description: 'Yoga taught for elders with highest care.',
        images: '/src/assets/Images/child02.png'
    },
    3: {
        title: 'Yoga For Women',
        description: 'Yoga taught for women with most care and best trainers.',
        images: '/src/assets/Images/child03.png'
    },
    4: {
        title: 'Yoga for Men',
        description: 'Yoga taught for men as groups or with a trainer.',
        images: '/src/assets/Images/child04.png'
    },
    5: {
        title: 'Weightloss yoga',
        description: 'yoga is taught for all genders to aid in weight loss',
        images: '/src/assets/Images/child05.png'
    }
}

const Booking = () => {
    return (
        // <div style={{}}>

        <div style={{marginBottom: '0%', backgroundImage: "url('/src/assets/Images/booking.jpg')", backgroundSize: 'cover'}}>
            <h1 style={{textAlign: 'center'}}>Booking</h1>
            <div className='booking-grid'>
                <Grid className="grid-container" container rowSpacing={1} justifyContent="center">
                    {Object.keys(BookingDetails).map(id => {
                        const houseboat = BookingDetails[id];
                        return (
                            <Grid key={id} className='grid1' item>
                                {/* <div style={{ width: '440px', textAlign: 'center' }}>
                                    <h2>{houseboat.title}</h2>
                                    <p>{houseboat.description}</p>
                                    <img src={houseboat.images} alt={houseboat.title} style={{ height: "250px", maxWidth: '100%' }} />
                                </div> */}
                                <div style={{ width: '440px', textAlign: 'center', marginBottom: '5%' }}>
                                <Card sx={{ maxWidth: 435 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image={houseboat.images}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        {houseboat.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        {houseboat.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Book now</Button>
                                        {/* <Button size="small">Learn More</Button> */}
                                    </CardActions>
                                    </Card>
                                    </div>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        </div>
                    // </div>
    )
}

export default Booking;
