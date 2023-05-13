import React, { Fragment, useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Button, Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivitiesDashboard from '../features/activities/dashboard/ActivitiesDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(()=> {
    axios.get<Activity[]>("http://localhost:5000/api/activities").then(response=> {
      setActivities(response.data);
    })  
  }, [])

  function handleSelectActivity(id: string){
    setSelectedActivity(activities.find(x=> x.id === id))
  }

  function handleCancelSelectedActivity(){
    setSelectedActivity(undefined)
  }

  function handleFormOpen(id?: string){
    id? handleSelectActivity(id) : handleCancelSelectedActivity
    setEditMode(true)
  }

  function handleFormClose(){
    setEditMode(false)
  }

  return (
    <>
        <NavBar openForm={handleFormOpen}/>
        <Container style={{marginTop: '7em'}}>
          <ActivitiesDashboard activities={activities}
          selectedActivity={selectedActivity}
          handleSelectActivity={handleSelectActivity}
          handleCancelSelectedActivity={handleCancelSelectedActivity}
          editMode={editMode}
          handleFormOpen={handleFormOpen}
          handleFormClose = {handleFormClose}
          />
          <Button content='test'/>
        </Container>
    </>
  );
}

export default App;