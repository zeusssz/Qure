import { format, isValid, parse } from 'date-fns'

export function formatDate(date: Date | string): string {
  const parsedDate = typeof date === 'string' ? new Date(date) : date
  return isValid(parsedDate) ? format(parsedDate, 'PPP') : 'Invalid date'
}

export function parseDate(dateString: string, formatString: string = 'yyyy-MM-dd'): Date | null {
  const parsedDate = parse(dateString, formatString, new Date())
  return isValid(parsedDate) ? parsedDate : null
}

export function isValidDate(date: Date | string): boolean {
  const parsedDate = typeof date === 'string' ? new Date(date) : date
  return isValid(parsedDate)
}