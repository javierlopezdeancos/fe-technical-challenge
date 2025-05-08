  function getFormattedTimezoneDateFromTimestampHelper(timestamp: number): string {
    const date = new Date()

    date.setTime(timestamp)

    return new Intl.DateTimeFormat(navigator.language, {
        month: "long",
        year: "numeric",
        day: "numeric",
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }).format(date)
  }

  export default  getFormattedTimezoneDateFromTimestampHelper
