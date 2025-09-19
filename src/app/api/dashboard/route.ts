import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Get current date
    const today = new Date()
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    const endOfDay = new Date(startOfDay)
    endOfDay.setDate(endOfDay.getDate() + 1)

    // Get all counts
    const [
      totalContacts,
      totalMeetings,
      todaysMeetings,
      totalCompanies
    ] = await Promise.all([
      prisma.contact.count(),
      prisma.meeting.count(),
      prisma.meeting.count({
        where: {
          startTime: {
            gte: startOfDay,
            lt: endOfDay
          }
        }
      }),
      prisma.company.count()
    ])

    return NextResponse.json({
      totalContacts,
      totalMeetings,
      todaysMeetings,
      totalCompanies
    })
  } catch (error) {
    console.error('Dashboard API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch dashboard stats' },
      { status: 500 }
    )
  }
}