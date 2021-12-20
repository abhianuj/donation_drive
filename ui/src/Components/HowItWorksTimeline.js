import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator
} from '@mui/lab';
import React from 'react';

const styles = {
        timelineItem: {
            margin: '0 0 2rem 0'
        },
        timelineItemHeading: {
            color: '#1976d2',
            fontWeight: 'bold',
            marginBottom: '0.1rem',
            fontSize: '1.1rem'
        },
        timelineItemContent: {
            fontSize: '0.8rem',
            color: '#aaaaaa'
        }
    },

    HowItWorksTimeline = () => <Timeline position="alternate" sx={{maxWidth: '44vw'}}>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <div style={styles.timelineItem}>
                    <div style={styles.timelineItemHeading}>Start your fundraiser</div>
                    <div style={styles.timelineItemContent}>It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.</div>
                </div>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <div style={styles.timelineItem}>
                    <div style={styles.timelineItemHeading}>Share your fundraiser</div>
                    <div style={styles.timelineItemContent}>All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.</div>
                </div>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
                <div style={styles.timelineItem}>
                    <div style={styles.timelineItemHeading}>Withdraw Funds</div>
                    <div style={styles.timelineItemContent}>The funds raised can be withdrawn without any hassle directly to your bank account.</div>
                </div>
            </TimelineContent>
        </TimelineItem>
    </Timeline>;
export default HowItWorksTimeline;