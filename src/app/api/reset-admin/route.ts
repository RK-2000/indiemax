import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload/payload.config'

export async function POST(request: NextRequest) {
  try {
    // Get the reset key from the request
    const { resetKey } = await request.json()
    
    // Simple security check - you can make this more secure
    if (resetKey !== 'reset-admin-2024') {
      return NextResponse.json({ error: 'Invalid reset key' }, { status: 401 })
    }

    const payload = await getPayload({ config })

    console.log('🔄 Resetting admin user...')

    // Delete existing users
    try {
      const existingUsers = await payload.find({
        collection: 'users',
        limit: 100, // Get all users
      })

      if (existingUsers.docs.length > 0) {
        console.log(`🗑️  Deleting ${existingUsers.docs.length} existing users...`)
        for (const user of existingUsers.docs) {
          await payload.delete({
            collection: 'users',
            id: user.id,
          })
        }
      }
    } catch (error) {
      console.log('No existing users found or error:', error)
    }

    // Create new admin user
    const newUser = await payload.create({
      collection: 'users',
      data: {
        email: 'admin@indiemax.com',
        password: 'admin123',
        name: 'Admin User',
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Admin user reset successfully',
      credentials: {
        email: 'admin@indiemax.com',
        password: 'admin123',
        note: 'Please change the password after logging in!'
      }
    })

  } catch (error) {
    console.error('Error resetting admin user:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return NextResponse.json(
      { error: 'Failed to reset admin user', details: errorMessage },
      { status: 500 }
    )
  }
}