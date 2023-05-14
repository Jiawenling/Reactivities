import React from "react";
import { Activity } from "../../../models/activity";
import { Button, Item, Segment,Label  } from "semantic-ui-react";

interface Props{
    activities: Activity[],
    handleSelectActivity: (id: string)=> void;
    deleteActivity: (id: string)=> void
}
export default function ActivityList({activities, handleSelectActivity, deleteActivity}: Props){
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(x=> (
                    <Item.Content>
                        <Item.Header as='a'>{x.title}</Item.Header>
                        <Item.Meta>{x.date}</Item.Meta>
                        <Item.Description>
                            <div>{x.description}</div>
                            <div>{x.city}, {x.venue}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={()=> handleSelectActivity(x.id)} floated="right" content='View' color="blue"/>
                            <Label basic content={x.category}/>
                            <Button onClick={()=> deleteActivity(x.id)} floated="right" content='Delete' color="blue"/>
                            <Label basic content={x.category}/>
                        </Item.Extra>
                    </Item.Content>
                ))}
            </Item.Group>
        </Segment>
    )
}