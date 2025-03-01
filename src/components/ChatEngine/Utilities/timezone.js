export function getDateTime(date, offset) {
    if (!date) return ''

    date = date.replace(' ', 'T')
    offset = offset ? offset : 0

    const year = date.substr(0,4)
    const month = date.substr(5,2)
    const day = date.substr(8,2)
    const hour = date.substr(11,2)
    const minute = date.substr(14,2)
    const second = date.substr(17,2)

    var d = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`)
    d.setHours(d.getHours() + offset)
    return d
}

const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }

export function formatTime(dateTime) {
  var time = dateTime.toLocaleString('nl-NL', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });

  return time;
}

export function formatDate(dateTime) {
    return dateTime.toLocaleString('nl-NL', options)
}

export function formatDateTime(dateTime) {
    return formatTime(dateTime) + ', ' + formatDate(dateTime)
}
