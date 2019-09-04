import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Image } from 'semantic-ui-react';

const UserCard = props => {
    return (
    <Card>
        <Image src={props.user.avatar_url} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{props.user.name}</Card.Header>
        <Card.Meta>
            {props.user.location}
        </Card.Meta>
        <Card.Description>
            {props.user.bio}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Icon name='user' />
            <p>
                {props.user.followers} Followers
            </p>
            <div>
                {props.followers.map(follower => <div key={follower.id}>{follower.login}</div>)}
            </div>
        </Card.Content>
    </Card>
    )
  
}

export default UserCard;