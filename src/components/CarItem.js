import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CarItem = (props) => {
  const { car } = props;
  const navigate = useNavigate();

  const redirect = () => {
    navigate(
      `items/${car.id}`,
      { state: { car } },
    );
  };

  const imageStyle = {
    height: 0,
    paddingTop: '80%',
    width: '100%',
    objectFit: 'cover',
  };

  const cardStyle = {
    margin: '0 20px',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const pos = car.description.indexOf('<br>');
  const description = car.description.substring(0, pos).concat('..');
  return (
    <Card style={cardStyle}>
      <CardActionArea onClick={redirect}>
        <CardMedia image={car.photo} title={car.name} style={imageStyle} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
            {car.name}
          </Typography>
          <Typography component="p" sx={{ fontWeight: 'bold' }}>
            Range:&nbsp;
            {car.range}
          </Typography>
          <Typography component="p"><>{description}</></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CarItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    range: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

export default CarItem;
