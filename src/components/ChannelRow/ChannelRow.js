import React from 'react';
import './ChannelRow.css';
import { Avatar } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function ChannelRow({
    image,
    channel,
    verified,
    subs,
    noOfVideos,
    description,
}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" src={image} alt={channel} />
            <div className="channelRow__text">
                <h4>
                    {channel} {verified && <TaskAltIcon />}
                </h4>
                <p>
                    {subs} subscribers • {noOfVideos} videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ChannelRow;
