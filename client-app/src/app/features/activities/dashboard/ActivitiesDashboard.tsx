import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import ActivityList from "./ActivitiesList";
import ActivitiesDetails from "../details/ActivitiesDetails";
import ActivitiesForm from "../form/ActivitiesForm";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    handleSelectActivity: (id: string)=> void;
    handleCancelSelectedActivity: ()=> void;
    editMode: boolean;
    handleFormOpen: (id: string) => void
    handleFormClose: ()=> void

}

export default function ActivitiesDashboard({activities, selectedActivity, 
    handleCancelSelectedActivity, handleSelectActivity, editMode, handleFormOpen, handleFormClose}: Props){
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} handleSelectActivity={handleSelectActivity}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity &&
                <ActivitiesDetails 
                activity={selectedActivity} 
                handleCancelSelectedActivity={handleCancelSelectedActivity}
                openForm = {handleFormOpen}

                ></ActivitiesDetails>}
                <ActivitiesForm closeForm={handleFormClose}></ActivitiesForm>
            </Grid.Column>
        </Grid>
    )
}