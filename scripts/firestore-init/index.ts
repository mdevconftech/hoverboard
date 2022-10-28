import {
  importBlog,
  importGallery,
  importNotificationsConfig,
  importPartners,
  importPastEvents,
  importPreviousSpeakers,
  importSchedule,
  importSessions,
  importSpeakers,
  importTeam,
  importTickets,
  importVideos,
} from './utils';

importBlog()
  .then(() => importGallery())
  .then(() => importNotificationsConfig())
  .then(() => importPartners())
  .then(() => importPastEvents())
  .then(() => importPreviousSpeakers())
  .then(() => importSchedule())
  .then(() => importSessions())
  .then(() => importSpeakers())
  .then(() => importTeam())
  .then(() => importTickets())
  .then(() => importVideos())
  .then(() => {
    console.log('Finished');
    process.exit();
  })
  .catch((err: Error) => {
    console.log(err);
    process.exit();
  });
