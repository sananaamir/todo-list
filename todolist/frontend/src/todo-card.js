import React, { useState, useEffect, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import Grid from '@material-ui/core/Grid';

function TodoCard(props) {
    return (
        <Card variant="outlined">
            <CardContent>
                <Grid container>
                    <Grid item xs={2} md={1}><ArrowRightIcon /></Grid>
                    <Grid item xs={10} md={7} style={{ textAlign: 'left', paddingTop: '3px' }}>
                        {props.todo.todo_text}
                    </Grid>
                    <Grid item xs={6} md={2}><a hred="#" style={{ cursor: 'pointer' }} onClick={() => props.onClickEdit(todo)}><span style={{ position: 'relative', top: '5px' }}><EditIcon fontSize='small' /></span> Edit</a></Grid>
                    <Grid item xs={6} md={2}><a hred="#" style={{ cursor: 'pointer' }} onClick={() => props.onClickDone(todo)}><span style={{ position: 'relative', top: '5px' }}><DoneIcon fontSize='small' /></span> Mark as Done</a></Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default TodoCard