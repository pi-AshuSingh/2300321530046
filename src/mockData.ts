import { Notification } from './types';

export const sampleNotifications: Notification[] = [
  {
    _id: '01',
    title: 'Placement Drive: Fintech Startup',
    body: 'A top fintech firm is visiting campus with 25 open positions across engineering and analytics.',
    notification_type: 'PLACEMENT',
    timestamp: new Date(Date.now() - 55 * 60 * 1000).toISOString(),
    seen: false
  },
  {
    _id: '02',
    title: 'Semester Results Released',
    body: 'Your end-term evaluation results are available on the student dashboard.',
    notification_type: 'RESULT',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    seen: false
  },
  {
    _id: '03',
    title: 'Campus Workshop on AI Ethics',
    body: 'Join experts for a hands-on AI ethics workshop this Saturday in Hall C.',
    notification_type: 'EVENT',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    seen: false
  },
  {
    _id: '04',
    title: 'Placement Interview Round 2',
    body: 'Selected candidates should report to the auditorium for the next interview stage.',
    notification_type: 'PLACEMENT',
    timestamp: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
    seen: false
  },
  {
    _id: '05',
    title: 'Supplementary Result Update',
    body: 'Supplementary exam results are now published for all eligible students.',
    notification_type: 'RESULT',
    timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
    seen: false
  },
  {
    _id: '06',
    title: 'Mentorship Meetup',
    body: 'A mentorship meetup with alumni is scheduled for the next Friday evening.',
    notification_type: 'EVENT',
    timestamp: new Date(Date.now() - 35 * 60 * 60 * 1000).toISOString(),
    seen: false
  },
  {
    _id: '07',
    title: 'Urgent Placement Deadline',
    body: 'Last call to submit placement registration forms before the midnight deadline.',
    notification_type: 'PLACEMENT',
    timestamp: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
    seen: false
  },
  {
    _id: '08',
    title: 'New Result Upload Issue',
    body: 'Grading team is resolving an issue with result uploads; final results may be delayed.',
    notification_type: 'RESULT',
    timestamp: new Date(Date.now() - 45 * 60 * 60 * 1000).toISOString(),
    seen: false
  },
  {
    _id: '09',
    title: 'Campus Health Check Clinic',
    body: 'A free health check clinic will be available in the west campus lobby tomorrow.',
    notification_type: 'EVENT',
    timestamp: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
    seen: false
  },
  {
    _id: '10',
    title: 'Placement Application Reminder',
    body: 'Please complete your placement application to remain eligible for upcoming drives.',
    notification_type: 'PLACEMENT',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    seen: false
  },
  {
    _id: '11',
    title: 'Results Appeal Window',
    body: 'The appeal window for semester results is open for 72 hours.',
    notification_type: 'RESULT',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    seen: false
  },
  {
    _id: '12',
    title: 'Tech Talk: Startup Growth Hacking',
    body: 'Attend a startup growth hacking tech talk hosted by the innovation club.',
    notification_type: 'EVENT',
    timestamp: new Date(Date.now() - 14 * 60 * 60 * 1000).toISOString(),
    seen: false
  }
];
