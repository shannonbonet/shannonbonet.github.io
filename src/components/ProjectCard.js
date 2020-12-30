import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        margin: 20,
        borderRadius: 18, 
        backgroundColor: 'rgba(260, 200, 169, 0.654)',
        boxShadow: '2px 3px 3px rgba(113, 128, 246, 0.675)'
    },
    title: {
      fontSize: 12
    }
  });

//title, 
const ProjectCard = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
             <CardHeader
                title={props.title}/>
            <CardContent>
                <p>
                    {props.description}
                </p>
            </CardContent>
        </Card>
    ); 
}

export default ProjectCard; 