import React from "react";
import {Card , CardBody} from 'reactstrap'

const CardComponent = ({user}) => {
  return(
      <Card className="text-center mt-3 mb-4">
      <img src={user.avatar_url} className="img-thumbnail"/>
      <CardBody>
      <div className="text-primary">Name : {user.name}</div>
      <div className="text-primary">Email :{user.email}</div>
      <div className="text-primary">Bio :{user.bio}</div>
      <div className="text-primary">Location :{user.location}</div>
      <div className="text-primary">Url :{user.blog}</div>
      <div className="text-primary">Followers :{user.followers}</div>
      <div className="text-primary">Ready For Hire :{user.hireable ? "Yes" : "No"}</div>
      <div className="text-primary">Github Joined : {user.created_at}</div>
      <div className="text-primary">Last Update : {user.updated_at}</div>
      
      </CardBody>
      </Card>
  )
}
export default CardComponent
