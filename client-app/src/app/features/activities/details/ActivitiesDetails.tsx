import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { Activity } from "../../../models/activity";

interface Props{
    activity: Activity,
    handleCancelSelectedActivity: ()=> void;
    openForm: (id:string)=> void
    

}

export default function ActivitiesDetails({activity, handleCancelSelectedActivity, openForm}: Props){
    return(
        <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`}/>
        <Card.Content>
          <Card.Header>{activity.title}</Card.Header>
          <Card.Meta>
            <span>{activity.date}</span>
          </Card.Meta>
          <Card.Description>
            {activity.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths='2'>
            <Button basic color="blue" onClick={()=> openForm(activity.id)}>Edit</Button> 
            <Button basic color="grey" onClick={handleCancelSelectedActivity}>Cancel</Button> 
          </Button.Group>
        </Card.Content>
      </Card>
    )
}