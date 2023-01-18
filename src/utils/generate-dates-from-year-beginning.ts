import dayjs from 'dayjs'

export function generateDatesFromYearBeginning () {
    const firstDayOfTheYear = dayjs().startOf('year')
    const today = new Date().getTime()

    const dates = []

    let compareDate = firstDayOfTheYear

    while (compareDate.isBefore(today)) {
        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1, 'day')
    }

    return dates
}