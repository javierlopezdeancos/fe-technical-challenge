import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import es from 'javascript-time-ago/locale/es'

TimeAgo.addLocale(es)
TimeAgo.addDefaultLocale(en)

const timeAgo = new TimeAgo(navigator.language)

function getFormattedTimeAgoFromTimestampHelper(timestamp: number): string | undefined {
  const date = new Date()

  date.setTime(timestamp)

  return timeAgo.format(Date.now() - timestamp);
}

export default  getFormattedTimeAgoFromTimestampHelper
