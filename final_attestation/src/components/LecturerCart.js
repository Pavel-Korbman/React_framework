import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function LecturerCart(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 230 }}
        image={props.img}
        title="photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {props.curs}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>        
        <Button size="small">Узнать больше</Button>
      </CardActions>
    </Card>
  );
}

export default LecturerCart;