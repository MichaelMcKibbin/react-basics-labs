import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const Task = (props) => {

    
     return (
/*        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className='title'>{props.title}</p>
            <p className='deadline'> Due: {props.deadline}</p>
            <p className='description'>{props.description}</p>
            <Chip label="Chip" onClick={props.handleClick} />
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
  */      
        
    

<Grid
item
    key={props.id}
    xs={12}
    md={4}
>
    <Card sx={{
          backgroundColor: props.done ? 'lightgrey' : 'lightblue',
          padding: '20px'
          }}> 
          <CardHeader
              title={props.title}
              sx={{
              backgroundColor: 'white',
              borderRadius: '3px',
              padding: '20px',
              textAlign: 'center'
              }}
          />
          <CardContent>
              <Box
              sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'baseline',
                  mb: 2,
                  padding: '20px'
              }}
              >
              <Typography component="p" variant="subtitle2" color="text.primary">
                  Due: {props.deadline}
              </Typography>
              </Box>
              <Typography
                  component="p"
                  variant="subtitle1"
                  align="center"
                  sx={{ fontStyle: 'italic'}}
              >
                  {props.description}
              </Typography>
              
              <div style={{display: 'flex', justifyContent: 'center', padding: '20px'}}>
              
              <Chip 
              label={props.priority}
              sx={{marginTop: '20px'}} 
              variant="filled" 
              color={props.priority === 'High' ? 'error' : props.priority === 'Medium' ? 'warning' : 'success'}
              />
              </div>
              
          </CardContent>
          <CardActions sx={{justifyContent: 'space-between', padding: '20px'}}>
              <Button variant="contained" size="small" color="success" onClick={props.markDone}>
                  Done
              </Button>
              <Button variant="contained" size="small" color="error" onClick={props.deleteTask}> 
                  Delete
              </Button>
          </CardActions>
      </Card>
  </Grid>


) 
}

export default Task;